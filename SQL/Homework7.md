## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. Group the movies in the movie table according to their rating values.

```sql
SELECT rating, COUNT(*) FROM film
GROUP BY rating;
```

2. When we group the films in the film table according to the replacement_cost column, list the replacement_cost value with more than 50 films and the corresponding number of films.

```sql
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;
```

3. What are the customer numbers corresponding to the store_id values in the customer table?

```sql
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;
```

4. After grouping the city data in the city table according to the country_id column, share the country_id information with the highest number of cities and the number of cities.

```sql
SELECT country_id, COUNT(city) FROM city
GROUP BY country_id
ORDER BY COUNT(city) DESC
LIMIT 1;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.

```sql
SELECT rating, COUNT(*) FROM film
GROUP BY rating;
```

2. film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.

```sql
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;
```

3. customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?

```sql
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;
```

4. city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

```sql
SELECT country_id, COUNT(city) FROM city
GROUP BY country_id
ORDER BY COUNT(city) DESC
LIMIT 1;
```
