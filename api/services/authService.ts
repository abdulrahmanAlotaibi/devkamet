import User from "../models/User";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
const config = require("config");
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const getUser = async (userId: string) => {
  const user = await User.findById(userId).select(
    "-password -createdAt -updatedAt -__v"
  );

  if (!user) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.NOT_FOUND,
      "Resource not found",
      true
    );
  }

  return user;
};

export const signIn = async (email: string, password: string) => {
  const user: any = await User.findOne({ email });

  if (!user) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.BAD_REQUEST,
      "User doesn't exsisit",
      true,
      "User doesn't exsisit"
    );
  }

  // Compare a plain text password with an encrypted password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.BAD_REQUEST,
      "User email or password are invalid",
      true,
      "User email or password are invalid"
    );
  }

  const payload = {
    user: {
      id: user.id,
      role: user.role,
    },
  };

  const refreshToken = jwt.sign(payload, config.get("JWT_SECRET"), {
    expiresIn: "3d",
  });

  const accessToken = jwt.sign(payload, config.get("JWT_SECRET"), {
    expiresIn: "10m", // FIX: Change this
  });

  user.refreshToken = refreshToken;

  await user.save();

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
};

export const getRefreshToken = async (refreshToken: any) => {
  // Verify token
  try {
    const decoded: any = jwt.verify(refreshToken, config.get("JWT_SECRET"));

    let user = decoded.user;

    user = await User.findById(user.id);

    if (!user) {
      throw new BaseError(
        "API Error",
        HttpStatusCode.NOT_FOUND,
        "Resource not found",
        true
      );
    }

    refreshToken = jwt.sign(decoded.user, config.get("JWT_SECRET"), {
      expiresIn: "2d",
    });

    // Send back the token
    const accessToken = jwt.sign(decoded.user, config.get("JWT_SECRET"), {
      expiresIn: "10m",
    });

    return { user, accessToken, refreshToken };
  } catch (err) {
    throw new BaseError(
      "API Error",
      HttpStatusCode.FORBIDDEN,
      "Refresh token is invalid",
      true,
      "Refresh token is invalid"
    );
  }
};
