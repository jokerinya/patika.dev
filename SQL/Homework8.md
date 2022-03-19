## Perform the following query scenarios on a sample database.

1. Let's create a table in your test database with employee name column information id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100).

```sql
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```

2. Let's add 50 pieces of data to the employee table we created using the [Mockaroo](https://www.mockaroo.com/) service.

```sql
insert into employee (name, birthday, email) values ('Inglis', '1987-09-30', 'ihadye0@booking.com');
insert into employee (name, birthday, email) values ('Darwin', '2000-08-19', 'dservis1@cafepress.com');
insert into employee (name, birthday, email) values ('Clarette', '1954-04-14', 'cwebbbowen2@examiner.com');
insert into employee (name, birthday, email) values ('Jody', '2002-05-15', 'jfullbrook3@biblegateway.com');
insert into employee (name, birthday, email) values ('Aundrea', null, null);
insert into employee (name, birthday, email) values ('Loren', '1987-01-03', 'ljack5@who.int');
insert into employee (name, birthday, email) values ('Conant', '1947-05-24', 'csecker6@tumblr.com');
insert into employee (name, birthday, email) values ('Vale', '1974-12-24', 'vstonner7@vistaprint.com');
insert into employee (name, birthday, email) values ('Anna-maria', '1949-06-12', 'adally8@tinypic.com');
insert into employee (name, birthday, email) values ('Lorettalorna', '1947-09-07', 'lschurig9@liveinternet.ru');
insert into employee (name, birthday, email) values ('Yettie', '1974-12-16', 'ysomerliea@liveinternet.ru');
insert into employee (name, birthday, email) values ('Ruperto', '1965-07-13', 'rvlasenkob@epa.gov');
insert into employee (name, birthday, email) values ('May', '1976-06-25', 'mheintzc@bigcartel.com');
insert into employee (name, birthday, email) values ('Allyce', '1979-03-16', 'alemonnierd@amazon.co.uk');
insert into employee (name, birthday, email) values ('Poul', '1997-04-08', 'plavelle@narod.ru');
insert into employee (name, birthday, email) values ('Lorant', null, null);
insert into employee (name, birthday, email) values ('Sayres', '1937-07-26', 'smccoughang@about.com');
insert into employee (name, birthday, email) values ('Ottilie', '1972-11-26', 'odunphieh@github.com');
insert into employee (name, birthday, email) values ('Mella', '1935-11-19', 'mlomisi@unesco.org');
insert into employee (name, birthday, email) values ('Franciska', '1956-12-03', 'fblundonj@bloglines.com');
insert into employee (name, birthday, email) values ('Hillery', '1993-11-12', 'hkeaysk@facebook.com');
insert into employee (name, birthday, email) values ('Kenneth', null, null);
insert into employee (name, birthday, email) values ('Simeon', '1978-02-20', 'sankerm@shinystat.com');
insert into employee (name, birthday, email) values ('Golda', '1958-01-14', 'gmoortonn@ifeng.com');
insert into employee (name, birthday, email) values ('Silvano', '1922-03-09', 'sverricoo@unc.edu');
insert into employee (name, birthday, email) values ('Adelheid', '1968-01-01', 'aweinep@ftc.gov');
insert into employee (name, birthday, email) values ('Felicle', '1943-04-12', 'fzealeq@e-recht24.de');
insert into employee (name, birthday, email) values ('Harald', '1933-07-18', 'hbaldinr@youku.com');
insert into employee (name, birthday, email) values ('Constance', '1971-06-05', 'crathbournes@cargocollective.com');
insert into employee (name, birthday, email) values ('Luce', '1985-07-16', 'lgrevelt@techcrunch.com');
insert into employee (name, birthday, email) values ('Georges', '1990-03-31', 'gswynleyu@chicagotribune.com');
insert into employee (name, birthday, email) values ('Pablo', '1960-03-28', 'pskerrittv@networksolutions.com');
insert into employee (name, birthday, email) values ('Artus', '1950-08-11', 'aalstonw@jugem.jp');
insert into employee (name, birthday, email) values ('Tripp', null, null);
insert into employee (name, birthday, email) values ('Marley', '1968-07-30', 'mkleinmintzy@google.com.au');
insert into employee (name, birthday, email) values ('Meghann', '1988-08-29', 'mgeesonz@ox.ac.uk');
insert into employee (name, birthday, email) values ('Cherilynn', null, null);
insert into employee (name, birthday, email) values ('Livvie', '1961-04-28', 'lisles11@4shared.com');
insert into employee (name, birthday, email) values ('Thoma', '1975-04-28', 'tdoby12@youtu.be');
insert into employee (name, birthday, email) values ('Heindrick', '1976-01-03', 'hpoland13@virginia.edu');
insert into employee (name, birthday, email) values ('Lucien', '1931-08-01', 'lkeal14@stanford.edu');
insert into employee (name, birthday, email) values ('Humphrey', null, null);
insert into employee (name, birthday, email) values ('Basia', '2000-01-22', 'bbly16@vkontakte.ru');
insert into employee (name, birthday, email) values ('Jakie', '1987-07-22', 'jodriscoll17@alibaba.com');
insert into employee (name, birthday, email) values ('Greg', null, null);
insert into employee (name, birthday, email) values ('Billy', '1995-03-09', 'bletessier19@wufoo.com');
insert into employee (name, birthday, email) values ('Darius', '1934-03-07', 'dmallender1a@barnesandnoble.com');
insert into employee (name, birthday, email) values ('Hadleigh', '1997-01-03', 'hbattin1b@deliciousdays.com');
insert into employee (name, birthday, email) values ('Ricky', '1923-05-02', 'rgodby1c@uiuc.edu');
insert into employee (name, birthday, email) values ('Urban', '1949-06-27', 'ubohlje1d@japanpost.jp');
```

