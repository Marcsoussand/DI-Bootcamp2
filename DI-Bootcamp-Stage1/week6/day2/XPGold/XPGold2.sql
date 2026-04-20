-- UPDATE students SET birth_date = '1998-11-02' where last_name like 'Benichou';
-- UPDATE students SET last_name = 'Guez' WHERE last_name = 'Grez';

-- DELETE FROM Students where first_name like 'Lea' and last_name like 'Benichou';

-- SELECT Count(1) FROM students;
-- select count(1) from students where birth_date > '2000-01-01';

-- Alter TABLE students ADD column math_grade INT;

-- UPDATE students SET math_grade = 80 where id = 1;
-- UPDATE students SET math_grade = 90 where id IN (2,4);
-- UPDATE students SET math_grade = 40 where id = 6;
-- SELECT count(1) from students where math_grade > 83;
-- SELECT * from students

-- INSERT INTO students VALUES (8, 'Simpson', 'Omer','2003-06-14',70);


-- SELECT first_name, last_name, count(math_grade) from students GROUP BY first_name, last_name;

SELECT SUM(math_grade) from students;