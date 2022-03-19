## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. Write the LEFT JOIN query where we can see the city and country names in the city table and the country table together.

```sql
SELECT city.city, country.country FROM city
LEFT JOIN country ON city.country_id = country.country_id
ORDER BY country.country;
```

2. Write the RIGHT JOIN query where we can see the customer table and the payment_id in the payment table and the first_name and last_name names in the customer table together.

```sql
SELECT customer.first_name, customer.last_name, payment.payment_id FROM customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id;
```

3. Write the FULL JOIN query where we can see the customer table and the rental_id in the rental table and the first_name and last_name names in the customer table together.

```sql
SELECT customer.first_name, customer.last_name, rental.rental_id FROM customer
FULL JOIN rental ON rental.customer_id = customer.customer_id;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.

```sql
SELECT city.city, country.country FROM city
LEFT JOIN country ON city.country_id = country.country_id
ORDER BY country.country;
```

2. customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.

```sql
SELECT customer.first_name, customer.last_name, payment.payment_id FROM customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id;
```

3. customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

```sql
SELECT customer.first_name, customer.last_name, rental.rental_id FROM customer
FULL JOIN rental ON rental.customer_id = customer.customer_id;
```
