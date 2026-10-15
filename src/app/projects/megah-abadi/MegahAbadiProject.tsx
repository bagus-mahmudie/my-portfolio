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
    "intro": "Aplikasi toko online Megah Abadi untuk membantu pelanggan menelusuri produk, mengelola keranjang, dan menyelesaikan pemesanan. Pengguna dapat mencari produk melalui filter, membaca ulasan, mengatur alamat pengiriman, serta memantau pesanan. Proyek dikembangkan secara lokal dengan Laravel, Blade, Tailwind CSS, dan MySQL.",
    "overviewText": "Megah Abadi menggabungkan katalog produk dan alur belanja dalam satu aplikasi. Halaman katalog membantu pelanggan menemukan produk, sementara keranjang dan checkout merangkum pilihan belanja serta alamat pelanggan. Integrasi Midtrans dan Biteship disiapkan untuk pembayaran dan pengiriman, dengan konfigurasi layanan yang diperlukan sebelum digunakan.",
    "featureList": [
      [
        "Katalog, filter & ulasan",
        "Menampilkan produk dan kategori, filter pencarian, serta ulasan untuk membantu pelanggan memilih produk."
      ],
      [
        "Akun & keranjang",
        "Menyediakan akun pelanggan dan keranjang untuk mengelola pilihan serta jumlah produk sebelum checkout."
      ],
      [
        "Checkout & pembayaran",
        "Mengelola alamat pelanggan, ringkasan pesanan, dan integrasi pembayaran melalui Midtrans."
      ],
      [
        "Pengiriman & pelacakan",
        "Mendukung integrasi Biteship untuk pengiriman serta pelacakan status pesanan."
      ]
    ],
    "technology": [
      [
        "Laravel 9 / PHP",
        "Menangani autentikasi, katalog, keranjang, checkout, dan proses pesanan."
      ],
      [
        "Blade",
        "Menyusun template halaman serta komponen antarmuka toko."
      ],
      [
        "Tailwind CSS / JavaScript",
        "Mengatur tampilan responsif dan mendukung interaksi frontend."
      ],
      [
        "MySQL",
        "Menyimpan data produk, pelanggan, alamat, ulasan, dan pesanan."
      ],
      [
        "Midtrans / Biteship",
        "Mendukung pembayaran dan pengiriman dengan konfigurasi akun serta kredensial layanan terkait."
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
    "intro": "A Megah Abadi online store application for browsing products, managing a cart, and placing orders. Users can find products through filters, read reviews, manage delivery addresses, and track orders. The project is developed locally with Laravel, Blade, Tailwind CSS, and MySQL.",
    "overviewText": "Megah Abadi brings a product catalog and shopping flow together in one application. Catalog pages help customers find products, while the cart and checkout summarize their selections and delivery details. Midtrans and Biteship integrations support payment and shipping once the required services are configured.",
    "featureList": [
      [
        "Catalog, filters & reviews",
        "Displays products and categories, search filters, and reviews to help customers choose products."
      ],
      [
        "Accounts & cart",
        "Provides customer accounts and a cart for managing product selections and quantities before checkout."
      ],
      [
        "Checkout & payments",
        "Handles customer addresses, order summaries, and payment integration through Midtrans."
      ],
      [
        "Shipping & tracking",
        "Supports Biteship shipping integration and order status tracking."
      ]
    ],
    "technology": [
      [
        "Laravel 9 / PHP",
        "Handles authentication, catalogs, carts, checkout, and order processing."
      ],
      [
        "Blade",
        "Builds store page templates and interface components."
      ],
      [
        "Tailwind CSS / JavaScript",
        "Provides responsive styling and supports frontend interactions."
      ],
      [
        "MySQL",
        "Stores products, customers, addresses, reviews, and orders."
      ],
      [
        "Midtrans / Biteship",
        "Supports payments and shipping with the corresponding service accounts and credentials configured."
      ]
    ]
  }
};

const screenshots = [
  {
    "id": "01",
    "src": "/images/projects/megah-abadi/01.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Beranda toko Megah Abadi",
      "en": "Megah Abadi store homepage"
    }
  },
  {
    "id": "02",
    "src": "/images/projects/megah-abadi/02.png",
    "width": 1600,
    "height": 900,
    "alt": {
      "id": "Dialog login pelanggan",
      "en": "Customer login dialog"
    }
  },
  {
    "id": "03",
    "src": "/images/projects/megah-abadi/03.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Produk dan banner promo",
      "en": "Products and promotional banners"
    }
  },
  {
    "id": "04",
    "src": "/images/projects/megah-abadi/04.png",
    "width": 1569,
    "height": 883,
    "alt": {
      "id": "Katalog produk dengan filter kategori",
      "en": "Product catalog with category filters"
    }
  },
  {
    "id": "05",
    "src": "/images/projects/megah-abadi/05.png",
    "width": 1570,
    "height": 883,
    "alt": {
      "id": "Keranjang dan ringkasan pembayaran",
      "en": "Shopping cart and payment summary"
    }
  }
];

export default function MegahAbadiProject() {
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
          <h1>Megah Abadi</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.actions}>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie/megah-abadi"
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
            <div className={styles.viewport} id="megah-abadi-screenshots">
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
                aria-controls="megah-abadi-screenshots"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.next}`}
                onClick={() => moveSlide(1)}
                aria-label={t.next}
                aria-controls="megah-abadi-screenshots"
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
                    aria-controls="megah-abadi-screenshots"
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
