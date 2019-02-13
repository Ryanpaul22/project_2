DROP DATABASE IF EXISTS login_DB;
CREATE DATABASE login_DB;

USE login_DB;

CREATE TABLE members(
id int(15) NOT NULL AUTO_INCREMENT,
email varchar(50) NOT NULL,
password varchar(28)  NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY email (email)
)
