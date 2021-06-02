import * as userService from "../services/userService";
import { HttpStatusCode } from "../shared/http";
import * as AWS from "../config/aws";

export const signUp = async (req: any, res: any, next: any) => {
  try {
    const { name, role, email, password, confirmPassword } = req.body;

    let avatarS3;
    const filename = `images/${Date.now().toString()}`;

    if (req.file) {
      avatarS3 = await AWS.upload(req.file.buffer, filename, req.file.mimetype);
    }

    const { user, accessToken, refreshToken } = await userService.signUp(
      {
        name,
        role,
        email,
        password,
        confirmPassword,
      },
      avatarS3
    );

    const options = {
      sameSite: true,
      httpOnly: true,
    };

    res.set("accessToken", accessToken, options);
    res.set("refreshToken", refreshToken, options);

    res.status(HttpStatusCode.OK).json({
      status: "success",
      result: {
        user,
        accessToken,
        refreshToken,
      },
      message: "The account has been created",
    });
  } catch (error) {
    next(error);
  }
};
