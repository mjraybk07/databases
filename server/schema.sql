DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomname` VARCHAR(30) NULL DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  `updatedAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */

-- Creating users
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- Creating rooms
DROP TABLE IF EXISTS `rooms`;
CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- JOIN Tables


DROP TABLE IF EXISTS `users_messages`;
CREATE TABLE `users_messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NULL DEFAULT NULL,
  `message_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


-- DROP TABLE IF EXISTS `messages_rooms`;
-- CREATE TABLE `messages_rooms` (
--   `id` INTEGER NOT NULL AUTO_INCREMENT,
--   `message_id` INTEGER NULL DEFAULT NULL,
--   `room_id` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `users_messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `users_messages` ADD FOREIGN KEY (message_id) REFERENCES `messages` (`id`);
-- ALTER TABLE `messages_rooms` ADD FOREIGN KEY (message_id) REFERENCES `messages` (`id`);
-- ALTER TABLE `messages_rooms` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages_rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`roomname`,`text`,`createdAt`,`updatedAt`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `users_messages` (`id`,`user_id`,`message_id`) VALUES
-- ('','','');
-- INSERT INTO `messages_rooms` (`id`,`message_id`,`room_id`) VALUES
-- ('','','');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

