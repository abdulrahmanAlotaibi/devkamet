import User from "../models/User";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
const config = require("config");
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import Student from "../models/Student";

export const signUp = async (newUser: any, avatarS3: any) => {
  let user: any = await User.findOne({ email: newUser.email }).exec();

  // Check if the user exsist
  if (user) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.ALREADY_EXISTS,
      "User already exist",
      true,
      "User already exist"
    );
  }

  try {
    // Salt algorithim to encrypt password
    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(newUser.password, salt);

    user = await Student.create({
      ...newUser,
      avatarMeta: avatarS3 || "",
    });

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const refreshToken = jwt.sign(payload, config.get("JWT_SECRET"), {
      expiresIn: "2d",
    });

    const accessToken = jwt.sign(payload, config.get("JWT_SECRET"), {
      expiresIn: "20m",
    });

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatarMeta.Location,
      },
      accessToken,
      refreshToken,
    };
  } catch (error) {
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
