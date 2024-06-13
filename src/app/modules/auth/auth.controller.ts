import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { authServices } from "./auth.services";

const login = catchAsync(async (req: Request, res: Response) => {
  const loggedInValues = req.body;
  const result = await authServices.loging(loggedInValues);

  res.cookie("refreshToken", result?.refreshToken);

  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully",
    data: {
      accessToken: result.accessToken,
      needPasswordChange: result.needPasswordChange,
    },
  });
});

//Refresh TOken When Necessary
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req?.cookies;
  const result = await authServices.refreshToken(refreshToken);
  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully",
    data: {
      accessToken: result.accessToken,
      needPasswordChange: result.needPasswordChange,
    },
  });
});

//Change Password
const changePassword = catchAsync(async (req: Request, res: Response) => {
  const user = req?.user as JwtPayload;
  const result = await authServices.changePassword(user, req.body);

  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password Changed successfully",
    data: result,
  });
});

//Forgotten Password
const forgottenPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const result = await authServices.forgottenPassword(email);

  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Forgotten password",
    data: result,
  });
});

//Reset Password
const resetPassword = catchAsync(async (req: Request, res: Response) => {
  const token = req.body?.token || "";
  const result = await authServices.resetPassword(token, req.body);
  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password reset successfully",
    data: result,
  });
});

export const authController = {
  login,
  refreshToken,
  changePassword,
  forgottenPassword,
  resetPassword,
};
