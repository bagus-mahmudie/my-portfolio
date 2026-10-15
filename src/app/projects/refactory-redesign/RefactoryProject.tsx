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
    "intro": "Eksplorasi redesign landing page Refactory untuk melatih penyusunan layout, hierarki informasi, dan interaksi antarmuka. Tampilan menggabungkan pengenalan program, informasi peluang kerja, ulasan alumni, proyek berjalan, serta artikel knowledge sharing. Proyek ini merupakan studi antarmuka menggunakan HTML, CSS, dan JavaScript.",
    "overviewText": "Refactory Redesign berfokus pada penerapan visual landing page melalui susunan section, kartu informasi, gambar, dan navigasi. Konten referensi dipakai untuk mengeksplorasi cara menyajikan peluang kerja, ulasan alumni, proyek, dan artikel dalam satu halaman. Proyek ini merupakan studi desain independen tanpa afiliasi resmi dengan Refactory.",
    "featureList": [
      [
        "Hero & peluang kerja",
        "Menampilkan pengenalan program dan kartu informasi perusahaan serta peluang kerja sebagai bagian dari studi layout."
      ],
      [
        "Ulasan alumni",
        "Menyusun kartu alumni dengan foto, informasi singkat, dan area ulasan."
      ],
      [
        "Proyek & knowledge sharing",
        "Menyajikan informasi proyek berjalan dan kumpulan kartu artikel untuk menjelajahi konten."
      ],
      [
        "Navigasi & identitas visual",
        "Menggabungkan navbar, logo media, footer, serta aset visual lokal dalam satu landing page."
      ]
    ],
    "technology": [
      [
        "HTML",
        "Menyusun struktur landing page dan setiap section kontennya."
      ],
      [
        "CSS",
        "Mengatur warna, tipografi, tata letak, dan gaya visual khusus."
      ],
      [
        "Bootstrap 4",
        "Mendukung layout responsif serta komponen antarmuka."
      ],
      [
        "JavaScript",
        "Mendukung interaksi pada halaman di sisi browser."
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
    "intro": "A Refactory landing page redesign exploration focused on layout, information hierarchy, and interface interactions. The design brings together a program introduction, job opportunities, alumni reviews, ongoing projects, and knowledge-sharing articles. This interface study uses HTML, CSS, and JavaScript.",
    "overviewText": "Refactory Redesign explores landing page implementation through sections, information cards, imagery, and navigation. Reference content is used to study how job opportunities, alumni reviews, projects, and articles can be presented on one page. This is an independent design study with no official affiliation with Refactory.",
    "featureList": [
      [
        "Hero & job opportunities",
        "Displays a program introduction and company and job information cards as part of the layout study."
      ],
      [
        "Alumni reviews",
        "Arranges alumni cards with photos, brief information, and a review section."
      ],
      [
        "Projects & knowledge sharing",
        "Presents ongoing project information and article cards for content exploration."
      ],
      [
        "Navigation & visual identity",
        "Combines navigation, media logos, a footer, and local visual assets in one landing page."
      ]
    ],
    "technology": [
      [
        "HTML",
        "Builds the landing page structure and content sections."
      ],
      [
        "CSS",
        "Defines colors, typography, layouts, and custom visual styling."
      ],
      [
        "Bootstrap 4",
        "Supports responsive layouts and interface components."
      ],
      [
        "JavaScript",
        "Supports browser-side page interactions."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/refactory-redesign/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Hero dan peluang kerja pada redesign Refactory",
      "en": "Hero and job opportunities in the Refactory redesign"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/refactory-redesign/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Bagian ulasan dan profil alumni",
      "en": "Reviews and alumni profile section"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/refactory-redesign/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Proyek berjalan dan knowledge sharing",
      "en": "Ongoing projects and knowledge sharing"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/refactory-redesign/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Kartu artikel dan logo media",
      "en": "Article cards and media logos"
    }
  }
];

export default function RefactoryProject() {
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
          <h1>Refactory Redesign</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/refactory-redesign"
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
            <div className={styles.viewport} id="refactory-redesign-screenshots">
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
                aria-controls="refactory-redesign-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="refactory-redesign-screenshots"
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
                    aria-controls="refactory-redesign-screenshots"
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
