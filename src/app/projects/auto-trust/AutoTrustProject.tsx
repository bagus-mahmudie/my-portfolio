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
    "intro": "Aplikasi Auto Trust untuk menjelajahi katalog jual beli dan sewa mobil serta motor. Pengguna dapat mencari kendaraan, melihat galeri dan spesifikasi, mengenal penjual, menyimpan favorit, serta bertukar pesan. Proyek dikembangkan secara lokal menggunakan Laravel, Blade, Alpine.js, dan MySQL.",
    "overviewText": "Auto Trust menyatukan informasi kendaraan untuk dijual dan disewa dalam satu aplikasi. Katalog dan halaman detail membantu pengguna membandingkan pilihan, sementara profil penjual, ulasan, favorit, permintaan kendaraan, dan pesan antar pengguna mendukung komunikasi. Artikel dan informasi perusahaan melengkapi pengalaman penelusuran.",
    "featureList": [
      [
        "Katalog & filter kendaraan",
        "Menampilkan mobil dan motor untuk dijual atau disewa, dengan pilihan tipe, merek, serta filter pencarian."
      ],
      [
        "Detail, galeri & penjual",
        "Menyajikan foto, harga, spesifikasi kendaraan, informasi penjual, serta ulasan pengguna."
      ],
      [
        "Favorit & kebutuhan kendaraan",
        "Mendukung penyimpanan kendaraan favorit dan posting permintaan kendaraan sesuai kebutuhan pengguna."
      ],
      [
        "Akun, pesan & artikel",
        "Menyediakan pengaturan akun, profil penjual, pesan antar pengguna terdaftar, serta artikel otomotif."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Menangani autentikasi, katalog kendaraan, akun, dan logika aplikasi."
      ],
      [
        "Blade / Alpine.js",
        "Menyusun template halaman dan interaksi komponen antarmuka."
      ],
      [
        "Tailwind CSS / Vite 7",
        "Mengatur tampilan responsif serta proses build aset frontend."
      ],
      [
        "MySQL",
        "Menyimpan data kendaraan, pengguna, ulasan, favorit, dan pesan."
      ],
      [
        "JavaScript",
        "Mendukung interaksi frontend dan pembaruan pesan melalui HTTP polling."
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
    "intro": "An Auto Trust application for browsing cars and motorcycles for sale or rent. Users can search vehicles, view galleries and specifications, explore seller profiles, save favorites, and exchange messages. The project is developed locally using Laravel, Blade, Alpine.js, and MySQL.",
    "overviewText": "Auto Trust brings vehicle sale and rental information together in one application. Catalogs and detail pages help users compare options, while seller profiles, reviews, favorites, vehicle requests, and messaging support communication. Articles and company information complement the browsing experience.",
    "featureList": [
      [
        "Vehicle catalog & filters",
        "Displays cars and motorcycles for sale or rent, with body types, brands, and search filters."
      ],
      [
        "Details, galleries & sellers",
        "Presents photographs, pricing, specifications, seller information, and user reviews."
      ],
      [
        "Favorites & vehicle requests",
        "Supports saved favorite vehicles and posts describing users' vehicle requirements."
      ],
      [
        "Accounts, messages & articles",
        "Provides account settings, seller profiles, messaging between registered users, and automotive articles."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Handles authentication, vehicle catalogs, accounts, and application logic."
      ],
      [
        "Blade / Alpine.js",
        "Builds page templates and interactive interface components."
      ],
      [
        "Tailwind CSS / Vite 7",
        "Provides responsive styling and frontend asset builds."
      ],
      [
        "MySQL",
        "Stores vehicles, users, reviews, favorites, and messages."
      ],
      [
        "JavaScript",
        "Supports frontend interactions and message updates through HTTP polling."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/auto-trust/01.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Beranda dan pencarian kendaraan",
      "en": "Homepage and vehicle search"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/auto-trust/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Pilihan tipe mobil",
      "en": "Car body type selection"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/auto-trust/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Pilihan merek mobil",
      "en": "Car brand selection"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/auto-trust/04.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Rekomendasi dan katalog mobil",
      "en": "Car recommendations and listings"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/auto-trust/05.png",
    "width": 1539,
    "height": 866,
    "alt": {
      "id": "Kategori dan katalog motor",
      "en": "Motorcycle categories and listings"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/auto-trust/06.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Detail mobil dan galeri foto",
      "en": "Car details and photo gallery"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/auto-trust/07.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Halaman layanan sewa mobil",
      "en": "Car rental page"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/auto-trust/08.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Detail kendaraan sewa",
      "en": "Rental vehicle details"
    }
  },
  {
    "id": "09",
    "src": "/images/projects/auto-trust/09.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Informasi perusahaan dan keunggulan",
      "en": "Company information and highlights"
    }
  },
  {
    "id": "10",
    "src": "/images/projects/auto-trust/10.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Artikel otomotif",
      "en": "Automotive articles"
    }
  }
];

export default function AutoTrustProject() {
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
          <h1>Auto Trust</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/auto-trust"
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
            <div className={styles.viewport} id="auto-trust-screenshots">
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
                aria-controls="auto-trust-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="auto-trust-screenshots"
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
                    aria-controls="auto-trust-screenshots"
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
