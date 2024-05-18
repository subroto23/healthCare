import { Request, Response } from "express";
import { adminServices } from "./admin.services";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import pick from "../../shared/pickFields";
import { adminFilterdFields } from "./admin.constant";
import { pageAndSortConstants } from "../../constants/globalConstant";
import httpStatus from "http-status";

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const file = req.file;
  const data = req.body;
  const result = await adminServices.createAdminIntoDB(file, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Created successfully",
    data: result,
  });
});

//Getting All Users
const getAllAdmin = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req?.query, adminFilterdFields);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await adminServices.getAllAdminFromDB(filter, options);
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
const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req?.params;
  const result = await adminServices.getSingleAdminFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin reterived successfully",
    data: result,
  });
});

//Update User
const updateAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await adminServices.updateAdminFromDB(id, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Updated successfully",
    data: result,
  });
});

//Delete User
const deleteAdmin = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await adminServices.deleteAdminFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Deleted successfully",
    data: result,
  });
});

export const adminController = {
  createAdmin,
  getAllAdmin,
  getSingleAdmin,
  deleteAdmin,
  updateAdmin,
};
