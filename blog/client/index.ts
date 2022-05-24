import { ChannelCredentials } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { BlogServiceClient } from "../proto/blog_grpc_pb";
import { Blog, BlogId } from "../proto/blog_pb";

async function createBlog(client: BlogServiceClient) {
  console.log("createBlog was invoked");

  return new Promise<BlogId>((resolve, reject) => {
    const req = new Blog()
      .setAuthorId("Jimmy")
      .setTitle("My first blog")
      .setContent("Content of my first blog");

    client.createBlog(req, (err, res) => {
      if (err) reject(err);

      console.log(`Blog was created: ${res}`);
      resolve(res);
    });
  });
}

function readBlog(client: BlogServiceClient, id: BlogId) {
  console.log("readBlog was invoked");

  return new Promise<void>((resolve, reject) => {
    client.readBlog(id, (err, res) => {
      if (err) {
        reject(err);
      }

      console.log(`Blog was read: ${res}`);
      resolve();
    });
  });
}

function updateBlog(client: BlogServiceClient, id: BlogId) {
  console.log("updateBlog was invoked");

  return new Promise<void>((resolve, reject) => {
    const req = new Blog()
      .setId(id.getId())
      .setAuthorId("Cezzre")
      .setTitle("My first blog (updated)")
      .setContent("New content");

    client.updateBlog(req, (err) => {
      if (err) {
        reject(err);
      }

      console.log(`Blog was updated`);
      resolve();
    });
  });
}

function listBlogs(client: BlogServiceClient) {
  console.log("listBlogs was invoked");

  return new Promise<void>((resolve, reject) => {
    const req = new Empty();
    const call = client.listBlogs(req);

    call.on("data", (res) => {
      console.log(res);
    });

    call.on("error", (err) => {
      reject(err);
    });

    call.on("end", () => resolve());
  });
}

async function main() {
  const creds = ChannelCredentials.createInsecure();
  const client = new BlogServiceClient("localhost:50051", creds);

  const id = await createBlog(client);
  await readBlog(client, id);
  await updateBlog(client, id);
  await readBlog(client, id);
  await listBlogs(client);

  client.close();
}

main();
