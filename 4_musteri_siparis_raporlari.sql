SELECT 
    Musteriler.AdSoyad, 
    SUM(Siparisler.ToplamTutar) AS ToplamHarcama
FROM Musteriler
INNER JOIN Siparisler 
    ON Musteriler.MusteriID = Siparisler.MusteriID
GROUP BY Musteriler.AdSoyad;