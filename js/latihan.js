// Latihan pilihan ganda sederhana.
// Jenis soal dibaca dari atribut data-jenis pada <section id="latihan">.
// Semua soal ditulis sendiri. Tidak ada pencatatan nilai.

// Setiap soal: [bilangan pertama, bilangan kedua]
var DAFTAR_SOAL = {
  penjumlahan: [
    [1, 2], [2, 3], [3, 4], [4, 4], [5, 3],
    [6, 2], [7, 5], [8, 6], [9, 4], [10, 7]
  ],
  pengurangan: [
    [5, 2], [6, 3], [7, 4], [8, 5], [9, 3],
    [10, 6], [12, 5], [14, 7], [15, 8], [18, 9]
  ]
};

var TANDA = { penjumlahan: "+", pengurangan: "-" };

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
      benarSekarang = hitungJawaban(jenis, a, b);

      elSoal.textContent = a + " " + TANDA[jenis] + " " + b + " = ?";
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