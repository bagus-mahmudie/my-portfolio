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
    "intro": "Website layanan arsitektur, desain interior, dan renovasi untuk memperkenalkan 888Living serta karya hunian dan ruang komersialnya. Pengunjung dapat menjelajahi layanan, melihat galeri proyek, mengenal perusahaan, membaca inspirasi ruang, serta menemukan informasi karier dan menghubungi tim untuk konsultasi.",
    "overviewText": "888Living menyajikan layanan dan portofolio konstruksi dalam satu website. Halaman layanan membantu pengunjung mengenali kebutuhan proyek, sementara galeri dan detail portofolio memperlihatkan hasil pekerjaan. Profil perusahaan, artikel, informasi karier, dan formulir kontak melengkapi pengalaman pengunjung sebelum memulai diskusi dengan tim.",
    "featureList": [
      [
        "Layanan konstruksi & desain",
        "Halaman khusus untuk arsitektur, interior, renovasi, furnitur custom, serta pekerjaan pendukung seperti instalasi listrik dan AC."
      ],
      [
        "Portofolio & galeri proyek",
        "Menampilkan proyek hunian dan komersial dengan halaman detail serta kumpulan foto hasil pekerjaan."
      ],
      [
        "Profil, karier & artikel",
        "Menyediakan informasi perusahaan, peluang kerja, dan artikel inspirasi serta panduan seputar hunian."
      ],
      [
        "Kontak & pengelolaan konten",
        "Formulir kontak menggunakan PHPMailer dan reCAPTCHA, dengan panel admin serta database untuk mendukung pengelolaan konten."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Menyusun struktur halaman, tata letak responsif, dan tampilan website."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka dan komponen halaman."
      ],
      [
        "PHP",
        "Menangani proses di sisi server, formulir kontak, dan panel admin."
      ],
      [
        "MySQL",
        "Menyimpan data yang digunakan oleh fitur dinamis website."
      ],
      [
        "PHPMailer / reCAPTCHA",
        "Mendukung pengiriman email formulir kontak dan perlindungan terhadap pengiriman otomatis."
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
    "intro": "An architecture, interior design, and renovation website introducing 888Living and its residential and commercial projects. Visitors can explore services, browse project galleries, learn about the company, read design inspiration, find career information, and contact the team for a consultation.",
    "overviewText": "888Living brings construction services and project portfolios together in one website. Dedicated service pages help visitors identify their project needs, while galleries and portfolio details showcase completed work. Company information, articles, careers, and a contact form support visitors before they begin a conversation with the team.",
    "featureList": [
      [
        "Construction & design services",
        "Dedicated pages for architecture, interiors, renovation, custom furniture, and supporting work such as electrical and air-conditioning installation."
      ],
      [
        "Portfolio & project galleries",
        "Presents residential and commercial projects with detail pages and photographs of the work."
      ],
      [
        "Company, careers & articles",
        "Provides company information, job opportunities, design inspiration, and home improvement guides."
      ],
      [
        "Contact & content management",
        "A contact form using PHPMailer and reCAPTCHA, alongside an admin panel and database supporting content management."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Builds page structure, responsive layouts, and website styling."
      ],
      [
        "JavaScript",
        "Supports interface interactions and page components."
      ],
      [
        "PHP",
        "Handles server-side processing, contact submissions, and the admin panel."
      ],
      [
        "MySQL",
        "Stores data used by dynamic website features."
      ],
      [
        "PHPMailer / reCAPTCHA",
        "Supports contact email delivery and protection against automated submissions."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/888living/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda dan pengenalan 888Living",
      "en": "888Living homepage and introduction"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/888living/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Layanan renovasi rumah",
      "en": "Home renovation services"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/888living/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Profil serta visi dan misi perusahaan",
      "en": "Company profile, vision, and mission"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/888living/04.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Halaman portofolio hunian dan komersial",
      "en": "Residential and commercial portfolio"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/888living/05.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Daftar proyek unggulan",
      "en": "Featured project listing"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/888living/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Galeri detail proyek interior",
      "en": "Interior project detail gallery"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/888living/07.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Halaman karier dan peluang kerja",
      "en": "Careers and job opportunities"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/888living/08.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Artikel inspirasi ruang dan renovasi",
      "en": "Design inspiration and renovation articles"
    }
  }
];

export default function LivingProject() {
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
          <h1>888Living</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://www.888living.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/888living"
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
            <div className={styles.viewport} id="living-screenshots">
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
                aria-controls="living-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="living-screenshots"
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
                    aria-controls="living-screenshots"
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
