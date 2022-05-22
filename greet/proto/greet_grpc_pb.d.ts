// package: greet
// file: greet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as greet_pb from "./greet_pb";

interface IGreetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    greet: IGreetServiceService_IGreet;
    greetManyTimes: IGreetServiceService_IGreetManyTimes;
    longGreet: IGreetServiceService_ILongGreet;
    greetEveryone: IGreetServiceService_IGreetEveryone;
    greetWithDeadline: IGreetServiceService_IGreetWithDeadline;
}

interface IGreetServiceService_IGreet extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/Greet";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}
interface IGreetServiceService_IGreetManyTimes extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/GreetManyTimes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}
interface IGreetServiceService_ILongGreet extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/LongGreet";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}
interface IGreetServiceService_IGreetEveryone extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/GreetEveryone";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}
interface IGreetServiceService_IGreetWithDeadline extends grpc.MethodDefinition<greet_pb.GreetRequest, greet_pb.GreetResponse> {
    path: "/greet.GreetService/GreetWithDeadline";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greet_pb.GreetRequest>;
    requestDeserialize: grpc.deserialize<greet_pb.GreetRequest>;
    responseSerialize: grpc.serialize<greet_pb.GreetResponse>;
    responseDeserialize: grpc.deserialize<greet_pb.GreetResponse>;
}

export const GreetServiceService: IGreetServiceService;

export interface IGreetServiceServer extends grpc.UntypedServiceImplementation {
    greet: grpc.handleUnaryCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetManyTimes: grpc.handleServerStreamingCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    longGreet: grpc.handleClientStreamingCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetEveryone: grpc.handleBidiStreamingCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetWithDeadline: grpc.handleUnaryCall<greet_pb.GreetRequest, greet_pb.GreetResponse>;
}

export interface IGreetServiceClient {
    greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greetManyTimes(request: greet_pb.GreetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    greetManyTimes(request: greet_pb.GreetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    longGreet(callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    longGreet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    longGreet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    longGreet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    greetEveryone(): grpc.ClientDuplexStream<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetEveryone(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetEveryone(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    greetWithDeadline(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greetWithDeadline(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    greetWithDeadline(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}

export class GreetServiceClient extends grpc.Client implements IGreetServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public greet(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greet(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greetManyTimes(request: greet_pb.GreetRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    public greetManyTimes(request: greet_pb.GreetRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<greet_pb.GreetResponse>;
    public longGreet(callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    public longGreet(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    public longGreet(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    public longGreet(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientWritableStream<greet_pb.GreetRequest>;
    public greetEveryone(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    public greetEveryone(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<greet_pb.GreetRequest, greet_pb.GreetResponse>;
    public greetWithDeadline(request: greet_pb.GreetRequest, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greetWithDeadline(request: greet_pb.GreetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
    public greetWithDeadline(request: greet_pb.GreetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greet_pb.GreetResponse) => void): grpc.ClientUnaryCall;
}
