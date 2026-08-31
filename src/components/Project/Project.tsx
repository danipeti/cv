import type { FC } from "react";
import styles from "./Project.module.css";
import Tag from "../Tag/Tag.tsx";

type Props = {
  title: string;
  description?: string;
  skills?: string[];
};

const Project: FC<Props> = ({ title, description, skills }) => {
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h4 className={styles.name}>{title}</h4>
        <div className={styles.tags}>
          {skills?.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
};

export default Project;
