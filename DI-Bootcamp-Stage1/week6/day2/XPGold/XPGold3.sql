-- CREATE TABLE purchases (
-- 	id SERIAL PRIMARY KEY,
-- 	customer_id INT REFERENCES customers (customer_id),
-- 	item_id INT REFERENCES items (item_id),
-- 	quantity_purchased INT
-- );

-- ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;
-- ALTER TABLE items ADD Column item_id SERIAL PRIMARY KEY;

INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES
(
	(SELECT customer_id FROM customers WHERE firstName = 'Scott'   AND lastName = 'Scott'),
	(SELECT item_id     FROM items      WHERE name = 'Fan'),
	1
),
(
	(SELECT customer_id FROM customers WHERE firstName = 'Melanie' AND lastName = 'Johnson'),
	(SELECT item_id     FROM items      WHERE name = 'Large Desk'),
	10
),
(
	(SELECT customer_id FROM customers WHERE firstName = 'Greg'    AND lastName = 'Jones'),
	(SELECT item_id     FROM items      WHERE name = 'Small Desk'),
	2
);

--Part II

--1.
SELECT * from purchases --not so much useful
--2. 
SELECT p.id, c.firstName, c.lastName, p.item_id, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id;
--3.
SELECT * FROM purchases WHERE customer_id = 5;
--4. 
SELECT * FROM purchases
WHERE item_id IN (
SELECT item_id FROM items WHERE name IN ('Large Desk', 'Small Desk')
);

--5
SELECT c.firstName, c.lastName, i.name
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items     i ON p.item_id     = i.item_id;

--6
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 1);

-- This WORKS because a foreign key column allows NULL by default.
-- NULL means "no reference" and does not violate the FK constraint.
-- To forbid it, you would add NOT NULL to the item_id column definition.