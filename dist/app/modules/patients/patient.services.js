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
exports.patientServices = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fileUploader_1 = require("../../shared/fileUploader");
const globalConstant_1 = require("../../constants/globalConstant");
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const patient_constants_1 = require("./patient.constants");
//Create Services
const createPatientIntoDB = (file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    const fileName = payload.patient.email;
    if (file) {
        const userPhoto = yield fileUploader_1.fileUploader.sendToCloudenary(filePath, fileName);
        payload.patient.profilePhoto = userPhoto.secure_url;
    }
    //Hashing Password
    const hashPassword = yield bcrypt_1.default.hash(payload.password, 12);
    //User Data seperation
    const userData = {
        email: payload.patient.email,
        password: hashPassword,
    };
    //Transaction based creation usar and Admin
    const result = yield globalConstant_1.prisma.$transaction((tranjection) => __awaiter(void 0, void 0, void 0, function* () {
        //User Creation
        yield tranjection.user.create({
            data: userData,
        });
        //Admin Cration
        const cratePatient = yield tranjection.patient.create({
            data: payload.patient,
        });
        return cratePatient;
    }));
    //Return Tranjection Result
    return result;
});
//All Patient Reterive
const getAllPatientFromDB = (filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = filter, filterData = __rest(filter, ["search"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
    //Search Conditon Query
    if (filter.search) {
        andCondition.push({
            OR: patient_constants_1.patientSearchAbleField.map((field) => {
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
    const result = yield globalConstant_1.prisma.patient.findMany({
        where: whereCondition,
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.patient.count({
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
//Single Patient Retrive
const getSinglePatientFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false,
        },
    });
    return result;
});
//Update Patient From DB
const updatePatientFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { medicalReport, patientHealthData } = payload, data = __rest(payload, ["medicalReport", "patientHealthData"]);
    //Is exist checking
    const pataientInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            id,
        },
    });
    yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const updated = yield tx.patient.update({
            where: {
                id,
                isDeleted: false,
            },
            data,
            include: {
                patientHealthData: true,
                medicalReport: true,
            },
        });
        if (patientHealthData) {
            yield tx.patientHealthData.upsert({
                where: {
                    patientId: id,
                },
                update: patientHealthData,
                create: Object.assign(Object.assign({}, patientHealthData), { patientId: pataientInfo.id }),
            });
        }
        if (medicalReport) {
            yield tx.medicalReport.create({
                data: Object.assign(Object.assign({}, medicalReport), { patientId: pataientInfo.id }),
            });
        }
        return updated;
    }));
    const result = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            patientHealthData: true,
            medicalReport: true,
        },
    });
    return result;
});
//Delete Patient from DB
const deletePatientFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false,
        },
    });
    //Tranjection
    const result = yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        //Patient HealthDataDeleted
        yield tx.patientHealthData.delete({
            where: {
                patientId: id,
            },
        });
        //Patient medical Report
        yield tx.medicalReport.deleteMany({
            where: {
                patientId: id,
            },
        });
        //Deleted patient Table
        const PatientDeletedData = yield tx.patient.update({
            where: {
                id,
            },
            data: { isDeleted: true },
        });
        //User Table Deleted
        const userDeletedData = yield tx.user.update({
            where: {
                email: PatientDeletedData.email,
            },
            data: {
                status: client_1.UserStatus.DELETED,
            },
        });
        return userDeletedData;
    }));
    return result;
});
exports.patientServices = {
    createPatientIntoDB,
    getAllPatientFromDB,
    getSinglePatientFromDB,
    deletePatientFromDB,
    updatePatientFromDB,
};
