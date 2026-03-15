-- 1. Kategoriler Tablosu
CREATE TABLE Kategoriler (
    KategoriID INT PRIMARY KEY,
    KategoriAdi VARCHAR(50) NOT NULL
);

-- 2. Ürünler Tablosu
CREATE TABLE Urunler (
    UrunID INT PRIMARY KEY,
    KategoriID INT,
    UrunAdi VARCHAR(100) NOT NULL,
    Fiyat DECIMAL(10, 2),
    StokMiktari INT,
    FOREIGN KEY (KategoriID) REFERENCES Kategoriler(KategoriID)
);

-- 3. Müşteriler Tablosu
CREATE TABLE Musteriler (
    MusteriID INT PRIMARY KEY,
    AdSoyad VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    KayitTarihi DATE
);

-- 4. Siparişler Tablosu
CREATE TABLE Siparisler (
    SiparisID INT PRIMARY KEY,
    MusteriID INT,
    SiparisTarihi DATE,
    ToplamTutar DECIMAL(10, 2),
    FOREIGN KEY (MusteriID) REFERENCES Musteriler(MusteriID)
);