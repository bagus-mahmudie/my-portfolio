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
    "intro": "Sistem Informasi Kinerja Dosen UNS untuk membantu pengelolaan data dosen, kegiatan akademik, dan laporan kinerja berdasarkan fakultas. Pengguna dapat meninjau data penelitian, publikasi, serta pengabdian melalui tabel dan grafik, lalu mengakses laporan serta ekspor data. Proyek menggunakan Laravel, Blade, dan MySQL.",
    "overviewText": "SIKD UNS memusatkan informasi dosen dan kategori kinerja dalam antarmuka administrasi. Ringkasan visual dan tabel membantu penelusuran data menurut tahun maupun fakultas, termasuk kinerja buku dan penelitian. Fitur laporan, ekspor data, serta integrasi autentikasi mendukung pengelolaan informasi akademik.",
    "featureList": [
      [
        "Data dosen",
        "Menyajikan informasi dosen serta ringkasan jumlah dan pendidikan dosen berdasarkan fakultas."
      ],
      [
        "Kategori kinerja",
        "Mengelompokkan kegiatan akademik, publikasi, penelitian, dan pengabdian untuk memudahkan penelusuran."
      ],
      [
        "Grafik & filter laporan",
        "Menampilkan ringkasan kinerja melalui grafik dan tabel dengan pilihan tahun serta fakultas."
      ],
      [
        "Ekspor & autentikasi",
        "Mendukung ekspor data dan akses pengguna melalui autentikasi aplikasi serta integrasi login."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Menangani autentikasi, pengelolaan data akademik, dan pemrosesan laporan."
      ],
      [
        "Blade",
        "Menyusun template halaman administrasi dan komponen tampilan."
      ],
      [
        "MySQL",
        "Menyimpan data dosen, fakultas, aktivitas akademik, dan kinerja."
      ],
      [
        "DataTables",
        "Mendukung penyajian dan penelusuran data dalam tabel."
      ],
      [
        "Laravel Excel",
        "Mendukung pengolahan dan ekspor data laporan dalam format spreadsheet."
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
    "intro": "An UNS lecturer performance information system for managing lecturer records, academic activities, and faculty-based performance reports. Users can review research, publications, and community service data through tables and charts, then access reports and data exports. The project uses Laravel, Blade, and MySQL.",
    "overviewText": "SIKD UNS centralizes lecturer information and performance categories in an administration interface. Visual summaries and tables support exploring data by year and faculty, including book publications and research. Reports, data exports, and authentication integration support academic information management.",
    "featureList": [
      [
        "Lecturer data",
        "Presents lecturer information and faculty-based summaries of lecturer counts and educational backgrounds."
      ],
      [
        "Performance categories",
        "Organizes academic activities, publications, research, and community service for easier exploration."
      ],
      [
        "Charts & report filters",
        "Displays performance summaries through charts and tables with year and faculty selections."
      ],
      [
        "Exports & authentication",
        "Supports data exports and user access through application authentication and login integration."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Handles authentication, academic data management, and report processing."
      ],
      [
        "Blade",
        "Builds administration page templates and interface components."
      ],
      [
        "MySQL",
        "Stores lecturers, faculties, academic activities, and performance records."
      ],
      [
        "DataTables",
        "Supports presenting and exploring tabular data."
      ],
      [
        "Laravel Excel",
        "Supports processing and exporting report data in spreadsheet formats."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/sikd-uns/01.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Halaman login SIKD UNS",
      "en": "SIKD UNS login page"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/sikd-uns/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Beranda dan ringkasan informasi kinerja dosen",
      "en": "Homepage and lecturer performance overview"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/sikd-uns/03.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Data dosen dan ringkasan per fakultas",
      "en": "Lecturer data and faculty summaries"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/sikd-uns/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Grafik kinerja buku berdasarkan tahun",
      "en": "Book publication performance charts by year"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/sikd-uns/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Grafik dan ringkasan data penelitian",
      "en": "Research data charts and summaries"
    }
  }
];

export default function SikdProject() {
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
          <h1>SIKD UNS</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/sikd-uns"
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
            <div className={styles.viewport} id="sikd-uns-screenshots">
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
                aria-controls="sikd-uns-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="sikd-uns-screenshots"
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
                    aria-controls="sikd-uns-screenshots"
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
