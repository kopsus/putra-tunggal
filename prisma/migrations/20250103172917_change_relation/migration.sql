/*
  Warnings:

  - You are about to alter the column `updatedAt` on the `Chat` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `Room` DROP FOREIGN KEY `Room_dokterId_fkey`;

-- DropIndex
DROP INDEX `Room_dokterId_fkey` ON `Room`;

-- AlterTable
ALTER TABLE `Chat` MODIFY `updatedAt` TIMESTAMP NOT NULL;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_dokterId_fkey` FOREIGN KEY (`dokterId`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
