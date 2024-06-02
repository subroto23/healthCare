import { Doctor, Prisma, UserRole, UserStatus } from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUploader } from "../../shared/fileUploader";
import { prisma } from "../../constants/globalConstant";
import { IOptions } from "../../interface/globalInterfaces";
import calculatePagination from "../../helper/pageCalculation";
import { doctorSearchAbleField } from "./doctors.constants";

//Create Services
const createDoctorIntoDB = async (file: any, payload: any) => {
  const filePath = file?.path;
  const fileName = payload.doctor.email;
  if (file) {
    const userPhoto: any = await fileUploader.sendToCloudenary(
      filePath,
      fileName
    );
    payload.doctor.profilePhoto = userPhoto.secure_url;
  }

  //Hashing Password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  //User Data seperation
  const userData = {
    email: payload.doctor.email,
    password: hashPassword,
    role: UserRole.DOCTOR,
  };

  //Transaction based creation usar and Admin
  const result = await prisma.$transaction(async (tranjection) => {
    //User Creation
    await tranjection.user.create({
      data: userData,
    });
    //Admin Cration
    const crateAdmin = await tranjection.doctor.create({
      data: payload.doctor,
    });
    return crateAdmin;
  });
  //Return Tranjection Result
  return result;
};

//All Doctors Reterive
const getAllDoctorFromDB = async (filter: any, options: IOptions) => {
  const { search, specialties, ...filterData } = filter;
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);
  const andCondition: Prisma.DoctorWhereInput[] = [];
  //Search Conditon Query
  if (filter.search) {
    andCondition.push({
      OR: doctorSearchAbleField.map((field) => {
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

  const whereCondition: any = { AND: andCondition };
  const result = await prisma.doctor.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
    include: {
      doctorSpecialties: true,
    },
  });
  const total = await prisma.doctor.count({
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

//Single Doctor Retrive
const getSingleDoctorFromDB = async (id: string) => {
  const result = await prisma.doctor.findUniqueOrThrow({
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
};

//Update Doctor From DB
const updateDoctorFromDB = async (
  id: string,
  specialities: any,
  data: Partial<Doctor>
) => {
  //Is exist checking
  const userInfo = await prisma.doctor.findUniqueOrThrow({
    where: {
      id,
    },
  });

  //When doctor updated Specialty then create doctorSpeciality Table
  await prisma.$transaction(async (tx) => {
    const doctorUpdatedInfo = await tx.doctor.update({
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
      const deletedSpecialists = specialities.filter(
        (aryObj: any) => aryObj.isDeleted === true
      );

      for (const spData of deletedSpecialists) {
        await tx.doctorSpecialties.deleteMany({
          where: {
            doctorId: doctorUpdatedInfo.id,
            specialitiesId: spData.specialistId,
          },
        });
      }
      //Create Specialities
      //Delete Specialities from Doctor
      const createSpecialists = specialities.filter(
        (aryObj: any) => aryObj.isDeleted === false
      );
      for (const spData of createSpecialists) {
        //if Specialities already exist then return
        for (const existSpeciality of doctorUpdatedInfo?.doctorSpecialties) {
          if (existSpeciality?.specialitiesId === spData?.specialistId) {
            return;
          }
        }
        await tx.doctorSpecialties.create({
          data: {
            doctorId: doctorUpdatedInfo.id,
            specialitiesId: spData.specialistId,
          },
        });
      }
    }

    return doctorUpdatedInfo;
  });
  const result = await prisma.doctor.findUnique({
    where: {
      id: userInfo.id,
    },
    include: {
      doctorSpecialties: true,
    },
  });
  return result;
};

//Delete User from DB
const deleteDoctorFromDB = async (id: string) => {
  const result = await prisma.$transaction(async (tranjection) => {
    await prisma.doctor.findUniqueOrThrow({
      where: {
        id,
        isDeleted: false,
      },
    });
    //Deleted from admin
    const doctorDeletedData = await tranjection.doctor.update({
      where: {
        id,
      },
      data: { isDeleted: true },
    });
    //User Table Deleted user based on email
    const userDeletedData = await tranjection.user.update({
      where: {
        email: doctorDeletedData.email,
      },
      data: {
        status: UserStatus.DELETED,
      },
    });
    return userDeletedData;
  });
  return result;
};

export const doctorServices = {
  createDoctorIntoDB,
  getAllDoctorFromDB,
  getSingleDoctorFromDB,
  deleteDoctorFromDB,
  updateDoctorFromDB,
};
