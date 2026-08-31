import type { FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Section.module.css";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Section: FC<Props> = ({ title, children, className }) => {
  return (
    <section className={clsx(styles.container, className)}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
