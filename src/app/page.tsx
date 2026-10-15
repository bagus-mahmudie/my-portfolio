"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  LayoutTemplate,
  ShoppingBag,
  ChartNoAxesCombined,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import { LanguageToggle } from "@/components/LanguageToggle";
import { TechCarousel } from "@/components/TechCarousel";
import { GitHubLogo } from "@/components/GitHubLogo";
import { translations } from "@/data/translations";
import { presentation } from "@/data/presentation";
import projectImageSizes from "@/data/project-image-sizes.json";

const serviceIcons = [LayoutTemplate, Code2, ShoppingBag, ChartNoAxesCombined];
const projectBackgrounds = new Set([
  "uwais-pictures",
  "grand-ontama",
  "eggine-studio",
  "888living",
  "mitra-elang-bersatu",
  "nymgo",
  "grand-ontama-dashboard",
  "drubbix",
  "pt-sentral-layanan-prima",
  "catkuji",
  "project-management",
  "auto-trust",
  "lova-dating-site",
  "spk-asrama-kalteng",
  "refactory-redesign",
  "megah-abadi",
  "sikd-uns",
  "dishub-uji-berkala",
  "grand-ontama-v1",
]);
const backgroundFor = (link: string) => {
  const slug = link.split("/").pop() ?? "";
  return projectBackgrounds.has(slug)
    ? "/images/project-backgrounds/" + slug + (slug === "grand-ontama" ? ".jpg" : ".png")
    : null;
};
const imageFor = (link: string) => {
  const slug = link.split("/").pop();
  if (slug === "lova-dating-site") {
    return { src: "/images/" + slug + ".svg", width: 120, height: 120 };
  }
  const file = slug?.startsWith("grand-ontama")
    ? "grand-ontama.webp"
    : slug === "888living" || slug === "nymgo"
      ? slug + "-white.png"
      : slug + ".png";
  const size = projectImageSizes[file as keyof typeof projectImageSizes];
  return { src: "/images/" + file, ...size };
};

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const [expanded, setExpanded] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const t = translations[lang];
  const p = presentation[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const filtered = t.projects.items.filter(
    (item) =>
      filter === "all" || (filter === "web" ? !!item.website : !item.website),
  );
  const visible = expanded ? filtered : filtered.slice(0, 6);

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = encodeURIComponent(
      (lang === "id" ? "Pesan portofolio — " : "Portfolio inquiry — ") + name,
    );
    const body = encodeURIComponent(
      (lang === "id" ? "Nama: " : "Name: ") +
        name +
        "\nEmail: " +
        email +
        (lang === "id" ? "\n\nPesan:\n" : "\n\nMessage:\n") +
        message,
    );
    const composeUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=bagusmahmudie%40gmail.com&su=" +
      subject +
      "&body=" +
      body;
    window.open(composeUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#about">
        {lang === "id" ? "Langsung ke konten" : "Skip to content"}
      </a>
      <nav
        className={"site-nav " + (scrolled || menuOpen ? "affixed" : "")}
        aria-label={lang === "id" ? "Navigasi utama" : "Main navigation"}
      >
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            Bagus.
          </a>
          <div className="nav-tools">
            <div
              id="navigation"
              className={"nav-links " + (menuOpen ? "is-open" : "")}
              inert={!menuOpen}
            >
              {[
                ["about", t.nav.about],
                ["service", p.serviceTitle],
                ["portfolio", t.nav.projects],
                ["contact", t.nav.contact],
              ].map(([id, label], index) => (
                <a
                  style={{
                    transitionDelay: menuOpen ? index * 55 + "ms" : "0ms",
                  }}
                  key={id}
                  href={"#" + id}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
            <LanguageToggle lang={lang} setLang={setLang} />
            <button
              ref={menuButton}
              className={"menu-toggle " + (menuOpen ? "is-open" : "")}
              aria-label={menuOpen ? p.closeMenu : p.menu}
              aria-expanded={menuOpen}
              aria-controls="navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            <span className="hello">{p.hello}</span>
            <span className="hero-name">
              {p.intro} Bagus
              <br />
              Mahmudie
            </span>
          </h1>
          <p className="hero-role">FULL-STACK WEB DEVELOPER</p>
          <a href="#portfolio" className="button button-primary">
            {t.hero.btnProjects}
          </a>
        </div>
      </header>

      <main>
        <section id="about" className="section container about">
          <div className="portrait-wrap">
            <Image
              src="/images/bagus.png"
              width={440}
              height={480}
              alt="Bagus Mahmudie"
              className="portrait"
              priority
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">{p.aboutEyebrow}</p>
            <h2>{p.aboutTitle}</h2>
            <p>{t.hero.description}</p>
            <p>{t.skills.description}</p>
            <p className="availability">
              <span />
              Jakarta, Indonesia · {t.hero.status}
            </p>
            <a
              className="button button-outline"
              href="https://github.com/bagus-mahmudie"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.btnGithub}
            </a>
          </div>
        </section>

        <section id="service" className="section container">
          <div className="section-heading">
            <p className="eyebrow">{p.serviceEyebrow}</p>
            <h2>{p.serviceTitle}</h2>
          </div>
          <div className="service-grid">
            {p.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article
                  className="service-card"
                  key={service.title}
                  tabIndex={0}
                >
                  <Icon
                    className="service-icon"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
          <TechCarousel lang={lang} />
        </section>

        <section id="portfolio" className="section container">
          <div className="section-heading">
            <p className="eyebrow">{p.portfolioEyebrow}</p>
            <h2>{p.portfolioTitle}</h2>
          </div>
          <div className="project-filters" aria-label={t.nav.projects}>
            {(
              [
                ["all", p.all],
                ["web", p.websites],
                ["app", p.apps],
              ] as const
            ).map(([value, label]) => (
              <button
                className={filter === value ? "active" : ""}
                aria-pressed={filter === value}
                key={value}
                onClick={() => {
                  setFilter(value);
                  setExpanded(false);
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="project-grid" id="project-list">
            {visible.map((item) => (
              <article
                className="project-card"
                key={item.link}
                tabIndex={0}
                aria-label={item.title}
              >
                <div
                  className={
                    "project-image" +
                    (item.link.endsWith("/eggine-studio")
                      ? " project-image-light-ink"
                      : "")
                  }
                >
                  {backgroundFor(item.link) && (
                    <Image
                      className="project-backdrop"
                      src={backgroundFor(item.link)!}
                      alt=""
                      fill
                      sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 370px"
                      aria-hidden="true"
                    />
                  )}
                  <div className="project-backdrop-tint" aria-hidden="true" />
                  <div
                    data-project={item.link.split("/").pop()}
                    className={
                      "project-logo-surface" +
                      (item.link.endsWith("/eggine-studio")
                        ? " project-logo-light-ink"
                        : "")
                    }
                  >
                    <Image
                      {...imageFor(item.link)}
                      className={
                        item.link.endsWith("/nymgo")
                          ? "project-logo-dark-only"
                          : undefined
                      }
                      alt={item.title}
                      unoptimized
                    />
                    {item.link.endsWith("/nymgo") && (
                      <Image
                        src="/images/nymgo.png"
                        {...projectImageSizes["nymgo.png"]}
                        className="project-logo-light-only"
                        alt={item.title}
                        unoptimized
                      />
                    )}
                  </div>
                  <span className="project-index">
                    {String(t.projects.items.indexOf(item) + 1).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>
                <div className="project-base">
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
                <div className="project-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="project-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.title + " — " + t.projects.repository}
                    >
                      {t.projects.repository}
                    </a>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.title + " — " + t.projects.website}
                      >
                        {t.projects.website}
                      </a>
                    )}
                  </div>
                  {item.requiresLogin && <small>{t.projects.login}</small>}
                  {(item.link.endsWith("/uwais-pictures") || item.link.endsWith("/grand-ontama") || item.link.endsWith("/eggine-studio") || item.link.endsWith("/888living") || item.link.endsWith("/mitra-elang-bersatu") || item.link.endsWith("/nymgo") || item.link.endsWith("/grand-ontama-dashboard") || item.link.endsWith("/drubbix") || item.link.endsWith("/pt-sentral-layanan-prima")) && (
                    <Link className="button button-primary" href={item.link.endsWith("/pt-sentral-layanan-prima") ? "/projects/pt-sentral-layanan-prima" : item.link.endsWith("/drubbix") ? "/projects/drubbix" : item.link.endsWith("/grand-ontama-dashboard") ? "/projects/grand-ontama-dashboard" : item.link.endsWith("/nymgo") ? "/projects/nymgo" : item.link.endsWith("/mitra-elang-bersatu") ? "/projects/mitra-elang-bersatu" : item.link.endsWith("/888living") ? "/projects/888living" : item.link.endsWith("/eggine-studio") ? "/projects/eggine-studio" : item.link.endsWith("/grand-ontama") ? "/projects/grand-ontama" : "/projects/uwais-pictures"} aria-label={lang === "id" ? `Lihat detail ${item.title}` : `View ${item.title} details`}>
                      {lang === "id" ? "Lihat Detail" : "View Details"}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
          {filtered.length > 6 && (
            <div className="center more-projects">
              <button
                className="button button-outline"
                aria-expanded={expanded}
                aria-controls="project-list"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? p.less : p.more + " (" + filtered.length + ")"}
              </button>
            </div>
          )}
        </section>

        <section id="contact" className="section container contact">
          <div className="section-heading">
            <p className="eyebrow">{p.contactEyebrow}</p>
            <h2>{p.contactTitle}</h2>
          </div>
          <p className="contact-intro">{t.contact.description}</p>
          <form className="contact-form" onSubmit={openEmail}>
            <div className="form-row">
              <label>
                <span className="sr-only">{p.name}</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder={p.name}
                  required
                  maxLength={100}
                />
              </label>
              <label>
                <span className="sr-only">{p.email}</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={p.email}
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label>
              <span className="sr-only">{p.message}</span>
              <textarea
                name="message"
                rows={6}
                placeholder={p.message}
                required
                maxLength={3000}
              />
            </label>
            <button className="button button-outline" type="submit">
              {p.send}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <p className="form-note">{p.emailHint}</p>
          </form>
          <a className="email-link" href="mailto:bagusmahmudie@gmail.com">
            bagusmahmudie@gmail.com
          </a>
        </section>
      </main>

      <ThemeToggle label={p.theme} />
      <BackToTop lang={lang} />
      <footer className="container footer">
        <p>
          © 2026 Bagus Mahmudie <span>· {t.footer}</span>
        </p>
        <div className="social-links">
          <a
            href="https://wa.me/6281254047573"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp +62 812-5404-7573"
          >
            <Image
              src="/images/social/whatsapp.svg"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
            />
          </a>
          <a
            href="https://github.com/bagus-mahmudie"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/bagus-mahmudie/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              src="/images/social/linkedin.svg"
              width={18}
              height={18}
              alt=""
              aria-hidden="true"
            />
          </a>
          <a href="mailto:bagusmahmudie@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
