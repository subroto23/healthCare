import { Doctor, Patient, Prisma, UserStatus } from "@prisma/client";
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

//All Users Reterive
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

//Single User Retrive
const getSinglePatientFromDB = async (id: string) => {
  const result = await prisma.patient.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });
  return result;
};

//Update User From DB
const updatePatientFromDB = async (id: string, data: Partial<Patient>) => {
  //Is exist checking
  await prisma.admin.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.patient.update({
    where: {
      id,
      isDeleted: false,
    },
    data,
  });
  return result;
};

//Delete User from DB
const deletePatientFromDB = async (id: string) => {
  const result = await prisma.$transaction(async (tranjection) => {
    await prisma.patient.findUniqueOrThrow({
      where: {
        id,
        isDeleted: false,
      },
    });
    //Deleted from admin
    const PatientDeletedData = await tranjection.patient.update({
      where: {
        id,
      },
      data: { isDeleted: true },
    });
    //User Table Deleted user based on email
    const userDeletedData = await tranjection.user.update({
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
