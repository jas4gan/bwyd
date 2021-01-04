require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "bwyd",
  multipleStatements: true
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP DATABASE if exists `bwyd`; CREATE DATABASE bwyd; USE bwyd;DROP TABLE if exists `users`; CREATE TABLE `users`(`userid` INT NOT NULL AUTO_INCREMENT,	`name` varchar(50),`email` varchar(50) NOT NULL,`add` varchar(50) NOT NULL,	`chef` BOOLEAN NOT NULL,	PRIMARY KEY (`userid`));CREATE TABLE `orders`(`orderid` INT NOT NULL AUTO_INCREMENT,	`userid` INT,	`trade` BOOLEAN NOT NULL,	`delivery` BOOLEAN NOT NULL,	`date` DATETIME NOT NULL,	`id` INT,	`qty` INT,	PRIMARY KEY (`orderid`));CREATE TABLE `bwyd`(`id` INT NOT NULL AUTO_INCREMENT, `price` FLOAT,	`available` BOOLEAN NOT NULL,	`userid` INT NOT NULL,	`free_bwyd` INT,	PRIMARY KEY (`id`));ALTER TABLE `orders` ADD CONSTRAINT `orders_fk0` FOREIGN KEY (`userid`) REFERENCES `users`(`userid`);ALTER TABLE `orders` ADD CONSTRAINT `orders_fk1` FOREIGN KEY (`id`) REFERENCES `bwyd`(`id`);ALTER TABLE `bwyd` ADD CONSTRAINT `bwyd_fk0` FOREIGN KEY (`userid`) REFERENCES `users`(`userid`);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tables creation for `bwyd` database were successful!");

    console.log("Closing...");
  });

  con.end();
});


