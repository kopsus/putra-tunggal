/*
  Warnings:

  - You are about to drop the column `testomini` on the `testimoni` table. All the data in the column will be lost.
  - Added the required column `testimoni` to the `Testimoni` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testimoni` DROP COLUMN `testomini`,
    ADD COLUMN `testimoni` VARCHAR(191) NOT NULL;
