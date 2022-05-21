// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as calculator_pb from "./calculator_pb";

interface ICalculatorServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sum: ICalculatorServiceService_ISum;
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

export const CalculatorServiceService: ICalculatorServiceService;

export interface ICalculatorServiceServer extends grpc.UntypedServiceImplementation {
    sum: grpc.handleUnaryCall<calculator_pb.SumRequest, calculator_pb.SumResponse>;
}

export interface ICalculatorServiceClient {
    sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
}

export class CalculatorServiceClient extends grpc.Client implements ICalculatorServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sum(request: calculator_pb.SumRequest, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
    public sum(request: calculator_pb.SumRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: calculator_pb.SumResponse) => void): grpc.ClientUnaryCall;
}
