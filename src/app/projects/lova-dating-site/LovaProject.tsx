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
    "intro": "Aplikasi Lova untuk mempertemukan pengguna melalui profil, pencarian, fitur suka, dan percakapan. Pengguna dapat melengkapi informasi diri, menampilkan album, menjelajahi profil berdasarkan preferensi, serta berkomunikasi melalui pesan. Proyek dikembangkan secara lokal menggunakan Laravel, Blade, Bootstrap, dan MySQL.",
    "overviewText": "Lova menggabungkan halaman pengenalan layanan dengan area pengguna untuk penemuan profil dan komunikasi. Informasi diri, album, dan preferensi membantu pengguna memperkenalkan diri, sementara pencarian, suka, pesan, dan notifikasi mendukung interaksi. Halaman bantuan melengkapi informasi penggunaan aplikasi.",
    "featureList": [
      [
        "Profil & album",
        "Menyajikan informasi pengguna, album, deskripsi diri, dan preferensi dalam halaman profil."
      ],
      [
        "Pencarian & suka",
        "Memungkinkan penelusuran profil melalui filter pencarian serta fitur suka untuk menandai ketertarikan."
      ],
      [
        "Pesan & notifikasi",
        "Mendukung percakapan antar pengguna dan notifikasi aktivitas."
      ],
      [
        "Autentikasi & bantuan",
        "Menyediakan login, dukungan autentikasi sosial, serta halaman FAQ dan bantuan."
      ]
    ],
    "technology": [
      [
        "Laravel 9 / PHP",
        "Menangani autentikasi, profil, pencarian, pesan, dan logika aplikasi."
      ],
      [
        "Blade",
        "Menyusun template halaman dan komponen tampilan di sisi server."
      ],
      [
        "Bootstrap 5 / JavaScript",
        "Mendukung tata letak responsif serta interaksi modal, filter, dan komponen antarmuka."
      ],
      [
        "Laravel Mix",
        "Mengelola kompilasi dan bundling aset frontend."
      ],
      [
        "MySQL",
        "Menyimpan data pengguna, profil, suka, percakapan, dan aktivitas aplikasi."
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
    "intro": "A Lova application that connects users through profiles, search, likes, and conversations. Users can complete their personal information, display albums, explore profiles based on preferences, and communicate through messages. The project is developed locally using Laravel, Blade, Bootstrap, and MySQL.",
    "overviewText": "Lova combines introductory service pages with a user area for profile discovery and communication. Personal information, albums, and preferences help users introduce themselves, while search, likes, messages, and notifications support interaction. A help page provides additional guidance on using the application.",
    "featureList": [
      [
        "Profiles & albums",
        "Presents user information, albums, personal descriptions, and preferences on profile pages."
      ],
      [
        "Search & likes",
        "Supports profile browsing through search filters and likes to express interest."
      ],
      [
        "Messages & notifications",
        "Supports conversations between users and activity notifications."
      ],
      [
        "Authentication & help",
        "Provides login, social authentication support, and FAQ and help pages."
      ]
    ],
    "technology": [
      [
        "Laravel 9 / PHP",
        "Handles authentication, profiles, search, messaging, and application logic."
      ],
      [
        "Blade",
        "Builds server-rendered page templates and interface components."
      ],
      [
        "Bootstrap 5 / JavaScript",
        "Supports responsive layouts and interactive modals, filters, and interface components."
      ],
      [
        "Laravel Mix",
        "Manages frontend asset compilation and bundling."
      ],
      [
        "MySQL",
        "Stores users, profiles, likes, conversations, and application activity."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/lova-dating-site/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda dan pengenalan Lova",
      "en": "Lova homepage and introduction"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/lova-dating-site/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Testimoni dan ajakan melengkapi preferensi",
      "en": "Testimonials and preference introduction"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/lova-dating-site/03.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Dialog masuk akun",
      "en": "Account login dialog"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/lova-dating-site/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Pencarian profil dan filter preferensi",
      "en": "Profile discovery and preference filters"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/lova-dating-site/05.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Detail profil pengguna",
      "en": "User profile details"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/lova-dating-site/06.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Percakapan antar pengguna",
      "en": "User messaging interface"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/lova-dating-site/07.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "FAQ dan bantuan",
      "en": "FAQ and help page"
    }
  }
];

export default function LovaProject() {
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
          <h1>Lova</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/lova-dating-site"
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
            <div className={styles.viewport} id="lova-dating-site-screenshots">
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
                aria-controls="lova-dating-site-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="lova-dating-site-screenshots"
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
                    aria-controls="lova-dating-site-screenshots"
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
