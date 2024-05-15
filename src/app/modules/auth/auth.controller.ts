import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { authServices } from "./auth.services";

const login = catchAsync(async (req: Request, res: Response) => {
  const loggedInValues = req.body;
  const result = await authServices.loging(loggedInValues);
  //Send Resposne
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully",
    data: result,
  });
});

export const authController = {
  login,
};
