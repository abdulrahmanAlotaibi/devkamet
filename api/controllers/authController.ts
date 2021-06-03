import * as authService from "../services/authService";

export const authUser = async (req: any, res: any, next: any) => {
  try {
    const userId = req.user.id;

    const user = await authService.getUser(userId);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    next(err);
  }
};

export const signIn = async (req: any, res: any, next: any) => {
  try {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } = await authService.signIn(
      email,
      password
    );

    const options = {
      sameSite: true,
      httpOnly: true,
    };

    res.cookie("accessToken", accessToken, options);
    res.cookie("refreshToken", refreshToken, options);

    res.status(200).json({
      status: "success",
      result: {
        user,
        accessToken,
        refreshToken,
      },
      message: "Welcome Back",
    });
  } catch (err) {
    next(err);
  }
};
