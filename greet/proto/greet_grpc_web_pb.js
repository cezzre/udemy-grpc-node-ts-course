/**
 * @fileoverview gRPC-Web generated client stub for greet
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greet = require('./greet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greet.GreetServiceClient =
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
proto.greet.GreetServicePromiseClient =
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
 *   !proto.greet.GreetRequest,
 *   !proto.greet.GreetResponse>}
 */
const methodDescriptor_GreetService_Greet = new grpc.web.MethodDescriptor(
  '/greet.GreetService/Greet',
  grpc.web.MethodType.UNARY,
  proto.greet.GreetRequest,
  proto.greet.GreetResponse,
  /**
   * @param {!proto.greet.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.GreetResponse.deserializeBinary
);


/**
 * @param {!proto.greet.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.GreetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.GreetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreetServiceClient.prototype.greet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.GreetService/Greet',
      request,
      metadata || {},
      methodDescriptor_GreetService_Greet,
      callback);
};


/**
 * @param {!proto.greet.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.GreetResponse>}
 *     Promise that resolves to the response
 */
proto.greet.GreetServicePromiseClient.prototype.greet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.GreetService/Greet',
      request,
      metadata || {},
      methodDescriptor_GreetService_Greet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.GreetRequest,
 *   !proto.greet.GreetResponse>}
 */
const methodDescriptor_GreetService_GreetManyTimes = new grpc.web.MethodDescriptor(
  '/greet.GreetService/GreetManyTimes',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.greet.GreetRequest,
  proto.greet.GreetResponse,
  /**
   * @param {!proto.greet.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.GreetResponse.deserializeBinary
);


/**
 * @param {!proto.greet.GreetRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.GreetResponse>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreetServiceClient.prototype.greetManyTimes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.GreetService/GreetManyTimes',
      request,
      metadata || {},
      methodDescriptor_GreetService_GreetManyTimes);
};


/**
 * @param {!proto.greet.GreetRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.greet.GreetResponse>}
 *     The XHR Node Readable Stream
 */
proto.greet.GreetServicePromiseClient.prototype.greetManyTimes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/greet.GreetService/GreetManyTimes',
      request,
      metadata || {},
      methodDescriptor_GreetService_GreetManyTimes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greet.GreetRequest,
 *   !proto.greet.GreetResponse>}
 */
const methodDescriptor_GreetService_GreetWithDeadline = new grpc.web.MethodDescriptor(
  '/greet.GreetService/GreetWithDeadline',
  grpc.web.MethodType.UNARY,
  proto.greet.GreetRequest,
  proto.greet.GreetResponse,
  /**
   * @param {!proto.greet.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greet.GreetResponse.deserializeBinary
);


/**
 * @param {!proto.greet.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greet.GreetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greet.GreetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greet.GreetServiceClient.prototype.greetWithDeadline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greet.GreetService/GreetWithDeadline',
      request,
      metadata || {},
      methodDescriptor_GreetService_GreetWithDeadline,
      callback);
};


/**
 * @param {!proto.greet.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greet.GreetResponse>}
 *     Promise that resolves to the response
 */
proto.greet.GreetServicePromiseClient.prototype.greetWithDeadline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greet.GreetService/GreetWithDeadline',
      request,
      metadata || {},
      methodDescriptor_GreetService_GreetWithDeadline);
};


module.exports = proto.greet;

