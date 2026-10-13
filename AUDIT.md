# Audit file dan SEO — 14 Oktober 2026

## Ruang lingkup

Audit kode sumber, konfigurasi, dependency langsung, gambar, font, referensi aset dinamis, serta output build. Tampilan, isi yang terlihat, ukuran logo, tema, bahasa, filter, animasi dan formulir dipertahankan. Tidak ada deployment atau perubahan akun eksternal.

## Pembersihan

11 aset tidak terpakai dihapus (16.782 byte): `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`; serta `public/images/auto-trust.svg`, `lova-dating-site.png`, `888living.png`, `grand-ontama-v1.webp`, `grand-ontama-dashboard.jpg`, dan `social/github.svg`.

Referensi dinamis 19 proyek diperiksa sebelum penghapusan. Varian logo aktif dan semua background proyek dipertahankan. Tiga entri ukuran gambar usang, 26 properti terjemahan/presentasi yang tidak dipakai, tombol pause yang sebelumnya selalu disembunyikan, dan CSS toggle lama dihapus. Hover/focus untuk pause carousel tetap tersedia.

Dua ekstensi diperbaiki sesuai format data tanpa mengubah byte gambar: `bagus.jpg` menjadi `bagus.png`, dan background `grand-ontama.png` menjadi `grand-ontama.jpg`. Semua referensi diperbarui.

Seluruh dependency langsung masih digunakan. Konfigurasi, lockfile, lisensi, font aktif, favicon dan dokumentasi dipertahankan. `node_modules`, `.next`, dan cache TypeScript adalah keluaran alat, bukan aset halaman; tetap diabaikan oleh Git. Lisensi Baloo Paaji dilengkapi dari repositori resmi Ek Type.

## SEO

- Judul, deskripsi, canonical, author dan metadata Open Graph/Twitter.
- Gambar preview sosial 1200 x 630 beserta generator lokal.
- JSON-LD Person, WebSite dan ProfilePage dengan profil, lokasi, keahlian dan tautan sosial sesuai konten.
- Robots dan sitemap mengikuti domain produksi Vercel atau konfigurasi domain sendiri. Preview/development tidak diindeks.
- Preload hero dan font utama tanpa mengganti tampilannya.
- Konfigurasi opsional verifikasi Google Search Console.

Satu h1 dan hierarki heading yang ada dipertahankan. Tidak ditambahkan keyword tersembunyi, rating, tanggal pembaruan palsu, route proyek fiktif, atau hreflang untuk bahasa yang tidak mempunyai URL sendiri. Proyek yang baru muncul setelah tombol tampilkan lainnya tetap mengikuti perilaku semula; tidak dijanjikan terindeks sebagai halaman terpisah.

## Validasi

- ESLint dan production build, termasuk pemeriksaan TypeScript.
- `npm run check:seo`: canonical, structured data, custom domain/Vercel, preview/local noindex, validasi URL, robots dan sitemap.
- Referensi seluruh 19 proyek dan 63 aset aktif: tidak ada berkas hilang atau gambar tanpa referensi.
- Markup portfolio dibandingkan dengan build sebelum audit: identik setelah normalisasi ekstensi aset, hash CSS Modules dan penghapusan tombol pause yang sudah tersembunyi.

Perbandingan ini merupakan pemeriksaan statis, bukan screenshot browser atau pengukuran Lighthouse/Core Web Vitals. Indexing, Rich Results dan performa jaringan produksi perlu diperiksa setelah deployment; tidak ada jaminan peringkat pencarian.

## Rujukan

- [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables)
- [Google canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- Panduan metadata, robots, sitemap dan JSON-LD Next.js dari `node_modules/next/dist/docs/` sesuai versi terpasang.
