import { PrimesResponse, SumResponse } from "../proto/calculator_pb";

export const sum = (call, callback) => {
  console.log("Sum was invoked");

  const sum = call.request
    .getNumberList()
    .reduce((partialSum, a) => partialSum + a, 0);

  const res = new SumResponse().setResult(sum);

  callback(null, res);
};

export const primes = (call) => {
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
