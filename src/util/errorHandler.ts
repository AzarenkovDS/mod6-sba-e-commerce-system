export class NetworkError extends Error {
    constructor(message = "Network request failed") {
        super(message);
        this.name = "NetworkError";
    }
}

export class DataError extends Error {
    constructor(message = "Invalid data format or missing fields") {
        super(message);
        this.name = "DataError";
    }
}
