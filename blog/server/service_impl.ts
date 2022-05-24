import {
  handleServerStreamingCall,
  handleUnaryCall,
  sendUnaryData,
  ServerErrorResponse,
  status,
} from "@grpc/grpc-js";
import { ObjectId, WithId } from "mongodb";
import { Document as MongoDocument } from "mongodb";
import { collection } from ".";
import { Blog, BlogId } from "../proto/blog_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

interface IBlogDocument extends MongoDocument {
  author_id: string;
  title: string;
  content: string;
}

function blogToDocument(blog: Blog): IBlogDocument {
  return {
    author_id: blog.getAuthorId(),
    title: blog.getTitle(),
    content: blog.getContent(),
  };
}

function documentToBlog(doc: WithId<IBlogDocument>) {
  return new Blog()
    .setId(doc._id.toString())
    .setAuthorId(doc.author_id)
    .setTitle(doc.title)
    .setContent(doc.content);
}

const internal = (err: ServerErrorResponse, callback: sendUnaryData<any>) =>
  callback({
    code: status.INTERNAL,
    message: err.toString(),
  });

function checkNotAcknowledged(
  res: { acknowledged: boolean },
  callback: sendUnaryData<any>,
) {
  if (!res.acknowledged) {
    callback({
      code: status.INTERNAL,
      message: `Operation wasn't acknowledged`,
    });
  }
}

export const createBlog: handleUnaryCall<Blog, BlogId> = async (
  call,
  callback,
) => {
  const data = blogToDocument(call.request);

  await collection
    .insertOne(data)
    .then((res) => {
      checkNotAcknowledged(res, callback);
      const id = res.insertedId.toString();
      const blogId = new BlogId().setId(id);

      callback(null, blogId);
    })
    .catch((err) => internal(err, callback));
};

const checkOID = (id: string, callback: sendUnaryData<BlogId>) => {
  try {
    return new ObjectId(id);
  } catch (err) {
    callback({
      code: status.INTERNAL,
      message: "Invalid OID",
    });
  }
};

const checkNotFound = (res: any, callback: sendUnaryData<any>) => {
  if (!res) {
    callback({
      code: status.NOT_FOUND,
      message: "Could not find blog",
    });
  }
};

export const readBlog: handleUnaryCall<Blog, BlogId> = async (
  call,
  callback,
) => {
  const oid = checkOID(call.request.getId(), callback);

  try {
    const res = await collection.findOne<WithId<IBlogDocument>>({ _id: oid });
    checkNotFound(res, callback);
    callback(null, documentToBlog(res!));
  } catch (err) {
    internal(err as Error, callback);
  }
};

export const updateBlog: handleUnaryCall<Blog, Empty> = async (
  call,
  callback,
) => {
  const oid = checkOID(call.request.getId(), callback);

  try {
    const res = await collection.updateOne(
      { _id: oid },
      { $set: blogToDocument(call.request) },
    );
    checkNotFound(res, callback);
    checkNotAcknowledged(res, callback);

    callback(null, new Empty());
  } catch (err) {
    internal(err as Error, callback);
  }
};

export const listBlogs: handleServerStreamingCall<Empty, Blog> = async (
  call,
) => {
  try {
    await collection
      .find()
      .map((doc) => documentToBlog(doc as WithId<IBlogDocument>))
      .forEach((blog) => call.write(blog));

    call.end();
  } catch (err) {
    call.destroy(new Error("Could not list blogs"));
  }
};

export const deleteBlog: handleUnaryCall<BlogId, Empty> = async (
  call,
  callback,
) => {
  const oid = checkOID(call.request.getId(), callback);

  try {
    const res = await collection.deleteOne({ _id: oid });
    checkNotFound(res, callback);
    checkNotAcknowledged(res, callback);
    callback(null, new Empty());
  } catch (err) {
    internal(err as Error, callback);
  }
};
