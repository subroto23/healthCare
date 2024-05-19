import { add, addMinutes } from "date-fns";
import { ISchedule } from "./schedule.interface";
import { intervalTime } from "./schedules.constants";
import { prisma } from "../../constants/globalConstant";

const createSchedule = async (payload: ISchedule) => {
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
    const startDateAndTime = add(payloadStartDate, {
      hours: startTimeHours,
      minutes: startTimeMinites,
    });
    //End Date and  Time Formated
    const endDateAndTime = add(payloadStartDate, {
      hours: endTimeHours,
      minutes: endTimeMinites,
    });
    while (startDateAndTime < endDateAndTime) {
      const scheduleDateAndTime = {
        startDate: startDateAndTime,
        endDate: addMinutes(startDateAndTime, Number(intervalTime)),
      };
      const existingSchedule = await prisma.schedule.findFirst({
        where: {
          startDate: scheduleDateAndTime.startDate,
          endDate: scheduleDateAndTime.endDate,
        },
      });

      if (!existingSchedule) {
        const schedule = await prisma.schedule.create({
          data: scheduleDateAndTime,
        });
        result.push(schedule);
      }
      //Incremet Minitues after Interval
      startDateAndTime.setMinutes(
        startDateAndTime.getMinutes() + Number(intervalTime)
      );
    }
    new Date(payloadStartDate.setDate(payloadStartDate.getDate() + 1));
  }

  //   await prisma.schedule.deleteMany();
  return result;
};

export const scheduleServices = {
  createSchedule,
};
