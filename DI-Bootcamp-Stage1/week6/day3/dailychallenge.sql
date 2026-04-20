-- =====================
-- PART I : One to One
-- =====================

CREATE TABLE customer (
id         SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name  VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
id          SERIAL PRIMARY KEY,
isLoggedIn  BOOLEAN DEFAULT FALSE,
customer_id INT UNIQUE REFERENCES customer(id)
-- UNIQUE enforces the One-to-One: each customer can have only one profile
);

INSERT INTO customer (first_name, last_name) VALUES
('John',   'Doe'),
('Jerome', 'Lalu'),
('Lea',    'Rive');

-- Subquery syntax: each value in a row can be a scalar subquery
INSERT INTO customer_profile (customer_id, isLoggedIn) VALUES
( (SELECT id FROM customer WHERE first_name = 'John'),   TRUE  ),
( (SELECT id FROM customer WHERE first_name = 'Jerome'), FALSE );

-- 1. First name of LoggedIn customers
SELECT c.first_name
FROM customer c
INNER JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 2. All customers first_name and isLoggedIn, even those without a profile
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- 3. Number of customers that are NOT logged in
-- (includes customers with no profile, since they are implicitly not logged in)
SELECT COUNT(*) AS not_logged_in
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;


-- =====================
-- PART II : Many to Many
-- =====================

CREATE TABLE book (
book_id SERIAL PRIMARY KEY,
title   VARCHAR(200) NOT NULL,
author  VARCHAR(200) NOT NULL
);

CREATE TABLE student (
student_id SERIAL PRIMARY KEY,
name       VARCHAR(100) NOT NULL UNIQUE,
age        INT CHECK (age <= 15)
);

-- Junction table
CREATE TABLE library (
book_fk_id    INT REFERENCES book(book_id)       ON DELETE CASCADE ON UPDATE CASCADE,
student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO book (title, author) VALUES
('Alice In Wonderland',    'Lewis Carroll'),
('Harry Potter',           'J.K Rowling'),
('To kill a mockingbird',  'Harper Lee');

INSERT INTO student (name, age) VALUES
('John',    12),
('Lera',    11),
('Patrick', 10),
('Bob',     14);

-- 4 records using subqueries
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date) VALUES
(
(SELECT book_id    FROM book    WHERE title = 'Alice In Wonderland'),
(SELECT student_id FROM student WHERE name  = 'John'),
'2022-02-15'
),
(
(SELECT book_id    FROM book    WHERE title = 'To kill a mockingbird'),
(SELECT student_id FROM student WHERE name  = 'Bob'),
'2021-03-03'
),
(
(SELECT book_id    FROM book    WHERE title = 'Alice In Wonderland'),
(SELECT student_id FROM student WHERE name  = 'Lera'),
'2021-05-23'
),
(
(SELECT book_id    FROM book    WHERE title = 'Harry Potter'),
(SELECT student_id FROM student WHERE name  = 'Bob'),
'2021-08-12'
);

-- 1. All columns from the junction table
SELECT * FROM library;

-- 2. Student name and title of borrowed books
SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book    b ON l.book_fk_id    = b.book_id;

-- 3. Average age of students who borrowed Alice In Wonderland
SELECT AVG(s.age) AS avg_age
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book    b ON l.book_fk_id    = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 4. Delete a student — their rows in library are automatically deleted (ON DELETE CASCADE)
-- DELETE FROM student WHERE name = 'Bob';
-- Check: SELECT * FROM library; -- Bob's 2 borrows are gone automatically
