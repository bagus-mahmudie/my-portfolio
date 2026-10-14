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
  "id": {
    "back": "Kembali ke proyek",
    "nav": "Navigasi detail proyek",
    "website": "Buka Website",
    "code": "Lihat Kode",
    "theme": "Ganti tema",
    "previous": "Gambar sebelumnya",
    "next": "Gambar berikutnya",
    "slide": "Gambar",
    "carousel": "Galeri screenshot",
    "preview": "Tampilan website",
    "enlarge": "Perbesar screenshot",
    "close": "Tutup screenshot",
    "overview": "Tentang proyek",
    "features": "Fitur utama",
    "stack": "Teknologi & komponen",
    "stackIntro": "Bagian utama yang menyusun website dan fungsi masing-masing.",
    "footer": "Portofolio Bagus Mahmudie",
    "intro": "Website properti untuk memperkenalkan hunian Grand Ontama melalui pilihan tipe rumah, fasilitas kawasan, dan galeri interior. Pengunjung dapat menelusuri detail hunian, mengenal lokasi serta lingkungan sekitar, membaca tips properti, dan menghubungi tim untuk konsultasi maupun menjadwalkan kunjungan.",
    "overviewText": "Grand Ontama menyatukan informasi perumahan dalam website yang membantu calon penghuni mengenal pilihan rumah sebelum berkunjung. Foto eksterior dan interior, spesifikasi bangunan, denah, harga, serta fasilitas disajikan bersama informasi lokasi dan formulir kontak agar proses pencarian hunian lebih terarah.",
    "featureList": [
      [
        "Tipe & detail hunian",
        "Menampilkan pilihan rumah beserta foto, harga, spesifikasi bangunan, fasilitas ruang, dan denah."
      ],
      [
        "Galeri, fasilitas & lokasi",
        "Memperkenalkan desain interior, fasilitas kawasan, serta akses menuju tempat penting di sekitar perumahan."
      ],
      [
        "Artikel properti",
        "Menyediakan informasi dan tips seputar pencarian rumah serta hunian."
      ],
      [
        "Konsultasi & kunjungan",
        "Formulir kontak untuk pertanyaan dan permintaan kunjungan, dengan pengiriman email melalui SMTP serta perlindungan reCAPTCHA."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Membangun halaman statis dari template dan data konten properti."
      ],
      [
        "Nunjucks",
        "Menyusun layout dan komponen halaman yang dapat digunakan kembali."
      ],
      [
        "Tailwind CSS 4",
        "Mengatur tata letak responsif, warna, dan tipografi."
      ],
      [
        "JavaScript / Sharp",
        "Mendukung interaksi antarmuka dan pemrosesan gambar responsif saat build."
      ],
      [
        "PHP / PHPMailer",
        "Memproses formulir kontak melalui SMTP dengan validasi reCAPTCHA."
      ]
    ]
  },
  "en": {
    "back": "Back to projects",
    "nav": "Project detail navigation",
    "website": "Visit Website",
    "code": "View Code",
    "theme": "Change theme",
    "previous": "Previous image",
    "next": "Next image",
    "slide": "Image",
    "carousel": "Screenshot carousel",
    "preview": "Website preview",
    "enlarge": "Enlarge screenshot",
    "close": "Close screenshot",
    "overview": "About the project",
    "features": "Key features",
    "stack": "Technologies & components",
    "stackIntro": "The building blocks of the website and the purpose of each.",
    "footer": "Bagus Mahmudie Portfolio",
    "intro": "A property website introducing Grand Ontama through house types, residential facilities, and interior galleries. Visitors can explore home details, discover the location and surrounding area, read property tips, and contact the team for a consultation or to arrange a visit.",
    "overviewText": "Grand Ontama brings residential information together to help prospective residents explore their options before visiting. Exterior and interior photographs, building specifications, floor plans, prices, and facilities sit alongside location information and a contact form to support the search for a home.",
    "featureList": [
      [
        "House types & property details",
        "Presents homes with photographs, prices, building specifications, room features, and floor plans."
      ],
      [
        "Gallery, facilities & location",
        "Showcases interiors, residential amenities, and access to nearby places of interest."
      ],
      [
        "Property articles",
        "Provides information and tips about finding a home and residential living."
      ],
      [
        "Consultation & visits",
        "A contact form for inquiries and visit requests, with SMTP email delivery and reCAPTCHA protection."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Generates static pages from templates and property content."
      ],
      [
        "Nunjucks",
        "Organizes reusable layouts and page components."
      ],
      [
        "Tailwind CSS 4",
        "Handles responsive layouts, colors, and typography."
      ],
      [
        "JavaScript / Sharp",
        "Supports interface interactions and responsive image processing during builds."
      ],
      [
        "PHP / PHPMailer",
        "Processes contact submissions via SMTP with reCAPTCHA validation."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/grand-ontama/01.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Beranda dan eksterior hunian Grand Ontama",
      "en": "Grand Ontama homepage and residential exterior"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/grand-ontama/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Galeri desain interior Grand Ontama",
      "en": "Grand Ontama interior design gallery"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/grand-ontama/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Carousel detail interior Grand Ontama",
      "en": "Grand Ontama interior detail carousel"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/grand-ontama/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Lokasi dan akses sekitar Grand Ontama",
      "en": "Grand Ontama location and nearby destinations"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/grand-ontama/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Fasilitas kawasan Grand Ontama",
      "en": "Grand Ontama residential amenities"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/grand-ontama/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Galeri detail rumah Grand Ontama",
      "en": "Grand Ontama property detail gallery"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/grand-ontama/07.png",
    "width": 1567,
    "height": 882,
    "alt": {
      "id": "Spesifikasi, harga, dan denah rumah Grand Ontama",
      "en": "Grand Ontama home specifications, pricing, and floor plans"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/grand-ontama/08.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Artikel dan tips properti Grand Ontama",
      "en": "Grand Ontama property articles and tips"
    }
  },
  {
    "id": "09",
    "src": "/images/projects/grand-ontama/09.png",
    "width": 1567,
    "height": 882,
    "alt": {
      "id": "Formulir konsultasi dan jadwal kunjungan Grand Ontama",
      "en": "Grand Ontama consultation and visit request form"
    }
  }
];

export default function GrandOntamaProject() {
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
          <h1>Grand Ontama</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://grandontama.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/grand-ontama"
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
            <div className={styles.viewport} id="grand-ontama-screenshots">
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
                aria-controls="grand-ontama-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="grand-ontama-screenshots"
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
                    aria-controls="grand-ontama-screenshots"
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
