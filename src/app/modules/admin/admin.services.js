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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_constant_1 = require("./admin.constant");
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const fileUploader_1 = require("../../shared/fileUploader");
const prisma = new client_1.PrismaClient();
//Create Services
const createAdminIntoDB = (file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    const fileName = payload.admin.email;
    if (file) {
        const userPhoto = yield fileUploader_1.fileUploader.sendToCloudenary(filePath, fileName);
        payload.admin.profilePhoto = userPhoto.secure_url;
    }
    //Default Password Set
    if (!payload.password) {
        payload.password = "123456";
    }
    //Hashing Password
    const hashPassword = yield bcrypt_1.default.hash(payload.password, 12);
    //User Data seperation
    const userData = {
        email: payload.admin.email,
        password: hashPassword,
    };
    //Transaction based creation usar and Admin
    const result = yield prisma.$transaction((tranjection) => __awaiter(void 0, void 0, void 0, function* () {
        //User Creation
        yield tranjection.user.create({
            data: userData,
        });
        //Admin Cration
        const crateAdmin = yield tranjection.admin.create({
            data: payload.admin,
        });
        return crateAdmin;
    }));
    //Return Tranjection Result
    return result;
});
//All Users Reterive
const getAllAdminFromDB = (filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = filter, filterData = __rest(filter, ["search"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
    //Search Conditon Query
    if (filter.search) {
        andCondition.push({
            OR: admin_constant_1.adminSearchAbleField.map((field) => {
                return {
                    [field]: {
                        contains: filter === null || filter === void 0 ? void 0 : filter.search,
                        mode: "insensitive",
                    },
                };
            }),
        });
    }
    //Filter Conditons Query
    if (Object.keys(filterData).length > 0) {
        andCondition.push({
            AND: Object.keys(filterData).map((keys) => ({
                [keys]: {
                    equals: filterData[keys],
                },
            })),
        });
    }
    andCondition.push({
        isDeleted: false,
    });
    const whereCondition = { AND: andCondition };
    const result = yield prisma.admin.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield prisma.admin.count({
        where: whereCondition,
    });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
//Single User Retrive
const getSingleAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.admin.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false,
        },
    });
    return result;
});
//Update User From DB
const updateAdminFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    //Is exist checking
    yield prisma.admin.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma.admin.update({
        where: {
            id,
            isDeleted: false,
        },
        data,
    });
    return result;
});
//Delete User from DB
const deleteAdminFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$transaction((tranjection) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.admin.findUniqueOrThrow({
            where: {
                id,
                isDeleted: false,
            },
        });
        //Deleted from admin
        const adminDeletedData = yield tranjection.admin.update({
            where: {
                id,
            },
            data: { isDeleted: true },
        });
        //User Table Deleted user based on email
        const userDeletedData = yield tranjection.user.update({
            where: {
                email: adminDeletedData.email,
            },
            data: {
                status: client_1.UserStatus.DELETED,
            },
        });
        return userDeletedData;
    }));
    return result;
});
exports.adminServices = {
    createAdminIntoDB,
    getAllAdminFromDB,
    getSingleAdminFromDB,
    deleteAdminFromDB,
    updateAdminFromDB,
};
