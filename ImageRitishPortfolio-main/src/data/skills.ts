export interface Skill {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    description:
      "Building a strong foundation in programming and problem-solving.",
    iconName: "Code2",
    skills: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "TypeScript" },
    ],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Creating responsive and user-friendly interfaces with modern web technologies.",
    iconName: "Layout",
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Developing backend services, REST APIs, and server-side applications.",
    iconName: "Server",
    skills: [
      { name: "Java Spring Boot" },
      { name: "REST APIs" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Managing application data using relational and cloud databases.",
    iconName: "Database",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
    ],
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    description:
      "Using development tools for version control, API testing, and debugging.",
    iconName: "Wrench",
    skills: [
      { name: "Git & GitHub" },
      { name: "VS Code" },
      { name: "Eclipse" },
      { name: "Postman" },
      { name: "Playwright" },
    ],
  },
  {
    id: "ai-machine-learning",
    title: "AI / Machine Learning",
    description:
      "Exploring machine learning, AI applications, and augmented reality technologies.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Python for Data Analysis" },
      { name: "Machine Learning" },
      { name: "Three.js" },
      { name: "Augmented Reality (AR)" },
    ],
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description:
      "Practicing functional testing, API validation, and web automation.",
    iconName: "ShieldCheck",
    skills: [
      { name: "Functional Testing" },
      { name: "API Testing" },
      { name: "Playwright with TypeScript" },
      { name: "Test Case Design" },
    ],
  },
  {
    id: "professional-skills",
    title: "Professional Skills",
    description:
      "Applying communication, analytical thinking, and collaboration to projects.",
    iconName: "Users",
    skills: [
      { name: "Problem Solving" },
      { name: "Team Collaboration" },
      { name: "Communication" },
      { name: "Continuous Learning" },
    ],
  },
];

