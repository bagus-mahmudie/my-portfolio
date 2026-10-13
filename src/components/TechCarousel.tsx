"use client";

import Image from "next/image";
import styles from "./TechCarousel.module.css";

const technologies = [
  { name: "Laravel", icon: "laravel" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue", icon: "vuejs" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "PHP", icon: "php" },
  { name: "ESLint", icon: "eslint" },
  { name: "Inertia.js", icon: "inertiajs" },
  { name: "Eleventy", icon: "eleventy" },
  { name: "MySQL", icon: "mysql" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Vite", icon: "vitejs" },
  { name: "Git", icon: "git" },
];

export function TechCarousel({ lang }: { lang: "id" | "en" }) {
  const label = lang === "id" ? "Teknologi yang saya gunakan" : "Technologies I use";

  return (
    <section className={styles.carousel} aria-label={label}>
      <div className={styles.window} tabIndex={0} role="group" aria-label={label}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <ul className={styles.group} key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {technologies.map((tech) => (
                <li className={styles.item} key={tech.icon}>
                  <Image src={"/images/tech/" + tech.icon + ".svg"} alt="" width={42} height={42} className={styles.logo + (["nextjs", "eleventy"].includes(tech.icon) ? " " + styles.monochrome : "")} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

