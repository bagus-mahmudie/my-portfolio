"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./FloatingControls.module.css";

export function BackToTop({ lang }: { lang: "id" | "en" }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const label = lang === "id" ? "Kembali ke atas" : "Back to top";
  return (
    <button
      type="button"
      className={`${styles.button} ${styles.backToTop} ${visible ? styles.visible : ""}`}
      aria-label={label}
      title={label}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
