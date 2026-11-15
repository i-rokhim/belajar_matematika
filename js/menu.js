// menu.js - menu navigasi bersama untuk semua halaman.
// Untuk menambah topik baru, tambahkan satu baris di DAFTAR_MENU.
(function () {
  var DAFTAR_MENU = [
    { teks: "Beranda", tujuan: "index.html" },
    { teks: "Penjumlahan", tujuan: "topik/penjumlahan.html" },
    { teks: "Pengurangan", tujuan: "topik/pengurangan.html" }
  ];

  var skrip = document.currentScript;
  var nav = document.querySelector("nav.menu");
  if (!skrip || !nav) { return; }

  // Alamat lengkap folder utama situs, dihitung dari lokasi menu.js (di js/).
  var akar = new URL("../", skrip.src);
  // Alamat halaman yang sedang dibuka, tanpa tanda # dan ?.
  var sekarang = new URL(window.location.href);
  var jalurSekarang = sekarang.pathname;
  if (jalurSekarang.charAt(jalurSekarang.length - 1) === "/") {
    jalurSekarang += "index.html";
  }

  nav.textContent = "";
  DAFTAR_MENU.forEach(function (butir) {
    var a = document.createElement("a");
    var alamat = new URL(butir.tujuan, akar);
    a.href = alamat.href;
    a.textContent = butir.teks;
    if (alamat.pathname === jalurSekarang) {
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });
})();