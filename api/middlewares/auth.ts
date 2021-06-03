import jwt from "jsonwebtoken";
import { BaseError, catcher } from "./errorHandler";
import { HttpStatusCode } from "../shared/http";
import config from "config";
import { getRefreshToken } from "../services/authService";

export async function auth(req: any, res: any, next: any) {
  // Get token from header
  const token = req.cookies["accessToken"];

  console.log(token);

  try {
    if (!token) {
      res.status(HttpStatusCode.FORBIDDEN).json({
        status: "failed",
        message: "No token, authorization denied",
      });
    }
  } catch (error) {
    next(error);
  }

  // Verify token
  try {
    const decoded: any = jwt.verify(token, config.get("JWT_SECRET"));

    req.user = decoded.user;

    next();
  } catch (error) {
    console.log(error);
    try {
      const refreshToken = req.cookies["refreshToken"];

      if (!refreshToken) {
        throw Error();
      }

      const response = await getRefreshToken(refreshToken);

      const options = {
        sameSite: true,
        httpOnly: true,
      };

      res.cookie("accessToken", response.accessToken, options);
      res.cookie("refreshToken", response.refreshToken, options);

      req.user = response.user;

      console.log(req.user);
      next();
    } catch (error) {
      res.status(HttpStatusCode.FORBIDDEN).json({
        status: "failed",
        message: "Refresh Token is invalid, try to login",
      });
    }
  }
}
