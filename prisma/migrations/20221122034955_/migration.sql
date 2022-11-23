/*
  Warnings:

  - You are about to drop the column `projectCategoryId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `ProjectCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_projectCategoryId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "projectCategoryId",
ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "ProjectCategory";
