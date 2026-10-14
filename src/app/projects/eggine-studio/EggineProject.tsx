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
    "intro": "Website studio game untuk memperkenalkan Eggine melalui identitas visual yang playful, karya game, dan cerita di balik pengembangannya. Pengunjung dapat mengenal studio, menjelajahi katalog game, menemukan peluang karier, membaca artikel, serta menghubungi tim untuk informasi dan kolaborasi.",
    "overviewText": "Eggine Studio menggabungkan profil perusahaan dan portofolio game dalam satu website. Ilustrasi karakter, aksen warna cerah, dan tampilan gelap memperkuat identitas studio, sementara halaman game, karier, blog, dan kontak membantu pengunjung menemukan informasi sesuai kebutuhannya.",
    "featureList": [
      [
        "Profil studio & karya game",
        "Memperkenalkan Eggine Studio, karakter visualnya, serta game unggulan seperti Rames Rumble."
      ],
      [
        "Katalog game",
        "Menampilkan daftar game dengan kategori dan kolom pencarian untuk membantu pengunjung menjelajahi karya studio."
      ],
      [
        "Karier & artikel",
        "Menyediakan halaman peluang karier serta tampilan artikel seputar game dan pengembangannya."
      ],
      [
        "Halaman kontak",
        "Menyajikan informasi kontak dan antarmuka formulir untuk pertanyaan maupun kolaborasi."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Menghasilkan halaman statis dari template dan konten website."
      ],
      [
        "Nunjucks",
        "Menyusun layout bersama serta komponen navbar, footer, dan section yang dapat digunakan kembali."
      ],
      [
        "Tailwind CSS 3",
        "Mengatur tata letak responsif, warna, tipografi, dan tampilan komponen."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka website melalui skrip di sisi browser."
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
    "intro": "A game studio website introducing Eggine through playful visuals, game projects, and the stories behind their development. Visitors can discover the studio, explore its game catalog, find career opportunities, read articles, and contact the team for information and collaboration.",
    "overviewText": "Eggine Studio combines a company profile and game portfolio in one website. Character illustrations, bright accents, and dark styling express the studio identity, while dedicated game, career, blog, and contact pages help visitors find the information they need.",
    "featureList": [
      [
        "Studio profile & featured games",
        "Introduces Eggine Studio, its visual identity, and featured games such as Rames Rumble."
      ],
      [
        "Game catalog",
        "Presents games with categories and a search field to help visitors explore the studio portfolio."
      ],
      [
        "Careers & articles",
        "Provides a career page and article listings about games and their development."
      ],
      [
        "Contact page",
        "Displays contact information and a form interface for inquiries and collaboration."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Generates static pages from website templates and content."
      ],
      [
        "Nunjucks",
        "Organizes shared layouts and reusable navbar, footer, and section components."
      ],
      [
        "Tailwind CSS 3",
        "Handles responsive layouts, colors, typography, and component styling."
      ],
      [
        "JavaScript",
        "Supports website interface interactions through browser-side scripts."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/eggine-studio/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda Eggine Studio",
      "en": "Eggine Studio homepage"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/eggine-studio/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Game unggulan Rames Rumble",
      "en": "Featured game Rames Rumble"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/eggine-studio/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Pengenalan studio dan karya game",
      "en": "Studio introduction and game projects"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/eggine-studio/04.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Halaman karier Eggine Studio",
      "en": "Eggine Studio career page"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/eggine-studio/05.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Artikel dan wawasan game",
      "en": "Game articles and insights"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/eggine-studio/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Katalog game berdasarkan kategori",
      "en": "Game catalog by category"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/eggine-studio/07.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Halaman dan formulir kontak",
      "en": "Contact page and form"
    }
  }
];

export default function EggineProject() {
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
          <h1>Eggine Studio</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://egginestudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/eggine-studio"
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
            <div className={styles.viewport} id="eggine-screenshots">
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
                aria-controls="eggine-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="eggine-screenshots"
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
                    aria-controls="eggine-screenshots"
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
