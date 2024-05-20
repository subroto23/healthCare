import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { scheduleServices } from "./schedules.services";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { pageAndSortConstants } from "../../constants/globalConstant";
import pick from "../../shared/pickFields";
import { scheduleFilteredAbleData } from "./schedules.constants";
import { JwtPayload } from "jsonwebtoken";

//Create Schedule
const createSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await scheduleServices.createSchedule(req.body);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Create schedule successfully",
    data: result,
  });
});

//get ALl Schedule
const getAllSchedule = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const filter = pick(req?.query, scheduleFilteredAbleData);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await scheduleServices.getAllSchedule(user, filter, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All schedule reterived successfully",
    meta: result?.meta,
    data: result,
  });
});

export const scheduleController = {
  createSchedule,
  getAllSchedule,
};
