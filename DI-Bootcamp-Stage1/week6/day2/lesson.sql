-- CREATE TABLE departments (
-- 	dept_id SERIAL PRIMARY KEY,
-- 	dept_name VARCHAR(100) NOT NULL
-- );

-- INSERT INTO departments (dept_name)
-- 	VALUES('Engineering'),('Marketing'),('HR'),('Finance')

-- 	SELECT dept_id as ID, dept_name AS NAME FROM departments

-- CREATE TABLE employees (
--  	emp_id 		SERIAL PRIMARY KEY,
--  	name 		VARCHAR(100) NOT NULL,
--  	age 		INTEGER,
--  	salary		NUMERIC(10,2),
-- 	city		VARCHAR(100),
-- 	dept_id		INTEGER REFERENCES departments(dept_id)  --FOREIGN KEY
-- );

SELECT * from employees;