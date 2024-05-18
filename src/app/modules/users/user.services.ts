import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../../constants/globalConstant";
import { UserRole, UserStatus } from "@prisma/client";
import { fileUploader } from "../../shared/fileUploader";

const myProfileFromDB = async (user: JwtPayload) => {
  const userInfo = await prisma.user.findUniqueOrThrow({
    where: {
      email: user.email,
      status: UserStatus.ACTIVE,
    },
    select: {
      id: true,
      email: true,
      role: true,
      needPasswordChange: true,
    },
  });
  //Confiton For User Based On Queary
  let profileInfo;
  if (user && user.role === UserRole.SUPER_ADMIN) {
    profileInfo = await prisma.admin.findUniqueOrThrow({
      where: {
        email: userInfo.email,
      },
    });
  } else if (user && user.role === UserRole.ADMIN) {
    profileInfo = await prisma.admin.findUniqueOrThrow({
      where: {
        email: userInfo.email,
      },
    });
  } else if (user && user.role === UserRole.PATIENT) {
    profileInfo = await prisma.patient.findUniqueOrThrow({
      where: {
        email: userInfo.email,
      },
    });
  } else if (user && user.role === UserRole.DOCTOR) {
    profileInfo = await prisma.doctor.findUniqueOrThrow({
      where: {
        email: userInfo.email,
      },
    });
  }
  return { ...userInfo, ...profileInfo };
};

//Update User Profile
const updateProfileFromDB = async (
  user: JwtPayload,
  file: any,
  payload: any
) => {
  const userInfo = await prisma.user.findUniqueOrThrow({
    where: {
      email: user.email,
      status: UserStatus.ACTIVE,
    },
  });
  //File Upload Data
  const filePath = file?.path;
  const fileName = userInfo.email;
  if (file) {
    const userPhoto: any = await fileUploader.sendToCloudenary(
      filePath,
      fileName
    );
    payload.profilePhoto = userPhoto.secure_url;
  }

  //Confiton For User Based On Queary
  let profileUpdatedInfo;
  if (user && user.role === UserRole.SUPER_ADMIN) {
    profileUpdatedInfo = await prisma.admin.update({
      where: {
        email: userInfo.email,
      },
      data: payload,
    });
  } else if (user && user.role === UserRole.ADMIN) {
    profileUpdatedInfo = await prisma.admin.update({
      where: {
        email: userInfo.email,
      },
      data: payload,
    });
  } else if (user && user.role === UserRole.PATIENT) {
    profileUpdatedInfo = await prisma.patient.update({
      where: {
        email: userInfo.email,
      },
      data: payload,
    });
  } else if (user && user.role === UserRole.DOCTOR) {
    profileUpdatedInfo = await prisma.doctor.update({
      where: {
        email: userInfo.email,
      },
      data: payload,
    });
  }
  return { ...profileUpdatedInfo };
};

export const userServices = {
  myProfileFromDB,
  updateProfileFromDB,
};
