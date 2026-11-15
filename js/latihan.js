// Latihan pilihan ganda sederhana.
// Jenis soal dibaca dari atribut data-jenis pada <section id="latihan">.
// Semua soal ditulis sendiri. Tidak ada pencatatan nilai.

// Setiap soal: [bilangan pertama, bilangan kedua]
var DAFTAR_SOAL = {
  penjumlahan: [
    [1, 2], [2, 3], [3, 4], [4, 4], [5, 3],
    [6, 2], [7, 5], [8, 6], [9, 4], [10, 7],
    [11, 4], [12, 6], [13, 5], [15, 4], [16, 3]
  ],
  pengurangan: [
    [5, 2], [6, 3], [7, 4], [8, 5], [9, 3],
    [10, 6], [12, 5], [14, 7], [15, 8], [18, 9],
    [11, 4], [13, 6], [16, 7], [17, 9], [20, 8]
  ]
};

var TANDA = { penjumlahan: "+", pengurangan: "-" };

// Soal cerita: teks cerita memakai {a} dan {b} untuk bilangan.
// Setiap cerita: [kalimat cerita, a, b]
var DAFTAR_CERITA = {
  penjumlahan: [
    ["Ada {a} kelereng merah dan {b} kelereng biru. Berapa semua kelerengnya?", 4, 3],
    ["Ani punya {a} buku. Ibu memberi {b} buku lagi. Berapa buku Ani sekarang?", 6, 5],
    ["Di kebun ada {a} ayam dan {b} bebek. Berapa semua hewannya?", 8, 4],
    ["Budi menanam {a} pohon di pagi hari dan {b} pohon di sore hari. Berapa pohon yang ditanam Budi?", 7, 6],
    ["Ada {a} anak di kelas. Lalu datang {b} anak lagi. Berapa anak sekarang?", 12, 5]
  ],
  pengurangan: [
    ["Ada {a} permen. Dimakan {b} permen. Berapa permen yang tersisa?", 9, 4],
    ["Rani punya {a} balon. {b} balon terbang. Berapa balon Rani sekarang?", 10, 3],
    ["Di piring ada {a} kue. Adik mengambil {b} kue. Berapa kue yang tersisa?", 12, 5],
    ["Ada {a} burung di pohon. {b} burung terbang pergi. Berapa burung yang masih ada?", 14, 6],
    ["Toni membawa {a} kelereng. Ia memberi {b} kelereng kepada temannya. Berapa kelereng Toni sekarang?", 15, 8]
  ]
};

// Acak urutan isi daftar (mengembalikan salinan baru)
function acak(daftar) {
  var salinan = daftar.slice();
  for (var i = salinan.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var sementara = salinan[i];
    salinan[i] = salinan[j];
    salinan[j] = sementara;
  }
  return salinan;
}

function hitungJawaban(jenis, a, b) {
  return jenis === "penjumlahan" ? a + b : a - b;
}

// Buat tiga pilihan: satu benar, dua pengecoh yang dekat dengan jawaban benar
function buatPilihan(benar) {
  var kandidat = [benar - 2, benar - 1, benar + 1, benar + 2].filter(function (n) {
    return n >= 0;
  });
  var pengecoh = acak(kandidat).slice(0, 2);
  return acak([benar].concat(pengecoh));
}

var bagian = document.getElementById("latihan");

if (bagian) {
  var jenis = bagian.dataset.jenis;
  var kumpulan = DAFTAR_SOAL[jenis];

  var elSoal = document.getElementById("soal");
  var elPilihan = document.getElementById("pilihan");
  var elUmpanBalik = document.getElementById("umpan-balik");
  var tombolLanjut = document.getElementById("tombol-lanjut");

  if (!kumpulan) {
    elSoal.textContent = "Latihan belum tersedia.";
  } else {
    var urutan = acak(kumpulan);
    var nomor = 0;
    var sudahMenjawab = false;
    var benarSekarang = 0;

    function tampilkanSoal() {
      sudahMenjawab = false;
      var pasangan = urutan[nomor];
      var a = pasangan[0];
      var b = pasangan[1];
      var teks = a + " " + TANDA[jenis] + " " + b + " = ?";

      var ceritaJenis = DAFTAR_CERITA[jenis];
      if (ceritaJenis && nomor % 3 === 2) {
        var cerita = ceritaJenis[Math.floor(nomor / 3) % ceritaJenis.length];
        a = cerita[1];
        b = cerita[2];
        teks = cerita[0].replace("{a}", a).replace("{b}", b);
      }

      benarSekarang = hitungJawaban(jenis, a, b);
      elSoal.textContent = teks;
      elUmpanBalik.textContent = "";
      tombolLanjut.hidden = true;
      elPilihan.innerHTML = "";

      buatPilihan(benarSekarang).forEach(function (nilai) {
        var tombol = document.createElement("button");
        tombol.type = "button";
        tombol.className = "pilihan-jawaban";
        tombol.textContent = nilai;
        tombol.addEventListener("click", function () {
          jawab(tombol, nilai);
        });
        elPilihan.appendChild(tombol);
      });
    }

    function jawab(tombolDipilih, nilai) {
      if (sudahMenjawab) {
        return;
      }
      sudahMenjawab = true;

      var semua = elPilihan.querySelectorAll("button");
      semua.forEach(function (t) {
        t.disabled = true;
        if (Number(t.textContent) === benarSekarang) {
          t.classList.add("benar");
        }
      });

      if (nilai === benarSekarang) {
        elUmpanBalik.textContent = "Hebat! Jawabanmu benar.";
      } else {
        tombolDipilih.classList.add("salah");
        elUmpanBalik.textContent =
          "Hampir! Jawaban yang benar adalah " + benarSekarang + ". Ayo coba soal berikutnya.";
      }

      var terakhir = nomor === urutan.length - 1;
      tombolLanjut.textContent = terakhir ? "Ulangi latihan" : "Soal berikutnya";
      tombolLanjut.hidden = false;
    }

    tombolLanjut.addEventListener("click", function () {
      nomor++;
      if (nomor >= urutan.length) {
        urutan = acak(kumpulan);
        nomor = 0;
      }
      tampilkanSoal();
    });

    tampilkanSoal();
  }
}