import bcrypt from "bcrypt";
import { UserRole } from "@prisma/client";
import { prisma } from "../src/app/constants/globalConstant";

export const seedSuperAdmin = async () => {
  try {
    const isExist = await prisma.user.findFirst({
      where: {
        role: UserRole.SUPER_ADMIN,
      },
    });
    if (isExist) {
      console.log("Super Admin is already exists");
      return;
    }

    const hashPassword: string = await bcrypt.hash("12345", 12);
    const result = await prisma.user.create({
      data: {
        email: "superadmin@gmail.com",
        role: UserRole.SUPER_ADMIN,
        password: hashPassword,
        admin: {
          create: {
            name: "Super Admin",
            contactNumber: "01234567890",
          },
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
