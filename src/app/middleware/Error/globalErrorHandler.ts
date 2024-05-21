import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
type IErrorData = {
  name: string;
  message: string;
};

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err?.message || "Something went wrong";
  let errData: IErrorData[] = [];
  //Conditon Error
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = httpStatus.CONFLICT;
      message =
        err.meta && err.meta.target
          ? `${(err.meta.target as string[]).join(", ")} is already exist`
          : "You assign duplicate Value";

      errData.push({
        name: err.name || "",
        message: err.message || "",
      });
    } else if (err.code === "P2025") {
      statusCode = httpStatus.NOT_FOUND;
      message = `${err.message && err.message.split(" ")[1]} data not found`;
      errData.push({
        name: err.name,
        message: err.message,
      });
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = httpStatus.BAD_REQUEST;
    message = "Unexpected Field Value Received";
    errData.push({
      name: err.name || "",
      message: err.message || "",
    });
  } else if (err instanceof ZodError) {
    statusCode = httpStatus.UNPROCESSABLE_ENTITY;
    const regex = /"message":\s*"([^"]+)"/;
    const match = err?.message.match(regex);
    message = match && match.length > 0 && match[1];
    errData.push({
      name: err.name || "",
      message: err.message || "",
    });
  } else if (err instanceof Error) {
    message = err.message;
    errData.push({
      name: err.name || "",
      message: err.message,
    });
  } else {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = err.message || "Something went Wrong";
    errData.push({
      name: err.name || "",
      message: err.message || "",
    });
  }
  return res.status(statusCode).json({
    success: false,
    message,
    error: errData,
  });
};

export default globalErrorHandler;
