import * as grpcWeb from 'grpc-web';

import * as calculator_pb from './calculator_pb';
import * as sqrt_pb from './sqrt_pb';


export class CalculatorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sum(
    request: calculator_pb.SumRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: calculator_pb.SumResponse) => void
  ): grpcWeb.ClientReadableStream<calculator_pb.SumResponse>;

  primes(
    request: calculator_pb.PrimesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<calculator_pb.PrimesResponse>;

  sqrt(
    request: sqrt_pb.SqrtRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: sqrt_pb.SqrtResponse) => void
  ): grpcWeb.ClientReadableStream<sqrt_pb.SqrtResponse>;

}

export class CalculatorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sum(
    request: calculator_pb.SumRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<calculator_pb.SumResponse>;

  primes(
    request: calculator_pb.PrimesRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<calculator_pb.PrimesResponse>;

  sqrt(
    request: sqrt_pb.SqrtRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<sqrt_pb.SqrtResponse>;

}

