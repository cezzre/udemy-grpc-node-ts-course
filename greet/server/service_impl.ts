import {
  handleBidiStreamingCall,
  handleClientStreamingCall,
  handleServerStreamingCall,
  handleUnaryCall,
} from "@grpc/grpc-js";
import { GreetRequest, GreetResponse } from "../proto/greet_pb";

export const greet: handleUnaryCall<GreetRequest, GreetResponse> = (
  call,
  callback,
) => {
  console.log("Greet was invoked");

  const res = new GreetResponse().setResult(
    `Hello ${call.request.getFirstName()}`,
  );

  callback(null, res);
};

export const greetManyTimes: handleServerStreamingCall<
  GreetRequest,
  GreetResponse
> = (call) => {
  console.log("GreetManyTimes was invoked");

  const res = new GreetResponse();

  for (let i = 0; i < 10; ++i) {
    res.setResult(`Hello ${call.request.getFirstName()} - number ${i}`);
    call.write(res);
  }

  call.end();
};

export const longGreet: handleClientStreamingCall<
  GreetRequest,
  GreetResponse
> = (call, callback) => {
  console.log("LongGreet was invoked");

  const names: string[] = [];

  call.on("data", (req: GreetRequest) => {
    names.push(req.getFirstName());
  });

  call.on("end", () => {
    const res = new GreetResponse();
    res.setResult(`Hello to: ${names.join(", ")}.`);

    callback(null, res);
  });
};

export const greetEveryone: handleBidiStreamingCall<
  GreetRequest,
  GreetResponse
> = (call) => {
  console.log("GreetEveryone was invoked");

  call.on("data", (req: GreetRequest) => {
    console.log(`Received request: ${req}`);
    const res = new GreetResponse().setResult(`Hello ${req.getFirstName()}`);
    console.log(`Sending response: ${res}`);
    call.write(res);
  });

  call.on("end", () => call.end());
};
