import * as grpc from "@grpc/grpc-js";
import { GreetServiceClient } from "../proto/greet_grpc_pb";
import { GreetRequest } from "../proto/greet_pb";

function doGreet(client) {
  console.log("doGreet was invoked");

  const req = new GreetRequest().setFirstName("Clement");

  client.greet(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Greet: ${res.getResult()}`);
  });
}

function doGreetManyTimes(client) {
  console.log("doGreetManyTimes was invoked");

  const req = new GreetRequest().setFirstName("Clement");

  const call = client.greetManyTimes(req);

  call.on("data", (res) => {
    console.log(`GreetManyTimes: ${res.getResult()}`);
  });
}

function main() {
  const creds = grpc.ChannelCredentials.createInsecure();
  const client = new GreetServiceClient("localhost:50051", creds);

  doGreet(client);
  doGreetManyTimes(client);

  client.close();
}

main();
