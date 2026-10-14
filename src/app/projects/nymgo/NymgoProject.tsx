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
    "intro": "Landing page Nymgo Indonesia untuk memperkenalkan layanan telepon internasional dan pilihan paketnya. Pengunjung dapat mengenal fitur produk, membandingkan paket, membaca testimoni serta jawaban atas pertanyaan umum, dan menemukan tautan unduhan aplikasi maupun kontak dalam satu halaman.",
    "overviewText": "Nymgo Indonesia menyajikan informasi layanan komunikasi internasional melalui landing page dengan identitas hijau dan putih. Pengenalan produk, fitur telepon dan SMS, pilihan paket, testimoni, serta FAQ disusun agar pengunjung mudah memahami layanan sebelum menuju aplikasi atau menghubungi penyedia layanan.",
    "featureList": [
      [
        "Pengenalan produk & aplikasi",
        "Menampilkan gambaran layanan Nymgo Indonesia dan tautan unduhan aplikasi untuk perangkat mobile."
      ],
      [
        "Informasi fitur layanan",
        "Memperkenalkan telepon, pesan SMS, pembayaran lokal, dan sinkronisasi kontak sebagai fitur produk."
      ],
      [
        "Perbandingan paket",
        "Menyajikan pilihan paket beserta informasi harga dan manfaat dalam kartu yang mudah dibandingkan."
      ],
      [
        "Testimoni & FAQ",
        "Menggabungkan testimoni pelanggan dan daftar pertanyaan umum untuk membantu pengunjung memahami layanan."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Menyusun struktur landing page dan tampilan visual sesuai identitas Nymgo."
      ],
      [
        "Bootstrap 5",
        "Mendukung tata letak responsif dan komponen antarmuka."
      ],
      [
        "JavaScript",
        "Menangani interaksi pada halaman di sisi browser."
      ],
      [
        "AOS / Animate.css",
        "Menambahkan animasi elemen dan transisi saat konten muncul ketika halaman digulir."
      ],
      [
        "Bootstrap Icons",
        "Menyediakan ikon untuk mendukung informasi dan navigasi website."
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
    "intro": "A Nymgo Indonesia landing page introducing international calling services and package options. Visitors can discover product features, compare packages, read testimonials and frequently asked questions, and find app download and contact links on one page.",
    "overviewText": "Nymgo Indonesia presents international communication services through a green-and-white landing page. The product introduction, calling and SMS features, package options, testimonials, and FAQ help visitors understand the service before opening the app or contacting the provider.",
    "featureList": [
      [
        "Product & app introduction",
        "Presents an overview of Nymgo Indonesia and mobile app download links."
      ],
      [
        "Service features",
        "Introduces calling, SMS, local payments, and contact synchronization as product features."
      ],
      [
        "Package comparison",
        "Displays packages with pricing and benefits in cards that are easy to compare."
      ],
      [
        "Testimonials & FAQ",
        "Combines customer testimonials and frequently asked questions to help visitors understand the service."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Builds the landing page structure and Nymgo visual styling."
      ],
      [
        "Bootstrap 5",
        "Supports responsive layouts and interface components."
      ],
      [
        "JavaScript",
        "Handles browser-side page interactions."
      ],
      [
        "AOS / Animate.css",
        "Adds element animations and transitions as content appears during scrolling."
      ],
      [
        "Bootstrap Icons",
        "Provides icons supporting website information and navigation."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/nymgo/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda Nymgo Indonesia dan unduhan aplikasi",
      "en": "Nymgo Indonesia homepage and app downloads"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/nymgo/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Pengenalan produk dan fitur layanan Nymgo",
      "en": "Nymgo product introduction and service features"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/nymgo/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Perbandingan pilihan paket Nymgo",
      "en": "Nymgo package comparison"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/nymgo/04.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Testimoni pelanggan dan pertanyaan umum",
      "en": "Customer testimonials and frequently asked questions"
    }
  }
];

export default function NymgoProject() {
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
          <h1>Nymgo</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://nymgo.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/nymgo"
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
            <div className={styles.viewport} id="nymgo-screenshots">
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
                aria-controls="nymgo-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="nymgo-screenshots"
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
                    aria-controls="nymgo-screenshots"
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
