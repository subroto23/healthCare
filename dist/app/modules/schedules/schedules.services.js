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
exports.scheduleServices = void 0;
const date_fns_1 = require("date-fns");
const schedules_constants_1 = require("./schedules.constants");
const globalConstant_1 = require("../../constants/globalConstant");
const pageCalculation_1 = __importDefault(require("../../helper/pageCalculation"));
const createSchedule = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const payloadStartDate = new Date(payload.startDate);
    const payloadEndDate = new Date(payload.endDate);
    const startTimeHours = Number(payload.startTime.split(":")[0]);
    const startTimeMinites = Number(payload.startTime.split(":")[1]);
    //End Time Formate
    const endTimeHours = Number(payload.endTime.split(":")[0]);
    const endTimeMinites = Number(payload.endTime.split(":")[1]);
    //For sending Result on arry based
    const result = [];
    //   Looping Date and Time between Interval
    while (payloadStartDate <= payloadEndDate) {
        //Start Date and Time Formated
        const startDateAndTime = (0, date_fns_1.add)(payloadStartDate, {
            hours: startTimeHours,
            minutes: startTimeMinites,
        });
        //End Date and  Time Formated
        const endDateAndTime = (0, date_fns_1.add)(payloadStartDate, {
            hours: endTimeHours,
            minutes: endTimeMinites,
        });
        while (startDateAndTime < endDateAndTime) {
            const scheduleDateAndTime = {
                startDate: startDateAndTime,
                endDate: (0, date_fns_1.addMinutes)(startDateAndTime, Number(schedules_constants_1.intervalTime)),
            };
            const existingSchedule = yield globalConstant_1.prisma.schedule.findFirst({
                where: {
                    startDate: scheduleDateAndTime.startDate,
                    endDate: scheduleDateAndTime.endDate,
                },
            });
            if (!existingSchedule) {
                const schedule = yield globalConstant_1.prisma.schedule.create({
                    data: scheduleDateAndTime,
                });
                result.push(schedule);
            }
            //Incremet Minitues after Interval
            startDateAndTime.setMinutes(startDateAndTime.getMinutes() + Number(schedules_constants_1.intervalTime));
        }
        new Date(payloadStartDate.setDate(payloadStartDate.getDate() + 1));
    }
    //   await prisma.schedule.deleteMany();
    return result;
});
//Get all Schedule
const getAllSchedule = (user, filter, options) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = filter, filterData = __rest(filter, ["startDate", "endDate"]);
    const { skip, page, limit, sort, sortOrder } = (0, pageCalculation_1.default)(options);
    const andCondition = [];
    //Start Dane and End Date Time between Data
    if (startDate && endDate) {
        andCondition.push({
            AND: [
                {
                    startDate: {
                        gte: new Date(startDate),
                    },
                },
                {
                    endDate: {
                        lte: new Date(endDate),
                    },
                },
            ],
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
    const whereCondition = { AND: andCondition };
    //Doctor schedule Getting
    const doctorInfo = yield globalConstant_1.prisma.doctorSchedules.findMany({
        where: {
            doctor: {
                email: user.email,
            },
        },
    });
    const doctorScheduleIds = doctorInfo.map((id) => id.scheduleId);
    const result = yield globalConstant_1.prisma.schedule.findMany({
        where: Object.assign(Object.assign({}, whereCondition), { id: {
                notIn: doctorScheduleIds,
            } }),
        skip,
        take: limit,
        orderBy: {
            [sort]: sortOrder,
        },
    });
    const total = yield globalConstant_1.prisma.schedule.count({
        where: Object.assign(Object.assign({}, whereCondition), { id: {
                notIn: doctorScheduleIds,
            } }),
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
exports.scheduleServices = {
    createSchedule,
    getAllSchedule,
};
