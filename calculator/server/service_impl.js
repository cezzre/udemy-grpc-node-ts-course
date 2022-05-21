const pb = require("../proto/calculator_pb");

exports.sum = (call, callback) => {
  console.log("Sum was invoked");

  const sum = call.request
    .getNumberList()
    .reduce((partialSum, a) => partialSum + a, 0);

  const res = new pb.SumResponse().setResult(sum);

  callback(null, res);
};
