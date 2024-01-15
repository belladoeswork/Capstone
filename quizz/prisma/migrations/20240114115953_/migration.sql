/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Question` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "hint" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "badge" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Question_title_key" ON "Question"("title");
