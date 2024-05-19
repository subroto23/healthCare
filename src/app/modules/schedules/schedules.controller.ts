import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { scheduleServices } from "./schedules.services";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";

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

export const scheduleController = {
  createSchedule,
};
