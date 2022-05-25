/**
 * @fileoverview gRPC-Web generated client stub for blog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.blog = require('./blog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.blog.BlogServiceClient =
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
proto.blog.BlogServicePromiseClient =
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
 *   !proto.blog.Blog,
 *   !proto.blog.BlogId>}
 */
const methodDescriptor_BlogService_CreateBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/CreateBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.Blog,
  proto.blog.BlogId,
  /**
   * @param {!proto.blog.Blog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.BlogId.deserializeBinary
);


/**
 * @param {!proto.blog.Blog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.BlogId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.BlogId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.createBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/CreateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_CreateBlog,
      callback);
};


/**
 * @param {!proto.blog.Blog} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.BlogId>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.createBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/CreateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_CreateBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.BlogId,
 *   !proto.blog.Blog>}
 */
const methodDescriptor_BlogService_ReadBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/ReadBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.BlogId,
  proto.blog.Blog,
  /**
   * @param {!proto.blog.BlogId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Blog.deserializeBinary
);


/**
 * @param {!proto.blog.BlogId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.blog.Blog)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Blog>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.readBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/ReadBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_ReadBlog,
      callback);
};


/**
 * @param {!proto.blog.BlogId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.blog.Blog>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.readBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/ReadBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_ReadBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.Blog,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BlogService_UpdateBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/UpdateBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.Blog,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.blog.Blog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.blog.Blog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.updateBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/UpdateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_UpdateBlog,
      callback);
};


/**
 * @param {!proto.blog.Blog} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.updateBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/UpdateBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_UpdateBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.blog.BlogId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BlogService_DeleteBlog = new grpc.web.MethodDescriptor(
  '/blog.BlogService/DeleteBlog',
  grpc.web.MethodType.UNARY,
  proto.blog.BlogId,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.blog.BlogId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.blog.BlogId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.deleteBlog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/blog.BlogService/DeleteBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_DeleteBlog,
      callback);
};


/**
 * @param {!proto.blog.BlogId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.blog.BlogServicePromiseClient.prototype.deleteBlog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/blog.BlogService/DeleteBlog',
      request,
      metadata || {},
      methodDescriptor_BlogService_DeleteBlog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.blog.Blog>}
 */
const methodDescriptor_BlogService_ListBlogs = new grpc.web.MethodDescriptor(
  '/blog.BlogService/ListBlogs',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.blog.Blog,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.blog.Blog.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Blog>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServiceClient.prototype.listBlogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/blog.BlogService/ListBlogs',
      request,
      metadata || {},
      methodDescriptor_BlogService_ListBlogs);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.blog.Blog>}
 *     The XHR Node Readable Stream
 */
proto.blog.BlogServicePromiseClient.prototype.listBlogs =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/blog.BlogService/ListBlogs',
      request,
      metadata || {},
      methodDescriptor_BlogService_ListBlogs);
};


module.exports = proto.blog;

