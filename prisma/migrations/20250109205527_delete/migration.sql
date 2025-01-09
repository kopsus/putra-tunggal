/*
  Warnings:

  - You are about to drop the column `dokter` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `jenisLayanan` on the `order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Order_dokter_key` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `dokter`,
    DROP COLUMN `jenisLayanan`;
