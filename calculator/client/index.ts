import * as grpc from "@grpc/grpc-js";
import { CalculatorServiceClient } from "../proto/calculator_grpc_pb";
import { SumRequest, PrimesRequest } from "../proto/calculator_pb";

function doSum(client: CalculatorServiceClient) {
  console.log("doSum was invoked");

  const req = new SumRequest();
  req.addNumber(2);
  req.addNumber(5);

  client.sum(req, (err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Sum: ${res.getResult()}`);
  });
}

function doPrimes(client: CalculatorServiceClient) {
  console.log("doPrimes was invoked");

  const req = new PrimesRequest().setNumber(120);

  const call = client.primes(req);

  call.on("data", (res) => {
    console.log(res.getResult());
  });
}

function main() {
  const creds = grpc.ChannelCredentials.createInsecure();
  const client = new CalculatorServiceClient("localhost:50051", creds);

  doSum(client);
  doPrimes(client);

  client.close();
}

main();
