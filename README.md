# Bagus Mahmudie — Developer Portfolio

Portofolio pribadi **Bagus Mahmudie**, Full-Stack Web Developer berbasis di Jakarta. Website ini memperkenalkan profil, layanan, dan teknologi yang digunakan, serta mendokumentasikan **19 proyek** melalui halaman detail dengan screenshot, fitur, dan penjelasan implementasi.

**[Kunjungi Website](https://bagus-mahmudie-portfolio.vercel.app/)** · [Jelajahi Proyek](https://bagus-mahmudie-portfolio.vercel.app/#portfolio) · [LinkedIn](https://www.linkedin.com/in/bagus-mahmudie/) · [Hubungi Saya](mailto:bagusmahmudie@gmail.com)

[![Bagus Mahmudie — Full-Stack Web Developer](public/social-preview.png)](https://bagus-mahmudie-portfolio.vercel.app/)

## Tentang Proyek

Dibangun dengan Next.js App Router, React, dan TypeScript, portofolio ini menjadi tempat untuk menjelajahi pekerjaan pengembangan website perusahaan, aplikasi bisnis, e-commerce, dashboard, dan studi antarmuka.

Setiap kartu proyek mengarahkan pengunjung ke halaman detail. Tautan kode sumber dan website, jika tersedia, ditempatkan pada halaman tersebut agar informasi proyek lebih mudah dipahami sebelum dikunjungi.

## Fitur Utama

- **Desain responsif** untuk desktop, tablet, dan mobile.
- **Tema terang dan gelap** dengan kontrol berbentuk lampu serta penyimpanan preferensi tema.
- **Konten Indonesia dan Inggris** melalui tombol pergantian bahasa.
- **Carousel teknologi** dengan animasi berulang dan dukungan preferensi reduced motion.
- **Galeri proyek** dengan filter kategori dan tombol untuk menampilkan proyek lainnya.
- **19 halaman detail proyek** dengan ringkasan, fitur, teknologi, dan screenshot.
- **Carousel screenshot** dengan navigasi sebelumnya/berikutnya, indikator posisi, dan tampilan perbesar gambar.
- **Kartu proyek bertema** dengan preview website dan logo yang disesuaikan.
- **Form kontak Gmail** yang menyiapkan nama, email, dan pesan pengunjung.
- **Navigasi tambahan** berupa tombol kembali ke atas serta tautan GitHub, LinkedIn, WhatsApp, dan email.
- **Konfigurasi SEO** berupa metadata, canonical URL, Open Graph, Twitter Card, JSON-LD, robots, dan sitemap.

> Form kontak membuka Gmail compose. Pesan dikirim setelah pengunjung menekan **Kirim** di Gmail; website tidak mengirim atau menyimpan pesan melalui backend sendiri.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Framework | Next.js 16.4 — App Router |
| Antarmuka | React 19.3, TypeScript |
| Styling | Tailwind CSS 4, CSS Modules, CSS custom |
| Pengelolaan tema | next-themes |
| Ikon | Lucide React dan aset SVG lokal |
| Tipografi | Baloo Paaji dan Open Sans, disajikan lokal |
| Pemeriksaan kode | ESLint, TypeScript |
| Deployment | Vercel |

Versi dependency dan perintah proyek tersedia di [package.json](package.json). Konfigurasi bundler menggunakan Turbopack dengan integrasi `@tailwindcss/turbopack`.

## Proyek yang Ditampilkan

Semua proyek berikut memiliki halaman detail di website portofolio.

| Proyek | Kategori |
| --- | --- |
| [Uwais Pictures](https://bagus-mahmudie-portfolio.vercel.app/projects/uwais-pictures) | Company Website |
| [Grand Ontama](https://bagus-mahmudie-portfolio.vercel.app/projects/grand-ontama) | Property Website |
| [Egginestudio](https://bagus-mahmudie-portfolio.vercel.app/projects/eggine-studio) | Company Website |
| [888Living](https://bagus-mahmudie-portfolio.vercel.app/projects/888living) | Company Website |
| [Mitra Elang Bersatu](https://bagus-mahmudie-portfolio.vercel.app/projects/mitra-elang-bersatu) | Company Website |
| [Nymgo](https://bagus-mahmudie-portfolio.vercel.app/projects/nymgo) | Landing Page |
| [Grand Ontama Dashboard](https://bagus-mahmudie-portfolio.vercel.app/projects/grand-ontama-dashboard) | Administration Dashboard |
| [Drubbix](https://bagus-mahmudie-portfolio.vercel.app/projects/drubbix) | Company Website |
| [PT Sentral Layanan Prima](https://bagus-mahmudie-portfolio.vercel.app/projects/pt-sentral-layanan-prima) | Company Website |
| [Catkuji](https://bagus-mahmudie-portfolio.vercel.app/projects/catkuji) | Gacha Application |
| [Project Management](https://bagus-mahmudie-portfolio.vercel.app/projects/project-management) | Team Workspace |
| [Auto Trust](https://bagus-mahmudie-portfolio.vercel.app/projects/auto-trust) | Vehicle Marketplace |
| [Lova Dating Site](https://bagus-mahmudie-portfolio.vercel.app/projects/lova-dating-site) | Social Application |
| [SPK Asrama Kalteng](https://bagus-mahmudie-portfolio.vercel.app/projects/spk-asrama-kalteng) | Decision Support System |
| [Refactory Redesign](https://bagus-mahmudie-portfolio.vercel.app/projects/refactory-redesign) | UI Design Study |
| [Megah Abadi](https://bagus-mahmudie-portfolio.vercel.app/projects/megah-abadi) | E-commerce |
| [SIKD UNS](https://bagus-mahmudie-portfolio.vercel.app/projects/sikd-uns) | Academic Information System |
| [Dishub Uji Berkala](https://bagus-mahmudie-portfolio.vercel.app/projects/dishub-uji-berkala) | Vehicle Inspection System |
| [Grand Ontama V1](https://bagus-mahmudie-portfolio.vercel.app/projects/grand-ontama-v1) | Website Archive |

Ketersediaan website publik berbeda untuk setiap proyek. Grand Ontama Dashboard memerlukan akun resmi; proyek aplikasi, studi desain, dan arsip tetap dapat dijelajahi melalui dokumentasi serta screenshot yang tersedia.

## Menjalankan Secara Lokal

Siapkan Node.js dan npm yang kompatibel dengan versi Next.js pada [package.json](package.json). Gunakan versi Node.js yang sama dengan pengaturan deployment untuk menjaga konsistensi lingkungan.

```sh
git clone https://github.com/bagus-mahmudie/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk konfigurasi lokal, salin [.env.example](.env.example) menjadi `.env.local` jika diperlukan. Dependency dalam `node_modules` dipasang melalui npm dan tidak perlu diunggah ke GitHub.

## Perintah Pengembangan

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat build produksi |
| `npm start` | Menjalankan hasil build produksi |
| `npm run lint` | Memeriksa kode dengan ESLint |
| `npx tsc --noEmit` | Memeriksa tipe TypeScript |
| `npm run check:seo` | Memeriksa konfigurasi URL, indexing, structured data, robots, dan sitemap |
| `npm run generate:social` | Membuat ulang gambar sharing `public/social-preview.png` |

Jalankan pemeriksaan sebelum mengirim perubahan:

```sh
npm run lint
npx tsc --noEmit
npm run check:seo
npm run build
```

## Struktur Repository

```text
public/
  fonts/                 Font dan informasi lisensi
  images/                Foto profil, logo, dan screenshot proyek
  social-preview.png     Gambar preview saat tautan dibagikan
scripts/
  check-seo.mjs          Pemeriksaan konfigurasi SEO
  generate-social-preview.mjs
src/
  app/
    page.tsx             Halaman utama dan galeri proyek
    layout.tsx           Layout, provider, dan metadata global
    globals.css          Styling global
    robots.ts            Aturan crawler
    sitemap.ts           Daftar URL website
    projects/            Halaman detail masing-masing proyek
  components/            Komponen antarmuka
  data/                  Data proyek, terjemahan, dan presentasi
  lib/
    seo.ts               Konfigurasi situs dan structured data
```

## Mengelola Konten

| Kebutuhan | Lokasi |
| --- | --- |
| Nama, deskripsi, teknologi, dan tautan proyek | [src/data/projects.ts](src/data/projects.ts) |
| Teks antarmuka Indonesia/Inggris | [src/data/translations.ts](src/data/translations.ts) |
| Data presentasi proyek | [src/data/presentation.ts](src/data/presentation.ts) |
| Konten, screenshot, dan metadata detail | [src/app/projects](src/app/projects) |
| Aset gambar | [public/images](public/images) |
| Styling halaman utama | [src/app/globals.css](src/app/globals.css) |
| Metadata situs dan structured data | [src/lib/seo.ts](src/lib/seo.ts) |

Saat menambahkan proyek, perbarui data galeri, tautan menuju detail di halaman utama, halaman detail beserta asetnya, sitemap, dan pemeriksaan SEO. Sesuaikan konten dalam kedua bahasa.

## Deployment dan Konfigurasi SEO

Website dipublikasikan melalui Vercel dengan sumber dari repository GitHub ini.

1. Import repository ke Vercel menggunakan preset **Next.js**.
2. Sesuaikan versi Node.js dengan lingkungan pengembangan.
3. Atur domain utama dan environment variable bila diperlukan.
4. Deploy, lalu periksa homepage, halaman detail, `/robots.txt`, dan `/sitemap.xml`.

Konfigurasi URL berada di [src/lib/seo.ts](src/lib/seo.ts):

| Variabel | Penggunaan |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Override URL utama, misalnya `https://bagus-mahmudie-portfolio.vercel.app`; gunakan origin tanpa path, query, atau hash |
| `VERCEL_PROJECT_PRODUCTION_URL` | Domain produksi yang disediakan Vercel, digunakan jika override tidak diisi |
| `NODE_ENV` dan `VERCEL_ENV` | Menentukan apakah lingkungan boleh diindeks |

Konfigurasi saat ini mengizinkan indexing untuk produksi dengan URL nonlokal yang valid. Lingkungan lokal dan Vercel Preview ditandai agar tidak diindeks. Sitemap produksi mencakup homepage dan 19 halaman detail.

Verifikasi Google Search Console saat ini ditetapkan melalui `siteMetadata.verification.google` di `src/lib/seo.ts`. Variabel `GOOGLE_SITE_VERIFICATION` tercantum di `.env.example`, tetapi belum dibaca oleh implementasi saat ini.

Pergantian bahasa saat ini berlangsung pada URL yang sama. Metadata default menggunakan bahasa Indonesia; routing bahasa terpisah dan `hreflang` belum diterapkan. Pemeriksaan SEO internal memvalidasi konfigurasi, bukan mengukur Core Web Vitals atau menjamin peringkat pencarian.

## Referensi Desain dan Aset

Struktur visual mengadaptasi Meyawo karya DevCRUD, dengan penyesuaian pada komponen React, tema, navigasi, dan presentasi proyek. Referensi tambahan digunakan untuk carousel teknologi serta kontrol tema.

Lihat [DESIGN-SOURCES.md](DESIGN-SOURCES.md) untuk sumber desain, atribusi, dan catatan aset. Logo, merek, serta screenshot proyek tetap menjadi milik pemegang hak masing-masing.

## Kontak

Terbuka untuk pengembangan website, kolaborasi proyek, dan peluang kerja remote.

- **Email:** [bagusmahmudie@gmail.com](mailto:bagusmahmudie@gmail.com)
- **WhatsApp:** [+62 812-5404-7573](https://wa.me/6281254047573)
- **GitHub:** [@bagus-mahmudie](https://github.com/bagus-mahmudie)
- **LinkedIn:** [Bagus Mahmudie](https://www.linkedin.com/in/bagus-mahmudie/)
