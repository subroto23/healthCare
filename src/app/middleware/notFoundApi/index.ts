import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFoundApi = async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found!",
    error: {
      path: req?.originalUrl,
      message: "Requested url is not valid",
    },
  });
};

export default notFoundApi;
