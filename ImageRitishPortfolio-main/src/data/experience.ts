export type ExperienceCategory = "work" | "education" | "freelance";

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: string;
  organization: string;
  location?: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  iconType: "work" | "graduation" | "code" | "award";
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    category: "work",
    title: "Java Full Stack Intern",
    organization: "Acaders",
    location: "Bengaluru, India",
    date: "Recent",
    description: "Contributed to the full software development lifecycle, building scalable applications and collaborating closely with mentors in an Agile environment.",
    achievements: [
      "Built responsive and interactive web applications using React.js.",
      "Developed secure and scalable REST APIs using Java Spring Boot.",
      "Integrated and optimized MySQL databases for efficient data storage and retrieval.",
      "Collaborated effectively with team members in daily Agile sprints."
    ],
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Agile"],
    iconType: "work",
  },
  {
    id: "exp-data",
    category: "work",
    title: "Data Analyst Intern",
    organization: "Oasis Infobyte",
    location: "Remote",
    date: "Previous",
    description: "Analyzed complex datasets and built insightful visualizations to drive data-informed decision making.",
    achievements: [
      "Cleaned and pre-processed large datasets for accurate reporting.",
      "Created interactive dashboards and visualizations.",
      "Identified key trends and patterns to optimize business processes."
    ],
    technologies: ["Data Analysis", "Python", "SQL", "Data Visualization"],
    iconType: "work",
  },
  {
    id: "exp-android",
    category: "work",
    title: "Android Developer Intern",
    organization: "Saiket Systems",
    location: "Bengaluru, India",
    date: "Previous",
    description: "Developed and maintained feature-rich Android mobile applications, ensuring high performance and great user experiences.",
    achievements: [
      "Built responsive mobile interfaces adhering to modern Android design principles.",
      "Integrated RESTful APIs to fetch and display dynamic content.",
      "Optimized app performance and squashed critical bugs."
    ],
    technologies: ["Android Studio", "Java", "Kotlin", "Mobile UI/UX"],
    iconType: "code",
  },
  {
    id: "exp-4",
    category: "education",
    title: "Information Science",
    organization: "APS College of Engineering",
    location: "Bengaluru, India",
    date: "Graduated",
    description: "Comprehensive study of software engineering principles, algorithms, and system design.",
    achievements: [
      "Graduated with a Bachelor of Engineering (B.E.) with a CGPA of 8.44.",
      "Specialized in Java Full Stack Development.",
      "Developed a strong foundation in Database Management Systems (DBMS).",
      "Applied theoretical knowledge to practical, real-world academic projects."
    ],
    technologies: ["Java", "SQL", "HTML/CSS", "Python"],
    iconType: "graduation",
  }
];
