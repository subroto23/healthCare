import { AnyZodObject } from "zod";
import catchAsync from "../../utls/CatchAsync";
import { NextFunction, Request, Response } from "express";

const validateRequest = (validateSchema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await validateSchema.parseAsync({ body: req.body });
    return next();
  });
};
export default validateRequest;
