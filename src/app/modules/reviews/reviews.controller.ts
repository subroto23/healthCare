import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { JwtPayload } from "jsonwebtoken";
import { reviewServices } from "./reviews.services";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import pick from "../../shared/pickFields";
import { pageAndSortConstants } from "../../constants/globalConstant";

//Create Prescription
const createReviews = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const data = req.body;
  const result = await reviewServices.createReviewsIntoDB(user, data);

  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review Created successfully",
    data: result,
  });
});

//get single Prescriotion
const getMyReviews = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const options = pick(req?.query, pageAndSortConstants);
  const result = await reviewServices.getmyReviews(user, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

//get All Reviews
const getAllReview = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const options = pick(req?.query, pageAndSortConstants);
  const result = await reviewServices.getAllReviews(user, options);
  //Send Response
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrived successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

export const reviewController = {
  createReviews,
  getMyReviews,
  getAllReview,
};
