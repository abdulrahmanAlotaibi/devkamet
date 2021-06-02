export enum HttpStatusCode {
  OK = 200,
  INTERNAL_SERVER = 500,
  SERVICE_UNAVAILABLE = 503,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  UN_AUTHORIZED = 401,
  FORBIDDEN = 403,
  ALREADY_EXISTS = 409,
}

export enum APIResponses {
  INTERNAL_SERVER = "Internal server error",
  NOT_FOUND = "Resource not found",
  UN_AUTHORIZED = "Permission denied",
}
// todo: messages 