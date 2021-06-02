import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";

export const prapareErrorSubs = () => {
  process.on("uncaughtException", (err: Error) => {
    throw new BaseError(
      err.name,
      HttpStatusCode.INTERNAL_SERVER,
      err.message,
      false,
      "Internal Server Error, try again",
      err.stack
    );
  });
  process.on("unhandledRejection", (err: Error, p) => {
    throw new BaseError(
      err.name,
      HttpStatusCode.INTERNAL_SERVER,
      err.message,
      false,
      "Internal Server Error, try again",
      err.stack
    );
  });
};
