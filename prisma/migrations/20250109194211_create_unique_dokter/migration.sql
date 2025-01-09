/*
  Warnings:

  - A unique constraint covering the columns `[dokter]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Order_dokter_key` ON `Order`(`dokter`);
