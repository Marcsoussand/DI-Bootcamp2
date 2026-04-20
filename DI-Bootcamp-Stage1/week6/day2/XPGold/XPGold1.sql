--1 DVD Rental
-- SELECT rating, count(title) as number_films from film group by rating;

--2 
-- SELECT * from film where rating IN ('G','PG-13')
-- --2.1
-- and length <120
-- and rental_rate < 3
-- ORDER BY title ASC;

--3
-- UPDATE customer set first_name = 'Marc' where customer_id = 1;

update address set address = 'Haatzmaut 65/48' where address_id = 5;