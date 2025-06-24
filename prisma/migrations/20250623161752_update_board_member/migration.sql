/*
  Warnings:

  - You are about to drop the column `slug` on the `BoardMember` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BoardMember" DROP COLUMN "slug",
ADD COLUMN     "minor" TEXT;
