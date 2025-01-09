-- AlterTable
ALTER TABLE `order` ADD COLUMN `dokter` VARCHAR(191) NULL,
    ADD COLUMN `time` VARCHAR(191) NULL,
    MODIFY `total` INTEGER NULL,
    MODIFY `redirectUrl` VARCHAR(191) NULL,
    MODIFY `status` ENUM('Pending', 'Success', 'Failed') NULL DEFAULT 'Pending';
