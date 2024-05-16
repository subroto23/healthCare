import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { authServices } from "./auth.services";
import config from "../../config";

const login = catchAsync(async (req: Request, res: Response) => {
  const loggedInValues = req.body;
  const result = await authServices.loging(loggedInValues);

  //Setup Refresh Token
  res.cookie("refreshToken", result.refreshToken, {
    secure: config.node_env ? false : true,
    httpOnly: true,
  });

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

export const authController = {
  login,
  refreshToken,
  changePassword,
};
