"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Expand, X } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import styles from "./project.module.css";

const copy = {
  id: {
    back: "Kembali ke proyek", nav: "Navigasi detail proyek", label: "Detail proyek",
    category: "Website Perusahaan", status: "Website dipublikasikan",
    intro: "Ruang digital untuk memperkenalkan Uwais Pictures, menampilkan karya film, dan membagikan kabar terbaru dari rumah produksi.",
    website: "Buka Website", code: "Lihat Kode", theme: "Ganti tema",
    preview: "Tampilan website", caption: "Halaman depan Uwais Pictures dengan pengenalan studio dan pilihan karya film.",
    enlarge: "Perbesar screenshot", close: "Tutup screenshot", imageAlt: "Halaman depan Uwais Pictures dengan katalog film dan identitas rumah produksi",
    overview: "Tentang proyek", overviewText: "Website ini menyatukan profil rumah produksi, katalog film, dan berita dalam satu tempat. Pengunjung dapat menjelajahi karya, membaca informasi produksi, serta menghubungi tim melalui formulir kontak.",
    features: "Fitur utama",
    featureList: [
      ["Katalog & detail film", "Menampilkan pilihan karya film beserta halaman informasi produksinya."],
      ["Berita & profil perusahaan", "Menyajikan kabar terbaru dan informasi mengenai rumah produksi."],
      ["Bahasa Indonesia & Inggris", "Halaman tersedia dalam dua bahasa dengan pasangan terjemahan."],
      ["Formulir kontak", "Pesan diproses melalui endpoint PHP dengan dukungan PHPMailer dan SMTP."],
    ],
    stack: "Teknologi & komponen", stackIntro: "Bagian utama yang menyusun website dan fungsi masing-masing.",
    technology: [
      ["Eleventy 3", "Membangun halaman statis dari template dan data konten."],
      ["Nunjucks", "Menyusun layout dan komponen tampilan yang dapat digunakan kembali."],
      ["Tailwind CSS 3", "Mengatur tampilan responsif, tata letak, warna, dan tipografi."],
      ["JavaScript", "Mendukung interaksi pada antarmuka website."],
      ["PHP / PHPMailer", "Memproses formulir kontak dan mengirim pesan melalui konfigurasi SMTP server."],
    ],
    architecture: "Cara website disusun",
    architectureText: "Halaman dan template berada di src/, komponen bersama di _includes/, dan data konten di _data/. Eleventy menghasilkan website statis ke _site/, sedangkan endpoint kontak PHP berjalan pada server yang mendukung PHP.",
    explore: "Jelajahi proyeknya", exploreText: "Lihat website yang dipublikasikan atau pelajari implementasinya melalui repository.",
    footer: "Portofolio Bagus Mahmudie",
  },
  en: {
    back: "Back to projects", nav: "Project detail navigation", label: "Project detail",
    category: "Company Website", status: "Published website",
    intro: "A digital space introducing Uwais Pictures, showcasing its films, and sharing the latest news from the production company.",
    website: "Visit Website", code: "View Code", theme: "Change theme",
    preview: "Website preview", caption: "The Uwais Pictures homepage introduces the studio and highlights its films.",
    enlarge: "Enlarge screenshot", close: "Close screenshot", imageAlt: "Uwais Pictures homepage showing the film catalog and production company identity",
    overview: "About the project", overviewText: "The website brings the production company profile, film catalog, and news together. Visitors can explore films, read production information, and reach the team through a contact form.",
    features: "Key features",
    featureList: [
      ["Film catalog & detail pages", "Showcases selected films with dedicated production information pages."],
      ["News & company profile", "Presents recent updates and information about the production company."],
      ["Indonesian & English", "Pages are available in two languages with paired translations."],
      ["Contact form", "Messages are processed through a PHP endpoint using PHPMailer and SMTP."],
    ],
    stack: "Technologies & components", stackIntro: "The building blocks of the website and the purpose of each.",
    technology: [
      ["Eleventy 3", "Generates static pages from templates and content data."],
      ["Nunjucks", "Organizes reusable layouts and interface components."],
      ["Tailwind CSS 3", "Handles responsive styling, layout, colors, and typography."],
      ["JavaScript", "Supports interactions in the website interface."],
      ["PHP / PHPMailer", "Processes contact submissions and sends messages through server SMTP configuration."],
    ],
    architecture: "How the website is organized",
    architectureText: "Pages and templates live in src/, shared components in _includes/, and content data in _data/. Eleventy generates the static website in _site/, while the contact endpoint runs on a PHP-capable server.",
    explore: "Explore the project", exploreText: "Visit the published website or explore its implementation in the repository.",
    footer: "Bagus Mahmudie Portfolio",
  },
};

