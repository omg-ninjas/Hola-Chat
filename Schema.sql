DROP DATABASE IF EXISTS Hola-Chat;

CREATE DATABASE Hola-Chat;

USE Hola-Chat;

CREATE TABLE users(
<<<<<<< ad04a5c750e836791de57ebe40e99f0a634b5745
 id int NOT NULL AUTO_INCREMENT,
 username varchar(10) NOT NULL,
 PRIMARY KEY (ID)
);

CREATE TABLE room(
 id int NOT NULL AUTO_INCREMENT,
 roomname varchar(15) NOT NULL,
 PRIMARY KEY (ID)
);

CREATE TABLE Messages(
 id int NOT NULL AUTO_INCREMENT,
 message varchar(160) NOT NULL,
 username_id varchar(100) NOT NULL,
 room_id varchar(5) NOT NULL,
 PRIMARY KEY (ID)
);
     
=======
  id int NOT NULL AUTO_INCREMENT,
  username varchar(10) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE room(
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(15) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Messages(
  id int NOT NULL AUTO_INCREMENT,
  message varchar(160) NOT NULL,
  username_id varchar(100) NOT NULL,
  room_id varchar(5) NOT NULL,
  PRIMARY KEY (ID)
);
>>>>>>> added folder user in room
