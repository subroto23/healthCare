import { Prisma, UserStatus } from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUploader } from "../../shared/fileUploader";
import { prisma } from "../../constants/globalConstant";
import { IOptions } from "../../interface/globalInterfaces";
import calculatePagination from "../../helper/pageCalculation";
import { patientSearchAbleField } from "./patient.constants";

//Create Services
const createPatientIntoDB = async (file: any, payload: any) => {
  const filePath = file?.path;
  const fileName = payload.patient.email;
  if (file) {
    const userPhoto: any = await fileUploader.sendToCloudenary(
      filePath,
      fileName
    );
    payload.patient.profilePhoto = userPhoto.secure_url;
  }

  //Hashing Password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  //User Data seperation
  const userData = {
    email: payload.patient.email,
    password: hashPassword,
  };

  //Transaction based creation usar and Admin
  const result = await prisma.$transaction(async (tranjection) => {
    //User Creation
    await tranjection.user.create({
      data: userData,
    });
    //Admin Cration
    const cratePatient = await tranjection.patient.create({
      data: payload.patient,
    });
    return cratePatient;
  });
  //Return Tranjection Result
  return result;
};

//All Patient Reterive
const getAllPatientFromDB = async (filter: any, options: IOptions) => {
  const { search, ...filterData } = filter;
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);
  const andCondition: Prisma.AdminWhereInput[] = [];

  //Search Conditon Query
  if (filter.search) {
    andCondition.push({
      OR: patientSearchAbleField.map((field) => {
        return {
          [field]: {
            contains: filter?.search,
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
          equals: (filterData as any)[keys],
        },
      })),
    });
  }

  andCondition.push({
    isDeleted: false,
  });

  const whereCondition: any = { AND: andCondition };
  const result = await prisma.patient.findMany({
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
  const total = await prisma.patient.count({
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

//Single Patient Retrive
const getSinglePatientFromDB = async (id: string) => {
  const result = await prisma.patient.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
    include: {
      patientHealthData: true,
      medicalReport: true,
    },
  });
  return result;
};

//Update Patient From DB
const updatePatientFromDB = async (id: string, payload: any) => {
  const { medicalReport, patientHealthData, ...data } = payload;
  //Is exist checking
  const pataientInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      id,
    },
  });

  await prisma.$transaction(async (tx) => {
    const updated = await tx.patient.update({
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
      await tx.patientHealthData.upsert({
        where: {
          patientId: id,
        },
        update: patientHealthData,
        create: { ...patientHealthData, patientId: pataientInfo.id },
      });
    }
    if (Object.keys(medicalReport).length >= 2) {
      await tx.medicalReport.create({
        data: { ...medicalReport, patientId: pataientInfo.id },
      });
    }
    return updated;
  });

  const result = await prisma.patient.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      patientHealthData: true,
      medicalReport: true,
    },
  });
  return result;
};

//Delete Patient from DB
const deletePatientFromDB = async (id: string) => {
  const userInfo = await prisma.patient.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });

  //Tranjection
  const result = await prisma.$transaction(async (tx) => {
    //Patient HealthDataDeleted
    await tx.patientHealthData.delete({
      where: {
        patientId: id,
      },
    });

    //Patient medical Report
    await tx.medicalReport.deleteMany({
      where: {
        patientId: id,
      },
    });

    //Deleted patient Table
    const PatientDeletedData = await tx.patient.update({
      where: {
        id,
      },
      data: { isDeleted: true },
    });

    //User Table Deleted
    const userDeletedData = await tx.user.update({
      where: {
        email: PatientDeletedData.email,
      },
      data: {
        status: UserStatus.DELETED,
      },
    });
    return userDeletedData;
  });
  return result;
};

export const patientServices = {
  createPatientIntoDB,
  getAllPatientFromDB,
  getSinglePatientFromDB,
  deletePatientFromDB,
  updatePatientFromDB,
};
