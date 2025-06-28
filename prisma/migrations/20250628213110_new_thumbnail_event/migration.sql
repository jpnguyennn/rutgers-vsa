/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `UpcomingEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UpcomingEvent" DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnailPublicURL" TEXT,
ADD COLUMN     "thumbnailURL" TEXT;
