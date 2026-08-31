import type { FC } from "react";
import styles from "./Footer.module.css";
import { personal } from "../../data/personal.ts";

const Footer: FC = () => {
  const { portfolio, repository } = personal;

  return (
    <footer className={styles.footer}>
      <a href={portfolio.url} className={styles.pageLink}>
        {portfolio.label}
      </a>
      <span className={styles.divider} aria-hidden="true">
        ·
      </span>
      <a
        href={repository.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        View source on GitHub
      </a>
    </footer>
  );
};

export default Footer;
