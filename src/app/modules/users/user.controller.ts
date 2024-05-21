import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { userServices } from "./user.services";

//Get Single User
const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await userServices.myProfileFromDB(user);

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My Profile reterived successfully",
    data: result,
  });
});

//Update My Profile
const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const file = req.file;
  const data = req.body;
  const result = await userServices.updateProfileFromDB(user, file, data);

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My Profile Updated successfully",
    data: result,
  });
});

//User Role Change
const userRoleChange = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await userServices.userRoleChange(id, data);

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Role Updated successfully",
    data: result,
  });
});

export const userController = {
  getMyProfile,
  updateMyProfile,
  userRoleChange,
};
