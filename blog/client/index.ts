import { ChannelCredentials } from "@grpc/grpc-js";
import { BlogServiceClient } from "../proto/blog_grpc_pb";

function main() {
  const creds = ChannelCredentials.createInsecure();
  const client = new BlogServiceClient("localhost:50051", creds);

  client.close();
}

main();
