export interface ProjectCaseStudy {
  overview: string;
  businessProblem: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  businessImpact: string;
  performanceOptimizations?: string[];
  securityConsiderations?: string[];
  futureImprovements?: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Machine Learning" | "Data Analysis" | "Artificial Intelligence" | "Augmented Reality" | "Java Full Stack" | "AI" | "Data Analytics";
  techStack: string[];
  featured: boolean;
  status: "Completed" | "In Progress" | "Planned";
  timeline: string;
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "ai-interior-design",
    title: "AI in Interior Design",
    tagline: "Immersive 3D visualization and AR application.",
    description: "An advanced application utilizing Augmented Reality and AI to visualize furniture placement and room designs in real-time 3D spaces.",
    category: "Artificial Intelligence",
    techStack: ["React Native", "Python", "Three.js", "AR Technology"],
    featured: true,
    status: "Completed",
    timeline: "Ongoing",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/dashboard",
    liveUrl: "#",
    caseStudy: {
      overview: "Developed a cross-platform mobile application that allows users to place virtual furniture in their real physical space using AR and Three.js.",
      businessProblem: "Customers struggle to visualize how furniture will look and fit in their homes before purchasing, leading to high return rates.",
      objectives: [
        "Provide an immersive 3D rendering experience.",
        "Implement accurate AR object placement.",
        "Ensure seamless performance on mobile devices."
      ],
      challenges: [
        "Rendering complex 3D models efficiently on mobile web view without performance drops."
      ],
      solutions: [
        "Utilized Three.js optimization techniques and lazy loaded 3D assets.",
        "Integrated Python backend for AI-based room analysis."
      ],
      businessImpact: "Enhanced user engagement significantly and provided a future-ready architecture for adding more design modules."
    }
  },
  {
    id: "link-connect-ai",
    title: "LinkConnectAI",
    tagline: "AI-powered professional networking platform.",
    description: "A smart platform designed to analyze professional profiles and intelligently suggest high-value networking connections using AI algorithms.",
    category: "Full Stack",
    techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "OpenAI"],
    featured: true,
    status: "Completed",
    timeline: "Recent",
    role: "Java Full Stack Developer",
    githubUrl: "https://github.com/ritish18089/LinkConnectAI",
    liveUrl: "#",
    caseStudy: {
      overview: "Built a comprehensive networking tool that leverages AI to match professionals based on their skills, career goals, and industry gaps.",
      businessProblem: "Professionals often spend hours searching for relevant mentors or collaborators with minimal success rates.",
      objectives: [
        "Automate the matching process using AI.",
        "Provide a seamless, responsive user interface.",
        "Ensure robust backend data processing."
      ],
      challenges: [
        "Processing large text payloads to accurately determine user compatibility."
      ],
      solutions: [
        "Integrated advanced AI prompts via Spring Boot to generate matching scores.",
        "Designed a normalized MySQL schema for fast data retrieval."
      ],
      businessImpact: "Created a highly scalable networking architecture ready for enterprise deployment."
    }
  },
  {
    id: "car-service-management",
    title: "Car Service Management System",
    tagline: "End-to-end ERP for automotive service centers.",
    description: "A comprehensive management dashboard streamlining vehicle bookings, service history tracking, and customer notifications.",
    category: "Java Full Stack",
    techStack: ["Java", "Spring Boot", "React", "MySQL"],
    featured: true,
    status: "Completed",
    timeline: "Internship Project",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/ritish18089/Internship",
    liveUrl: "#",
    caseStudy: {
      overview: "Developed a centralized management system for independent car service centers to track workflow and communicate with customers.",
      businessProblem: "Service centers relied on manual logs, leading to lost service history and inefficient vehicle booking management.",
      objectives: [
        "Build a robust Vehicle Booking module.",
        "Create separate Admin and Customer Dashboards.",
        "Implement automated notifications and REST APIs."
      ],
      challenges: [
        "Ensuring data consistency between the booking system and customer profiles."
      ],
      solutions: [
        "Developed comprehensive REST APIs using Spring Boot to handle complex relational data in MySQL.",
        "Built a responsive React UI for intuitive dashboard navigation."
      ],
      businessImpact: "Streamlined administrative operations and provided customers with transparent service history tracking."
    }
  },
  {
    id: "plant-disease-detection",
    title: "Plant Disease Detection",
    tagline: "Deep learning model for agricultural diagnostics.",
    description: "An AI-driven application that analyzes images of plant leaves to detect diseases and recommend potential treatments.",
    category: "Machine Learning",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    featured: true,
    status: "Completed",
    timeline: "Academic Project",
    role: "AI Developer",
    githubUrl: "https://github.com/dashboard",
    liveUrl: "#",
    caseStudy: {
      overview: "Engineered a machine learning pipeline that identifies plant diseases from uploaded images with high accuracy.",
      businessProblem: "Farmers often lack immediate access to agricultural experts to diagnose crop diseases early.",
      objectives: [
        "Train a CNN model on diverse plant disease datasets.",
        "Provide a simple web interface for farmers to upload images.",
        "Deliver results in real-time."
      ],
      challenges: [
        "Achieving high accuracy on varied lighting and background conditions in images."
      ],
      solutions: [
        "Implemented image augmentation techniques to improve model robustness.",
        "Wrapped the AI model in a lightweight REST API for quick inference."
      ],
      businessImpact: "Demonstrated the capability to provide instant, accessible agricultural support through technology."
    }
  },
  {
    id: "retail-sales-eda",
    title: "EDA on Retail Sales Data",
    tagline: "Advanced data analytics for retail trends.",
    description: "Exploratory Data Analysis project uncovering seasonal trends, customer behavior, and sales performance across retail datasets.",
    category: "Data Analytics",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    featured: true,
    status: "Completed",
    timeline: "Academic Project",
    role: "Data Analyst",
    githubUrl: "https://github.com/ritish18089/OIBSIP/tree/main/DataAnalytics-Level1-RetailSalesEDATask1",
    liveUrl: "#",
    caseStudy: {
      overview: "Conducted deep statistical analysis and visualization on large-scale retail transaction data to derive actionable business insights.",
      businessProblem: "Businesses struggle to identify hidden purchasing patterns and seasonal trends in raw sales data.",
      objectives: [
        "Clean and preprocess raw retail datasets.",
        "Visualize sales trends over multiple timeframes.",
        "Identify top-performing product categories."
      ],
      challenges: [
        "Handling missing values and outliers in massive CSV datasets efficiently."
      ],
      solutions: [
        "Utilized Pandas for vectorized data cleaning and transformation.",
        "Created intuitive heatmaps and bar charts using Seaborn."
      ],
      businessImpact: "Provided a clear framework for data-driven decision-making in retail inventory management."
    }
  }
];
