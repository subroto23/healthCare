import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { JwtPayload } from "jsonwebtoken";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { prescriptionServices } from "./prescription.services";
import pick from "../../shared/pickFields";
import { pageAndSortConstants } from "../../constants/globalConstant";

//Create Prescription
const createPrescription = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const data = req.body;
  const result = await prescriptionServices.createPrescriptionIntoDB(
    user,
    data
  );
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Prescription Created successfully",
    data: result,
  });
});

//get single Prescriotion
const getMyPrescription = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const options = pick(req?.query, pageAndSortConstants);
  const result = await prescriptionServices.getmyPrescription(user, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Prescription retrived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//get All Prescription
const getAllPrescriptions = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const options = pick(req?.query, pageAndSortConstants);
  const result = await prescriptionServices.getAllPresCriptions(user, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Prescription retrived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//get Single Prescription
const getSinglePrescriptions = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await prescriptionServices.getSinglePresCriptions(id);

    //Send Response
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prescription retrived successfully",
      data: result,
    });
  }
);

export const prescriptionController = {
  createPrescription,
  getMyPrescription,
  getAllPrescriptions,
  getSinglePrescriptions,
};
