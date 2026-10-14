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
    "intro": "Website profil perusahaan untuk memperkenalkan layanan rekrutmen, outsourcing, dan pengelolaan sumber daya manusia Mitra Elang Bersatu. Pengunjung dapat mengenal layanan dan pendekatan perusahaan, membaca visi serta misi, menemukan informasi karier, dan mengakses informasi kontak dalam satu halaman.",
    "overviewText": "Mitra Elang Bersatu menyatukan informasi layanan dan profil perusahaan dalam landing page yang terstruktur. Bagian layanan menjelaskan kebutuhan rekrutmen, outsourcing, dan pengelolaan SDM, dilengkapi pengenalan solusi, visi dan misi, serta area karier dengan formulir dan peta lokasi.",
    "featureList": [
      [
        "Layanan rekrutmen & outsourcing",
        "Menampilkan layanan rekrutmen, penyediaan tenaga kerja, dan pengelolaan SDM untuk kebutuhan bisnis."
      ],
      [
        "Profil & solusi perusahaan",
        "Memperkenalkan pendekatan perusahaan dalam membantu kebutuhan tenaga kerja melalui bagian solusi, visi, dan misi."
      ],
      [
        "Informasi karier",
        "Menyediakan area karier dengan antarmuka formulir data pelamar, pilihan bidang pekerjaan, pengalaman, dan unggah CV."
      ],
      [
        "Navigasi & lokasi",
        "Navigasi antarbagian membantu pengunjung menemukan informasi layanan, karier, dan peta lokasi perusahaan."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Menghasilkan halaman statis serta sitemap dari template dan data website."
      ],
      [
        "Nunjucks",
        "Menyusun layout dan komponen hero, layanan, solusi, visi-misi, serta footer."
      ],
      [
        "Tailwind CSS 4",
        "Mengatur tata letak responsif, warna, tipografi, dan komponen antarmuka."
      ],
      [
        "JavaScript",
        "Mendukung interaksi pada antarmuka website melalui skrip di sisi browser."
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
    "intro": "A company profile website introducing recruitment, outsourcing, and human resource management services from Mitra Elang Bersatu. Visitors can explore the services and company approach, read its vision and mission, find career information, and access contact information on one page.",
    "overviewText": "Mitra Elang Bersatu brings service information and the company profile together in a structured landing page. Service sections introduce recruitment, outsourcing, and human resource management, complemented by solutions, vision and mission, and a careers area with a form and location map.",
    "featureList": [
      [
        "Recruitment & outsourcing services",
        "Presents recruitment, staffing, and human resource management services for business needs."
      ],
      [
        "Company profile & solutions",
        "Introduces the company approach to staffing through its solutions, vision, and mission sections."
      ],
      [
        "Career information",
        "Provides a careers area with an applicant form interface, job field and experience selections, and a CV upload field."
      ],
      [
        "Navigation & location",
        "Section navigation helps visitors find service information, careers, and the company location map."
      ]
    ],
    "technology": [
      [
        "Eleventy 3",
        "Generates static pages and a sitemap from website templates and data."
      ],
      [
        "Nunjucks",
        "Organizes layouts and components for the hero, services, solutions, vision and mission, and footer."
      ],
      [
        "Tailwind CSS 4",
        "Handles responsive layouts, colors, typography, and interface components."
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
    "src": "/images/projects/mitra-elang-bersatu/01.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Beranda Mitra Elang Bersatu",
      "en": "Mitra Elang Bersatu homepage"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/mitra-elang-bersatu/02.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Layanan rekrutmen, outsourcing, dan pengelolaan SDM",
      "en": "Recruitment, outsourcing, and human resource services"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/mitra-elang-bersatu/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Solusi rekrutmen dan outsourcing",
      "en": "Recruitment and outsourcing solutions"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/mitra-elang-bersatu/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Visi dan misi perusahaan",
      "en": "Company vision and mission"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/mitra-elang-bersatu/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Area karier, formulir pelamar, dan peta lokasi",
      "en": "Careers area, applicant form, and location map"
    }
  }
];

export default function MitraElangProject() {
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
          <h1>Mitra Elang Bersatu</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://mitraelangbersatu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/mitra-elang-bersatu"
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
            <div className={styles.viewport} id="mitra-elang-screenshots">
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
                aria-controls="mitra-elang-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="mitra-elang-screenshots"
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
                    aria-controls="mitra-elang-screenshots"
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
