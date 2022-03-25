DROP DATABASE IF EXISTS C12-Employee_db;
CREATE DATABASE C12_Employee_db;

USE C12_Employee_db;

CREATE TABLE department(
  id INTEGER AUTO_INCREMENT,
  dep_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role(
  id INTEGER  AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INTEGER AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(39) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER NULL,
  PRIMARY KEY (id)
);

