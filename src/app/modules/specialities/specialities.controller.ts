import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import sendResponse from "../../utls/SendResponse";
import { specialitiesServices } from "./specialities.services";
import httpStatus from "http-status";

//Create Specialities
const createSpecilities = catchAsync(async (req: Request, res: Response) => {
  const file = req.file;
  const data = req.body;
  const result = await specialitiesServices.createspecialitiesIntoDB(
    file,
    data
  );

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialities Created successfully",
    data: result,
  });
});

//Get all Specialities
const getAllSpecialites = catchAsync(async (req: Request, res: Response) => {
  const result = await specialitiesServices.getAllSpecialitiesFromDB();

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Specialities reterived successfully",
    data: result,
  });
});

//Delete Specialities
const deleteSpecialites = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await specialitiesServices.deleteSpecialities(id);

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Speciality deleted successfully",
    data: result,
  });
});

export const specialitiesController = {
  createSpecilities,
  getAllSpecialites,
  deleteSpecialites,
};
