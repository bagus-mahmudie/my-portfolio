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
    "intro": "Versi awal website Grand Ontama untuk memperkenalkan hunian, pilihan tipe rumah, desain interior, dan fasilitas kawasan. Pengunjung dapat menjelajahi informasi Luxora, Melodia, dan Verona, mengenal lokasi sekitar, membaca artikel properti, serta menghubungi tim melalui formulir kontak. Proyek ini disimpan sebagai dokumentasi pengembangan V1.",
    "overviewText": "Grand Ontama V1 menyajikan informasi perumahan melalui halaman HTML, galeri, kartu properti, dan artikel. Konten mencakup tipe rumah, interior, fasilitas, akses lokasi, serta profil hunian. Versi ini merupakan implementasi awal; website Grand Ontama yang aktif menggunakan proyek redesign terpisah.",
    "featureList": [
      [
        "Tipe hunian",
        "Menyediakan halaman informasi rumah Luxora, Melodia, dan Verona dengan visual serta rincian tipe hunian."
      ],
      [
        "Interior & fasilitas",
        "Menampilkan galeri interior dan informasi fasilitas kawasan untuk memperkenalkan lingkungan hunian."
      ],
      [
        "Lokasi & artikel",
        "Menyajikan akses menuju tempat sekitar, berita, dan artikel seputar properti."
      ],
      [
        "Formulir kontak",
        "Menghubungkan pertanyaan pengunjung dengan proses pengiriman email berbasis PHP dan PHPMailer."
      ]
    ],
    "technology": [
      [
        "HTML",
        "Menyusun struktur halaman hunian, fasilitas, profil, dan artikel."
      ],
      [
        "Tailwind CSS 4",
        "Mengatur tata letak responsif, warna, tipografi, dan styling komponen."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka, navigasi, dan galeri."
      ],
      [
        "PHP / PHPMailer",
        "Memproses formulir kontak dan pengiriman email dengan konfigurasi server terkait."
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
    "intro": "The initial Grand Ontama website introduces residential properties, house types, interior designs, and neighborhood facilities. Visitors can explore Luxora, Melodia, and Verona, discover nearby locations, read property articles, and contact the team through a form. This project preserves the V1 implementation.",
    "overviewText": "Grand Ontama V1 presents residential information through HTML pages, galleries, property cards, and articles. Content covers house types, interiors, facilities, location access, and the residential profile. This is the initial implementation; the active Grand Ontama website uses a separate redesign project.",
    "featureList": [
      [
        "House types",
        "Provides information pages for Luxora, Melodia, and Verona with visuals and house type details."
      ],
      [
        "Interiors & facilities",
        "Displays interior galleries and neighborhood facilities to introduce the residential environment."
      ],
      [
        "Location & articles",
        "Presents access to nearby places, news, and property articles."
      ],
      [
        "Contact form",
        "Connects visitor inquiries to PHP and PHPMailer email processing."
      ]
    ],
    "technology": [
      [
        "HTML",
        "Builds property, facility, profile, and article page structures."
      ],
      [
        "Tailwind CSS 4",
        "Handles responsive layouts, colors, typography, and component styling."
      ],
      [
        "JavaScript",
        "Supports interface interactions, navigation, and galleries."
      ],
      [
        "PHP / PHPMailer",
        "Processes contact submissions and email delivery using the corresponding server configuration."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/grand-ontama-v1/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda Grand Ontama V1",
      "en": "Grand Ontama V1 homepage"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/grand-ontama-v1/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Pilihan tipe Luxora, Verona, dan Melodia",
      "en": "Luxora, Verona, and Melodia house types"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/grand-ontama-v1/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Galeri interior Grand Ontama",
      "en": "Grand Ontama interior gallery"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/grand-ontama-v1/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Lokasi dan fasilitas sekitar",
      "en": "Location and nearby destinations"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/grand-ontama-v1/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Formulir dan informasi kontak",
      "en": "Contact form and information"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/grand-ontama-v1/06.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Profil dan pengenalan hunian",
      "en": "Residential profile and introduction"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/grand-ontama-v1/07.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Fasilitas kawasan Grand Ontama",
      "en": "Grand Ontama residential facilities"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/grand-ontama-v1/08.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Sorotan artikel properti",
      "en": "Featured property articles"
    }
  },
  {
    "id": "09",
    "src": "/images/projects/grand-ontama-v1/09.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Daftar berita dan artikel",
      "en": "News and article listing"
    }
  }
];

export default function GrandOntamaV1Project() {
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
          <h1>Grand Ontama V1</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/grand-ontama-v1"
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
            <div className={styles.viewport} id="grand-ontama-v1-screenshots">
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
                aria-controls="grand-ontama-v1-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="grand-ontama-v1-screenshots"
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
                    aria-controls="grand-ontama-v1-screenshots"
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
