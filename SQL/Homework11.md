## Perform the following query scenarios on the dvdrental sample database.

Sample database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. Let's sort all the data for the first_name columns in the actor and customer tables.

```sql
(SELECT first_name FROM actor)
UNION
(SELECT first_name FROM customer);
```

2. Let's sort the intersecting data for the first_name columns in the actor and customer tables.

```sql
(SELECT first_name FROM actor)
INTERSECT
(SELECT first_name FROM customer);
```

3. For the first_name columns in the actor and customer tables, let's sort the data in the first table but not in the second table.

```sql
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer);
```

4. Let's also do the first 3 queries for repeating data.

```sql
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer);
```

4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

```sql
(SELECT first_name FROM actor)
UNION ALL
(SELECT first_name FROM customer);
```

```sql
(SELECT first_name FROM actor)
INTERSECT ALL
(SELECT first_name FROM customer);
```

```sql
(SELECT first_name FROM actor)
EXCEPT ALL
(SELECT first_name FROM customer);
```

<hr>

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

Ornek database: [DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/)

1. actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.

```sql
(SELECT first_name FROM actor)
UNION
(SELECT first_name FROM customer);
```

2. actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.

```sql
(SELECT first_name FROM actor)
INTERSECT
(SELECT first_name FROM customer);
```

3. actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.

```sql
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer);
```

4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

```sql
(SELECT first_name FROM actor)
UNION ALL
(SELECT first_name FROM customer);
```

```sql
(SELECT first_name FROM actor)
INTERSECT ALL
(SELECT first_name FROM customer);
```

```sql
(SELECT first_name FROM actor)
EXCEPT ALL
(SELECT first_name FROM customer);
```
