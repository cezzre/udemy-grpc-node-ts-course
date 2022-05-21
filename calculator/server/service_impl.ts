import { SumResponse } from "../proto/calculator_pb";

export const sum = (call, callback) => {
  console.log("Sum was invoked");

  const sum = call.request
    .getNumberList()
    .reduce((partialSum, a) => partialSum + a, 0);

  const res = new SumResponse().setResult(sum);

  callback(null, res);
};
