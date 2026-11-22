// latihan-bilangan.js - latihan topik Bilangan sampai 1.000.
// Soal dibuat otomatis dari angka acak. Semua ditulis sendiri.
// Tidak ada pencatatan nilai. Berkas ini berdiri sendiri (tanpa latihan.js).
(function () {
  var JUMLAH_SOAL = 9;
  var NAMA_TEMPAT = ["ratusan", "puluhan", "satuan"];

  var bagian = document.getElementById("latihan");
  if (!bagian) { return; }

  var elSoal = document.getElementById("soal");
  var elPilihan = document.getElementById("pilihan");
  var elUmpanBalik = document.getElementById("umpan-balik");
  var tombolLanjut = document.getElementById("tombol-lanjut");

  var nomor = 0;
  var sudahMenjawab = false;
  var benarSekarang = "";

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

  function acakAngka(min, maks) {
    return min + Math.floor(Math.random() * (maks - min + 1));
  }

  // Jenis 1: bilangan sesudah
  function soalSesudah() {
    var n = acakAngka(100, 988);
    return {
      teks: "Bilangan sesudah " + n + " adalah ...",
      benar: String(n + 1),
      pengecoh: [String(n + 2), String(n - 1), String(n + 10)]
    };
  }

  // Jenis 2: bilangan paling besar dari tiga bilangan
  function soalTerbesar() {
    var a = acakAngka(100, 999);
    var b = a;
    var c = a;
    while (b === a) { b = acakAngka(100, 999); }
    while (c === a || c === b) { c = acakAngka(100, 999); }
    var terbesar = Math.max(a, b, c);
    var lainnya = [a, b, c].filter(function (n) { return n !== terbesar; });
    return {
      teks: "Mana bilangan yang paling besar: " + a + ", " + b + ", atau " + c + "?",
      benar: String(terbesar),
      pengecoh: lainnya.map(String)
    };
  }

  // Jenis 3: nilai tempat (angka pada bilangan dibuat berbeda semua)
  function soalNilaiTempat() {
    var n, r, p, s;
    do {
      n = acakAngka(100, 999);
      r = Math.floor(n / 100);
      p = Math.floor(n / 10) % 10;
      s = n % 10;
    } while (r === p || r === s || p === s);
    var digit = [r, p, s];
    var posisi = acakAngka(0, 2);
    return {
      teks: "Pada bilangan " + n + ", angka " + digit[posisi] + " ada di tempat ...",
      benar: NAMA_TEMPAT[posisi],
      pengecoh: NAMA_TEMPAT.filter(function (nama, i) { return i !== posisi; })
    };
  }

  function buatPilihan(benar, pengecoh) {
    return acak([benar].concat(acak(pengecoh).slice(0, 2)));
  }

  function tampilkanSoal() {
    sudahMenjawab = false;
    var jenisSoal = nomor % 3;
    var soal;
    if (jenisSoal === 0) {
      soal = soalSesudah();
    } else if (jenisSoal === 1) {
      soal = soalTerbesar();
    } else {
      soal = soalNilaiTempat();
    }

    benarSekarang = soal.benar;
    elSoal.textContent = soal.teks;
    elUmpanBalik.textContent = "";
    tombolLanjut.hidden = true;
    elPilihan.innerHTML = "";

    buatPilihan(soal.benar, soal.pengecoh).forEach(function (nilai) {
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
    if (sudahMenjawab) { return; }
    sudahMenjawab = true;

    elPilihan.querySelectorAll("button").forEach(function (t) {
      t.disabled = true;
      if (t.textContent === benarSekarang) {
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

    var terakhir = nomor === JUMLAH_SOAL - 1;
    tombolLanjut.textContent = terakhir ? "Ulangi latihan" : "Soal berikutnya";
    tombolLanjut.hidden = false;
  }

  tombolLanjut.addEventListener("click", function () {
    nomor++;
    if (nomor >= JUMLAH_SOAL) { nomor = 0; }
    tampilkanSoal();
  });

  tampilkanSoal();
})();