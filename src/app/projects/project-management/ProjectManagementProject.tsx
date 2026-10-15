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
    "intro": "Aplikasi Project Management untuk membantu tim mengatur proyek, membagikan tugas, dan memantau perkembangan pekerjaan dalam satu dashboard. Anggota tim dapat memperbarui status, menambahkan komentar serta lampiran, mengatur jadwal, dan mencatat laporan harian. Proyek dikembangkan dengan Laravel, Vue, dan Inertia.js.",
    "overviewText": "Project Management menyatukan pengelolaan proyek dan kolaborasi tim dalam antarmuka administrasi. Daftar tugas menampilkan penanggung jawab, status, prioritas, dan tenggat, sementara ringkasan dashboard membantu membaca progres pekerjaan. Kalender aktivitas, laporan harian, serta pengaturan akses melengkapi kebutuhan koordinasi tim.",
    "featureList": [
      [
        "Proyek & tugas",
        "Mendukung pembuatan proyek, penugasan anggota tim, pengaturan prioritas dan tenggat, serta riwayat perubahan status tugas."
      ],
      [
        "Kolaborasi & lampiran",
        "Menyediakan komentar, unggahan lampiran, dan tautan pendukung untuk menyimpan konteks pekerjaan bersama tugas."
      ],
      [
        "Dashboard & kalender",
        "Menampilkan ringkasan progres, grafik tugas, jadwal, dan event untuk membantu pemantauan aktivitas tim."
      ],
      [
        "Tim, laporan & akses",
        "Mengelola anggota tim, laporan harian, serta pengaturan akses pengguna."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Menangani autentikasi, logika proyek dan tugas, laporan, serta proses di sisi server."
      ],
      [
        "Vue 3 / Inertia.js 2",
        "Menghubungkan antarmuka reaktif dengan backend Laravel."
      ],
      [
        "Tailwind CSS 4 / Vite 7",
        "Mengatur styling responsif dan proses pengembangan serta build frontend."
      ],
      [
        "MySQL",
        "Menyimpan data proyek, anggota tim, tugas, aktivitas, dan laporan."
      ],
      [
        "ApexCharts / Bootstrap Icons",
        "Menyajikan grafik progres dan ikon untuk navigasi serta tindakan pada dashboard."
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
    "intro": "A Project Management application that helps teams organize projects, assign tasks, and monitor work in one dashboard. Team members can update statuses, add comments and attachments, manage schedules, and record daily reports. The project is built with Laravel, Vue, and Inertia.js.",
    "overviewText": "Project Management brings project organization and team collaboration into an administration interface. Task lists show assignees, status, priority, and deadlines, while dashboard summaries help track progress. An activity calendar, daily reports, and access settings support team coordination.",
    "featureList": [
      [
        "Projects & tasks",
        "Supports project creation, team assignments, priorities, deadlines, and task status history."
      ],
      [
        "Collaboration & attachments",
        "Provides comments, file attachments, and supporting links to keep work context alongside tasks."
      ],
      [
        "Dashboard & calendar",
        "Displays progress summaries, task charts, schedules, and events to help monitor team activities."
      ],
      [
        "Team, reports & access",
        "Manages team members, daily reports, and user access settings."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Handles authentication, project and task logic, reports, and server-side processing."
      ],
      [
        "Vue 3 / Inertia.js 2",
        "Connects a reactive interface to the Laravel backend."
      ],
      [
        "Tailwind CSS 4 / Vite 7",
        "Provides responsive styling and frontend development and build tooling."
      ],
      [
        "MySQL",
        "Stores projects, team members, tasks, activities, and reports."
      ],
      [
        "ApexCharts / Bootstrap Icons",
        "Provides progress charts and icons for dashboard navigation and actions."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/project-management/01.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Halaman login Project Management",
      "en": "Project Management login page"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/project-management/02.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Ringkasan dashboard dan jadwal",
      "en": "Dashboard overview and schedule"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/project-management/03.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Formulir pembuatan proyek",
      "en": "Project creation form"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/project-management/04.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Daftar tugas dan pilihan status",
      "en": "Task list and status options"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/project-management/05.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Ringkasan progres proyek",
      "en": "Project progress overview"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/project-management/06.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Pengaturan tanggal dan tenggat tugas",
      "en": "Task scheduling and deadline selection"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/project-management/07.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Dialog unggah lampiran tugas",
      "en": "Task attachment upload dialog"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/project-management/08.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Anggota tim dan detail pengguna",
      "en": "Team members and user details"
    }
  },
  {
    "id": "09",
    "src": "/images/projects/project-management/09.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Kalender dan pembuatan event",
      "en": "Calendar and event creation"
    }
  }
];

export default function ProjectManagementProject() {
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
          <h1>Project Management</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/project-management"
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
            <div className={styles.viewport} id="project-management-screenshots">
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
                aria-controls="project-management-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="project-management-screenshots"
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
                    aria-controls="project-management-screenshots"
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
