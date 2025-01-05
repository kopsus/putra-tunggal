-- AlterTable
ALTER TABLE `Order` ADD COLUMN `layanan` ENUM('Online', 'Offline') NOT NULL DEFAULT 'Online';
