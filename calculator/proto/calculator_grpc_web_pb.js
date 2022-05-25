/**
 * @fileoverview gRPC-Web generated client stub for calculator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var sqrt_pb = require('./sqrt_pb.js')
const proto = {};
proto.calculator = require('./calculator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.calculator.CalculatorServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.calculator.CalculatorServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calculator.SumRequest,
 *   !proto.calculator.SumResponse>}
 */
const methodDescriptor_CalculatorService_Sum = new grpc.web.MethodDescriptor(
  '/calculator.CalculatorService/Sum',
  grpc.web.MethodType.UNARY,
  proto.calculator.SumRequest,
  proto.calculator.SumResponse,
  /**
   * @param {!proto.calculator.SumRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.SumResponse.deserializeBinary
);


/**
 * @param {!proto.calculator.SumRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.calculator.SumResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.SumResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorServiceClient.prototype.sum =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/calculator.CalculatorService/Sum',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Sum,
      callback);
};


/**
 * @param {!proto.calculator.SumRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.calculator.SumResponse>}
 *     Promise that resolves to the response
 */
proto.calculator.CalculatorServicePromiseClient.prototype.sum =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/calculator.CalculatorService/Sum',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Sum);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calculator.PrimesRequest,
 *   !proto.calculator.PrimesResponse>}
 */
const methodDescriptor_CalculatorService_Primes = new grpc.web.MethodDescriptor(
  '/calculator.CalculatorService/Primes',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.calculator.PrimesRequest,
  proto.calculator.PrimesResponse,
  /**
   * @param {!proto.calculator.PrimesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.calculator.PrimesResponse.deserializeBinary
);


/**
 * @param {!proto.calculator.PrimesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.PrimesResponse>}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorServiceClient.prototype.primes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/calculator.CalculatorService/Primes',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Primes);
};


/**
 * @param {!proto.calculator.PrimesRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.PrimesResponse>}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorServicePromiseClient.prototype.primes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/calculator.CalculatorService/Primes',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Primes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.calculator.SqrtRequest,
 *   !proto.calculator.SqrtResponse>}
 */
const methodDescriptor_CalculatorService_Sqrt = new grpc.web.MethodDescriptor(
  '/calculator.CalculatorService/Sqrt',
  grpc.web.MethodType.UNARY,
  sqrt_pb.SqrtRequest,
  sqrt_pb.SqrtResponse,
  /**
   * @param {!proto.calculator.SqrtRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  sqrt_pb.SqrtResponse.deserializeBinary
);


/**
 * @param {!proto.calculator.SqrtRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.calculator.SqrtResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.calculator.SqrtResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.calculator.CalculatorServiceClient.prototype.sqrt =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/calculator.CalculatorService/Sqrt',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Sqrt,
      callback);
};


/**
 * @param {!proto.calculator.SqrtRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.calculator.SqrtResponse>}
 *     Promise that resolves to the response
 */
proto.calculator.CalculatorServicePromiseClient.prototype.sqrt =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/calculator.CalculatorService/Sqrt',
      request,
      metadata || {},
      methodDescriptor_CalculatorService_Sqrt);
};


module.exports = proto.calculator;

