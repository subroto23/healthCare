"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculatePagination = (options) => {
    const page = Number(options === null || options === void 0 ? void 0 : options.page) || 1;
    const limit = Number(options === null || options === void 0 ? void 0 : options.limit) || 10;
    const sort = (options === null || options === void 0 ? void 0 : options.sortBy) || "createdAt";
    const sortOrder = (options === null || options === void 0 ? void 0 : options.sortOrder) || "desc";
    const skip = (page - 1) * limit;
    return {
        limit,
        sort,
        skip,
        page,
        sortOrder,
    };
};
exports.default = calculatePagination;
