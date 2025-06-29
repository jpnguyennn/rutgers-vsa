/*
  Warnings:

  - You are about to drop the column `thumbnail` on the `GalleryItem` table. All the data in the column will be lost.
  - You are about to drop the `UpcomingEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "GalleryItem" DROP COLUMN "thumbnail",
ADD COLUMN     "thumbnailPublicURL" TEXT,
ADD COLUMN     "thumbnailURL" TEXT;

-- DropTable
DROP TABLE "UpcomingEvent";
