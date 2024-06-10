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
exports.appoinmentServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const uuid_1 = require("uuid");
const apiError_1 = __importDefault(require("../../errors/apiError"));
const http_status_1 = __importDefault(require("http-status"));
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const client_1 = require("@prisma/client");
const appointment_constant_1 = require("./appointment.constant");
const createAppoinmentInotDB = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
            isDeleted: false,
        },
    });
    //Doctor Id Exists Checking
    const doctorInfo = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
        where: {
            id: payload.doctorId,
            isDeleted: false,
        },
    });
    //Doctor and Schedule Availabele checking
    const isDoctorAndScheduleAvailabele = yield globalConstant_1.prisma.doctorSchedules.findFirstOrThrow({
        where: {
            doctorId: payload.doctorId,
            scheduleId: payload.scheduleId,
            isBooked: false,
        },
    });
    if (!isDoctorAndScheduleAvailabele) {
        throw new apiError_1.default(http_status_1.default.NOT_FOUND, "This schedule is not availabe");
    }
    const videoCallingId = (0, uuid_1.v4)();
    const appointmentSData = {
        patientId: userInfo.id,
        scheduleId: payload.scheduleId,
        doctorId: payload.doctorId,
        videoCallingId,
    };
    //Insert Appoinments and update doctor appointments
    const result = yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const appoinmentData = yield tx.appointment.create({
            data: appointmentSData,
        });
        yield tx.doctorSchedules.update({
            where: {
                doctorId_scheduleId: {
                    doctorId: payload.doctorId,
                    scheduleId: payload.scheduleId,
                },
            },
            data: {
                isBooked: true,
                appointmentId: appoinmentData.id,
            },
        });
        const transactionId = `health-care-${(0, uuid_1.v4)()}`;
        yield tx.payment.create({
            data: {
                appointtmentId: appoinmentData.id,
                amount: doctorInfo.appointmentFee,
                transactionId,
            },
        });
        return appoinmentData;
    }));
    return result;
});
//get My appointments
const getMyAppoinment = (user, filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentStatus, status } = filter, filterData = __rest(filter, ["paymentStatus", "status"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
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
    // Conditionaly Data fatched
    if (user.role === client_1.UserRole.DOCTOR) {
        andCondition.push({
            doctor: {
                email: user.email,
            },
        });
    }
    else if (user.role === client_1.UserRole.PATIENT) {
        andCondition.push({
            patient: {
                email: user.email,
            },
        });
    }
    const whereCondition = andCondition.length > 0 ? { AND: andCondition } : {};
    const result = yield globalConstant_1.prisma.appointment.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
        include: user.role === client_1.UserRole.DOCTOR
            ? {
                schedule: true,
                patient: {
                    include: {
                        medicalReport: true,
                        patientHealthData: true,
                    },
                },
            }
            : {
                schedule: true,
                doctor: true,
                payment: true,
            },
    });
    const total = yield globalConstant_1.prisma.appointment.count({
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
//get All appointments
const getAllAppoinment = (user, filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentStatus, status } = filter, filterData = __rest(filter, ["paymentStatus", "status"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
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
    // Conditionaly Data fatched
    if (user.role === client_1.UserRole.DOCTOR) {
        andCondition.push({
            doctor: {
                email: user.email,
            },
        });
    }
    else if (user.role === client_1.UserRole.PATIENT) {
        andCondition.push({
            patient: {
                email: user.email,
            },
        });
    }
    const whereCondition = andCondition.length > 0 ? { AND: andCondition } : {};
    const result = yield globalConstant_1.prisma.appointment.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
        include: {
            schedule: true,
            doctor: true,
            patient: {
                include: {
                    medicalReport: true,
                    patientHealthData: true,
                },
            },
        },
    });
    const total = yield globalConstant_1.prisma.appointment.count({
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
//Update Appontments
const updateAppointmentStatusFromDB = (user, appointmentId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentInfo = yield globalConstant_1.prisma.appointment.findUniqueOrThrow({
        where: {
            id: appointmentId,
        },
        include: {
            doctor: true,
        },
    });
    //Doctor Appointments Check
    if (user.role === client_1.UserRole.DOCTOR) {
        if (appointmentInfo.doctor.email !== user.email) {
            throw new apiError_1.default(http_status_1.default.BAD_REQUEST, "This Appointment is not yours");
        }
    }
    const result = yield globalConstant_1.prisma.appointment.update({
        where: {
            id: appointmentId,
        },
        data: {
            status: payload.status,
        },
    });
    return result;
});
//Unpaid Status Deleted Autometicly
const unPaidAppointmentDeleted = () => __awaiter(void 0, void 0, void 0, function* () {
    const createdAfterTimeAgo = new Date(Date.now() - appointment_constant_1.appointmentDeletedAfter * 60 * 1000);
    const upPaidAppointmentsInfo = yield globalConstant_1.prisma.appointment.findMany({
        where: {
            paymentStatus: client_1.PaymentStatus.UNPAID,
            createdAt: {
                lt: createdAfterTimeAgo,
            },
        },
    });
    const unPaidIds = upPaidAppointmentsInfo.map((appointment) => appointment.id);
    const result = yield globalConstant_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        //Delete appointment from Payment Table
        yield tx.payment.deleteMany({
            where: {
                appointtmentId: {
                    in: unPaidIds,
                },
            },
        });
        //Delete Appoinments From Appointments Table
        yield tx.appointment.deleteMany({
            where: {
                id: {
                    in: unPaidIds,
                },
            },
        });
        //Delete From doctor Table
        for (const unPaidAppointmentData of upPaidAppointmentsInfo) {
            yield tx.doctorSchedules.deleteMany({
                where: {
                    doctorId: unPaidAppointmentData.doctorId,
                    scheduleId: unPaidAppointmentData.scheduleId,
                },
            });
        }
    }));
    return result;
});
exports.appoinmentServices = {
    createAppoinmentInotDB,
    getMyAppoinment,
    updateAppointmentStatusFromDB,
    getAllAppoinment,
    unPaidAppointmentDeleted,
};
