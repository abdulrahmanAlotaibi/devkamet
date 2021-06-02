import * as IDEService from "../services/IDEService";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
import { compilers, extensions } from "../shared/IDE";
import { randomString } from "../shared/comoon";
import { stderr } from "node:process";

export const runCode = async (req: any, res: any, next: any) => {
  try {
    const { language, sourceCode, stdin } = req.body;

    const compiler = compilers[language];

    if (!compiler || !extensions[language]) {
      throw new BaseError(
        "API Error: Compiler doesn't exsist",
        HttpStatusCode.BAD_REQUEST,
        "Invalid compiler",
        true,
        "Invalid code submission"
      );
    }

    const id = randomString();

    const response = await IDEService.runCode(
      language,
      sourceCode,
      stdin,
      id,
      compiler
    );

    if (response.stderr) {
      if (response.stderr.includes("docker"))
        throw new BaseError(
          "API Error: related to IDE",
          HttpStatusCode.INTERNAL_SERVER,
          response.stderr,
          true,
          "Internal server error, try again"
        );
    }

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: response,
    });
  } catch (error) {
    next(error);
  }
};
