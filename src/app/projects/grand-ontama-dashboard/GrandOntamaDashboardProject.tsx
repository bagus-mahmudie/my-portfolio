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
    "intro": "Dashboard administrasi Grand Ontama untuk membantu pengelolaan properti, pelanggan, agen, dan pemesanan dalam satu aplikasi. Tim dapat memantau ketersediaan unit, melihat spesifikasi bangunan, mencatat transaksi pemesanan, serta mengelola informasi pelanggan dan dokumen pendukung melalui akses yang memerlukan login.",
    "overviewText": "Grand Ontama Dashboard memusatkan data operasional perumahan dalam antarmuka administrasi. Ringkasan properti dan pemesanan membantu pemantauan aktivitas, sementara halaman detail unit, pelanggan, serta agen menyediakan informasi yang dibutuhkan untuk mengelola proses penjualan. Website dashboard memerlukan login untuk mengakses fitur pengelolaannya.",
    "featureList": [
      [
        "Ringkasan & status properti",
        "Menampilkan ringkasan data, ketersediaan dan status penjualan unit, serta daftar properti dengan filter pencarian."
      ],
      [
        "Detail unit & spesifikasi",
        "Menyajikan foto hunian, nomor unit, tipe, harga, dan spesifikasi bangunan dalam halaman detail properti."
      ],
      [
        "Pelanggan & pemesanan",
        "Mendukung pencatatan pemesanan serta pengelolaan data pelanggan, catatan, dan dokumen pendukung."
      ],
      [
        "Agen & akses admin",
        "Menyediakan pengelolaan data dan dokumen agen, autentikasi login, serta pengaturan akun dan peran admin."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Menangani autentikasi, proses formulir, dan pengelolaan data di sisi server."
      ],
      [
        "MySQL",
        "Menyimpan data properti, pelanggan, agen, pemesanan, dan akun pengguna."
      ],
      [
        "HTML / CSS",
        "Menyusun halaman administrasi, kartu properti, tabel, dan formulir."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka dan pemilihan data pada formulir."
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
    "intro": "A Grand Ontama administration dashboard for managing properties, customers, agents, and bookings in one application. The team can monitor unit availability, review building specifications, record bookings, and manage customer information and supporting documents through authenticated access.",
    "overviewText": "Grand Ontama Dashboard brings residential operational data into an administration interface. Property and booking summaries support monitoring, while detailed unit, customer, and agent pages provide information for managing the sales process. Login is required to access the dashboard management features.",
    "featureList": [
      [
        "Property summaries & status",
        "Displays data summaries, unit availability and sales status, and property listings with search filters."
      ],
      [
        "Unit details & specifications",
        "Presents home photos, unit numbers, types, prices, and building specifications on property detail pages."
      ],
      [
        "Customers & bookings",
        "Supports booking records and management of customer information, notes, and supporting documents."
      ],
      [
        "Agents & admin access",
        "Provides agent data and document management, login authentication, and administrator account and role settings."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Handles authentication, form processing, and server-side data management."
      ],
      [
        "MySQL",
        "Stores property, customer, agent, booking, and user account data."
      ],
      [
        "HTML / CSS",
        "Builds administration pages, property cards, tables, and forms."
      ],
      [
        "JavaScript",
        "Supports interface interactions and data selection within forms."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/grand-ontama-dashboard/01.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Halaman login Grand Ontama Dashboard",
      "en": "Grand Ontama Dashboard login page"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/grand-ontama-dashboard/02.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Ringkasan properti dan pemesanan",
      "en": "Property and booking overview"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/grand-ontama-dashboard/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Daftar properti dengan filter pencarian",
      "en": "Property listing with search filters"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/grand-ontama-dashboard/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Detail unit dan spesifikasi bangunan",
      "en": "Unit details and building specifications"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/grand-ontama-dashboard/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Formulir tambah pemesanan properti",
      "en": "New property booking form"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/grand-ontama-dashboard/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Formulir tambah agen",
      "en": "New agent form"
    }
  }
];

export default function GrandOntamaDashboardProject() {
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
          <h1>Grand Ontama Dashboard</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://grandontama.com/dashboard/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/grand-ontama-dashboard"
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
            <div className={styles.viewport} id="dashboard-screenshots">
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
                aria-controls="dashboard-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="dashboard-screenshots"
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
                    aria-controls="dashboard-screenshots"
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
