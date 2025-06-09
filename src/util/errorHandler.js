"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataError = exports.NetworkError = void 0;
class NetworkError extends Error {
    constructor(message = "Network request failed") {
        super(message);
        this.name = "NetworkError";
    }
}
exports.NetworkError = NetworkError;
class DataError extends Error {
    constructor(message = "Invalid data format or missing fields") {
        super(message);
        this.name = "DataError";
    }
}
exports.DataError = DataError;
