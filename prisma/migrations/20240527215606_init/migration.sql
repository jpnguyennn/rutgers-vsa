-- CreateTable
CREATE TABLE "BoardMember" (
    "id" SERIAL NOT NULL,
    "positional_id" INTEGER NOT NULL,
    "full_name" TEXT,
    "position" TEXT,
    "photo_url" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "vsa_email" TEXT,
    "year" INTEGER NOT NULL,
    "major" TEXT,
    "why_vsa" TEXT,
    "slug" TEXT,

    CONSTRAINT "BoardMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Intern" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT,
    "photo_url" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "year" INTEGER NOT NULL,
    "major" TEXT,

    CONSTRAINT "Intern_pkey" PRIMARY KEY ("id")
);
