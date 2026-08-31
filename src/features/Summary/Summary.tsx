import type { FC } from "react";
import Section from "../../components/Section/Section.tsx";
import styles from "./Summary.module.css";
import { summary } from "../../data/summary.ts";

const Summary: FC = () => {
  return (
    <Section title="Summary">
      <div className={styles.container}>
        {summary.map((text, index) => (
          <p key={index} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default Summary;
