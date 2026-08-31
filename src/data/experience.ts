type ProjectItem = {
  title: string;
  skills?: string[];
  description?: string;
};

type ExperienceItem = {
  title: string;
  subtitle?: string;
  date: string;
  projects?: ProjectItem[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Ericsson",
    subtitle: "senior frontend developer",
    date: "2025 - now",
    projects: [
      {
        title: "Antenna Tilt Optimization Tool",
        skills: ["TypeScript", "React", "TanStack Query"],
        description:
          "Created the frontend of an optimization tool used for setting the tilt of cellular antennas within a microfrontend setup.",
      },
    ],
  },
  {
    title: "Tata Consultancy Services",
    subtitle: "senior frontend developer",
    date: "2024",
    projects: [
      {
        title: "Europ Assistance",
        skills: ["TypeScript", "React", "Redux", "Material UI"],
        description:
          "Developed the web application used by operators to manage and process customer insurance claims.",
      },
    ],
  },
  {
    title: "AdNovum Hungary",
    subtitle: "senior frontend developer",
    date: "2021 - 2024",
    projects: [
      {
        title: "Holcim",
        skills: ["TypeScript", "React", "Redux", "Material UI"],
        description:
          "Modernized the legacy codebase and implemented customer and dispatcher web applications in a frontend team of 2–4 developers for Holcim, a building materials and construction company.",
      },
    ],
  },
  {
    title: "Grape Solutions",
    subtitle: "senior frontend developer",
    date: "2020 - 2021",
    projects: [
      {
        title: "Internal Enterprise & IoT Suite",
        skills: ["TypeScript", "React", "Redux", "Ant Design"],
        description:
          "Created the frontend for internal enterprise applications, including project resource allocation, employee leave management, and IoT device management.",
      },
    ],
  },
  {
    title: "Accenture",
    subtitle: "senior frontend developer",
    date: "2018 - 2020",
    projects: [
      {
        title: "Asset Visualization Platform",
        skills: ["JavaScript", "React", "Redux"],
        description:
          "Developed the frontend of a web application capable of visualizing assets of external companies.",
      },
      {
        title: "Siemens",
        skills: ["JavaScript", "React", "Redux"],
        description:
          "Modernized the legacy application and implemented new features to track software license obligations, serving as the only frontend developer on the team.",
      },
    ],
  },
  {
    title: "EPAM Systems",
    subtitle: "frontend / backend developer",
    date: "2014 - 2018",
    projects: [
      {
        title: "Swiss bank",
        skills: ["JavaScript", "React", "Redux"],
      },
      {
        title: "Burberry",
        skills: ["JavaScript", "Backbone.js"],
      },
      {
        title: "Swiss bank",
        skills: ["Java"],
      },
    ],
  },
  {
    title: "AdNovum Hungary",
    subtitle: "full stack developer",
    date: "2013",
  },
  {
    title: "Nokia Siemens Networks",
    subtitle: "full-stack developer",
    date: "2012",
  },
];
