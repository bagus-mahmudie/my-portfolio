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
    "intro": "Website profil PT Sentral Layanan Prima untuk memperkenalkan layanan pengelolaan fasilitas dan tenaga kerja. Pengunjung dapat mengenal perusahaan, menelusuri layanan alih daya, pengelolaan gedung, asrama, dan parkir, melihat informasi klien serta karier, dan menemukan kontak perusahaan untuk kebutuhan kerja sama.",
    "overviewText": "Website SLP menyatukan profil perusahaan dan informasi layanan dalam halaman yang saling terhubung. Setiap layanan memiliki penjelasan tersendiri, mulai dari alih daya dan rekrutmen hingga pengelolaan fasilitas serta pelatihan. Daftar klien, informasi karier, alamat, dan peta lokasi melengkapi informasi bagi calon mitra maupun pelamar.",
    "featureList": [
      [
        "Layanan tenaga kerja",
        "Halaman informasi alih daya, rekrutmen, dan pelatihan untuk memperkenalkan layanan perusahaan."
      ],
      [
        "Pengelolaan fasilitas",
        "Menjelaskan layanan building management, dormitory management, dan parking management."
      ],
      [
        "Profil, klien & karier",
        "Menyajikan profil perusahaan, daftar klien, serta informasi karier untuk kandidat fresh graduate dan berpengalaman."
      ],
      [
        "Kontak & lokasi",
        "Menampilkan alamat, telepon, email, jam operasional, dan peta untuk membantu pengunjung menghubungi perusahaan."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Menyusun struktur halaman layanan dan tampilan sesuai identitas perusahaan."
      ],
      [
        "Bootstrap / JavaScript",
        "Mendukung tata letak responsif, navigasi, dan interaksi komponen website."
      ],
      [
        "Swiper / GLightbox",
        "Menyediakan komponen slider dan tampilan media pada website."
      ],
      [
        "AOS / Bootstrap Icons",
        "Mendukung animasi saat menggulir halaman serta ikon antarmuka."
      ],
      [
        "PHP",
        "Menyediakan endpoint formulir kontak; pemrosesannya memerlukan pustaka PHP Email Form dan konfigurasi server."
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
    "intro": "A PT Sentral Layanan Prima company profile website introducing facility management and workforce services. Visitors can learn about the company, explore outsourcing, building, dormitory, and parking management services, view client and career information, and find contact details for potential partnerships.",
    "overviewText": "The SLP website brings company information and services together across connected pages. Dedicated service pages cover outsourcing, recruitment, facility management, and training. Client listings, career information, an address, and a location map provide further information for prospective partners and applicants.",
    "featureList": [
      [
        "Workforce services",
        "Dedicated information pages introduce outsourcing, recruitment, and training services."
      ],
      [
        "Facility management",
        "Explains building, dormitory, and parking management services."
      ],
      [
        "Company, clients & careers",
        "Presents the company profile, client listings, and career information for fresh graduates and experienced candidates."
      ],
      [
        "Contact & location",
        "Displays the address, telephone, email, office hours, and map to help visitors reach the company."
      ]
    ],
    "technology": [
      [
        "HTML / CSS",
        "Builds service page structures and styling aligned with the company identity."
      ],
      [
        "Bootstrap / JavaScript",
        "Supports responsive layouts, navigation, and website component interactions."
      ],
      [
        "Swiper / GLightbox",
        "Provides slider and media display components."
      ],
      [
        "AOS / Bootstrap Icons",
        "Supports scroll animations and interface icons."
      ],
      [
        "PHP",
        "Provides a contact form endpoint; processing requires the PHP Email Form library and server configuration."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/pt-sentral-layanan-prima/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda PT Sentral Layanan Prima",
      "en": "PT Sentral Layanan Prima homepage"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/pt-sentral-layanan-prima/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Profil dan sekilas perusahaan",
      "en": "Company profile and overview"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/pt-sentral-layanan-prima/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Layanan parking management",
      "en": "Parking management services"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/pt-sentral-layanan-prima/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Daftar klien perusahaan",
      "en": "Company client listing"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/pt-sentral-layanan-prima/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Informasi karier dan rekrutmen",
      "en": "Career and recruitment information"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/pt-sentral-layanan-prima/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Kontak perusahaan dan peta lokasi",
      "en": "Company contact details and location map"
    }
  }
];

export default function SlpProject() {
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
          <h1>PT Sentral Layanan Prima</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-primary"
              href="https://pt-slp.co.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.website}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/pt-sentral-layanan-prima"
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
            <div className={styles.viewport} id="slp-screenshots">
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
                aria-controls="slp-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="slp-screenshots"
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
                    aria-controls="slp-screenshots"
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
