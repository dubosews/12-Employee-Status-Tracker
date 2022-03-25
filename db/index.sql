DROP DATABASE IF EXISTS C12-Employee_db;
CREATE DATABASE C12_Employee_db;

USE C12_Employee_db;

CREATE TABLE department(
  id INTEGER PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INTEGER PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INTEGER
);

CREATE TABLE employee(
  id INTEGER PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(39) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER NULL
);