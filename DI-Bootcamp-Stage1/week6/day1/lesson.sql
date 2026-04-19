-- sql commands

-- CREATE TABLE dummy_table (
-- 	name VARCHAR(20),
-- 	address TEXT,
-- 	age INT
-- );

-- CREATE TABLE students (
-- 	id SERIAL, -- auto-implement
-- 	name VARCHAR(100),
-- 	age INTEGER,
-- 	city VARCHAR(100),
-- 	enrolled BOOLEAN DEFAULT TRUE
-- );

-- INSERT INTO DUMMY_TABLE VALUES('XYZ', 'location-A',25)
-- INSERT INTO dummy_table VALUES ('ABC','location-B',35)

-- INSERT INTO dummy_table VALUES('DEF','location-C',40),
-- ('GHI','location-D',54);

-- SELECT name from dummy_table;

-- SELECT age, address FROM dummy_table WHERE age >35

-- SELECT * FROM dummy_table WHERE AGE BETWEEN 25 and 40;
SELECT * FROM dummy_table where name in ('XYZ', 'ABC')