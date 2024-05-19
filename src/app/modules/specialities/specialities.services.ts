import { ISpecialites } from "./specialities.interface";
import { prisma } from "../../constants/globalConstant";
import { fileUploader } from "../../shared/fileUploader";

const createspecialitiesIntoDB = async (file: any, payload: ISpecialites) => {
  //File Upload Data
  const filePath = file?.path;
  const fileName = file?.filename;
  if (file) {
    const userPhoto: any = await fileUploader.sendToCloudenary(
      filePath,
      fileName
    );
    payload.icon = userPhoto.secure_url;
  }
  const result = await prisma.specialties.create({
    data: payload,
  });
  return result;
};

//Get Specialities
const getAllSpecialitiesFromDB = async () => {
  const result = await prisma.specialties.findMany();
  return result;
};

//Delete Specialities
const deleteSpecialities = async (id: string) => {
  //Checking existence of speciality
  await prisma.specialties.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const result = await prisma.specialties.delete({
    where: {
      id,
    },
  });
  return result;
};

export const specialitiesServices = {
  createspecialitiesIntoDB,
  getAllSpecialitiesFromDB,
  deleteSpecialities,
};
