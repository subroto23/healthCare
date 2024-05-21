import { Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { JwtPayload } from "jsonwebtoken";
import sendResponse from "../../utls/SendResponse";
import httpStatus from "http-status";
import { metaDataService } from "./metaData.services";

const metaDataFatchedFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user as JwtPayload;
    const result = await metaDataService.getFetchMetaDataFromDB(user);
    //Send Response
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "MetaData retrived successfully",
      data: result,
    });
  }
);

export const metaDataController = {
  metaDataFatchedFromDB,
};
