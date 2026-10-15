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
    "intro": "Website Drubbix untuk memperkenalkan layanan pengangkutan sampah dan produk hasil pengolahan organik. Pengunjung dapat mengenal layanan pickup, memahami alur pengambilan sampah, menjelajahi produk maggot, membaca informasi perusahaan, serta melihat dokumentasi kegiatan dan menemukan kontak layanan.",
    "overviewText": "Drubbix menyatukan informasi layanan pengelolaan sampah dan produk maggot dalam website dengan identitas hijau. Halaman layanan menjelaskan proses pickup, sementara katalog produk memperkenalkan maggot kering, maggot hidup, dan kasgot. Profil perusahaan, artikel edukasi, dan galeri kegiatan melengkapi informasi bagi calon pelanggan.",
    "featureList": [
      [
        "Layanan pickup sampah",
        "Memperkenalkan jasa pengangkutan sampah untuk kebutuhan bisnis, termasuk restoran dan hotel, serta antarmuka permintaan pickup."
      ],
      [
        "Alur layanan",
        "Menjelaskan tahapan pemesanan, konfirmasi jadwal, pengambilan sampah, hingga dokumentasi dan laporan."
      ],
      [
        "Produk maggot",
        "Menyajikan informasi produk maggot kering, maggot hidup, dan kasgot beserta tautan pemesanan."
      ],
      [
        "Profil, edukasi & galeri",
        "Memuat profil dan visi perusahaan, artikel pengelolaan sampah, serta dokumentasi kegiatan dan layanan."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Menyusun struktur halaman dan tampilan visual sesuai identitas Drubbix."
      ],
      [
        "Bootstrap 5",
        "Mendukung layout responsif, navigasi, dan komponen antarmuka."
      ],
      [
        "JavaScript",
        "Mendukung interaksi pada website di sisi browser."
      ],
      [
        "Bootstrap Icons",
        "Menyediakan ikon untuk informasi layanan, navigasi, dan kontak."
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
    "intro": "A Drubbix website introducing waste collection services and products from organic waste processing. Visitors can discover pickup services, understand the collection process, explore maggot products, learn about the company, view activity documentation, and find service contact information.",
    "overviewText": "Drubbix brings waste management services and maggot products together in a green-themed website. Service pages explain the pickup process, while the product catalog introduces dried maggots, live maggots, and frass fertilizer. Company information, educational articles, and activity galleries provide further context for prospective customers.",
    "featureList": [
      [
        "Waste pickup services",
        "Introduces waste collection for businesses, including restaurants and hotels, with a pickup request interface."
      ],
      [
        "Service workflow",
        "Explains ordering, schedule confirmation, waste collection, and documentation and reporting stages."
      ],
      [
        "Maggot products",
        "Presents dried maggots, live maggots, and frass fertilizer with ordering links."
      ],
      [
        "Company, education & gallery",
        "Includes the company profile and vision, waste management articles, and service and activity photographs."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Builds page structure and styling aligned with the Drubbix identity."
      ],
      [
        "Bootstrap 5",
        "Supports responsive layouts, navigation, and interface components."
      ],
      [
        "JavaScript",
        "Supports browser-side website interactions."
      ],
      [
        "Bootstrap Icons",
        "Provides icons for service information, navigation, and contact details."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/drubbix/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda dan layanan pickup sampah Drubbix",
      "en": "Drubbix homepage and waste pickup service"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/drubbix/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Pengenalan tim pengelola sampah",
      "en": "Waste management team introduction"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/drubbix/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Tahapan proses pickup sampah",
      "en": "Waste pickup workflow"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/drubbix/04.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Katalog produk maggot dan kasgot",
      "en": "Maggot and frass fertilizer catalog"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/drubbix/05.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Halaman layanan pengangkutan sampah",
      "en": "Waste collection service page"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/drubbix/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Visi perusahaan dan keberlanjutan",
      "en": "Company vision and sustainability"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/drubbix/07.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Galeri kegiatan dan layanan Drubbix",
      "en": "Drubbix activities and services gallery"
    }
  }
];

export default function DrubbixProject() {
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
          <h1>Drubbix</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://drubbix.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/drubbix"
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
            <div className={styles.viewport} id="drubbix-screenshots">
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
                aria-controls="drubbix-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="drubbix-screenshots"
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
                    aria-controls="drubbix-screenshots"
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
