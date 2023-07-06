'use strict';
const StatusCode ={
    FORBIDDEN: 403,
    CONFLICT: 409,
}

const ReasonStatusCode = {
    FORBIDDEN: 'Bad request error',
    CONFLICT: 409,
}
class ErrorResponse extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

class ConflicRequestError extends ErrorResponse {
    constructor(message, statusCode) {
        super(message, statusCode)
    }
}