import { Request, Response } from "express";
import { adminServices } from "./admin.services";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.createAdminIntoDB(req.body);
  //Send Response
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Created successfully",
    data: result,
  });
});

//Getting All Users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.getAllUsersFromDB();

  //Send Response
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User reterived successfully",
    data: result,
  });
});

//Get Single User
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.getSingleUsersFromDB(req?.params);
  //Send Response
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User reterived successfully",
    data: result,
  });
});

//Delete User
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.deleteUserFromDB();
  //Send Response
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Deleted successfully",
    data: result,
  });
});

//Update User
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.updateUserFromDB();
  //Send Response
  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User Updated successfully",
    data: result,
  });
});

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
