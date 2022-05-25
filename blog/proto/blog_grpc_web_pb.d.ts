import * as grpcWeb from 'grpc-web';

import * as blog_pb from './blog_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class BlogServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBlog(
    request: blog_pb.Blog,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: blog_pb.BlogId) => void
  ): grpcWeb.ClientReadableStream<blog_pb.BlogId>;

  readBlog(
    request: blog_pb.BlogId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: blog_pb.Blog) => void
  ): grpcWeb.ClientReadableStream<blog_pb.Blog>;

  updateBlog(
    request: blog_pb.Blog,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteBlog(
    request: blog_pb.BlogId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listBlogs(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<blog_pb.Blog>;

}

export class BlogServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createBlog(
    request: blog_pb.Blog,
    metadata?: grpcWeb.Metadata
  ): Promise<blog_pb.BlogId>;

  readBlog(
    request: blog_pb.BlogId,
    metadata?: grpcWeb.Metadata
  ): Promise<blog_pb.Blog>;

  updateBlog(
    request: blog_pb.Blog,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteBlog(
    request: blog_pb.BlogId,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listBlogs(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<blog_pb.Blog>;

}

