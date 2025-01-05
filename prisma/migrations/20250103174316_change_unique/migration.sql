/*
  Warnings:

  - You are about to alter the column `updatedAt` on the `Chat` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `dokterId` on the `Room` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_dokterId_fkey`;

-- DropIndex
DROP INDEX `Room_dokterId_fkey` ON `Room`;

-- AlterTable
ALTER TABLE `Chat` MODIFY `updatedAt` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Room` DROP COLUMN `dokterId`,
    ADD COLUMN `serviceId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
