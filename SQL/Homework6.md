## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. What is the average of the values in the rental_rate column in the movie table?

```sql
SELECT AVG(rental_rate) FROM movie;
```

2. How many of the movies in the movie table start with the character 'C'?

```sql
SELECT COUNT(*) FROM movie
WHERE title LIKE 'C%';
```

3. Among the movies in the movie table, how many minutes is the longest (length) movie with a rental_rate equal to 0.99?

```sql
SELECT MAX("length") FROM movie
WHERE rental_rate = 0.99;
-- or
-- SELECT "length" FROM movie WHERE rental_rate = 0.99 ORDER BY "length" DESC LIMIT 1;
```

4. How many different replacement_cost values are there for the movies longer than 150 minutes in the movie table?

```sql
SELECT COUNT(DISTINCT replacement_cost) FROM movie
WHERE "length" > 150;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?

```sql
SELECT AVG(rental_rate) FROM film;
```

2. film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?

```sql
SELECT COUNT(*) FROM film
WHERE title LIKE 'C%';
```

3. film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?

```sql
SELECT MAX("length") FROM film
WHERE rental_rate = 0.99;
-- or
-- SELECT "length" FROM film WHERE rental_rate = 0.99 ORDER BY "length" DESC LIMIT 1;
```

4. film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?

```sql
SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE "length" > 150;
```
