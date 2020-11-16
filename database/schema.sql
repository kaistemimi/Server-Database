DROP DATABASE IF EXISTS car;

CREATE DATABASE car;

USE car;

CREATE TABLE drivers (
  iddriver int NOT NULL AUTO_INCREMENT,
  firstName varchar(45) NOT NULL,
  lastName varchar(45) NOT NULL,
  address varchar(45) NOT NULL,
  phoneNumber INT NOT NULL,
  email varchar (45) NOT NULL,
  password varchar(10) NOT NULL,
  ICN  INT NOT NULL,
  driverLicense INT NOT NULL,
  PRIMARY KEY (iddriver)
);

CREATE TABLE cars(
  idcars int NOT NULL AUTO_INCREMENT,
  model varchar(45) NOT NULL,
  fuelType varchar(45) NOT NULL,
  VKT INT NOT NULL,
    color varchar(45) NOT NULL,
  VIN  INT NOT NULL,
  maxSeats INT NOT NULL,
  PRIMARY KEY (idcars),
  FOREIGN KEY (id_driver) REFERENCES drivers(iddriver)
);