## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. Sort the data in all columns in the 1st movie table provided that the replacement cost value is greater than 12.99, equal and less than 16.99 (use BETWEEN - AND structure).

```sql
SELECT * FROM movie WHERE replacement_cost BETWEEN 12.99 AND 16.99;
```

2. Sort the data in the first_name and last_name columns in the actor table provided that first_name is 'Penelope' or 'Nick' or 'Ed'. (Use the IN operator.)

```sql
SELECT first_name, last_name FROM actor WHERE first_name IN ('Penelope', 'Nick', 'Ed');
```

3. Sort the data in all columns in the 3rd movie table with rental_rate 0.99, 2.99, 4.99 AND replacement_cost 12.99, 15.99, 28.99. (Use the IN operator.)

```sql
SELECT * FROM movie WHERE (rental_rate IN (0.99, 2.99, 4.99)) AND (replacement_cost IN (12.99, 15.99, 28.99));
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)

```sql
SELECT * FROM film WHERE replacement_cost BETWEEN 12.99 AND 16.99;
```

2. actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)

```sql
SELECT first_name, last_name FROM actor WHERE first_name IN ('Penelope', 'Nick', 'Ed');
```

3. film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)

```sql
SELECT * FROM film WHERE (rental_rate IN (0.99, 2.99, 4.99)) AND (replacement_cost IN (12.99, 15.99, 28.99));
```
