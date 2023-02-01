-- CreateTable
CREATE TABLE "TB_USERS" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "TB_USERS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_USERS_email_key" ON "TB_USERS"("email");
