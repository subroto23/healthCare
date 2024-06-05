import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";
import calculatePagination from "../../helper/pageCalculation";
import { Prisma } from "@prisma/client";

//Create Schedule
const createDoctorScheduleIntoDB = async (user: JwtPayload, payload: any) => {
  const userInfo = await prisma.doctor.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });
  const doctorScheduledData = payload.schedule.map((el: string) => ({
    scheduleId: el,
    doctorId: userInfo.id,
  }));

  const result = await prisma.doctorSchedules.createMany({
    data: doctorScheduledData,
  });
  return result;
};

//Get all Schedule
const getAllDoctorScheduleFromDB = async (
  user: JwtPayload,
  filter: any,
  options: any
) => {
  const { startDate, endDate, ...filterData } = filter;
  const { skip, page, limit } = calculatePagination(options);
  const andCondition: Prisma.DoctorSchedulesWhereInput[] = [];
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
    if (
      filterData.isBooked &&
      typeof filterData.isBooked === "string" &&
      filterData.isBooked === "true"
    ) {
      filterData.isBooked = true;
    } else {
      filterData.isBooked = false;
    }
    andCondition.push({
      AND: Object.keys(filterData).map((keys) => ({
        [keys]: {
          equals: (filterData as any)[keys],
        },
      })),
    });
  }
  const whereCondition: any = { AND: andCondition };

  const result = await prisma.doctorSchedules.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      schedule: true,
    },
  });

  const total = await prisma.doctorSchedules.count({
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
};

//Get all Schedule for patient
const getAllDoctorScheduleForPatientFromDB = async (
  user: JwtPayload,
  filter: any,
  options: any,
  id: string
) => {
  const { startDate, endDate, ...filterData } = filter;
  const { skip, page, limit } = calculatePagination(options);
  const andCondition: Prisma.DoctorSchedulesWhereInput[] = [];
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
    if (
      filterData.isBooked &&
      typeof filterData.isBooked === "string" &&
      filterData.isBooked === "true"
    ) {
      filterData.isBooked = true;
    } else {
      filterData.isBooked = false;
    }
    andCondition.push({
      AND: Object.keys(filterData).map((keys) => ({
        [keys]: {
          equals: (filterData as any)[keys],
        },
      })),
    });
  }

  andCondition.push({
    AND: {
      doctorId: id,
      isBooked: false,
    },
  });

  const whereCondition: any = { AND: andCondition };

  const result = await prisma.doctorSchedules.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      schedule: true,
    },
  });

  const total = await prisma.doctorSchedules.count({
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
};

//Delete Schedule
const deleteScheduleFromDB = async (user: JwtPayload, id: string) => {
  const userInfo = await prisma.doctor.findFirstOrThrow({
    where: {
      email: user.email,
    },
  });
  const hasBookedAppairment = await prisma.doctorSchedules.findUnique({
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

  const result = await prisma.doctorSchedules.delete({
    where: {
      doctorId_scheduleId: {
        doctorId: userInfo.id,
        scheduleId: id,
      },
    },
  });
  return result;
};
export const doctorScheduleServices = {
  createDoctorScheduleIntoDB,
  getAllDoctorScheduleFromDB,
  getAllDoctorScheduleForPatientFromDB,
  deleteScheduleFromDB,
};
