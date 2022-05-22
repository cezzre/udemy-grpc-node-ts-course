import {
  handleBidiStreamingCall,
  handleClientStreamingCall,
  handleServerStreamingCall,
  handleUnaryCall,
} from "@grpc/grpc-js/build/src/server-call";
import {
  AvgRequest,
  AvgResponse,
  MaxRequest,
  MaxResponse,
  PrimesRequest,
  PrimesResponse,
  SumRequest,
  SumResponse,
} from "../proto/calculator_pb";

export const sum: handleUnaryCall<SumRequest, SumResponse> = (
  call,
  callback,
) => {
  console.log("Sum was invoked");

  const sum = call.request
    .getNumberList()
    .reduce((partialSum, a) => partialSum + a, 0);

  const res = new SumResponse().setResult(sum);

  callback(null, res);
};

export const primes: handleServerStreamingCall<
  PrimesRequest,
  PrimesResponse
> = (call) => {
  console.log("Primes was invoked");

  let number = call.request.getNumber();
  let factor = 2;
  const res = new PrimesResponse();

  while (number > 1) {
    if (number % factor === 0) {
      call.write(res.setResult(factor));
      number = number / factor;
    } else {
      factor++;
    }
  }

  call.end();
};

export const avg: handleClientStreamingCall<AvgRequest, AvgResponse> = (
  call,
  callback,
) => {
  console.log("Avg was invoked");

  const numbers: number[] = [];

  call.on("data", (req: AvgRequest) => {
    numbers.push(req.getNumber());
  });

  call.on("end", () => {
    const avg = numbers.reduce((sum, num) => (sum += num), 0) / numbers.length;
    const res = new AvgResponse().setResult(avg);

    callback(null, res);
  });
};

export const max: handleBidiStreamingCall<MaxRequest, MaxResponse> = (call) => {
  console.log("Max was invoked");

  let max: number;

  call.on("data", (req: MaxRequest) => {
    console.log(`Received request: ${req}`);

    const number = req.getNumber();

    if (max === undefined || number > max) {
      max = number;
    }

    const res = new MaxResponse().setResult(max);
    console.log(`Sending response: ${res}`);
    call.write(res);
  });

  call.on("end", () => call.end());
};
