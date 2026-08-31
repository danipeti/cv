type SkillCategory = {
  title: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Languages & Styling",
    skills: [
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "CSS Modules",
      "Sass / Less",
    ],
  },
  {
    title: "Libraries & State",
    skills: [
      "React",
      "TanStack Query",
      "Redux Toolkit",
      "Material UI",
      "Ant Design",
    ],
  },
  {
    title: "Testing & Quality",
    skills: ["React Testing Library", "Vitest", "Jest", "ESLint", "Prettier"],
  },
  {
    title: "APIs & Tooling",
    skills: ["REST APIs", "OpenAPI Generator", "Vite", "Git", "Agile / Scrum"],
  },
];
