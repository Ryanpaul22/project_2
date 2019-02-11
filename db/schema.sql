DROP DATABASE IF EXISTS lifingbuddies_db;

CREATE DATABASE liftingbuddies_db;

USE liftingbuddies_db;

CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  muscleGroup VARCHAR(45) NULL,
  exerNum INT NOT NULL,
  exercise VARCHAR(45) NULL,
  setNum INT NOT NULL,
  repNum int not null,
  PRIMARY KEY (id)
);

-- just for push
  