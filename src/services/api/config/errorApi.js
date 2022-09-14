export class HttpError extends Error {
  constructor(message, error) {
    super(message);
    this.name = 'HttpError';
    this.error = error;
  }
}
export class RequestHttpError extends HttpError {
  constructor(message, error) {
    super(message, error);
    this.name = 'RequestHttpError';
    this.request = error.request;
  }
}
export class ResponseHttpError extends HttpError {
  constructor(message, error) {
    super(error.response.data?.error ? error.response.data?.error : message, error);
    this.name = 'ResponseHttpError';
    this.response = error.response;
    this.status = error.response.status;
    this.data = error.response.data;
    this.headers = error.response.headers;
  }
}
export class ClientHttpError extends ResponseHttpError {
  constructor(message, error) {
    super(message, error);
    this.name = 'ClientHttpError';
  }
}
export class ServerHttpError extends ResponseHttpError {
  constructor(message, error) {
    super(message, error);
    this.name = 'ServerHttpError';
  }
}
export class NotSupportedStatusHttpError extends ResponseHttpError {
  constructor(message, error) {
    super(message, error);
    this.name = 'NotSupportedStatusHttpError';
  }
}
export class UnauthorizedHttpError extends ClientHttpError {
  constructor(message, error) {
    super(message, error);
    this.name = 'UnauthorizedHttpError';
  }
}
