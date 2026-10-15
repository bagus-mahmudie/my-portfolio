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
    "intro": "Sistem Pendukung Keputusan untuk membantu penilaian calon penghuni Asrama Mahasiswa Kalimantan Tengah di Yogyakarta menggunakan metode Simple Additive Weighting (SAW). Pengelola dapat mengatur alternatif, bobot kriteria, dan nilai penilaian, lalu meninjau hasil normalisasi serta nilai preferensi sebagai bahan pertimbangan seleksi.",
    "overviewText": "SPK Asrama Kalteng menyusun proses penilaian dalam tahapan yang dapat ditelusuri, mulai dari data alternatif dan kriteria hingga matriks keputusan, normalisasi, dan perhitungan preferensi. Aplikasi menggunakan tujuh kriteria berbobot untuk mendukung evaluasi calon penghuni. Hasil perhitungan menjadi bahan pertimbangan bagi pengelola dalam mengambil keputusan.",
    "featureList": [
      [
        "Data alternatif",
        "Mengelola data calon penghuni sebagai alternatif yang akan dievaluasi dalam proses seleksi."
      ],
      [
        "Kriteria & bobot",
        "Menyediakan pengaturan tujuh kriteria beserta bobot dan atribut penilaiannya."
      ],
      [
        "Matriks & normalisasi",
        "Mencatat nilai tiap alternatif dan menampilkan matriks keputusan serta hasil normalisasi metode SAW."
      ],
      [
        "Nilai preferensi & hasil",
        "Menghitung nilai preferensi dari nilai ternormalisasi dan bobot kriteria untuk membantu perbandingan hasil penilaian."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Menangani autentikasi, pengelolaan data, dan perhitungan SAW di sisi server."
      ],
      [
        "MySQL",
        "Menyimpan akun, alternatif, kriteria, bobot, dan data penilaian."
      ],
      [
        "HTML / CSS",
        "Menyusun halaman dashboard, formulir, serta tabel penilaian dan hasil."
      ],
      [
        "JavaScript",
        "Mendukung interaksi antarmuka aplikasi."
      ],
      [
        "Metode SAW",
        "Menggunakan normalisasi nilai sesuai atribut kriteria dan penjumlahan berbobot untuk memperoleh nilai preferensi."
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
    "intro": "A decision support system for evaluating prospective residents of the Central Kalimantan student dormitory in Yogyakarta using Simple Additive Weighting (SAW). Administrators can manage alternatives, criteria weights, and evaluation scores, then review normalization results and preference values to inform the selection process.",
    "overviewText": "SPK Asrama Kalteng organizes evaluation into traceable stages, from alternatives and criteria to decision matrices, normalization, and preference calculations. The application uses seven weighted criteria to support candidate evaluation. Its calculated results provide information for administrators making selection decisions.",
    "featureList": [
      [
        "Alternative data",
        "Manages prospective residents as alternatives evaluated during selection."
      ],
      [
        "Criteria & weights",
        "Provides settings for seven criteria, their weights, and evaluation attributes."
      ],
      [
        "Matrices & normalization",
        "Records scores for each alternative and displays the decision matrix and SAW normalization results."
      ],
      [
        "Preference values & results",
        "Calculates preference values from normalized scores and criteria weights to support comparison of evaluation results."
      ]
    ],
    "technology": [
      [
        "PHP",
        "Handles authentication, data management, and server-side SAW calculations."
      ],
      [
        "MySQL",
        "Stores accounts, alternatives, criteria, weights, and evaluation data."
      ],
      [
        "HTML / CSS",
        "Builds dashboard pages, forms, and evaluation and result tables."
      ],
      [
        "JavaScript",
        "Supports application interface interactions."
      ],
      [
        "SAW method",
        "Normalizes scores according to criteria attributes and applies weighted summation to obtain preference values."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/spk-asrama-kalteng/01.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Halaman login SPK Asrama Kalteng",
      "en": "SPK Asrama Kalteng login page"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/spk-asrama-kalteng/02.png",
    "width": 1568,
    "height": 883,
    "alt": {
      "id": "Dashboard dan pengenalan metode SAW",
      "en": "Dashboard and SAW method introduction"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/spk-asrama-kalteng/03.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Data alternatif calon penghuni",
      "en": "Prospective resident alternatives"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/spk-asrama-kalteng/04.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Pengaturan bobot kriteria",
      "en": "Criteria weight settings"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/spk-asrama-kalteng/05.png",
    "width": 1571,
    "height": 883,
    "alt": {
      "id": "Matriks keputusan dan normalisasi",
      "en": "Decision and normalization matrices"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/spk-asrama-kalteng/06.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Hasil nilai preferensi",
      "en": "Preference value results"
    }
  }
];

export default function SpkAsramaProject() {
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
          <h1>SPK Asrama Kalteng</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/spk-asrama-kalteng"
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
            <div className={styles.viewport} id="spk-asrama-kalteng-screenshots">
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
                aria-controls="spk-asrama-kalteng-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="spk-asrama-kalteng-screenshots"
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
                    aria-controls="spk-asrama-kalteng-screenshots"
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
