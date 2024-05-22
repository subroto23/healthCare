"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (receiveFunction) => {
    return (req, res, next) => {
        Promise.resolve(receiveFunction(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
