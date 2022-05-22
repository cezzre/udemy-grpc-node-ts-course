import { Server, ServerCredentials } from "@grpc/grpc-js";
import { BlogServiceService } from "../proto/blog_grpc_pb";
import * as serviceImpl from "./service_impl";

const addr = "localhost:50051";

function cleanup(server: Server) {
  console.log("Cleanup");

  if (server) {
    server.forceShutdown();
  }
}

function main() {
  const server = new Server();
  const creds = ServerCredentials.createInsecure();

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    cleanup(server);
  });

  server.addService(BlogServiceService, serviceImpl);

  server.bindAsync(addr, creds, (err, _) => {
    if (err) {
      return cleanup(server);
    }

    server.start();
  });

  console.log(`Listening on: ${addr}`);
}

main();
