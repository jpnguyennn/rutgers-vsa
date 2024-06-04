/*
  Warnings:

  - Made the column `full_name` on table `BoardMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `position` on table `BoardMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `photo_url` on table `BoardMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vsa_email` on table `BoardMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `BoardMember` required. This step will fail if there are existing NULL values in that column.
  - Made the column `full_name` on table `Intern` required. This step will fail if there are existing NULL values in that column.
  - Made the column `photo_url` on table `Intern` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BoardMember" ALTER COLUMN "full_name" SET NOT NULL,
ALTER COLUMN "position" SET NOT NULL,
ALTER COLUMN "photo_url" SET NOT NULL,
ALTER COLUMN "vsa_email" SET NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "Intern" ALTER COLUMN "full_name" SET NOT NULL,
ALTER COLUMN "photo_url" SET NOT NULL,
ALTER COLUMN "year" DROP NOT NULL;

-- CreateTable
CREATE TABLE "GalleryItem" (
    "id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_date" TIMESTAMP(3),
    "event_desc" TEXT,
    "thumbnail" TEXT NOT NULL,
    "semester" TEXT NOT NULL,

    CONSTRAINT "GalleryItem_pkey" PRIMARY KEY ("id")
);
