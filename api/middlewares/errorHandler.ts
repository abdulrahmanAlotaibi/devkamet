import { HttpStatusCode } from "../shared/http";

export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpStatusCode;
  public readonly isOperational: boolean;
  public readonly stackTrace: any;
  public userResponse: string;

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    message: string,
    isOperational: boolean,
    userResponse?: string,
    stackTrace?: any
  ) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.userResponse = userResponse;
    this.stackTrace = stackTrace;
    Error.captureStackTrace(this);
  }
}

export const handleError = async (err: any, req: any, res: any, next: any) => {
  const {
    name,
    httpCode,
    message,
    isOperational,
    userResponse,
    stackTrace, // It may not exsist for operational errors
  } = err;

  console.error(err);

  if (!isOperational) {
    // 1) Send mail to admin

    // 2) Send events to Sentry or any logging service

    // Restart gracefuly
    process.exit(1);
  }

  res.status(httpCode).json({
    status: "failed",
    message: userResponse,
  });
};

export const catcher = (error: any) => {
  if (error.isOperational) {
    throw new BaseError(
      error.name,
      HttpStatusCode.NOT_FOUND,
      "Resource not found",
      true
    );
  } else {
    throw new BaseError(
      error.name,
      HttpStatusCode.INTERNAL_SERVER,
      error.message,
      true,
      "Internal Server Error",
      error.stack
    );
  }
};
