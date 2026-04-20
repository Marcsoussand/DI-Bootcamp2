--** Exercise 2
--1
-- select * from customer;
-- 2 
-- select first_name ||' '|| last_name as full_name from customer;
--3 
-- select distinct create_date from customer;
-- 4 
-- select * from customer order by first_name DESC;
-- 5 
-- select film_id, title, description, release_year, rental_rate from film order by rental_rate ASC;
-- 6 
-- SELECT address, phone from address where district like 'Texas';
-- 7
-- SELECT * from film where film_id in (15,150);
-- 8 
-- SELECT film_id, title, description, length, rental_rate from film where title like 'Cruel Intentions';

--9
-- SELECT film_id, title, description, length, rental_rate from film where title ilike 'Cr%';

--10
-- SELECT * from film order by rental_rate ASC LIMIT 10;

--11
-- SELECT * from film order by rental_rate ASC LIMIT 10 OFFSET 10;
-- Bonus ?

--12
-- SELECT C.first_name, C.last_name, P.amount, p.payment_date from customer C, payment P where
-- C.customer_id = P.customer_id
-- ORDER BY C.customer_id;

--13
-- select F.film_id, F.title from film F
-- LEFT JOIN inventory I ON F.film_id = I.film_id
-- WHERE I.film_id is NULL;

--14
SELECT C1.city, C2.country from city C1, country C2 
where C1.country_id = C2.country_id
and C1.city like 'Papeete';



