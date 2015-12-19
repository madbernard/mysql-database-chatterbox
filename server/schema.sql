DROP DATABASE CHAT;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  userID int(11),
  roomID int(11),
  message VARCHAR(255),
  updatedAt TIMESTAMP(6),
  ID int(11) NOT NULL auto_increment,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
CREATE TABLE users (
  username VARCHAR(100),
  ID int(11) NOT NULL auto_increment,
  PRIMARY KEY (ID)
);

CREATE TABLE rooms (
  roomname VARCHAR(100),
  ID int(11) NOT NULL auto_increment,
  PRIMARY KEY (ID)
);
