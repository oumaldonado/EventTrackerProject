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
  `meaning` TEXT NULL,
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
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (1, 'Butterfly', 'Joe Blow', 'In many cultures, these delicate insects represent transformation, freedom, and new life. Think about it—they start as tiny caterpillars, cocoon themselves, and emerge as stunning butterflies. They\'re a symbol of life\'s cycles, hope, and the soul\'s rebirth.', 'Photo Realism', NULL, NULL, 1, 'https://www.glam.com/img/gallery/butterfly-tattoos-the-y2k-ink-trend-coming-back-to-make-mariah-carey-proud/intro-1686244312.webp');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (2, 'Clock', 'Tyson Fury', 'Clock tattoos represent time, a non-physical concept understood in many different ways. A clock tattoo can symbolize life or death, time passage, time pressures, life and existence, mortality, infinity, and even eternal love.', 'Photo Realism', NULL, NULL, 1, 'https://cdn.shopify.com/s/files/1/0565/4039/7655/files/Clock_Tattoo_2.png');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (3, 'Oni Mask', 'Aiko Tanaka', 'Oni mask tattoos can represent different ideas for different people, but they typically serve one of the following purposes: Warding off bad luck or omens. Bringing great fortune in any circumstances. Instilling fear in potential enemies and keeping them at bay.', 'Japanese Traditional', NULL, NULL, 1, 'https://i.pinimg.com/originals/14/91/f3/1491f357da6a7a8a2b4b84079bc79371.jpg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (4, 'Skull and Dagger', 'John Snow ', 'A Dagger in the mouth of a skull symbolises action, being ready to face anything without fear. If instead the dagger is depicted with a snake or stuck in a skull It symbolises death.', 'American Traditional', NULL, NULL, 1, 'https://i.pinimg.com/236x/44/ee/0c/44ee0c2683a23c4492caa116f9505682.jpg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (5, 'Eagle', 'Aegon Targaryen', 'Eagles are symbols for America, representing honor, prowess and intelligence.', 'American Traditional', NULL, NULL, 1, 'https://images.squarespace-cdn.com/content/v1/6052e28a2feadf09b4194e69/bbba03d2-3522-4c78-a88e-925a603ac1af/7F7650EB-0541-4FEA-971E-7CA44B317BED.jpeg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (6, 'Koi Fish', 'Aiko Tanaka', 'A koi fish tattoo typically symbolizes strength, perseverance, and good fortune in Japanese culture. In traditional Japanese folklore, koi fish are known for their ability to swim upstream and overcome obstacles, representing resilience and determination.', 'Japanese Traditional', NULL, NULL, 1, 'https://i.pinimg.com/564x/2d/76/39/2d7639561e9edbee175faad9e8afd8e1.jpg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (7, 'Moaon Aabe', 'John Snow', 'Is a classical Greek phrase meaning “come and take [them],” attributed to King Leonidas of Sparta as a defiant response to the demand that his soldiers lay down their weapons.', 'Calligraphy', NULL, NULL, 1, 'https://www.tattooseo.com/wp-content/uploads/2016/07/Molon-Labe-Tattoos-21.jpg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (8, 'Rose', 'John Snow', 'A rose tattoo meaning love won or lost has been popular throughout the ages as a symbol of the highest level of passion. Beauty is in balance with emotion with this flower, and no other can replicate its beauty and historical significance', 'American Traditional', NULL, NULL, 0, 'https://i.pinimg.com/736x/b9/4e/c4/b94ec4c5d36987335342b3797d057324.jpg');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (9, 'Hourglass ', 'Tyson Fury', 'The hourglass tattoo carries with it very unique meanings depending on the situation and the person, but one underlying theme that seems to be common in them all is the inevitability of time.', 'Photo Realism', NULL, NULL, 1, 'https://i0.wp.com/tattmag.com/wp-content/uploads/2021/09/Realistic-Hourglass-Tattoo-3.jpg?resize=612%2C1024&ssl=1');
INSERT INTO `tattoo` (`id`, `design_name`, `artist`, `meaning`, `style`, `date_started`, `date_finished`, `enabled`, `image_url`) VALUES (10, 'Ladybug', 'Joe Rogan', 'Many cultures believe it is, recognizing the ladybug as a positive symbol of good luck and new beginnings.', 'New School', NULL, NULL, 1, 'https://i.pinimg.com/736x/52/47/24/52472481a3ebd2a9d844d99e6bf6a3e0.jpg');

COMMIT;

