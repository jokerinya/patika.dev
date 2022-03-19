## Perform the following query scenarios on the dvdrental sample database.

Example database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. List the 5 longest (length) movies in the 1. movie table and the movie title (title) ends with the 'n' character.

```sql
SELECT * FROM movie
WHERE title LIKE '%n'
ORDER BY "length" DESC
LIMIT 5;
```

2. List the shortest (length) second(6,7,8,9,10) 5 movies(6,7,8,9,10) in the 2nd movie table and the movie title ends with the 'n' character.

```sql
SELECT * FROM movie
WHERE title LIKE '%n'
ORDER BY "length"
OFFSET 5
LIMIT 5;
```

3. Sort the first 4 data provided that store_id is 1 in the descending order according to the last_name column in the customer table.

```sql
SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.

```sql
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY "length" DESC
LIMIT 5;
```

2. film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.

```sql
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY "length"
OFFSET 5
LIMIT 5;
```

3. customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.

```sql
SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;
```