3. Let's do 5 UPDATE operations that will update the columns.

```sql
-- 1
UPDATE employee
SET name = 'Dragon',
		birthday = null,
		email = null
WHERE id = 2;
RETURNING *;
-- 2
UPDATE employee
SET name = 'Anton',
		birthday = '2000-01-01',
		email = 'anton@chevo.edu'
WHERE id = 5
RETURNING *;
-- 3
UPDATE employee
SET name = 'Ken',
		birthday = '2003-11-11',
		email = 'ken@kendu.com'
WHERE name = 'Kenneth'
RETURNING *;
-- 4
UPDATE employee
SET name = 'Loren',
		birthday = '1999-05-17',
		email = 'lum@lumlumlum.com'
WHERE id = 16
RETURNING *;
-- 5
UPDATE employee
SET name = 'Lucky',
		birthday = '1919-02-13',
		email = 'seenbyme@worldwartwo.com'
WHERE birthday = '1931-08-01'
RETURNING *;
```

4. Let's do 5 DELETE operations that will delete the related row according to each of the columns.

```sql
--1
DELETE FROM employee
WHERE id = 5
RETURNING *;
--2
DELETE FROM employee
WHERE name = 'Inglis'
RETURNING *;
--3
DELETE FROM employee
WHERE birthday = '1919-02-13'
RETURNING *;
--4
DELETE FROM employee
WHERE name = 'Jody' AND birthday = '2002-05-15'
RETURNING *;
--5
DELETE FROM employee
WHERE email = 'adally8@tinypic.com'
RETURNING *;
```

<hr>

## Aşağıdaki sorgu senaryolarını örnek bir veri tabanı üzerinden gerçekleştiriniz.

1. test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```sql
CREATE TABLE employee (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
);
```

