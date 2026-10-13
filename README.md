# Bagus Mahmudie — Portfolio

Portofolio pribadi **Bagus Mahmudie**, Full-Stack Web Developer berbasis di Jakarta. Menampilkan profil, layanan pengembangan web, teknologi yang digunakan, dan 19 proyek website maupun aplikasi.

**[Buka Website](https://bagus-mahmudie-portfolio.vercel.app/)** · [GitHub](https://github.com/bagus-mahmudie) · [LinkedIn](https://www.linkedin.com/in/bagus-mahmudie/)

[![Preview profil Bagus Mahmudie](public/social-preview.png)](https://bagus-mahmudie-portfolio.vercel.app/)

## Fitur

- Tampilan responsif untuk desktop, tablet, dan ponsel.
- Tema light/dark dengan tombol bergaya lampu dan penyimpanan preferensi tema.
- Konten bahasa Indonesia dan Inggris.
- Carousel teknologi dengan animasi berulang, pause saat hover/focus, dan dukungan reduced motion.
- Galeri 19 proyek dengan filter website/aplikasi, tombol tampilkan lainnya, tautan repository, dan website yang tersedia.
- Background kartu dari preview proyek serta logo yang disesuaikan dengan tema.
- Form kontak yang membuka Gmail compose berisi nama, email, dan pesan pengunjung.
- Tautan GitHub, LinkedIn, WhatsApp, dan email; tombol kembali ke atas.
- Metadata SEO, canonical, Open Graph, Twitter Card, JSON-LD, robots, dan sitemap.

> Form kontak tidak mengirim email otomatis. Pengunjung memeriksa pesan dan menekan **Kirim** di Gmail.

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, CSS Modules, CSS custom |
| Tema | next-themes |
| Ikon | Lucide React dan aset SVG lokal |
| Font | Baloo Paaji dan Open Sans, disajikan lokal |
| Hosting | Vercel |

Versi dependency lengkap tersedia di [package.json](package.json). Konfigurasi proyek menggunakan Turbopack dan integrasi `@tailwindcss/turbopack`.

## Menjalankan secara lokal

Prasyarat: **Node.js 20.9 atau lebih baru** dan npm. Gunakan versi Node.js yang masih didukung dan cocok dengan pengaturan deployment.

```sh
git clone https://github.com/bagus-mahmudie/my-portfolio.git
cd my-portfolio
npm ci
npm run dev
```

Buka [localhost:3000](http://localhost:3000). Jika repository privat, akun GitHub yang digunakan untuk clone harus mempunyai akses.

Konfigurasi environment tidak wajib untuk pengembangan lokal. Jika diperlukan, salin [.env.example](.env.example) menjadi `.env.local`, lalu isi variabel yang sesuai. Jangan commit file environment yang berisi token.



## Kontak

- Email: [bagusmahmudie@gmail.com](mailto:bagusmahmudie@gmail.com)
- WhatsApp: [+62 812-5404-7573](https://wa.me/6281254047573)
- GitHub: [@bagus-mahmudie](https://github.com/bagus-mahmudie)
- LinkedIn: [Bagus Mahmudie](https://www.linkedin.com/in/bagus-mahmudie/)
