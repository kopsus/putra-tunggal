-- AlterTable
ALTER TABLE `Order` ADD COLUMN `status` ENUM('Pending', 'Success', 'Failed') NOT NULL DEFAULT 'Pending';
