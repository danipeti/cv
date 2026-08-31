import { Fragment, type FC } from "react";
import Section from "../../components/Section/Section.tsx";
import Tag from "../../components/Tag/Tag.tsx";
import styles from "./Skills.module.css";
import { skills } from "../../data/skills.ts";

const Skills: FC = () => {
  return (
    <Section title="Skills">
      <div className={styles.container}>
        {skills.map((category) => (
          <Fragment key={category.title}>
            <div className={styles.title}>{category.title}</div>
            <div className={styles.tags}>
              {category.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
