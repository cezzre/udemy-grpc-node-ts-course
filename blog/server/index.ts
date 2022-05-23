import { Server, ServerCredentials } from "@grpc/grpc-js";
import { Collection, MongoClient } from "mongodb";
import { BlogServiceService } from "../proto/blog_grpc_pb";
import * as serviceImpl from "./service_impl";

const addr = "localhost:50051";
const mongoClient = new MongoClient("mongodb://root:root@localhost:27017/");
export let collection: Collection;

async function cleanup(server: Server) {
  console.log("Cleanup");

  if (server) {
    await mongoClient.close();
    server.forceShutdown();
  }
}

async function main() {
  const server = new Server();
  const creds = ServerCredentials.createInsecure();

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    cleanup(server);
  });

  await mongoClient.connect();

  const database = mongoClient.db("blogdb");
  collection = database.collection("blog");

  server.addService(BlogServiceService, serviceImpl);

  server.bindAsync(addr, creds, (err, _) => {
    if (err) {
      return cleanup(server);
    }

    server.start();
  });

  console.log(`Listening on: ${addr}`);
}

main().catch(cleanup);
