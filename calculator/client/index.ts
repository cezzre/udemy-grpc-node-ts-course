import * as grpc from "@grpc/grpc-js";
import { CalculatorServiceClient } from "../proto/calculator_grpc_pb";
import {
  SumRequest,
  PrimesRequest,
  AvgRequest,
  MaxResponse,
  MaxRequest,
} from "../proto/calculator_pb";

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

function doAvg(client: CalculatorServiceClient) {
  console.log("doAvg was invoked");

  const numbers = [1, 2, 3, 4];

  const call = client.avg((err, res) => {
    if (err) {
      return console.log(err);
    }

    console.log(`Avg: ${res.getResult()}`);
  });

  numbers
    .map((num) => new AvgRequest().setNumber(num))
    .forEach((req) => {
      call.write(req);
    });

  call.end();
}

function doMax(client: CalculatorServiceClient) {
  console.log("doMax was invoked");

  // Generate numbers and shuffle the array.
  const numbers = [...Array(100).keys()].sort(
    () => Math.random() - Math.random(),
  );

  const call = client.max();

  call.on("data", (res: MaxResponse) => {
    console.log(`Max: ${res.getResult()}`);
  });

  numbers
    .map((num) => new MaxRequest().setNumber(num))
    .forEach((req) => {
      call.write(req);
    });

  call.end();
}

function main() {
  const creds = grpc.ChannelCredentials.createInsecure();
  const client = new CalculatorServiceClient("localhost:50051", creds);

  doSum(client);
  doPrimes(client);
  doAvg(client);
  doMax(client);

  client.close();
}

main();