const screenshot = "/images/project-backgrounds/uwais-pictures.png";

export default function UwaisProject() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const dialog = useRef<HTMLDialogElement>(null);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#project-content">{lang === "id" ? "Langsung ke konten" : "Skip to content"}</a>
      <nav className="site-nav affixed" aria-label={t.nav}>
        <div className="container nav-inner">
          <Link className="brand" href="/">Bagus.</Link>
          <div className={styles.navTools}>
            <Link className={styles.back} href="/#portfolio" aria-label={t.back}><ArrowLeft size={16} aria-hidden="true" /><span>{t.back}</span></Link>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      <main id="project-content" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">{t.label} / 01</p>
          <h1>Uwais Pictures</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.meta}><span>{t.category}</span><span className={styles.status}>{t.status}</span></div>
          <div className={styles.actions}>
            <a className="button button-primary" href="https://uwaispictures.id/" target="_blank" rel="noopener noreferrer">{t.website}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="button button-outline" href="https://github.com/bagus-mahmudie/uwais-pictures" target="_blank" rel="noopener noreferrer">{t.code}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </header>

        <section className={styles.preview} aria-labelledby="preview-heading">
          <div className={styles.sectionTop}><h2 id="preview-heading">{t.preview}</h2><span>01 / 01</span></div>
          <figure>
            <button className={styles.screenshot} onClick={() => dialog.current?.showModal()} aria-label={t.enlarge} aria-haspopup="dialog">
              <Image src={screenshot} alt={t.imageAlt} width={879} height={586} sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1158px) calc(100vw - 48px), 1110px" priority unoptimized />
              <span className={styles.expand}><Expand size={16} aria-hidden="true" />{t.enlarge}</span>
            </button>
            <figcaption>{t.caption}</figcaption>
          </figure>
        </section>

        <section className={styles.overview} aria-labelledby="overview-heading">
          <h2 id="overview-heading">{t.overview}</h2><p>{t.overviewText}</p>
        </section>

        <section className={styles.section} aria-labelledby="features-heading">
          <h2 id="features-heading">{t.features}</h2>
          <div className={styles.features}>
            {t.featureList.map(([title, description], index) => (
              <article key={title} className={styles.feature}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="stack-heading">
          <h2 id="stack-heading">{t.stack}</h2><p>{t.stackIntro}</p>
          <dl className={styles.technology}>
            {t.technology.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}
          </dl>
          <div className={styles.architecture}><h3>{t.architecture}</h3><p>{t.architectureText}</p></div>
        </section>

        <section className={styles.cta}>
          <h2>{t.explore}</h2><p>{t.exploreText}</p>
          <div className={styles.actions}>
            <a className="button button-primary" href="https://uwaispictures.id/" target="_blank" rel="noopener noreferrer">{t.website}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="button button-outline" href="https://github.com/bagus-mahmudie/uwais-pictures" target="_blank" rel="noopener noreferrer">{t.code}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <Link className={styles.returnLink} href="/#portfolio"><ArrowLeft size={16} aria-hidden="true" />{t.back}</Link>
        </section>
      </main>
      <ThemeToggle label={t.theme} />
      <BackToTop lang={lang} />
      <footer className={styles.footer}>© 2026 {t.footer}</footer>

      <dialog ref={dialog} className={styles.dialog} aria-label={t.preview} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className={styles.close} onClick={() => dialog.current?.close()} aria-label={t.close} autoFocus><X size={22} aria-hidden="true" /></button>
        <Image src={screenshot} alt={t.imageAlt} width={879} height={586} unoptimized />
        <p>{t.caption}</p>
      </dialog>
    </div>
  );
}
