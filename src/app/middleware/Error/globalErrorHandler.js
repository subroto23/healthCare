"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.status || http_status_1.default.INTERNAL_SERVER_ERROR;
    let message = (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong";
    let errData = [];
    //Conditon Error
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            statusCode = http_status_1.default.CONFLICT;
            message =
                err.meta && err.meta.target
                    ? `${err.meta.target.join(", ")} is already exist`
                    : "You assign duplicate Value";
            errData.push({
                name: err.name || "",
                message: err.message || "",
            });
        }
        else if (err.code === "P2025") {
            statusCode = http_status_1.default.NOT_FOUND;
            message = `${err.message && err.message.split(" ")[1]} data not found`;
            errData.push({
                name: err.name,
                message: err.message,
            });
        }
    }
    else if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        statusCode = http_status_1.default.BAD_REQUEST;
        message = "Unexpected Field Value Received";
        errData.push({
            name: err.name || "",
            message: err.message || "",
        });
    }
    else if (err instanceof zod_1.ZodError) {
        statusCode = http_status_1.default.UNPROCESSABLE_ENTITY;
        const regex = /"message":\s*"([^"]+)"/;
        const match = err === null || err === void 0 ? void 0 : err.message.match(regex);
        message = match && match.length > 0 && match[1];
        errData.push({
            name: err.name || "",
            message: err.message || "",
        });
    }
    else if (err instanceof Error) {
        message = err.message;
        errData.push({
            name: err.name || "",
            message: err.message,
        });
    }
    else {
        statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
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
exports.default = globalErrorHandler;
