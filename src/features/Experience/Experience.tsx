import type { FC } from "react";
import Section from "../../components/Section/Section.tsx";
import Organization from "../../components/Organization/Organization.tsx";
import Project from "../../components/Project/Project.tsx";
import styles from "./Experience.module.css";
import { experience } from "../../data/experience.ts";

const Experience: FC = () => {
  return (
    <Section title="Experience">
      <div className={styles.container}>
        {experience.map((item, index) => (
          <Organization
            key={`${item.title}-${item.date}-${index}`}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
          >
            {item.projects?.map((project, projectIndex) => (
              <Project
                key={`${project.title}-${projectIndex}`}
                title={project.title}
                skills={project.skills}
                description={project.description}
              />
            ))}
          </Organization>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
