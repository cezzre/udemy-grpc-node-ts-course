import { handleServerStreamingCall, handleUnaryCall } from "@grpc/grpc-js";
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
