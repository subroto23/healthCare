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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const client_1 = require("@prisma/client");
const fileUploader_1 = require("../../shared/fileUploader");
const myProfileFromDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: client_1.UserStatus.ACTIVE,
        },
        select: {
            id: true,
            email: true,
            role: true,
            needPasswordChange: true,
        },
    });
    //Confiton For User Based On Queary
    let profileInfo;
    if (user && user.role === client_1.UserRole.SUPER_ADMIN) {
        profileInfo = yield globalConstant_1.prisma.admin.findUniqueOrThrow({
            where: {
                email: userInfo.email,
            },
        });
    }
    else if (user && user.role === client_1.UserRole.ADMIN) {
        profileInfo = yield globalConstant_1.prisma.admin.findUniqueOrThrow({
            where: {
                email: userInfo.email,
            },
        });
    }
    else if (user && user.role === client_1.UserRole.PATIENT) {
        profileInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
            where: {
                email: userInfo.email,
            },
        });
    }
    else if (user && user.role === client_1.UserRole.DOCTOR) {
        profileInfo = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
            where: {
                email: userInfo.email,
            },
        });
    }
    return Object.assign(Object.assign({}, userInfo), profileInfo);
});
//Update User Profile
const updateProfileFromDB = (user, file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            email: user.email,
            status: client_1.UserStatus.ACTIVE,
        },
    });
    //File Upload Data
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    const fileName = userInfo.email;
    if (file) {
        const userPhoto = yield fileUploader_1.fileUploader.sendToCloudenary(filePath, fileName);
        payload.profilePhoto = userPhoto.secure_url;
    }
    //Confiton For User Based On Queary
    let profileUpdatedInfo;
    if (user && user.role === client_1.UserRole.SUPER_ADMIN) {
        profileUpdatedInfo = yield globalConstant_1.prisma.admin.update({
            where: {
                email: userInfo.email,
            },
            data: payload,
        });
    }
    else if (user && user.role === client_1.UserRole.ADMIN) {
        profileUpdatedInfo = yield globalConstant_1.prisma.admin.update({
            where: {
                email: userInfo.email,
            },
            data: payload,
        });
    }
    else if (user && user.role === client_1.UserRole.PATIENT) {
        profileUpdatedInfo = yield globalConstant_1.prisma.patient.update({
            where: {
                email: userInfo.email,
            },
            data: payload,
        });
    }
    else if (user && user.role === client_1.UserRole.DOCTOR) {
        profileUpdatedInfo = yield globalConstant_1.prisma.doctor.update({
            where: {
                email: userInfo.email,
            },
            data: payload,
        });
    }
    return Object.assign({}, profileUpdatedInfo);
});
//User Role change modification
const userRoleChange = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.user.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield globalConstant_1.prisma.user.update({
        where: {
            id: userInfo.id,
        },
        data: {
            role: payload.role,
        },
    });
    return result;
});
exports.userServices = {
    myProfileFromDB,
    updateProfileFromDB,
    userRoleChange,
};
