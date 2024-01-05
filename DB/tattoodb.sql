-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tattoosdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tattoosdb` ;

-- -----------------------------------------------------
-- Schema tattoosdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tattoosdb` DEFAULT CHARACTER SET utf8 ;
USE `tattoosdb` ;

-- -----------------------------------------------------
-- Table `tattoo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tattoo` ;

CREATE TABLE IF NOT EXISTS `tattoo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `design_name` VARCHAR(90) NOT NULL,
  `artist` VARCHAR(80) NOT NULL,
  `style` VARCHAR(80) NOT NULL,
  `date_started` DATETIME NULL,
  `date_finished` DATETIME NULL,
  `enabled` TINYINT NULL,
  `image_url` VARCHAR(3000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS inkguy@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'inkguy'@'localhost' IDENTIFIED BY 'inkguy';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'inkguy'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `tattoo`
-- -----------------------------------------------------
START TRANSACTION;
USE `tattoosdb`;
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (1, 'Butterfly', 'Joe Blow', ' Photo Realism', NULL, NULL, 1, 'Butterfly');

COMMIT;

