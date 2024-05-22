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
exports.specialitiesServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const fileUploader_1 = require("../../shared/fileUploader");
const createspecialitiesIntoDB = (file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    //File Upload Data
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    const fileName = file === null || file === void 0 ? void 0 : file.filename;
    if (file) {
        const userPhoto = yield fileUploader_1.fileUploader.sendToCloudenary(filePath, fileName);
        payload.icon = userPhoto.secure_url;
    }
    const result = yield globalConstant_1.prisma.specialties.create({
        data: payload,
    });
    return result;
});
//Get Specialities
const getAllSpecialitiesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield globalConstant_1.prisma.specialties.findMany();
    return result;
});
//Delete Specialities
const deleteSpecialities = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //Checking existence of speciality
    yield globalConstant_1.prisma.specialties.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield globalConstant_1.prisma.specialties.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.specialitiesServices = {
    createspecialitiesIntoDB,
    getAllSpecialitiesFromDB,
    deleteSpecialities,
};
