/*
  Warnings:

  - Added the required column `species` to the `TB_POKEMONS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TB_POKEMONS" ADD COLUMN     "species" TEXT NOT NULL;
