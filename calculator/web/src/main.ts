import { CalculatorServiceClient } from "../../proto/calculator_grpc_web_pb";
import { PrimesRequest, SumRequest } from "../../proto/calculator_pb";

const client = new CalculatorServiceClient("http://localhost:8080", null, null);

const sumForm: HTMLFormElement = document.querySelector('form[name="sum"]');

sumForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numbers = new FormData(sumForm)
    .get("sum-string")
    .toString()
    .split("+")
    .map((n) => Number(n));
  const sumRequest = new SumRequest().setNumberList(numbers);

  client.sum(sumRequest, undefined, (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    sumForm.querySelector("div").innerHTML = `Result: ${res
      .getResult()
      .toString()}`;
  });
});

const primesForm: HTMLFormElement = document.querySelector(
  'form[name="primes"]',
);

primesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = Number(new FormData(primesForm).get("number").toString());
  const primesRequest = new PrimesRequest().setNumber(number);
  const resultDiv = primesForm.querySelector("div");

  resultDiv.innerHTML = "";

  const call = client.primes(primesRequest);

  call.on("data", (res) => {
    resultDiv.innerHTML += resultDiv.innerHTML
      ? `*${res.getResult()}`
      : `Result: ${res.getResult()}`;
  });

  call.on("error", (err) => {
    console.log(err);
  });
});
