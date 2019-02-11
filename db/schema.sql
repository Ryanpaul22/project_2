DROP DATABASE IF EXISTS liftingbuddies_db;
CREATE DATABASE liftingbuddies_db;

USE liftingbuddies_db;

CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  muscleGroup VARCHAR(45) NOT NULL,
  exerNum INT NOT NULL,
   DATETIME default NOW(),
  PRIMARY KEY (id)
);