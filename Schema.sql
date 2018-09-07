DROP DATABASE IF EXISTS Holachat;

CREATE DATABASE Holachat;

USE Holachat;

CREATE TABLE users(
 id int NOT NULL AUTO_INCREMENT,
 username varchar(10) NOT NULL,
 PRIMARY KEY (ID)
);

CREATE TABLE room(
 id int NOT NULL AUTO_INCREMENT,
 roomname varchar(15) NOT NULL,
 PRIMARY KEY (ID)
);

CREATE TABLE messages(
 messages_id INT NOT NULL AUTO_INCREMENT,
 message varchar(160) NOT NULL,
 username_id INT(100) NOT NULL,
 room_id INT(5) NOT NULL,
 PRIMARY KEY (messages_id),
 INDEX (username_id),
 INDEX (room_id),
 FOREIGN KEY (username_id) REFERENCES users(id),
 FOREIGN KEY (room_id) REFERENCES room(id)
)ENGINE=INNODB
