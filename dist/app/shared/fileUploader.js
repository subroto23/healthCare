"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploader = void 0;
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const config_1 = __importDefault(require("../config"));
//Multer Configurations
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path_1.default.join(process.cwd(), "/src", "/uploads");
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
//Cloudinary Uploade Configurations
cloudinary_1.v2.config({
    cloud_name: config_1.default.fileUpload.cloudName,
    api_key: config_1.default.fileUpload.apiKey,
    api_secret: config_1.default.fileUpload.apiSecret,
});
//Upload
const sendToCloudenary = (filePath, fileName) => {
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader.upload(filePath, { public_id: fileName }, (error, result) => {
            fs_1.default.unlinkSync(filePath);
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
const fileAndDataParser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    req.body = JSON.parse(req.body.data);
    return next();
});
exports.fileUploader = {
    sendToCloudenary,
    fileAndDataParser,
    upload,
};
