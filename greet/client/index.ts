import { ChannelCredentials, Metadata } from "@grpc/grpc-js";
import { GreetServiceClient } from "../proto/greet_grpc_pb";
import { GreetRequest } from "../proto/greet_pb";

function doGreet(client: GreetServiceClient) {
  console.log("doGreet was invoked");

  const req = new GreetRequest().setFirstName("Clement");

  client.greet(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Greet: ${res.getResult()}`);
  });
}

function doGreetManyTimes(client: GreetServiceClient) {
  console.log("doGreetManyTimes was invoked");

  const req = new GreetRequest().setFirstName("Clement");

  const call = client.greetManyTimes(req);

  call.on("data", (res) => {
    console.log(`GreetManyTimes: ${res.getResult()}`);
  });
}

function doLongGreet(client: GreetServiceClient) {
  console.log("doLongGreet was invoked");

  const names = ["Clement", "Cezzre", "Frances"];
  const call = client.longGreet((err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`LongGreet: ${res.getResult()}`);
  });

  names
    .map((name) => new GreetRequest().setFirstName(name))
    .forEach((req) => {
      call.write(req);
    });

  call.end();
}

function doGreetEveryone(client: GreetServiceClient) {
  console.log("doGreetEveryone was invoked");

  const names = ["Clement", "Cezzre", "Frances"];

  const call = client.greetEveryone();

  call.on("data", (res) => {
    console.log(`GreetEveryone: ${res.getResult()}`);
  });

  names
    .map((name) => new GreetRequest().setFirstName(name))
    .forEach((req) => {
      call.write(req);
    });

  call.end();
}

function doGreetWithDeadline(client: GreetServiceClient, ms: number) {
  console.log("doGreetWithDeadline was invoked");

  const req = new GreetRequest().setFirstName("Clement");

  client.greetWithDeadline(
    req,
    new Metadata(),
    {
      deadline: new Date(Date.now() + ms),
    },
    (err, res) => {
      if (err) {
        return console.log(err);
      }

      console.log(`GreetWithDeadline: ${res.getResult()}`);
    },
  );
}

function main() {
  const creds = ChannelCredentials.createInsecure();
  const client = new GreetServiceClient("localhost:50051", creds);

  doGreet(client);
  doGreetManyTimes(client);
  doLongGreet(client);
  doGreetEveryone(client);
  doGreetWithDeadline(client, 1000);
  doGreetWithDeadline(client, 5000);

  client.close();
}

main();
