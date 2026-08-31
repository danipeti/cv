import type { FC, ReactNode } from "react";
import styles from "./Organization.module.css";

type Props = {
  title: string;
  subtitle?: string;
  date: string;
  children?: ReactNode;
};

const Organization: FC<Props> = ({ title, subtitle, date, children }) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        <div className={styles.date}>{date}</div>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </article>
  );
};

export default Organization;
