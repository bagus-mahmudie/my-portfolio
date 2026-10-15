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
    "intro": "Aplikasi Catkuji untuk menjelajahi katalog event kuji, mengikuti proses undian hadiah, dan mengelola koleksi dalam satu akun. Pengguna dapat melihat pilihan hadiah, mengisi saldo, memantau inventori serta transaksi, dan mengajukan pengiriman. Proyek dikembangkan secara lokal dengan Laravel, Vue, dan Inertia.js.",
    "overviewText": "Catkuji menghubungkan katalog event, proses kuji, inventori hadiah, dompet, dan pengiriman dalam satu aplikasi. Antarmuka pengguna mencakup autentikasi, detail event, hasil hadiah, serta riwayat transaksi, sementara panel administrasi mendukung pengelolaan katalog dan pesanan. Integrasi pembayaran, pengiriman, dan login sosial memerlukan konfigurasi layanan masing-masing.",
    "featureList": [
      [
        "Katalog & proses kuji",
        "Menampilkan event, daftar hadiah, token, serta alur undian dan tampilan hasil hadiah."
      ],
      [
        "Dompet & transaksi",
        "Menyediakan saldo pengguna, riwayat transaksi, serta integrasi pembayaran Midtrans untuk proses top up."
      ],
      [
        "Inventori & pengiriman",
        "Mengelola hadiah dalam inventori dan permintaan pengiriman dengan integrasi Biteship."
      ],
      [
        "Akun & administrasi",
        "Mendukung registrasi, verifikasi OTP email, opsi login sosial, serta administrasi produk, kategori, pengguna, pembayaran, dan pesanan."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Menangani logika aplikasi, autentikasi, pengelolaan data, serta integrasi layanan."
      ],
      [
        "Vue 3 / Inertia.js 2",
        "Membangun antarmuka reaktif yang terhubung dengan backend Laravel."
      ],
      [
        "Tailwind CSS / Vite 7",
        "Mengatur tampilan responsif serta proses pengembangan dan build frontend."
      ],
      [
        "MySQL",
        "Menyimpan data akun, katalog, inventori, saldo, transaksi, dan pengiriman."
      ],
      [
        "Midtrans / Biteship / Socialite",
        "Mendukung integrasi pembayaran, pengiriman, dan login sosial dengan konfigurasi layanan terkait."
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
    "intro": "A Catkuji application for exploring kuji events, participating in prize draws, and managing a collection through one account. Users can browse prizes, top up a wallet, review inventory and transactions, and request shipping. The project is developed locally with Laravel, Vue, and Inertia.js.",
    "overviewText": "Catkuji connects event catalogs, prize draws, prize inventory, wallets, and shipping in one application. The user interface covers authentication, event details, prize results, and transaction history, while administration tools support catalog and order management. Payment, shipping, and social login integrations require their respective service configuration.",
    "featureList": [
      [
        "Catalog & kuji flow",
        "Displays events, prize listings, tokens, and the draw and prize result flow."
      ],
      [
        "Wallet & transactions",
        "Provides user balances, transaction history, and Midtrans integration for top-ups."
      ],
      [
        "Inventory & shipping",
        "Manages prizes in user inventory and shipment requests with Biteship integration."
      ],
      [
        "Accounts & administration",
        "Supports registration, email OTP verification, optional social login, and administration of products, categories, users, payments, and orders."
      ]
    ],
    "technology": [
      [
        "Laravel 12 / PHP",
        "Handles application logic, authentication, data management, and service integrations."
      ],
      [
        "Vue 3 / Inertia.js 2",
        "Builds a reactive interface connected to the Laravel backend."
      ],
      [
        "Tailwind CSS / Vite 7",
        "Provides responsive styling and frontend development and build tooling."
      ],
      [
        "MySQL",
        "Stores account, catalog, inventory, wallet, transaction, and shipment data."
      ],
      [
        "Midtrans / Biteship / Socialite",
        "Supports payment, shipping, and social login integrations with the corresponding service configuration."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/catkuji/01.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Dialog login Catkuji",
      "en": "Catkuji login dialog"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/catkuji/02.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Beranda dan banner katalog",
      "en": "Homepage and catalog banner"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/catkuji/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Katalog promo dan produk",
      "en": "Promotion and product catalog"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/catkuji/04.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Detail event dan pilihan pembelian",
      "en": "Event details and purchase options"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/catkuji/05.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Top up saldo melalui Midtrans",
      "en": "Wallet top-up through Midtrans"
    }
  },
  {
    "id": "06",
    "src": "/images/projects/catkuji/06.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Antarmuka undian kuji",
      "en": "Kuji draw interface"
    }
  },
  {
    "id": "07",
    "src": "/images/projects/catkuji/07.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Animasi pembukaan hadiah",
      "en": "Prize opening animation"
    }
  },
  {
    "id": "08",
    "src": "/images/projects/catkuji/08.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Hasil hadiah kuji",
      "en": "Kuji prize result"
    }
  },
  {
    "id": "09",
    "src": "/images/projects/catkuji/09.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Inventori koleksi hadiah",
      "en": "Prize collection inventory"
    }
  },
  {
    "id": "10",
    "src": "/images/projects/catkuji/10.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Alamat dan pilihan pengiriman",
      "en": "Address and shipping options"
    }
  },
  {
    "id": "11",
    "src": "/images/projects/catkuji/11.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Riwayat dan detail transaksi",
      "en": "Transaction history and details"
    }
  },
  {
    "id": "12",
    "src": "/images/projects/catkuji/12.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Profil akun dan riwayat pesanan",
      "en": "Account profile and order history"
    }
  }
];

export default function CatkujiProject() {
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
          <h1>Catkuji</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/catkuji"
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
            <div className={styles.viewport} id="catkuji-screenshots">
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
                aria-controls="catkuji-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="catkuji-screenshots"
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
                    aria-controls="catkuji-screenshots"
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
