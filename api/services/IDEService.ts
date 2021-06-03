import { execShellCommand as exec } from "../shared/comoon";
import {
  extensions,
  SANDBOX_NAME,
  SANDBOX_CONTSTRAINTS,
  cppBashScript,
  cBashScript,
} from "../shared/IDE";
import { HttpStatusCode } from "../shared/http";
import { BaseError } from "../middlewares/errorHandler";

import path from "path";
import mkdir from "mkdirp";
import fs from "fs";

export const runCode = async (
  language: string,
  sourceCode: string,
  stdin: string,
  id: string,
  compiler: string
) => {
  const folderPath = path.join("temp", id);
  const dir = await mkdir(folderPath);

  const sourceFilePath = path.join(
    folderPath,
    `source.${extensions[language]}`
  );

  const sourceFileName: any = `source.${extensions[language]}`;
  // Create the source file
  await fs.writeFile(
    sourceFilePath,
    sourceCode,
    (err?: any, stdout?: any, stderr?: any) => {
      if (err) {
        throw new BaseError(
          err.name,
          HttpStatusCode.INTERNAL_SERVER,
          err.message,
          true,
          "Internal server error"
        );
      }
    }
  );

  const bashPath = path.join(folderPath, `run.sh`);
  let bashScript;

  if (language === "cpp") {
    bashScript = cppBashScript;
  } else if (language === "c") {
    bashScript = cBashScript;
  } else {
    bashScript = `${compiler} ${sourceFileName}`;
  }

  await fs.writeFile(
    bashPath,
    bashScript,
    (err?: any, stdout?: any, stderr?: any) => {
      if (err) {
        throw new BaseError(
          err.name,
          HttpStatusCode.INTERNAL_SERVER,
          err.message,
          true,
          "Internal server error"
        );
      }
    }
  );

  const command = `docker run --rm -m=${
    SANDBOX_CONTSTRAINTS.RAM
  } --memory-swap=${SANDBOX_CONTSTRAINTS.VM_RAM} --cpus=${
    SANDBOX_CONTSTRAINTS.CPU
  }
  --mount type=bind,source=${path.join(
    process.cwd(),
    "temp",
    id
  )},target=/usercode ${SANDBOX_NAME} /bin/bash run.sh`;

  let output: any = await exec(command);

  // await del(folderPath);

  return output;
};

// export const testJob = async (job: any, testCode: any) => {
//   const { sourceCode, language, stdin, id } = job;

//   const compiler = compilers[language];
//   const extension = extensions[language];

//   if (!compiler || !extension) {
//     throw new BaseError(
//       "API Error: Compiler or extension doesn't exsist",
//       HttpStatusCode.BAD_REQUEST,
//       "Invalid compiler or extension",
//       true,
//       "Invalid code submission"
//     );
//   }

//   const folderPath = path.join("temp", id);

//   await mkdir(folderPath);

//   const sourceFileName = `source.${extension}`;
//   const sourceFilePath = path.join(folderPath, sourceFileName);

//   // Create the source file
//   await fs.writeFile(
//     sourceFilePath,
//     sourceCode,
//     (err?: any, stdout?: any, stderr?: any) => {
//       if (err) {
//         throw new BaseError(
//           err.name,
//           HttpStatusCode.INTERNAL_SERVER,
//           err.message,
//           true,
//           "Internal server error"
//         );
//       }
//     }
//   );

//   const testSandboxFileName: any = `testSandbox.${extensions[language]}`;
//   const testSandboxFilePath = path.join(folderPath, testSandboxFileName);

//   // Create the Test code file
//   await fs.writeFile(
//     testSandboxFilePath,
//     testCode,
//     (err?: any, stdout?: any, stderr?: any) => {
//       if (err) {
//         throw new BaseError(
//           err.name,
//           HttpStatusCode.INTERNAL_SERVER,
//           err.message,
//           true,
//           "Internal server error"
//         );
//       }
//     }
//   );

//   if (language === "javascript" || language === "node") {
//     // Load the tester to the sandbox
//     await fs.readFile(
//       path.join(process.cwd(), "shared", "scripts", `tester.js`),
//       async (err, content) => {
//         if (err) {
//           throw new BaseError(
//             err.name,
//             HttpStatusCode.INTERNAL_SERVER,
//             err.message,
//             true,
//             "Internal server error"
//           );
//         }

//         const testerCode = content;
//         const testerFileName = `tester.js`;
//         const testerFilePath = path.join(folderPath, testerFileName);

//         await fs.writeFile(
//           testerFilePath,
//           testerCode,
//           (err?: any, stdout?: any, stderr?: any) => {
//             if (err) {
//               throw new BaseError(
//                 err.name,
//                 HttpStatusCode.INTERNAL_SERVER,
//                 err.message,
//                 true,
//                 "Internal server error"
//               );
//             }
//           }
//         );
//       }
//     );
//   }

//   const bashScript = getTestBashScript(language);

//   // TODO put system contraints on the container (CPU, RAM, PID)
//   const command = `docker run -m=100m --cpu-period=1000 --mount type=bind,source=${path.join(
//     process.cwd(),
//     "temp",
//     id
//   )},target=/usercode ${SANDBOX_NAME} /bin/bash ${bashScript} `;

//   let { err, stdout, stderr }: any = await exec(command);

//   // await del(folderPath);

//   return { err, stdout, stderr };
// };
