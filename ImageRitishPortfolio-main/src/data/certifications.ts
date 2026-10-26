export interface Certification {
  id: string;
  category: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  iconName: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  iconName: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  iconName: string;
}

export const certificationsData: Certification[] = [
  {
    id: "genai-tata",
    category: "Data Analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    date: "Completed",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_697347fa4414d52c3e53688b_1770535186342_completion_certificate.pdf",
    skills: ["GenAI", "Data Analytics"],
    iconName: "BrainCircuit"
  },
  {
    id: "java-acaders",
    category: "Full Stack Development",
    title: "Java Full-Stack Completion",
    issuer: "Acaders",
    date: "Completed",
    credentialUrl: "https://drive.google.com/file/d/1f6nj7KddwcxhJ_c6teVl7NwPnLFoOZ_e/view",
    skills: ["Java", "Full Stack"],
    iconName: "Coffee"
  },
  {
    id: "mern-edunet",
    category: "Full Stack Development",
    title: "MERN-Stack",
    issuer: "Edunet Foundation",
    date: "Completed",
    credentialUrl: "https://drive.google.com/file/d/1ZLTI1Xz3xE_TkuY6FkDe7RBuPZ7Nqh7U/view",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    iconName: "Code2"
  },
  {
    id: "data-analytics-ibm",
    category: "Data Analytics",
    title: "Data Analytics",
    issuer: "IBM",
    date: "Completed",
    credentialUrl: "https://drive.google.com/file/d/1Fg-EStWrFPILZoU2HDCw2BKbhIHwGLLl/view",
    skills: ["Data Analytics", "Data Visualization"],
    iconName: "BarChart"
  },
  {
    id: "cyber-suraksha",
    category: "Security",
    title: "Cyber Suraksha Course Completion",
    issuer: "Microsoft",
    date: "Completed",
    credentialUrl: "https://drive.google.com/file/d/1LqSarfQZGR8upOT39teeeYu9gV-ieSpJ/view",
    skills: ["Cybersecurity"],
    iconName: "Shield"
  },
  {
    id: "oracle-epm",
    category: "Cloud Applications",
    title: "Oracle Cloud Applications EPM Process Essentials",
    issuer: "Oracle",
    date: "Completed",
    credentialUrl: "https://drive.google.com/file/d/1ccEEg0TDHUc9bPw6eYyyTNGB18jSXLJc/view",
    skills: ["Oracle Cloud", "EPM"],
    iconName: "Cloud"
  }
];

export const achievementsData: Achievement[] = [
  {
    title: "Java Full Stack Internship",
    description: "Successfully completed an intensive internship building real-world enterprise applications.",
    year: "Recent",
    iconName: "Briefcase"
  },
  {
    title: "Information Science",
    description: "Graduated with a strong foundation in Data Structures, Algorithms, and Software Engineering.",
    year: "Graduated",
    iconName: "GraduationCap"
  },
  {
    title: "Mastered Full Stack Technologies",
    description: "Acquired deep expertise in both Java Spring Boot backend and React.js frontend.",
    year: "Ongoing",
    iconName: "Code2"
  },
  {
    title: "Built Custom AI Solutions",
    description: "Engineered innovative projects integrating AR technology and Machine Learning.",
    year: "Ongoing",
    iconName: "BrainCircuit"
  }
];

export const learningJourneyData = [
  "Core & Advanced Java",
  "Spring Boot & REST APIs",
  "MySQL Database Design",
  "HTML, CSS, JavaScript",
  "React.js & Next.js",
  "Tailwind CSS",
  "Python & AI Basics",
  "Software Architecture"
];

export const statsData: Stat[] = [
  { label: "Certificates Earned", value: 30, suffix: "+", iconName: "Award" },
  { label: "Intern Experiences", value: 7, iconName: "Briefcase" },
  { label: "Technologies Mastered", value: 15, suffix: "+", iconName: "Code2" },
  { label: "Projects Built", value: 15, suffix: "+", iconName: "FolderKanban" }
];
