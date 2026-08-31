import type { FC } from "react";
import styles from "./DownloadButton.module.css";

const DownloadButton: FC = () => {
  return (
    <a
      href={`${import.meta.env.BASE_URL}Peter%20Dani%20-%20Senior%20Frontend%20Developer%20CV.pdf`}
      download="Peter Dani - Senior Frontend Developer CV.pdf"
      className={styles.button}
      aria-label="Download CV as PDF"
      title="Download CV as PDF"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span className={styles.text}>Download PDF</span>
    </a>
  );
};

export default DownloadButton;
