# 🛒 E-Commerce Database Model (SQL Practices)

This repository contains a relational e-commerce database model I designed from scratch, along with practice files documenting my core SQL skills.

It was created to build a solid database foundation for an "E-Commerce Admin Panel" project I plan to develop with C# in the future, taking my first steps into full-stack development.

## 📂 Project Content and Steps

The `.sql` files in this project demonstrate the step-by-step process from setting up a database architecture to making it ready for analytical reporting:

1. **`eticaret_tablolar.sql`**: Building the database skeleton. Connecting Category, Product, Customer, and Order tables using `PRIMARY KEY` and `FOREIGN KEY` relationships.
2. **`ornek_veriler_ekleme.sql`**: Inserting test data into the created tables using `INSERT INTO` commands.
3. **`join_kullanimi.sql`**: Meaningfully combining data from different tables (e.g., Products and Categories) using `INNER JOIN`.
4. **`musteri_siparis_raporlari.sql`**: Extracting analytical reports, such as total spending per customer, using `GROUP BY` and `SUM` functions.
5. **`view_olusturma.sql`**: Packaging complex reporting queries into virtual tables using `CREATE VIEW` so they can be easily executed from the software application side (e.g., C#).

## 🚀 Key Learnings & Skills

* **DDL (Data Definition Language):** `CREATE TABLE`, `CREATE DATABASE`
* **DML (Data Manipulation Language):** `INSERT INTO`, `SELECT`
* **Relational Database Logic:** Primary and Foreign Keys (PK, FK)
* **Data Analysis & Reporting:** `JOIN`, `GROUP BY`, Aggregate Functions (`SUM`)
* **Database Objects:** `VIEW`

## 🎯 Future Goals

* Integrating this database structure into a backend project using C#.
* Performing dynamic Create, Read, Update, and Delete (CRUD) operations on this database via an admin panel interface.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🛒 E-Ticaret Veritabanı Modeli (SQL Çalışmaları)

Bu depo, sıfırdan tasarladığım ilişkisel bir e-ticaret veritabanı modelini ve SQL temel yeteneklerimi belgelediğim çalışma dosyalarımı içermektedir. 

Gelecekte C# ile geliştirmeyi planladığım "E-Ticaret Admin Paneli" projesinin sağlam bir arka planını oluşturmak ve full-stack geliştirme sürecimin temelini atmak amacıyla hazırlanmıştır.

## 📂 Proje İçeriği ve Adımlar

Proje içerisindeki `.sql` dosyaları, bir veritabanının sıfırdan kurulup raporlanabilir hale gelmesine kadar geçen süreci adım adım göstermektedir:

1. **`eticaret_tablolar.sql`**: Veritabanının iskeletinin kurulması. Kategori, Ürün, Müşteri ve Sipariş tablolarının `PRIMARY KEY` ve `FOREIGN KEY` ilişkileriyle birbirine bağlanması.
2. **`ornek_veriler_ekleme.sql`**: Oluşturulan tablolara `INSERT INTO` komutlarıyla test verilerinin eklenmesi.
3. **`join_kullanimi.sql`**: `INNER JOIN` kullanılarak farklı tablolardaki verilerin (Örn: Ürünler ve Kategoriler) anlamlı bir şekilde birleştirilmesi.
4. **`musteri_siparis_raporlari.sql`**: `GROUP BY` ve `SUM` fonksiyonları kullanılarak müşteri bazlı toplam harcama gibi analitik raporların çekilmesi.
5. **`view_olusturma.sql`**: Karmaşık rapor sorgularının, yazılım tarafında (C# vb.) kolayca çağrılabilmesi için `CREATE VIEW` ile sanal tablolar haline getirilmesi.

## 🚀 Öğrenilen Kazanımlar

* **DDL (Data Definition Language):** `CREATE TABLE`, `CREATE DATABASE`
* **DML (Data Manipulation Language):** `INSERT INTO`, `SELECT`
* **İlişkisel Veritabanı Mantığı:** Birincil ve Yabancı Anahtarlar (PK, FK)
* **Veri Analizi ve Raporlama:** `JOIN`, `GROUP BY`, Aggregate Fonksiyonlar (`SUM`)
* **Veritabanı Nesneleri:** `VIEW`

## 🎯 Sonraki Hedefler

* Bu veritabanı yapısını C# ile geliştirilecek bir backend (arka uç) projesine entegre etmek.
* Admin paneli üzerinden bu veritabanına dinamik olarak ürün ve kategori ekleme/silme/güncelleme (CRUD) işlemlerini gerçekleştirmek.
