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
    "intro": "Aplikasi Dishub Uji Berkala untuk membantu petugas mencatat identitas kendaraan, hasil pemeriksaan, dan masa berlaku pengujian. Formulir mencakup data pemilik, spesifikasi teknis, foto kendaraan, serta hasil uji yang dapat ditinjau dalam halaman ringkasan. Proyek dikembangkan secara lokal menggunakan PHP dan MySQL.",
    "overviewText": "Dishub Uji Berkala menyatukan pencatatan data dan hasil pemeriksaan kendaraan dalam aplikasi web. Petugas masuk melalui autentikasi, melengkapi formulir kendaraan dan parameter pengujian, mengunggah berkas pendukung, lalu melihat informasi hasil beserta masa berlakunya. Fokus proyek adalah pengelolaan catatan uji berkala dan penyajian hasil pemeriksaan.",
    "featureList": [
      [
        "Autentikasi petugas",
        "Menyediakan login dan area kerja untuk mengakses pencatatan pengujian kendaraan."
      ],
      [
        "Identitas & spesifikasi",
        "Mencatat data pemilik, identitas kendaraan, dimensi, kapasitas, dan spesifikasi teknis."
      ],
      [
        "Hasil uji & masa berlaku",
        "Menyimpan parameter pemeriksaan, hasil pengujian, tanggal, serta masa berlaku uji berkala."
      ],
      [
        "Berkas & tampilan hasil",
        "Mendukung unggahan foto atau dokumen kendaraan dan halaman ringkasan hasil pemeriksaan."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Menangani autentikasi, pemrosesan formulir, unggahan berkas, dan penyajian hasil."
      ],
      [
        "MySQL",
        "Menyimpan akun petugas, informasi kendaraan, serta data hasil pengujian."
      ],
      [
        "HTML / CSS",
        "Menyusun struktur formulir dan tampilan ringkasan pemeriksaan."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka pada formulir dan pengelolaan berkas."
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
    "intro": "A Dishub periodic vehicle inspection application that helps staff record vehicle identities, inspection results, and validity periods. Forms cover owner information, technical specifications, vehicle photographs, and test results presented in a summary page. The project is developed locally using PHP and MySQL.",
    "overviewText": "Dishub Uji Berkala combines vehicle information and inspection records in a web application. Staff sign in, complete vehicle details and testing parameters, upload supporting files, and review results with their validity periods. The project focuses on managing periodic inspection records and presenting inspection results.",
    "featureList": [
      [
        "Staff authentication",
        "Provides login and a workspace for accessing vehicle inspection records."
      ],
      [
        "Identity & specifications",
        "Records owner details, vehicle identity, dimensions, capacity, and technical specifications."
      ],
      [
        "Results & validity periods",
        "Stores inspection parameters, test results, dates, and periodic inspection validity periods."
      ],
      [
        "Files & result display",
        "Supports vehicle photo or document uploads and an inspection result summary page."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Handles authentication, form processing, file uploads, and result presentation."
      ],
      [
        "MySQL",
        "Stores staff accounts, vehicle information, and inspection results."
      ],
      [
        "HTML / CSS",
        "Builds form structures and inspection summary layouts."
      ],
      [
        "JavaScript",
        "Supports form and file management interface interactions."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/dishub-uji-berkala/01.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Halaman login petugas Dishub",
      "en": "Dishub staff login page"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/dishub-uji-berkala/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Formulir identitas pemilik dan kendaraan",
      "en": "Owner and vehicle identity form"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/dishub-uji-berkala/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Unggahan foto dan parameter pengujian",
      "en": "Photo uploads and inspection parameters"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/dishub-uji-berkala/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Spesifikasi teknis dan rincian hasil uji",
      "en": "Technical specifications and inspection details"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/dishub-uji-berkala/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Tampilan ringkasan hasil uji berkala",
      "en": "Periodic inspection result summary"
    }
  }
];

export default function DishubProject() {
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
          <h1>Dishub Uji Berkala</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/dishub-uji-berkala"
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
            <div className={styles.viewport} id="dishub-uji-berkala-screenshots">
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
                aria-controls="dishub-uji-berkala-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="dishub-uji-berkala-screenshots"
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
                    aria-controls="dishub-uji-berkala-screenshots"
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
