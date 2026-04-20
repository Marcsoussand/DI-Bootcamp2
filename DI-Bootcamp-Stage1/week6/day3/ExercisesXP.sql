--ExercisesXP W6D3
-- Exercise 1
--1.
SELECT name from language;
--2.
select F.title, F.description, L.name from film F, language L
where F.language_id = L.language_id;
--3. Get all languages, even if there are no films in those languages
SELECT F.title, F.description, L.name
FROM language L
LEFT JOIN film F ON F.language_id = L.language_id;
--4. 
CREATE TABLE new_film (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100)
)

INSERT INTO new_film (name) VALUES ('Cruel Intentions'), ('Matrix'), ('Batman');

--5.
CREATE TABLE customer_review (
	review_id 	SERIAL PRIMARY KEY,
	film_id 	INT REFERENCES new_film(id) ON DELETE CASCADE,
	language_id INT REFERENCES language(language_id),
	title 		VARCHAR(100),
	score 		INT CHECK (score BETWEEN 1 and 10),
	review_text TEXT,
	last_update TIMESTAMP
	);

--6.

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update) VALUES
(1, 1, 'Great classic!',    9, 'A timeless film with brilliant performances.', NOW()),
(2, 1, 'Mind-bending sci-fi', 10, 'One of the best sci-fi films ever made.',    NOW());	


--7. Delete a film that has a review — its review is automatically deleted (ON DELETE CASCADE)
-- DELETE FROM new_film WHERE id = 1;
-- Check: SELECT * FROM customer_review; -- the review for film_id=1 is gone	

--Exercise 2
--1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- language_id 1=English, 2=Italian, 3=Japanese, 4=Mandarin, 5=French, 6=German
UPDATE film SET language_id = 2 WHERE film_id = 1; -- Italian
UPDATE film SET language_id = 3 WHERE film_id = 2; -- Japanese
UPDATE film SET language_id = 1 WHERE film_id = 3; -- English

--2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- FK: store_id -> store(store_id), address_id -> address(address_id)
-- When inserting a new customer, the store_id and address_id values must already
-- exist in their respective tables, otherwise the INSERT will be rejected.

--3. Drop customer_review
DROP TABLE customer_review;
-- Easy: customer_review is not referenced by any other table (no other table has a FK pointing to it),
-- so it can be dropped without any extra checking. If another table referenced it, we would need
-- to drop or alter that table first, or use DROP TABLE ... CASCADE.

--4. Find out how many rentals are still outstanding (not yet returned)
-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL;
-- In this dataset all rentals have a return_date, so the count is 0 — no outstanding rentals.

--5. Find the 30 most expensive movies which are outstanding (not yet returned)
-- SELECT DISTINCT F.title, F.rental_rate
-- FROM rental R
-- JOIN inventory I ON R.inventory_id = I.inventory_id
-- JOIN film F      ON I.film_id      = F.film_id
-- WHERE R.return_date IS NULL
-- ORDER BY F.rental_rate DESC
-- LIMIT 30;
-- Again, since all rentals have a return_date in this dataset, this returns 0 rows.

--6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--1. The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title from film where description ILIKE '%sumo wrestler%' and film_id IN( SELECT film_id from film_actor where actor_id = (SELECT actor_id from actor where first_name LIKE 'Penelope' and last_name like 'Monroe')) ;
--'Park Citizen'
--2.The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT title from film where rating = 'R' and length <60 and description ILIKE '%documentary%';
--Crossing Divorce
--3.The 3rd film : A film that his friend Matthew Mahan rented. 
--He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT title from film where film_id =
(SELECT film_id from inventory where inventory_id = (SELECT inventory_id from rental where return_date >= '2005-07-28' and return_date <='2005-08-01'
and customer_id = (SELECT customer_id from customer where first_name like 'Matthew' and last_name like 'Mahan')
AND rental_id IN (SELECT rental_id from payment where amount >4)));
--'Sugar Wonka'

--4. The 4th film : His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT title, description, replacement_cost from film where title ilike '%boat%' or description ilike '%boat%' and 
film_id IN
(SELECT film_id from inventory where inventory_id IN (select inventory_id from rental where customer_id = (
SELECT customer_id from customer where first_name like 'Matthew' and last_name like 'Mahan')));
--Stone Fire