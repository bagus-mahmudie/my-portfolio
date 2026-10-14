"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import styles from "./project.module.css";

const copy = {
  id: {
    back: "Kembali ke proyek",
    nav: "Navigasi detail proyek",
    intro:
      "Ruang digital untuk memperkenalkan Uwais Pictures, menampilkan karya film, dan membagikan kabar terbaru dari rumah produksi.",
    website: "Buka Website",
    code: "Lihat Kode",
    theme: "Ganti tema",
    previous: "Gambar sebelumnya",
    next: "Gambar berikutnya",
    slide: "Gambar",
    carousel: "Galeri screenshot",
    preview: "Tampilan website",
    enlarge: "Perbesar screenshot",
    close: "Tutup screenshot",
    overview: "Tentang proyek",
    overviewText:
      "Website ini menyatukan profil rumah produksi, katalog film, dan berita dalam satu tempat. Pengunjung dapat menjelajahi karya, membaca informasi produksi, serta menghubungi tim melalui formulir kontak.",
    features: "Fitur utama",
    featureList: [
      [
        "Katalog & detail film",
        "Menampilkan pilihan karya film beserta halaman informasi produksinya.",
      ],
      [
        "Berita & profil perusahaan",
        "Menyajikan kabar terbaru dan informasi mengenai rumah produksi.",
      ],
      [
        "Bahasa Indonesia & Inggris",
        "Halaman tersedia dalam dua bahasa dengan pasangan terjemahan.",
      ],
      [
        "Formulir kontak",
        "Pesan diproses melalui endpoint PHP dengan dukungan PHPMailer dan SMTP.",
      ],
    ],
    stack: "Teknologi & komponen",
    stackIntro: "Bagian utama yang menyusun website dan fungsi masing-masing.",
    technology: [
      ["Eleventy 3", "Membangun halaman statis dari template dan data konten."],
      [
        "Nunjucks",
        "Menyusun layout dan komponen tampilan yang dapat digunakan kembali.",
      ],
      [
        "Tailwind CSS 3",
        "Mengatur tampilan responsif, tata letak, warna, dan tipografi.",
      ],
      ["JavaScript", "Mendukung interaksi pada antarmuka website."],
      [
        "PHP / PHPMailer",
        "Memproses formulir kontak dan mengirim pesan melalui konfigurasi SMTP server.",
      ],
    ],
    footer: "Portofolio Bagus Mahmudie",
  },
  en: {
    back: "Back to projects",
    nav: "Project detail navigation",
    intro:
      "A digital space introducing Uwais Pictures, showcasing its films, and sharing the latest news from the production company.",
    website: "Visit Website",
    code: "View Code",
    theme: "Change theme",
    previous: "Previous image",
    next: "Next image",
    slide: "Image",
    carousel: "Screenshot carousel",
    preview: "Website preview",
    enlarge: "Enlarge screenshot",
    close: "Close screenshot",
    overview: "About the project",
    overviewText:
      "The website brings the production company profile, film catalog, and news together. Visitors can explore films, read production information, and reach the team through a contact form.",
    features: "Key features",
    featureList: [
      [
        "Film catalog & detail pages",
        "Showcases selected films with dedicated production information pages.",
      ],
      [
        "News & company profile",
        "Presents recent updates and information about the production company.",
      ],
      [
        "Indonesian & English",
        "Pages are available in two languages with paired translations.",
      ],
      [
        "Contact form",
        "Messages are processed through a PHP endpoint using PHPMailer and SMTP.",
      ],
    ],
    stack: "Technologies & components",
    stackIntro: "The building blocks of the website and the purpose of each.",
    technology: [
      ["Eleventy 3", "Generates static pages from templates and content data."],
      ["Nunjucks", "Organizes reusable layouts and interface components."],
      [
        "Tailwind CSS 3",
        "Handles responsive styling, layout, colors, and typography.",
      ],
      ["JavaScript", "Supports interactions in the website interface."],
      [
        "PHP / PHPMailer",
        "Processes contact submissions and sends messages through server SMTP configuration.",
      ],
    ],
    footer: "Bagus Mahmudie Portfolio",
  },
};

