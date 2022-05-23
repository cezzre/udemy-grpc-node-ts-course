import {
  handleUnaryCall,
  sendUnaryData,
  ServerErrorResponse,
  status,
} from "@grpc/grpc-js";
import { InsertOneResult } from "mongodb";
import { collection } from ".";
import { Blog, BlogId } from "../proto/blog_pb";

function blogToDocument(blog: Blog) {
  return {
    author_id: blog.getAuthorId(),
    title: blog.getTitle(),
    content: blog.getContent(),
  };
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
