-- AlterTable
ALTER TABLE "patient_health_data" ALTER COLUMN "dateOfBirth" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "bloodGroup" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "dietaryPreferences" DROP NOT NULL,
ALTER COLUMN "mentalHealthHistory" DROP NOT NULL,
ALTER COLUMN "immunizationStatus" DROP NOT NULL,
ALTER COLUMN "maritalStatus" DROP NOT NULL;