// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sum: ICalculatorServiceService_ISum;
    primes: ICalculatorServiceService_IPrimes;
}

interface ICalculatorServiceService_ISum extends grpc.MethodDefinition<calculator_pb.SumRequest, calculator_pb.SumResponse> {
    path: "/calculator.CalculatorService/Sum";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<calculator_pb.SumRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.SumRequest>;
    responseSerialize: grpc.serialize<calculator_pb.SumResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.SumResponse>;
}
interface ICalculatorServiceService_IPrimes extends grpc.MethodDefinition<calculator_pb.PrimesRequest, calculator_pb.PrimesResponse> {
    path: "/calculator.CalculatorService/Primes";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<calculator_pb.PrimesRequest>;
    requestDeserialize: grpc.deserialize<calculator_pb.PrimesRequest>;
    responseSerialize: grpc.serialize<calculator_pb.PrimesResponse>;
    responseDeserialize: grpc.deserialize<calculator_pb.PrimesResponse>;
}

export const CalculatorServiceService: ICalculatorServiceService;

export interface ICalculatorServiceServer extends grpc.UntypedServiceImplementation {
    sum: grpc.handleUnaryCall<calculator_pb.SumRequest, calculator_pb.SumResponse>;
    primes: grpc.handleServerStreamingCall<calculator_pb.PrimesRequest, calculator_pb.PrimesResponse>;
}

export interface ICalculatorServiceClient {
    sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    primes(request: calculator_pb.PrimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimesResponse>;
    primes(request: calculator_pb.PrimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimesResponse>;
}

export class CalculatorServiceClient extends grpc.Client implements ICalculatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public primes(request: calculator_pb.PrimesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimesResponse>;
    public primes(request: calculator_pb.PrimesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<calculator_pb.PrimesResponse>;
}