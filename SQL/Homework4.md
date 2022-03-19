## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. List the different values ​​in the replacement_cost column in the 1st movie table.

```sql
SELECT DISTINCT replacement_cost FROM movie;
```

2. How many different data are there in the replacement_cost column in the movie table?

```sql
SELECT COUNT(DISTINCT replacement_cost) FROM movie;
```

3. How many of the movie titles in the movie table start with the character T and at the same time the rating is equal to 'G'?

```sql
SELECT COUNT(*) FROM movie WHERE title LIKE 'T%' AND rating = 'G';
```

4. How many of the country names (country) in the country table consist of 5 characters?

```sql
SELECT COUNT(*) FROM country WHERE country LIKE '_____';
```

5. How many of the city names in the city table end with the character 'R' or r?

```sql
SELECT COUNT(*) FROM city WHERE city LIKE 'R%r';
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.

```sql
SELECT DISTINCT replacement_cost FROM film;
```

2. film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?

```sql
SELECT COUNT(DISTINCT replacement_cost) FROM film;
```

3. film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?

```sql
SELECT COUNT(*) FROM film WHERE title LIKE 'T%' AND rating = 'G';
```

4. country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?

```sql
SELECT COUNT(*) FROM country WHERE country LIKE '_____';
```

5. city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

```sql
SELECT COUNT(*) FROM city WHERE city LIKE 'R%r';
```
