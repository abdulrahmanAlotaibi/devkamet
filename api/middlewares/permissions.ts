/**
 * @desc This file describes the access control policy (Autherization)
 *  Permission Based Access Control
 * @ref https://blog.logrocket.com/using-accesscontrol-for-rbac-and-abac-in-node-js/
 * Syntax <CRUD operation> : <any/own>
 */

import { AccessControl } from "accesscontrol";
import { BaseError } from "./errorHandler";
import { HttpStatusCode } from "../shared/http";

const _grantsObject = {
  admin: {
    course: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    user: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    lesson: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
    announcement: {
      "create:any": ["*"],
      "read:any": ["*"],
      "update:any": ["*"],
      "delete:any": ["*"],
    },
  },
};

/**
 * @desc : Function signtures for dynamic calling
 * @example : ax.can("admin")[createAny]("course")
 */
export enum permissionFunctions {
  createAny = "createAny",
  readAny = "readAny",
  updateAny = "updateAny",
  deleteAny = "deleteAny",
  createOwn = "createOwn",
  readOwn = "readOwn",
  updateOwn = "updateOwn",
  deleteOwn = "deleteOwn",
}

export const ac: any = new AccessControl(_grantsObject);

const checkPermission = (resource: string, action: string) => {
  return (req: any, res: any, next: any) => {
    const permission = ac.can(req.user.role)[action](resource);

    if (permission.granted) {
      next();
    } else {
      throw new BaseError(
        "API Error: Permission denied",
        HttpStatusCode.UN_AUTHORIZED,
        "Permission denied",
        true,
        "Permission denied"
      );
    }
  };
};

export default checkPermission;
