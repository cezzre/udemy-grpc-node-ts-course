import { ChannelCredentials } from "@grpc/grpc-js";
import { BlogServiceClient } from "../proto/blog_grpc_pb";
import { Blog } from "../proto/blog_pb";

async function createBlog(client: BlogServiceClient) {
  console.log("createBlog was invoked");

  return new Promise((resolve, reject) => {
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

async function main() {
  const creds = ChannelCredentials.createInsecure();
  const client = new BlogServiceClient("localhost:50051", creds);

  await createBlog(client);

  client.close();
}

main();
