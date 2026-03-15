SELECT 
    Urunler.UrunAdi, 
    Urunler.Fiyat, 
    Kategoriler.KategoriAdi
FROM Urunler
INNER JOIN Kategoriler 
    ON Urunler.KategoriID = Kategoriler.KategoriID;