import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { paymentServices } from "./payments.services";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";

//Create Schedule
const initialPayment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const { appoinmentId } = req.params;
  const result = await paymentServices.initialPayment(user, appoinmentId);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment Ongoing successfully",
    data: result,
  });
});

//Validate Payment
const validatePayment = catchAsync(async (req: Request, res: Response) => {
  const result = await paymentServices.validatePayment(req.query);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment schedule successfully",
    data: result,
  });
});

export const paymentController = {
  initialPayment,
  validatePayment,
};
