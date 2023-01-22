/*
  Warnings:

  - You are about to drop the column `gradeId` on the `Behaviour` table. All the data in the column will be lost.
  - You are about to drop the column `class_name` on the `Grade` table. All the data in the column will be lost.
  - Added the required column `name` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Behaviour" DROP CONSTRAINT "Behaviour_gradeId_fkey";

-- AlterTable
ALTER TABLE "Behaviour" DROP COLUMN "gradeId";

-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "class_name",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);
