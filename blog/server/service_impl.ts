import {
  handleUnaryCall,
  sendUnaryData,
  ServerErrorResponse,
  status,
} from "@grpc/grpc-js";
import { InsertOneResult, ObjectId, WithId } from "mongodb";
import { Document as MongoDocument } from "mongodb";
import { collection } from ".";
import { Blog, BlogId } from "../proto/blog_pb";

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
  res: InsertOneResult,
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

const checkNotFound = (
  res: WithId<IBlogDocument> | null,
  callback: sendUnaryData<any>,
) => {
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
