// package: calculator
// file: calculator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as sqrt_pb from "./sqrt_pb";

export class SumRequest extends jspb.Message { 
    clearNumberList(): void;
    getNumberList(): Array<number>;
    setNumberList(value: Array<number>): SumRequest;
    addNumber(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SumRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SumRequest): SumRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SumRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SumRequest;
    static deserializeBinaryFromReader(message: SumRequest, reader: jspb.BinaryReader): SumRequest;
}

export namespace SumRequest {
    export type AsObject = {
        numberList: Array<number>,
    }
}

export class SumResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): SumResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SumResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SumResponse): SumResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SumResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SumResponse;
    static deserializeBinaryFromReader(message: SumResponse, reader: jspb.BinaryReader): SumResponse;
}

export namespace SumResponse {
    export type AsObject = {
        result: number,
    }
}

export class PrimesRequest extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): PrimesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrimesRequest): PrimesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimesRequest;
    static deserializeBinaryFromReader(message: PrimesRequest, reader: jspb.BinaryReader): PrimesRequest;
}

export namespace PrimesRequest {
    export type AsObject = {
        number: number,
    }
}

export class PrimesResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): PrimesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PrimesResponse): PrimesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimesResponse;
    static deserializeBinaryFromReader(message: PrimesResponse, reader: jspb.BinaryReader): PrimesResponse;
}

export namespace PrimesResponse {
    export type AsObject = {
        result: number,
    }
}

export class AvgRequest extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): AvgRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvgRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AvgRequest): AvgRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvgRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvgRequest;
    static deserializeBinaryFromReader(message: AvgRequest, reader: jspb.BinaryReader): AvgRequest;
}

export namespace AvgRequest {
    export type AsObject = {
        number: number,
    }
}

export class AvgResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): AvgResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvgResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AvgResponse): AvgResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvgResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvgResponse;
    static deserializeBinaryFromReader(message: AvgResponse, reader: jspb.BinaryReader): AvgResponse;
}

export namespace AvgResponse {
    export type AsObject = {
        result: number,
    }
}

export class MaxRequest extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): MaxRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MaxRequest): MaxRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxRequest;
    static deserializeBinaryFromReader(message: MaxRequest, reader: jspb.BinaryReader): MaxRequest;
}

export namespace MaxRequest {
    export type AsObject = {
        number: number,
    }
}

export class MaxResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): MaxResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MaxResponse): MaxResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxResponse;
    static deserializeBinaryFromReader(message: MaxResponse, reader: jspb.BinaryReader): MaxResponse;
}

export namespace MaxResponse {
    export type AsObject = {
        result: number,
    }
}
