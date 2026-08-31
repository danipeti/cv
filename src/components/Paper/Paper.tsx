import type { FC, ReactNode } from "react";
import styles from "./Paper.module.css";

type Props = {
  children: ReactNode;
};

const Paper: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Paper;