2. Oluşturduğumuz employee tablosuna [Mockaroo](https://www.mockaroo.com/) servisini kullanarak 50 adet veri ekleyelim.

```sql
insert into employee (name, birthday, email) values ('Inglis', '1987-09-30', 'ihadye0@booking.com');
insert into employee (name, birthday, email) values ('Darwin', '2000-08-19', 'dservis1@cafepress.com');
insert into employee (name, birthday, email) values ('Clarette', '1954-04-14', 'cwebbbowen2@examiner.com');
insert into employee (name, birthday, email) values ('Jody', '2002-05-15', 'jfullbrook3@biblegateway.com');
insert into employee (name, birthday, email) values ('Aundrea', null, null);
insert into employee (name, birthday, email) values ('Loren', '1987-01-03', 'ljack5@who.int');
insert into employee (name, birthday, email) values ('Conant', '1947-05-24', 'csecker6@tumblr.com');
insert into employee (name, birthday, email) values ('Vale', '1974-12-24', 'vstonner7@vistaprint.com');
insert into employee (name, birthday, email) values ('Anna-maria', '1949-06-12', 'adally8@tinypic.com');
insert into employee (name, birthday, email) values ('Lorettalorna', '1947-09-07', 'lschurig9@liveinternet.ru');
insert into employee (name, birthday, email) values ('Yettie', '1974-12-16', 'ysomerliea@liveinternet.ru');
insert into employee (name, birthday, email) values ('Ruperto', '1965-07-13', 'rvlasenkob@epa.gov');
insert into employee (name, birthday, email) values ('May', '1976-06-25', 'mheintzc@bigcartel.com');
insert into employee (name, birthday, email) values ('Allyce', '1979-03-16', 'alemonnierd@amazon.co.uk');
insert into employee (name, birthday, email) values ('Poul', '1997-04-08', 'plavelle@narod.ru');
insert into employee (name, birthday, email) values ('Lorant', null, null);
insert into employee (name, birthday, email) values ('Sayres', '1937-07-26', 'smccoughang@about.com');
insert into employee (name, birthday, email) values ('Ottilie', '1972-11-26', 'odunphieh@github.com');
insert into employee (name, birthday, email) values ('Mella', '1935-11-19', 'mlomisi@unesco.org');
insert into employee (name, birthday, email) values ('Franciska', '1956-12-03', 'fblundonj@bloglines.com');
insert into employee (name, birthday, email) values ('Hillery', '1993-11-12', 'hkeaysk@facebook.com');
insert into employee (name, birthday, email) values ('Kenneth', null, null);
insert into employee (name, birthday, email) values ('Simeon', '1978-02-20', 'sankerm@shinystat.com');
insert into employee (name, birthday, email) values ('Golda', '1958-01-14', 'gmoortonn@ifeng.com');
insert into employee (name, birthday, email) values ('Silvano', '1922-03-09', 'sverricoo@unc.edu');
insert into employee (name, birthday, email) values ('Adelheid', '1968-01-01', 'aweinep@ftc.gov');
insert into employee (name, birthday, email) values ('Felicle', '1943-04-12', 'fzealeq@e-recht24.de');
insert into employee (name, birthday, email) values ('Harald', '1933-07-18', 'hbaldinr@youku.com');
insert into employee (name, birthday, email) values ('Constance', '1971-06-05', 'crathbournes@cargocollective.com');
insert into employee (name, birthday, email) values ('Luce', '1985-07-16', 'lgrevelt@techcrunch.com');
insert into employee (name, birthday, email) values ('Georges', '1990-03-31', 'gswynleyu@chicagotribune.com');
insert into employee (name, birthday, email) values ('Pablo', '1960-03-28', 'pskerrittv@networksolutions.com');
insert into employee (name, birthday, email) values ('Artus', '1950-08-11', 'aalstonw@jugem.jp');
insert into employee (name, birthday, email) values ('Tripp', null, null);
insert into employee (name, birthday, email) values ('Marley', '1968-07-30', 'mkleinmintzy@google.com.au');
insert into employee (name, birthday, email) values ('Meghann', '1988-08-29', 'mgeesonz@ox.ac.uk');
insert into employee (name, birthday, email) values ('Cherilynn', null, null);
insert into employee (name, birthday, email) values ('Livvie', '1961-04-28', 'lisles11@4shared.com');
insert into employee (name, birthday, email) values ('Thoma', '1975-04-28', 'tdoby12@youtu.be');
insert into employee (name, birthday, email) values ('Heindrick', '1976-01-03', 'hpoland13@virginia.edu');
insert into employee (name, birthday, email) values ('Lucien', '1931-08-01', 'lkeal14@stanford.edu');
insert into employee (name, birthday, email) values ('Humphrey', null, null);
insert into employee (name, birthday, email) values ('Basia', '2000-01-22', 'bbly16@vkontakte.ru');
insert into employee (name, birthday, email) values ('Jakie', '1987-07-22', 'jodriscoll17@alibaba.com');
insert into employee (name, birthday, email) values ('Greg', null, null);
insert into employee (name, birthday, email) values ('Billy', '1995-03-09', 'bletessier19@wufoo.com');
insert into employee (name, birthday, email) values ('Darius', '1934-03-07', 'dmallender1a@barnesandnoble.com');
insert into employee (name, birthday, email) values ('Hadleigh', '1997-01-03', 'hbattin1b@deliciousdays.com');
insert into employee (name, birthday, email) values ('Ricky', '1923-05-02', 'rgodby1c@uiuc.edu');
insert into employee (name, birthday, email) values ('Urban', '1949-06-27', 'ubohlje1d@japanpost.jp');
```

3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

```sql
-- 1
UPDATE employee
SET name = 'Dragon',
		birthday = null,
		email = null
WHERE id = 2;
RETURNING *;
-- 2
UPDATE employee
SET name = 'Anton',
		birthday = '2000-01-01',
		email = 'anton@chevo.edu'
WHERE id = 5
RETURNING *;
-- 3
UPDATE employee
SET name = 'Ken',
		birthday = '2003-11-11',
		email = 'ken@kendu.com'
WHERE name = 'Kenneth'
RETURNING *;
-- 4
UPDATE employee
SET name = 'Loren',
		birthday = '1999-05-17',
		email = 'lum@lumlumlum.com'
WHERE id = 16
RETURNING *;
-- 5
UPDATE employee
SET name = 'Lucky',
		birthday = '1919-02-13',
		email = 'seenbyme@worldwartwo.com'
WHERE birthday = '1931-08-01'
RETURNING *;
```

4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```sql
--1
DELETE FROM employee
WHERE id = 5
RETURNING *;
--2
DELETE FROM employee
WHERE name = 'Inglis'
RETURNING *;
--3
DELETE FROM employee
WHERE birthday = '1919-02-13'
RETURNING *;
--4
DELETE FROM employee
WHERE name = 'Jody' AND birthday = '2002-05-15'
RETURNING *;
--5
DELETE FROM employee
WHERE email = 'adally8@tinypic.com'
RETURNING *;
```
