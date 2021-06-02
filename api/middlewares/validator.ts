const { validationResult } = require("express-validator");
import { HttpStatusCode } from "../shared/http";

const validationChecker = async (req: any, res: any, next: any) => {
  // Bring all the errors from the validation process (ValidationChecklist.ts)
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      status: "failed",
      errors: _errorsByKeys(errors.errors),
      message: "Invalid Inputs",
    });
  } else {
    next();
  }
};

const _errorsByKeys = (errors: Array<any>) => {
  let obj = {};
  errors.map((error) => {
    obj = { ...obj, [error.param]: { ...error } };
  });
  return obj;
};

export default validationChecker;
