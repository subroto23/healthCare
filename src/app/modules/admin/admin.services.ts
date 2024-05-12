import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

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

//
export const adminServices = {
  createAdminIntoDB,
};