const screenshots = [
  {
    id: "01-home",
    src: "/images/projects/uwais-pictures/01-home.png",
    width: 1511,
    height: 850,
    alt: {
      id: "Beranda Uwais Pictures dengan pengenalan studio dan film pilihan",
      en: "Uwais Pictures homepage with studio introduction and featured films",
    },
  },
  {
    id: "02-about",
    src: "/images/projects/uwais-pictures/02-about.png",
    width: 1522,
    height: 856,
    alt: {
      id: "Halaman Tentang Kami dengan profil pimpinan Uwais Pictures",
      en: "About page featuring the Uwais Pictures leadership team",
    },
  },
  {
    id: "03-films",
    src: "/images/projects/uwais-pictures/03-films.png",
    width: 1524,
    height: 857,
    alt: {
      id: "Katalog film Uwais Pictures: Timur, Ikatan Darah, dan Pasung",
      en: "Uwais Pictures film catalog: Timur, Ikatan Darah, and Pasung",
    },
  },
  {
    id: "04-film-detail",
    src: "/images/projects/uwais-pictures/04-film-detail.png",
    width: 1207,
    height: 679,
    alt: {
      id: "Halaman detail film Ikatan Darah dengan informasi dan trailer",
      en: "Ikatan Darah film detail page with information and trailer",
    },
  },
  {
    id: "05-contact",
    src: "/images/projects/uwais-pictures/05-contact.png",
    width: 1257,
    height: 707,
    alt: {
      id: "Halaman Kontak Kami dengan formulir pesan Uwais Pictures",
      en: "Uwais Pictures contact page and message form",
    },
  },
  {
    id: "06-news",
    src: "/images/projects/uwais-pictures/06-news.png",
    width: 1440,
    height: 810,
    alt: {
      id: "Halaman berita dan artikel terkait Uwais Pictures",
      en: "Uwais Pictures news and related articles",
    },
  },
];

export default function UwaisProject() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];
  const moveSlide = (direction: number) =>
    setActiveIndex(
      (index) => (index + direction + screenshots.length) % screenshots.length,
    );
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={styles.page}>
      <a className="skip-link" href="#project-content">
        {lang === "id" ? "Langsung ke konten" : "Skip to content"}
      </a>
      <nav className="site-nav affixed" aria-label={t.nav}>
        <div className="container nav-inner">
          <Link className="brand" href="/">
            Bagus.
          </Link>
          <div className={styles.navTools}>
            <Link
              className={styles.back}
              href="/#portfolio"
              aria-label={t.back}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>{t.back}</span>
            </Link>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>

      <main id="project-content" className={styles.main}>
        <header className={styles.hero}>
          <h1>Uwais Pictures</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://uwaispictures.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/uwais-pictures"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.code}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </header>

        <section
          className={styles.preview}
          aria-labelledby="preview-heading"
          aria-roledescription={t.carousel}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              moveSlide(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              moveSlide(1);
            }
          }}
        >
          <div className={styles.sectionTop}>
            <h2 id="preview-heading">{t.preview}</h2>
            <span aria-live="polite" aria-atomic="true">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(screenshots.length).padStart(2, "0")}
            </span>
          </div>
          <figure>
            <div className={styles.viewport} id="uwais-screenshots">
              <div
                className={styles.track}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={styles.slide}
                    role="group"
                    aria-label={`${t.slide} ${index + 1} / ${screenshots.length}`}
                    aria-hidden={index !== activeIndex}
                    inert={index !== activeIndex}
                  >
                    <button
                      className={styles.screenshot}
                      onClick={() => dialog.current?.showModal()}
                      aria-label={t.enlarge}
                      aria-haspopup="dialog"
                    >
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt[lang]}
                        width={screenshot.width}
                        height={screenshot.height}
                        sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1158px) calc(100vw - 48px), 1110px"
                        priority={index === 0}
                        unoptimized
                      />
                      <span className={styles.expand}>
                        <Expand size={16} aria-hidden="true" />
                        {t.enlarge}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className={`${styles.navButton} ${styles.previous}`}
                onClick={() => moveSlide(-1)}
                aria-label={t.previous}
                aria-controls="uwais-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="uwais-screenshots"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
            <div className={styles.carouselNav}>
              <div className={styles.dots}>
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.id}
                    type="button"
                    className={styles.dot}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${t.slide} ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    aria-controls="uwais-screenshots"
                  />
                ))}
              </div>
            </div>
          </figure>
        </section>

        <section className={styles.overview} aria-labelledby="overview-heading">
          <h2 id="overview-heading">{t.overview}</h2>
          <p>{t.overviewText}</p>
        </section>

        <section className={styles.section} aria-labelledby="features-heading">
          <h2 id="features-heading">{t.features}</h2>
          <div className={styles.features}>
            {t.featureList.map(([title, description], index) => (
              <article key={title} className={styles.feature}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="stack-heading">
          <h2 id="stack-heading">{t.stack}</h2>
          <p>{t.stackIntro}</p>
          <dl className={styles.technology}>
            {t.technology.map(([name, description]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <ThemeToggle label={t.theme} />
      <BackToTop lang={lang} />
      <footer className={styles.footer}>© 2026 {t.footer}</footer>

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={t.preview}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className={styles.close}
          onClick={() => dialog.current?.close()}
          aria-label={t.close}
          autoFocus
        >
          <X size={22} aria-hidden="true" />
        </button>
        <Image
          src={activeScreenshot.src}
          alt={activeScreenshot.alt[lang]}
          width={activeScreenshot.width}
          height={activeScreenshot.height}
          unoptimized
        />
      </dialog>
    </div>
  );
}
