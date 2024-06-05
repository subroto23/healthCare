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
exports.doctorServices = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fileUploader_1 = require("../../shared/fileUploader");
const globalConstant_1 = require("../../constants/globalConstant");
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const doctors_constants_1 = require("./doctors.constants");
//Create Services
const createDoctorIntoDB = (file, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = file === null || file === void 0 ? void 0 : file.path;
    const fileName = payload.doctor.email;
    if (file) {
        const userPhoto = yield fileUploader_1.fileUploader.sendToCloudenary(filePath, fileName);
        payload.doctor.profilePhoto = userPhoto.secure_url;
    }
    //Hashing Password
    const hashPassword = yield bcrypt_1.default.hash(payload.password, 12);
    //User Data seperation
    const userData = {
        email: payload.doctor.email,
        password: hashPassword,
        role: client_1.UserRole.DOCTOR,
    };
    //Transaction based creation usar and Admin
    const result = yield globalConstant_1.prisma.$transaction((tranjection) => __awaiter(void 0, void 0, void 0, function* () {
        //User Creation
        yield tranjection.user.create({
            data: userData,
        });
        //Admin Cration
        const crateAdmin = yield tranjection.doctor.create({
            data: payload.doctor,
        });
        return crateAdmin;
    }));
    //Return Tranjection Result
    return result;
});
//All Doctors Reterive
const getAllDoctorFromDB = (filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { search, specialties } = filter, filterData = __rest(filter, ["search", "specialties"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
    //Search Conditon Query
    if (filter.search) {
        andCondition.push({
            OR: doctors_constants_1.doctorSearchAbleField.map((field) => {
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
    if (specialties && specialties.length > 0) {
        andCondition.push({
            doctorSpecialties: {
                some: {
                    specialty: {
                        title: {
                            contains: specialties,
                            mode: "insensitive",
                        },
                    },
                },
            },
        });
    }
    const whereCondition = { AND: andCondition };
    const result = yield globalConstant_1.prisma.doctor.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
        include: {
            doctorSpecialties: {
                include: {
                    specialty: true,
                },
            },
        },
    });
    const total = yield globalConstant_1.prisma.doctor.count({
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
//Single Doctor Retrive
const getSingleDoctorFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
        where: {
            id,
            isDeleted: false,
        },
        include: {
            doctorSpecialties: {
                include: {
                    specialty: true,
                },
            },
        },
    });
    return result;
});
//Update Doctor From DB
const updateDoctorFromDB = (id, specialities, data) => __awaiter(void 0, void 0, void 0, function* () {
    //Is exist checking
    const userInfo = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
        where: {
            id,
        },
    });
    //When doctor updated Specialty then create doctorSpeciality Table
    yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const doctorUpdatedInfo = yield tx.doctor.update({
            where: {
                id,
                isDeleted: false,
            },
            data,
            include: {
                doctorSpecialties: true,
            },
        });
        if (specialities && specialities.length > 0) {
            //Delete Specialities from Doctor
            const deletedSpecialists = specialities.filter((aryObj) => aryObj.isDeleted === true);
            for (const spData of deletedSpecialists) {
                yield tx.doctorSpecialties.deleteMany({
                    where: {
                        doctorId: doctorUpdatedInfo.id,
                        specialitiesId: spData.specialistId,
                    },
                });
            }
            //Create Specialities
            //Delete Specialities from Doctor
            const createSpecialists = specialities.filter((aryObj) => aryObj.isDeleted === false);
            for (const spData of createSpecialists) {
                //if Specialities already exist then return
                for (const existSpeciality of doctorUpdatedInfo === null || doctorUpdatedInfo === void 0 ? void 0 : doctorUpdatedInfo.doctorSpecialties) {
                    if ((existSpeciality === null || existSpeciality === void 0 ? void 0 : existSpeciality.specialitiesId) === (spData === null || spData === void 0 ? void 0 : spData.specialistId)) {
                        return;
                    }
                }
                yield tx.doctorSpecialties.create({
                    data: {
                        doctorId: doctorUpdatedInfo.id,
                        specialitiesId: spData.specialistId,
                    },
                });
            }
        }
        return doctorUpdatedInfo;
    }));
    const result = yield globalConstant_1.prisma.doctor.findUnique({
        where: {
            id: userInfo.id,
        },
        include: {
            doctorSpecialties: true,
        },
    });
    return result;
});
//Delete User from DB
const deleteDoctorFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield globalConstant_1.prisma.$transaction((tranjection) => __awaiter(void 0, void 0, void 0, function* () {
        yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
            where: {
                id,
                isDeleted: false,
            },
        });
        //Deleted from admin
        const doctorDeletedData = yield tranjection.doctor.update({
            where: {
                id,
            },
            data: { isDeleted: true },
        });
        //User Table Deleted user based on email
        const userDeletedData = yield tranjection.user.update({
            where: {
                email: doctorDeletedData.email,
            },
            data: {
                status: client_1.UserStatus.DELETED,
            },
        });
        return userDeletedData;
    }));
    return result;
});
exports.doctorServices = {
    createDoctorIntoDB,
    getAllDoctorFromDB,
    getSingleDoctorFromDB,
    deleteDoctorFromDB,
    updateDoctorFromDB,
};
