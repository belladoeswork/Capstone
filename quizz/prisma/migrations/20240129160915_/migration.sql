/*
  Warnings:

  - You are about to drop the column `badge` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AnswerToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roomId_fkey";

-- DropForeignKey
ALTER TABLE "_AnswerToUser" DROP CONSTRAINT "_AnswerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnswerToUser" DROP CONSTRAINT "_AnswerToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "badge",
DROP COLUMN "roomId";

-- DropTable
DROP TABLE "Answer";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "_AnswerToUser";
