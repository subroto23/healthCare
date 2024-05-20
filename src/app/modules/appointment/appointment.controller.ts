import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utls/CatchAsync";
import { appoinmentServices } from "./appointment.services";
import sendResponse from "../../utls/SendResponse";
import pick from "../../shared/pickFields";
import { appointmentFiltedableField } from "./appointment.constant";
import { pageAndSortConstants } from "../../constants/globalConstant";
import { JwtPayload } from "jsonwebtoken";

const createAppointment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const data = req.body;
  const result = await appoinmentServices.createAppoinmentInotDB(user, data);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appointment Created successfully",
    data: result,
  });
});

//Getting my apportment
const getMyAppoinment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const filter = pick(req?.query, appointmentFiltedableField);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await appoinmentServices.getMyAppoinment(
    user,
    filter,
    options
  );
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appoinment reterived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//Getting ALL apportment
const getAllApportment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const filter = pick(req?.query, appointmentFiltedableField);
  const options = pick(req?.query, pageAndSortConstants);
  const result = await appoinmentServices.getAllAppoinment(
    user,
    filter,
    options
  );
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appoinment reterived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//Appointment Status Update
const updateAppointment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const { id } = req.params;

  const result = await appoinmentServices.updateAppointmentStatusFromDB(
    user,
    id,
    req.body
  );
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appointment Status Updated successfully",
    data: result,
  });
});

export const appoinmentController = {
  createAppointment,
  getMyAppoinment,
  getAllApportment,
  updateAppointment,
};
