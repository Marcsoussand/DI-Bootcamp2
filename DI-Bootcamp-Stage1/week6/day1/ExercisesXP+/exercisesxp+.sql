-- create table students (id serial primary key,
-- last_name VARCHAR(20),
-- first_name VARCHAR(20),
-- birth_date DATE);




-- INSERT into students (last_name, first_name, birth_date) VALUES ('Benichou','Marc','1998-11-02'),
-- ('Cohen','Yoan','2010-12-03'),
-- ('Benichou','Lea','1987-07-27'),
-- ('Dux','Amelia','1996-04-07'),
-- ('Grez','David','2003-06-14'),
-- ('Simpson','Omer','1980-10-03');

-- INSERT INTO students (last_name, first_name, birth_date) VALUES 
-- ('Soussand','Marc','1983-09-16');

-- SELECT * from students
-- SELECT first_name, last_name from students

-- SELECT first_name, last_name from students where id = 2;
-- SELECT first_name, last_name from students where last_name like 'Benichou' and first_name like 'Marc';
-- SELECT first_name, last_name from students where last_name like 'Benichou' or first_name like 'Marc';
-- SELECT first_name, last_name from students where first_name ilike '%a%';
-- SELECT first_name, last_name from students where first_name ilike 'a%';
-- SELECT first_name, last_name from students where first_name ilike '%a';
-- SELECT first_name, last_name from students where first_name ilike '%a_';
-- SELECT first_name, last_name from students where id in (1,3);

-- SELECT first_name, last_name from students where birth_date >= '2000-01-01';