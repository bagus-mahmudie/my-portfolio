"use client";

import { useTheme } from "next-themes";
import styles from "./FloatingControls.module.css";

export function ThemeToggle({ label = "Ganti tema" }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className={styles.themeControl}>
      <span className={styles.cord} aria-hidden="true" />
      <span className={styles.cap} aria-hidden="true" />
      <button type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className={styles.button} aria-label={label} title={label}>
        <span className={styles.lamp}>
          <svg className={styles.lightBulb} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z" />
          </svg>
          <svg className={styles.darkBulb} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2a8 8 0 0 0-6.25 13C6.37 15.77 8 17 8 18.5V21a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.5c0-1.5 1.62-2.73 2.24-3.5A8 8 0 0 0 12 2Zm-2 18h4v1h-4v-1Zm3-14-4.5 6H11v4l4.5-6H13V6Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
