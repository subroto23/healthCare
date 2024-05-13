import { Request, Response } from "express";
import { adminServices } from "./admin.services";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import pick from "../../shared/pickFields";
import { adminFilterdFields } from "./admin.constant";
import { pageAndSortConstants } from "../../constants/globalConstant";
import httpStatus from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await adminServices.createAdminIntoDB(req.body);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Created successfully",
    data: result,
  });
});

//Getting All Users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req?.query, adminFilterdFields);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await adminServices.getAllUsersFromDB(filter, options);
  //Send Response
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins reterived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//Get Single User
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req?.params;
  const result = await adminServices.getSingleUsersFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin reterived successfully",
    data: result,
  });
});

//Update User
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await adminServices.updateUserFromDB(id, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Updated successfully",
    data: result,
  });
});

//Delete User
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminServices.deleteUserFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Deleted successfully",
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
