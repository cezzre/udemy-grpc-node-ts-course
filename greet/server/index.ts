import fs from "fs";
import { Server, ServerCredentials } from "@grpc/grpc-js";
import { GreetServiceService } from "../proto/greet_grpc_pb";
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
  const rootCert = fs.readFileSync("./ssl/ca.crt");
  const certChain = fs.readFileSync("./ssl/server.crt");
  const privateKey = fs.readFileSync("./ssl/server.pem");
  const creds = ServerCredentials.createSsl(rootCert, [
    {
      cert_chain: certChain,
      private_key: privateKey,
    },
  ]);

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    cleanup(server);
  });

  server.addService(GreetServiceService, serviceImpl);

  server.bindAsync(addr, creds, (err, _) => {
    if (err) {
      return cleanup(server);
    }

    server.start();
  });

  console.log(`Listening on: ${addr}`);
}

main();
