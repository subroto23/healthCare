import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { adminSearchAbleField } from "./admin.constant";
import calculatePagination from "../../helper/pageCalculation";

const prisma = new PrismaClient();
//Create Services
const createAdminIntoDB = async (payload: any) => {
  //Hashing Password
  const hashPassword: string = await bcrypt.hash(payload.password, 12);

  //User Data seperation
  const userData = {
    email: payload.admin.email,
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
const getAllUsersFromDB = async (filter: any, options: any) => {
  const { search, ...filterData } = filter;
  const { skip, limit, sort, sortOrder } = calculatePagination(options);
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
          equals: filterData[keys],
        },
      })),
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };
  const result = await prisma.admin.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy: {
      [sort]: sortOrder,
    },
  });
  return result;
};

//Single User Retrive
const getSingleUsersFromDB = async (params: Record<string, string>) => {};

//Delete User from DB
const deleteUserFromDB = async () => {};

//Update User From DB
const updateUserFromDB = async () => {};

export const adminServices = {
  createAdminIntoDB,
  getAllUsersFromDB,
  getSingleUsersFromDB,
  deleteUserFromDB,
  updateUserFromDB,
};
