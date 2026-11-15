# Catatan Proyek

## Tahap aktif
Tahap 1 sampai 5 selesai, Tahap 6 dilewati. Tahap 7 (Rawat dan kembangkan) sedang berjalan: pekerjaan 1, 2, dan 4 selesai di komputer; berikutnya pekerjaan 3 (topik baru).

## Alamat
- Situs online: https://i-rokhim.github.io/belajar_matematika/
- Repository: https://github.com/i-rokhim/belajar_matematika

## Checklist Tahap 2
- [x] 2.1 HTML: judul, paragraf, daftar, gambar, tautan, tabel
- [x] 2.2 CSS dasar: warna, huruf, jarak
- [x] 2.3 CSS tata letak: Flexbox dan Grid
- [x] 2.4 Tampilan responsif untuk HP
- [x] 2.5 Alat kerja: VS Code dan DevTools browser

## Checklist Tahap 3
- [x] Tahap 3 (situs statis) selesai: beranda, halaman penjumlahan, halaman pengurangan, gambar SVG

## Checklist Tahap 4
- [x] 4.1 GitHub Pages aktif (branch main, folder / root)
- [x] 4.2 Uji situs online di komputer (CSS, gambar, kartu, tabel, menu, tautan buku)
- [x] 4.2 Uji di HP sungguhan (11 November 2026, Chrome di Android: beranda, penjumlahan, pengurangan, dan tautan buku normal)
- [x] 4.3 Pemeriksaan lisensi buku, hasil di SUMBER.md
- [x] 4.4 Perbarui README.md dan CATATAN.md
- [x] Hapus token GitHub (Settings, Developer settings, Personal access tokens, Tokens (classic))

## Checklist Tahap 5
- [x] 5.1 Kerangka latihan di penjumlahan.html dan pengurangan.html
- [x] 5.2 Logika soal di js/latihan.js (soal ditulis sendiri, tanpa pencatatan nilai)
- [x] 5.3 Gaya tombol jawaban di css/style.css
- [x] Uji di komputer lolos (lebar normal dan lebar 320, jawaban benar dan salah)
- [x] Push (tiga commit) dengan token baru, lalu token dihapus
- [x] Uji online di komputer (penjumlahan dan pengurangan)
- [x] Uji di HP sungguhan (11 November 2026, Chrome Android: penjumlahan dan pengurangan, jawaban benar dan salah, tidak ada gulir ke samping)

## Checklist Tahap 7
- [x] 7.1 Menu lebih ringkas di layar sempit (commit 7cf28aa; uji komputer, online, HP sungguhan)
- [x] 7.2 Latihan 15 soal per topik dan soal cerita pendek (commit 47a1447; uji komputer, online, HP sungguhan)
- [ ] 7.3 Topik baru: Bilangan sampai 1.000, Pengukuran, Bentuk di sekitar kita, Posisi benda dan pola
- [x] 7.4 Menu bersama lewat js/menu.js, dengan cadangan saat JavaScript mati (commit 02ec611; uji di komputer lolos)
- [ ] 7.4 Uji klik antarhalaman di komputer
- [ ] 7.4 Uji online di komputer setelah push
- [ ] 7.4 Uji di HP sungguhan setelah push
- [ ] Push dengan token baru, lalu token dihapus

## Keputusan lisensi
- Buku Kemendikdasmen hanya ditautkan, isinya tidak disalin.
- Tidak ditemukan lisensi terbuka untuk isi buku. FAQ SIBI mengizinkan mengunduh dan mencetak.
- Soal, cerita, dan gambar dibuat sendiri. Jangan menyalin isi buku tanpa izin tertulis.

## Catatan desain
- Menu bersama ditulis sekali di DAFTAR_MENU dalam js/menu.js. Tiap halaman hanya memuat satu tautan Beranda sebagai cadangan kalau JavaScript mati. Untuk topik baru, tambahkan satu baris di DAFTAR_MENU, dan pastikan halaman baru memuat <script src="../js/menu.js"></script>.
- Di layar sempit (480px ke bawah), tombol menu dibuat lebih ringkas dan menjadi dua baris. Selesai di Tahap 7.

## Log
| Tanggal | Yang dikerjakan |
|---|---|
| 2026-11-09 | Tahap 1 selesai, folder proyek dibuat |
| 2026-11-09 | index.html pertama selesai, kode diunggah ke GitHub |
| 2026-11-10 | CSS, kartu topik Grid dan tampilan HP selesai |
| 2026-11-10 | Halaman penjumlahan dan pengurangan selesai, Tahap 2 selesai |
| 2026-11-10 | Tahap 3 selesai |
| 2026-11-11 | GitHub Pages aktif, situs online lolos uji di komputer |
| 2026-11-11 | Lisensi buku diperiksa dan dicatat di SUMBER.md |
| 2026-11-11 | README dan CATATAN diperbarui, commit f4e4b43 dikirim, token GitHub dihapus |
| 2026-11-11 | Uji HP sungguhan lolos, Tahap 4 siap |
| 2026-11-11 | Tahap 5 dimulai: latihan penjumlahan dan pengurangan jalan di komputer, belum di-push |
| 2026-11-11 | Tahap 5 siap: latihan penjumlahan dan pengurangan lolos uji online di komputer dan HP sungguhan |
| 2026-11-11 | Tahap 7: menu lebih ringkas di layar sempit, lolos uji di komputer dan HP sungguhan (commit 7cf28aa) |
| 2026-11-14 | Tahap 7: latihan 15 soal per topik dan soal cerita pendek (soal ke-3, 6, 9, 12, 15), lolos uji online di komputer dan HP sungguhan (commit 47a1447) |
| 2026-11-15 | Tahap 7: menu bersama lewat js/menu.js, lolos uji di komputer, belum di-push (commit 02ec611) |