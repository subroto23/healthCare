import { Admin, Prisma, PrismaClient, User, UserStatus } from "@prisma/client";
import bcrypt from "bcrypt";
import { adminSearchAbleField } from "./admin.constant";
import calculatePagination from "../../helper/pageCalculation";
import { IFilterd } from "./admin.interface";
import { IOptions } from "../../interface/globalInterfaces";

const prisma = new PrismaClient();
//Create Services
const createAdminIntoDB = async (payload: any) => {
  //Hashing Password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  //User Data seperation
  const userData = {
    email: payload.admin.email,
    role: payload?.role,
    password: hashPassword,
  };

  //Transaction based creation usar and Admin
  const result = await prisma.$transaction(async (tranjection) => {
    //User Creation
    await tranjection.user.create({
      data: userData,
    });
    //Admin Cration
    const crateAdmin = await tranjection.admin.create({
      data: payload.admin,
    });
    return crateAdmin;
  });
  //Return Tranjection Result
  return result;
};

//All Users Reterive
const getAllUsersFromDB = async (filter: IFilterd, options: IOptions) => {
  const { search, ...filterData } = filter;
  const { skip, page, limit, sort, sortOrder } = calculatePagination(options);
  const andCondition: Prisma.AdminWhereInput[] = [];

  //Search Conditon Query
  if (filter.search) {
    andCondition.push({
      OR: adminSearchAbleField.map((field) => {
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

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };
  const result = await prisma.admin.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });
  const total = await prisma.admin.count({
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
const getSingleUsersFromDB = async (id: string) => {
  const result = await prisma.admin.findUniqueOrThrow({
    where: {
      id,
      isDeleted: false,
    },
  });
  return result;
};

//Update User From DB
const updateUserFromDB = async (id: string, data: Partial<Admin>) => {
  //Is exist checking
  await prisma.admin.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.admin.update({
    where: {
      id,
      isDeleted: false,
    },
    data,
  });
  return result;
};

//Delete User from DB
const deleteUserFromDB = async (id: string) => {
  const result = await prisma.$transaction(async (tranjection) => {
    await prisma.admin.findUniqueOrThrow({
      where: {
        id,
        isDeleted: false,
      },
    });
    //Deleted from admin
    const adminDeletedData = await tranjection.admin.update({
      where: {
        id,
      },
      data: { isDeleted: true },
    });
    //User Table Deleted user based on email
    const userDeletedData = await tranjection.user.update({
      where: {
        email: adminDeletedData.email,
      },
      data: {
        status: UserStatus.DELETED,
      },
    });
    return userDeletedData;
  });
  return result;
};

export const adminServices = {
  createAdminIntoDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  deleteUserFromDB,
  updateUserFromDB,
};
