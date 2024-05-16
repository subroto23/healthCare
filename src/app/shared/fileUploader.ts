import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";
import { NextFunction, Request, Response } from "express";
import fs from "fs";

//Multer Configurations
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(process.cwd(), "/src", "/uploads");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

//Cloudinary Uploade Configurations
cloudinary.config({
  cloud_name: "dkwosk351",
  api_key: "224489639686842",
  api_secret: "gbf8EXEC7CzF46IgtToeW0EOgYo",
});
//Upload
const sendToCloudenary = (filePath: string, fileName: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      { public_id: fileName },
      (error, result) => {
        fs.unlinkSync(filePath);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const fileAndDataParser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body = JSON.parse(req.body.data);
  return next();
};

export const fileUploader = {
  sendToCloudenary,
  fileAndDataParser,
  upload,
};
