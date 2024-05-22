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
exports.doctorScheduleServices = void 0;
const globalConstant_1 = require("../../constants/globalConstant");
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
//Create Schedule
const createDoctorScheduleIntoDB = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.doctor.findUniqueOrThrow({
        where: {
            email: user.email,
        },
    });
    const doctorScheduledData = payload.schedule.map((el) => ({
        scheduleId: el,
        doctorId: userInfo.id,
    }));
    const result = yield globalConstant_1.prisma.doctorSchedules.createMany({
        data: doctorScheduledData,
    });
    return result;
});
//Get all Schedule
const getAllDoctorScheduleFromDB = (user, filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = filter, filterData = __rest(filter, ["startDate", "endDate"]);
    const { skip, page, limit } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
    //Start Dane and End Date Time between Data
    if (startDate && endDate) {
        andCondition.push({
            AND: [
                {
                    schedule: {
                        startDate: {
                            gte: new Date(startDate),
                        },
                    },
                },
                {
                    schedule: {
                        endDate: {
                            lte: new Date(endDate),
                        },
                    },
                },
            ],
        });
    }
    //Filter Conditons Query
    if (Object.keys(filterData).length > 0) {
        if (filterData.isBooked &&
            typeof filterData.isBooked === "string" &&
            filterData.isBooked === "true") {
            filterData.isBooked = true;
        }
        else {
            filterData.isBooked = false;
        }
        andCondition.push({
            AND: Object.keys(filterData).map((keys) => ({
                [keys]: {
                    equals: filterData[keys],
                },
            })),
        });
    }
    const whereCondition = { AND: andCondition };
    const result = yield globalConstant_1.prisma.doctorSchedules.findMany({
        where: whereCondition,
        skip,
        take: limit,
        include: {
            schedule: true,
        },
    });
    const total = yield globalConstant_1.prisma.doctorSchedules.count({
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
//Delete Schedule
const deleteScheduleFromDB = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    const userInfo = yield globalConstant_1.prisma.doctor.findFirstOrThrow({
        where: {
            email: user.email,
        },
    });
    const hasBookedAppairment = yield globalConstant_1.prisma.doctorSchedules.findUnique({
        where: {
            doctorId_scheduleId: {
                doctorId: userInfo.id,
                scheduleId: id,
            },
            isBooked: true,
        },
    });
    if (hasBookedAppairment) {
        throw new Error("OPPS!! The schedule has already been appraved.");
    }
    const result = yield globalConstant_1.prisma.doctorSchedules.delete({
        where: {
            doctorId_scheduleId: {
                doctorId: userInfo.id,
                scheduleId: id,
            },
        },
    });
    return result;
});
exports.doctorScheduleServices = {
    createDoctorScheduleIntoDB,
    getAllDoctorScheduleFromDB,
    deleteScheduleFromDB,
};
