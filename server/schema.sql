
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message VARCHAR(255) NOT NULL,
  roomname VARCHAR(30),
  userID int NOT NULL,
  ID int NOT NULL auto_increment,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
CREATE TABLE users (
  username VARCHAR(100),
  ID int NOT NULL auto_increment,
  PRIMARY KEY (ID)
);
