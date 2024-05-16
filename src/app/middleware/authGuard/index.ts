import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utls/CatchAsync";
import { authTokenServices } from "../../helper/authToken";
import { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../config";
import ApiError from "../../errors/apiError";

const authGuard = (...roles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new ApiError(403, "Please Login First");
    }
    const userData = await authTokenServices.verifyToken(
      token,
      config.accessTokenSecrete as Secret
    );
    if (roles.length > 0 && !roles.includes(userData.role)) {
      throw new ApiError(402, "You are not authorized user");
    }
    req.user = userData;
    next();
  });
};

export default authGuard;
