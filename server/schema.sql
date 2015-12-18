CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/

);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/




 CREATE TABLE collection (
 title VARCHAR(100),
 artist VARCHAR(100),
 genre VARCHAR(30),
 worth DOUBLE(4,2),
 notes TEXT,
 released DATE,
 added DATE,
 opened ENUM('yes','no'),
 ID int(11) NOT NULL auto_increment,
 PRIMARY KEY (ID));


 // createdAt: "2015-09-01T01:00:42.028Z"
 // objectId: "hwhupXO0iX"
 // roomname: "4chan"
 // text: "trololo"
 // updatedAt: "2015-09-01T01:00:42.028Z"
 // username: "shawndrost"