/*
  Warnings:

  - A unique constraint covering the columns `[symbol]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN "symbol" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_symbol_key" ON "Category"("symbol");
