import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utls/CatchAsync";
import { patientServices } from "./patient.services";
import sendResponse from "../../utls/SendResponse";
import pick from "../../shared/pickFields";
import { patientFilteredAbleField } from "./patient.constants";
import { pageAndSortConstants } from "../../constants/globalConstant";

const createPatient = catchAsync(async (req: Request, res: Response) => {
  const file = req.file;
  const data = req.body;
  const result = await patientServices.createPatientIntoDB(file, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient Created successfully",
    data: result,
  });
});

//Getting All Users
const getAllPatient = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req?.query, patientFilteredAbleField);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await patientServices.getAllPatientFromDB(filter, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient reterived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//Get Single User
const getSinglePatient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req?.params;
  const result = await patientServices.getSinglePatientFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient reterived successfully",
    data: result,
  });
});

//Update User
const updatePatient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await patientServices.updatePatientFromDB(id, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient Updated successfully",
    data: result,
  });
});

//Delete User
const deletePatient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await patientServices.deletePatientFromDB(id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Patient Deleted successfully",
    data: result,
  });
});

export const patientController = {
  createPatient,
  getAllPatient,
  getSinglePatient,
  deletePatient,
  updatePatient,
};
