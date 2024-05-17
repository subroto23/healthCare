import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utls/CatchAsync";
import { doctorServices } from "./doctors.services";
import sendResponse from "../../utls/SendResponse";
import pick from "../../shared/pickFields";
import { doctorFiltedField } from "./doctors.constants";
import { pageAndSortConstants } from "../../constants/globalConstant";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const file = req.file;
  const data = req.body;
  const result = await doctorServices.createDoctorIntoDB(file, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor Created successfully",
    data: result,
  });
});

//Getting All Users
const getAllDoctor = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req?.query, doctorFiltedField);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await doctorServices.getAllDoctorFromDB(filter, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor reterived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//Get Single User
const getSingleDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req?.params;
  const result = await doctorServices.getSingleDoctorFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor reterived successfully",
    data: result,
  });
});

//Update User
const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await doctorServices.updateDoctorFromDB(id, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor Updated successfully",
    data: result,
  });
});

//Delete User
const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await doctorServices.deleteDoctorFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor Deleted successfully",
    data: result,
  });
});

export const doctorController = {
  createDoctor,
  getAllDoctor,
  getSingleDoctor,
  deleteDoctor,
  updateDoctor,
};
