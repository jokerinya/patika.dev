## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. In the movie table, the movie length is shown in the length column. How many movies are longer than the average movie length?

```sql
SELECT COUNT(*) FROM film
WHERE "length" > (
	SELECT AVG("length") FROM film
);
```

2. How many films have the highest rental_rate in the film table?

```sql
SELECT COUNT(*) FROM film
WHERE rental_rate = (
	SELECT MAX(rental_rate) FROM film
);
```

3. In the film table, list the films with the lowest rental_rate and the lowest replacement_cost values.

```sql
SELECT * FROM film
WHERE rental_rate =
(
	SELECT MIN(rental_rate) FROM film
) AND replacement_cost = (
	SELECT MIN(replacement_cost) FROM film
);
```

4. In the payment table, list the customers who make the most purchases.

```sql
SELECT customer.customer_id, customer.first_name, customer.last_name, res.total FROM customer
INNER JOIN
(
	SELECT customer_id, SUM(amount) AS total FROM payment
	GROUP BY customer_id
) AS res ON res.customer_id = customer.customer_id
ORDER BY res.total DESC;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

```sql
SELECT COUNT(*) FROM film
WHERE "length" > (
	SELECT AVG("length") FROM film
);
```

2. film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?

```sql
SELECT COUNT(*) FROM film
WHERE rental_rate = (
	SELECT MAX(rental_rate) FROM film
);
```

3. film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.

```sql
SELECT * FROM film
WHERE rental_rate =
(
	SELECT MIN(rental_rate) FROM film
) AND replacement_cost = (
	SELECT MIN(replacement_cost) FROM film
);
```

4. payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

```sql
SELECT customer.customer_id, customer.first_name, customer.last_name, res.total FROM customer
INNER JOIN
(
	SELECT customer_id, SUM(amount) AS total FROM payment
	GROUP BY customer_id
) AS res ON res.customer_id = customer.customer_id
ORDER BY res.total DESC;
```
