/*
  Warnings:

  - You are about to drop the column `datetime` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `end_time` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `start_time` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `guardian_name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Training` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DOB` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guardianName` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Behaviour" DROP COLUMN "datetime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Routine" DROP COLUMN "end_time",
DROP COLUMN "start_time",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "guardian_name",
DROP COLUMN "photo_url",
ADD COLUMN     "DOB" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "guardianName" TEXT NOT NULL,
ADD COLUMN     "photoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "photo_url",
ADD COLUMN     "photoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "image_url",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
