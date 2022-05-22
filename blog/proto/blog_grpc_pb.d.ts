// package: blog
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as blog_pb from "./blog_pb";

interface IBlogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
}


export const BlogServiceService: IBlogServiceService;

export interface IBlogServiceServer extends grpc.UntypedServiceImplementation {
}

export interface IBlogServiceClient {
}

export class BlogServiceClient extends grpc.Client implements IBlogServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
}
