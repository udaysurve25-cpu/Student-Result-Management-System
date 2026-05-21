CREATE DATABASE student_result_management;

USE student_result_management;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    password VARCHAR(255),
    role VARCHAR(20)
);

CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    roll_no VARCHAR(20),
    class_name VARCHAR(20),
    section_name VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE subjects(
    id INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(100),
    class_name VARCHAR(20)
);

CREATE TABLE results(
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    total INT,
    percentage FLOAT,
    grade VARCHAR(10),
    status VARCHAR(20),
    sgpa FLOAT
);

INSERT INTO users(username,password,role)
VALUES('admin','admin123','admin');