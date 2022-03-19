## Perform the following query scenarios on the dvdrental sample database.

Example database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. List the country names in the country column of the country table, starting with the 'A' character and ending with the 'a' character.

```sql
SELECT country FROM country WHERE country LIKE 'A%a';
```

2. List the country names in the country column of the country table, which consist of at least 6 characters and end with the 'n' character.

```sql
SELECT country FROM country WHERE country LIKE '_____%n';
```

3. In the title column of the movie table, list the movie names containing at least 4 'T' characters, regardless of upper or lower case letters.

```sql
SELECT title FROM movie WHERE title ILIKE '%t%t%t%t%';
```

4. Sort the data in all the columns in the movie table, starting with the title 'C' character, having a length greater than 90 and a rental_rate of 2.99.

```sql
SELECT * FROM movie WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.

```sql
SELECT country FROM country WHERE country LIKE 'A%a';
```

2. country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.

```sql
SELECT country FROM country WHERE country LIKE '_____%n';
```

3. film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.

```sql
SELECT title FROM film WHERE title ILIKE '%t%t%t%t%';
```

4. film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.

```sql
SELECT * FROM film WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
```
