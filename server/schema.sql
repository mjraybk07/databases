DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

-- -- Globals

/* Create other tables and define schemas for them here! */

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `userid` INTEGER NOT NULL,
  `text` VARCHAR(200) NOT NULL,
  `roomname` VARCHAR(20),
  PRIMARY KEY (`id`)
);


CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.

