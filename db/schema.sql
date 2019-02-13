DROP DATABASE IF EXISTS LiftBuddy_db;
CREATE DATABASE LiftBuddy_db;

USE LiftBuddy_db;

CREATE TABLE workouts (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  muscleGroup VARCHAR(45) NOT NULL,
  exerNum INT NOT NULL,
   DATETIME default NOW(),
  PRIMARY KEY (id)
);
-- Insert a set of records.
INSERT INTO exercise (chest, ) VALUES ("");
INSERT INTO exercise (biseps, ) VALUES ("");
INSERT INTO exercise (triceps, ) VALUES ("");
INSERT INTO exercise (abs, ) VALUES ("");
