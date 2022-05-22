// package: calculator
// file: sqrt.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SqrtRequest extends jspb.Message { 
    getNumber(): number;
    setNumber(value: number): SqrtRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SqrtRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SqrtRequest): SqrtRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SqrtRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SqrtRequest;
    static deserializeBinaryFromReader(message: SqrtRequest, reader: jspb.BinaryReader): SqrtRequest;
}

export namespace SqrtRequest {
    export type AsObject = {
        number: number,
    }
}

export class SqrtResponse extends jspb.Message { 
    getResult(): number;
    setResult(value: number): SqrtResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SqrtResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SqrtResponse): SqrtResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SqrtResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SqrtResponse;
    static deserializeBinaryFromReader(message: SqrtResponse, reader: jspb.BinaryReader): SqrtResponse;
}

export namespace SqrtResponse {
    export type AsObject = {
        result: number,
    }
}
