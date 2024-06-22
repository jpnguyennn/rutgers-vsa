-- CreateTable
CREATE TABLE "UpcomingEvent" (
    "id" SERIAL NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_date" TIMESTAMP(3),
    "location" TEXT,
    "event_desc" TEXT,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "UpcomingEvent_pkey" PRIMARY KEY ("id")
);
