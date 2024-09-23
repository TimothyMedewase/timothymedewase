type Project = {
  title: string;
  description: string;
  long_description: string;
  technologies: string[];
  website: string;
  github: string;
};

export const projectsData: Project[] = [
  {
    title: "SPAZ",
    description: "Music Analytics",
    long_description: "Web Application to provide Spotify users insights",
    technologies: ["Next.js", "TailwindCSS", "Javascript"],
    website: "blank",
    github: "blank",
  },
  {
    title: "Buy-n-Sell",
    description: "E-commerce ",
    long_description:
      "An e-commerce platform that sells many range of products ",
    technologies: ["Flask", "React", "Python", "PostgreSQL"],
    website: "blank",
    github: "blank",
  },
  {
    title: "NBA Companion",
    description: "Basketball Statistics ",
    long_description:
      "A web application for the National Basketball Association featuring g comprehensive views of conferences, clubs, players, and head-to-head comparison  ",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    website: "blank",
    github: "blank",
  },
  {
    title: "Housing Predictions Project",
    description: "Machine Learning Project",
    long_description: "A predictive system for California housing costs",
    technologies: ["Python", "Scikit-learn"],
    website: "blank",
    github: "blank",
  },
];
