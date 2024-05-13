import { Response } from "express";

type IMeta = {
  page: number;
  limit: number;
  total: number;
};

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: IMeta;
  data: T | null | undefined;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data?.statusCode).json({
    success: data?.success,
    message: data?.message,
    meta: data?.meta || null || undefined,
    data: data?.data || null || undefined,
  });
};

export default sendResponse;
