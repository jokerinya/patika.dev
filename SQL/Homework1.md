## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. Sort the data in the title and description columns in the first movie table.

```sql
SELECT title, description FROM movie;
```

2. Sort the data in all columns in the movie table with the movie length greater than 60 AND less than 75.

```sql
SELECT * FROM movie WHERE movie."length" > 60 AND movie."length" < 75;
-- or
-- SELECT * FROM movie WHERE movie."length" BETWEEN 61 AND 74;
```

3. Sort the data in all columns in the movie table with rental_rate 0.99 AND replacement_cost 12.99 OR 28.99.

```sql
SELECT * FROM movie WHERE rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
```

4. What is the value in the last_name column of the customer whose value is 'Mary' in the first_name column of the customer table?

```sql
SELECT last_name FROM customer WHERE first_name = 'Mary';
```

5. In the movie table, list the data whose length is NOT greater than 50, but whose rental_rate is NOT 2.99 or 4.99.

```sql
SELECT * FROM movie WHERE NOT "length" > 50 AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.

```sql
SELECT title, description FROM film;
```

2. film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.

```sql
SELECT * FROM film WHERE film."length" > 60 AND film."length" < 75;
-- or
-- SELECT * FROM film WHERE film."length" BETWEEN 61 AND 74;
```

3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.

```sql
SELECT * FROM film WHERE rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
```

4. customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?

```sql
SELECT last_name FROM customer WHERE first_name =  'Mary';
```

5. film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.

```sql
SELECT *  FROM film WHERE NOT "length" > 50 AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```
