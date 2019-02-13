DROP DATABASE IF EXISTS LiftBuddy_db;
CREATE DATABASE LiftBuddy_db;
DROP DATABASE IF EXISTS lifingbuddies_db;

CREATE DATABASE liftingbuddies_db;

USE LiftBuddy_db;

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
-- Insert a set of records.
INSERT INTO exercise (chest, ) VALUES ("");
INSERT INTO exercise (biseps, ) VALUES ("");
INSERT INTO exercise (triceps, ) VALUES ("");
INSERT INTO exercise (abs, ) VALUES ("");

-- just for push
  
