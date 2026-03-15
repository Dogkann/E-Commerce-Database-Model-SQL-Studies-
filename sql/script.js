// 1. Sayfa yüklendiğinde kontrol mesajı
console.log("Admin Paneli Hazır!");

// 2. Elementleri Seçelim (HTML'deki id ve class'lara göre)
const modal = document.getElementById("productModal"); // Gizli form penceresi
const btnAdd = document.querySelector('.btn-add');    // "Yeni Ürün Ekle" butonu
const spanClose = document.querySelector(".close");   // Formu kapatan 'X' işareti
const addForm = document.getElementById("addForm");    // Formun kendisi

// 3. ÜRÜN SİLME FONKSİYONU (Senin attığın kodun aynısı)
function urunSil(buton) {
    let onay = confirm("Bu ürünü silmek istediğinize emin misiniz?");
    if (onay) {
        let satir = buton.parentElement.parentElement;
        satir.remove();
        alert("Ürün başarıyla silindi!");
    }
}

// 4. "YENİ ÜRÜN EKLE" BUTONUNA BASINCA (Formu Açma)
btnAdd.onclick = function() {
    modal.style.display = "block"; // Gizli olan formu görünür yap
}

// 5. KAPAT ('X') BUTONUNA BASINCA
spanClose.onclick = function() {
    modal.style.display = "none";
}

// 6. FORM GÖNDERİLDİĞİNDE (Yeni Satır Ekleme)
addForm.onsubmit = function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engeller

    // Formdan bilgileri alalım
    const name = document.getElementById("pName").value;
    const cat = document.getElementById("pCategory").value;
    const price = document.getElementById("pPrice").value;
    const stock = document.getElementById("pStock").value;

    // Tabloya yeni satır (tr) ekleyelim
    const tablo = document.querySelector("tbody");
    const yeniSatir = `
        <tr>
            <td>#</td>
            <td>${name}</td>
            <td>${cat}</td>
            <td>${price} TL</td>
            <td>${stock}</td>
            <td>
                <button class="btn-edit"><i class="fas fa-edit"></i> Düzenle</button>
                <button class="btn-delete" onclick="urunSil(this)"><i class="fas fa-trash"></i> Sil</button>
            </td>
        </tr>
    `;
    
    tablo.innerHTML += yeniSatir; // Yeni satırı tabloya yapıştır
    modal.style.display = "none"; // Formu kapat
    addForm.reset();             // Formu bir sonraki kullanım için temizle
}
function urunDuzenle(buton) {
    // 1. Tıklanan butondan satıra ulaşıyoruz
    let satir = buton.parentElement.parentElement;
    
    // 2. Satırdaki hücrelerden (td) verileri çekiyoruz
    let ad = satir.cells[1].innerText;
    let kategori = satir.cells[2].innerText;
    let fiyat = satir.cells[3].innerText.replace(" TL", "");
    let stok = satir.cells[4].innerText;

    // 3. Bu verileri daha önce yaptığımız "Yeni Ürün Ekle" formuna dolduruyoruz
    document.getElementById("pName").value = ad;
    document.getElementById("pCategory").value = kategori;
    document.getElementById("pPrice").value = fiyat;
    document.getElementById("pStock").value = stok;

    // 4. Formu (Modal) görünür yapıyoruz
    document.getElementById("productModal").style.display = "block";
    
    // 5. Kaydet butonunun metnini "Güncelle" yapalım ki kullanıcı anlasın
    document.querySelector(".btn-save").innerText = "Güncelle";
}
function tabloAra() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();
    let table = document.querySelector("table");
    let tr = table.getElementsByTagName("tr");

    // Tüm satırları gez (Başlık hariç)
    for (let i = 1; i < tr.length; i++) {
        let tdAd = tr[i].getElementsByTagName("td")[1]; // Ürün Adı sütunu
        let tdKat = tr[i].getElementsByTagName("td")[2]; // Kategori sütunu
        
        if (tdAd || tdKat) {
            let metinAd = tdAd.textContent || tdAd.innerText;
            let metinKat = tdKat.textContent || tdKat.innerText;
            
            if (metinAd.toUpperCase().indexOf(filter) > -1 || metinKat.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // Eşleşiyorsa göster
            } else {
                tr[i].style.display = "none"; // Eşleşmiyorsa gizle
            }
        }
    }
}