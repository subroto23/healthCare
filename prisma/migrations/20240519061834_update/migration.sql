-- AlterTable
ALTER TABLE "patient_health_data" ALTER COLUMN "hasAllergies" DROP NOT NULL,
ALTER COLUMN "hasDiabetes" DROP NOT NULL,
ALTER COLUMN "smokingStatus" DROP NOT NULL,
ALTER COLUMN "pregnancyStatus" DROP NOT NULL,
ALTER COLUMN "hasPastSurgeries" DROP NOT NULL,
ALTER COLUMN "recentAnxiety" DROP NOT NULL,
ALTER COLUMN "recentDepression" DROP NOT NULL;
