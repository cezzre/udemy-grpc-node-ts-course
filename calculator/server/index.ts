import * as grpc from "@grpc/grpc-js";
import { CalculatorServiceService } from "../proto/calculator_grpc_pb";
import * as serviceImpl from "./service_impl";

const addr = "localhost:50051";

function cleanup(server) {
  console.log("Cleanup");

  if (server) {
    server.forceShutdown();
  }
}

function main() {
  const server = new grpc.Server();
  const creds = grpc.ServerCredentials.createInsecure();

  process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    cleanup(server);
  });

  server.addService(CalculatorServiceService, serviceImpl);

  server.bindAsync(addr, creds, (err, _) => {
    if (err) {
      return cleanup(server);
    }

    server.start();
  });

  console.log(`Listening on: ${addr}`);
}

main();
