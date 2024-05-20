import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { doctorScheduleServices } from "./doctorSchedule.service";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import pick from "../../shared/pickFields";
import { pageAndSortConstants } from "../../constants/globalConstant";
import { doctorScheduleFilteredAbleData } from "./doctorSchedule.constants";

const createDoctorSchedule = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await doctorScheduleServices.createDoctorScheduleIntoDB(
    user,
    req.body
  );

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor Schedule Created successfully",
    data: result,
  });
});

//get ALl Schedule
const getAllDoctorSchedule = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const filter = pick(req?.query, doctorScheduleFilteredAbleData);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await doctorScheduleServices.getAllDoctorScheduleFromDB(
    user,
    filter,
    options
  );
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Doctor schedule reterived successfully",
    meta: result?.meta,
    data: result,
  });
});

//Delete Schedule
const deleteDoctorSchedule = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const { id } = req.params;
  const result = await doctorScheduleServices.deleteScheduleFromDB(user, id);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Doctor Schudeled successfully",
    data: result,
  });
});
export const doctorScheduleController = {
  createDoctorSchedule,
  getAllDoctorSchedule,
  deleteDoctorSchedule,
};
