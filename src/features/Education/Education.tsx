import type { FC } from "react";
import Section from "../../components/Section/Section.tsx";
import Organization from "../../components/Organization/Organization.tsx";
import { education } from "../../data/education.ts";

const Education: FC = () => {
  return (
    <Section title="Education">
      {education.map((item, index) => (
        <Organization
          key={`${item.title}-${index}`}
          title={item.title}
          subtitle={item.subtitle}
          date={item.date}
        >
          {item.description}
        </Organization>
      ))}
    </Section>
  );
};

export default Education;
