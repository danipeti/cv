import type { FC, ReactNode } from "react";
import styles from "./Tag.module.css";

type Props = {
  children: ReactNode;
};

const Tag: FC<Props> = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
