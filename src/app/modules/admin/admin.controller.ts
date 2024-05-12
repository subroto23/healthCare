import { NextFunction, Request, Response } from "express";
import { adminServices } from "./admin.services";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await adminServices.createAdminIntoDB(req.body);

    //
    return res.status(200).json({
      success: false,
      message: "User Created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createAdmin: createUser,
};
