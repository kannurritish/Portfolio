export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  keyFeatures: string[];
  technologies: string[];
  bestFor: string;
  deliveryTime: string;
  complexity: "Small" | "Medium" | "Large" | "Varies";
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Premium, highly interactive personal branding platforms to showcase your work and attract clients.",
    iconName: "UserCircle",
    keyFeatures: ["Custom Design", "Project Showcases", "Fast Load Times", "SEO Optimized"],
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    bestFor: "Designers, Developers, and Creatives.",
    deliveryTime: "1 - 2 weeks",
    complexity: "Small"
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "High-converting, SEO-optimized landing pages and corporate websites designed to drive sales.",
    iconName: "Globe",
    keyFeatures: ["Lead Generation", "Mobile Responsive", "Contact Forms", "Modern UI/UX"],
    technologies: ["React.js", "Tailwind CSS", "HTML/CSS"],
    bestFor: "Startups, Agencies, and Local Businesses.",
    deliveryTime: "2 - 4 weeks",
    complexity: "Medium"
  },
  {
    id: "dashboard-apps",
    title: "Dashboard Applications",
    description: "Complex internal tools and analytics dashboards to visualize data and manage your business efficiently.",
    iconName: "LayoutDashboard",
    keyFeatures: ["Data Visualization", "Real-time Metrics", "Role-Based Access", "Custom Charts"],
    technologies: ["React.js", "Java Spring Boot", "MySQL"],
    bestFor: "Operational teams needing clear data visibility.",
    deliveryTime: "4 - 8 weeks",
    complexity: "Large"
  },
  {
    id: "full-stack-dev",
    title: "Full Stack Development",
    description: "End-to-end development of robust, scalable custom software solutions from database to user interface.",
    iconName: "Layers",
    keyFeatures: ["Custom Architecture", "Database Design", "Seamless Integration", "Scalability"],
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    bestFor: "Enterprises needing custom SaaS or complex web apps.",
    deliveryTime: "8 - 12 weeks",
    complexity: "Large"
  },
  {
    id: "rest-apis",
    title: "REST APIs",
    description: "Secure, high-performance APIs designed to seamlessly connect your frontend and third-party services.",
    iconName: "Network",
    keyFeatures: ["Secure Endpoints", "Rate Limiting", "JSON Payloads", "Comprehensive Docs"],
    technologies: ["Java Spring Boot", "Node.js", "Postman"],
    bestFor: "Mobile app backends and service integrations.",
    deliveryTime: "2 - 4 weeks",
    complexity: "Medium"
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing",
    description: "Rapid diagnosis and resolution of critical issues in existing codebases to restore full functionality.",
    iconName: "Wrench",
    keyFeatures: ["Root Cause Analysis", "Code Audits", "Rapid Patching", "Regression Testing"],
    technologies: ["Java", "JavaScript", "React.js", "Spring Boot"],
    bestFor: "Businesses facing downtime or broken features.",
    deliveryTime: "1 - 7 days",
    complexity: "Varies"
  },
  {
    id: "optimization",
    title: "Performance Optimization",
    description: "Auditing and improving the speed, efficiency, and database queries of your existing applications.",
    iconName: "Zap",
    keyFeatures: ["Query Optimization", "Code Splitting", "Load Time Reduction", "Caching"],
    technologies: ["React.js", "MySQL", "Lighthouse"],
    bestFor: "Existing sites suffering from slow performance.",
    deliveryTime: "1 - 2 weeks",
    complexity: "Small"
  },
  {
    id: "admin-panels",
    title: "Admin Panels",
    description: "Secure management interfaces for administrators to oversee users, content, and system configurations.",
    iconName: "Database",
    keyFeatures: ["CRUD Operations", "User Management", "Secure Authentication", "Data Export"],
    technologies: ["React.js", "Spring Boot", "Tailwind CSS"],
    bestFor: "Business owners needing control over their platforms.",
    deliveryTime: "3 - 6 weeks",
    complexity: "Medium"
  }
];

export const featuresData: Feature[] = [
  { title: "Clean & Maintainable Code", description: "Writing modular, self-documenting code that scales gracefully.", iconName: "Code" },
  { title: "Responsive Design", description: "Flawless experiences across mobile, tablet, and 4K displays.", iconName: "Smartphone" },
  { title: "Scalable Architecture", description: "System design intended to handle growth in users and data.", iconName: "TrendingUp" },
  { title: "Fast Performance", description: "Optimized asset delivery and efficient database queries.", iconName: "Zap" },
  { title: "Modern UI/UX", description: "Aesthetics that build trust and drive user engagement.", iconName: "Sparkles" },
  { title: "SEO-Friendly", description: "Semantic HTML and meta tags to improve search rankings.", iconName: "Search" },
  { title: "Secure Applications", description: "Implementation of best practices against common vulnerabilities.", iconName: "ShieldCheck" },
  { title: "API Integration", description: "Seamless connection with third-party tools like Stripe or AWS.", iconName: "Link" },
  { title: "Database Optimization", description: "Efficient schemas and indexing for lightning-fast queries.", iconName: "Database" },
  { title: "Long-Term Support", description: "Ongoing maintenance, monitoring, and feature updates.", iconName: "Clock" }
];

export const processData: ProcessStep[] = [
  { title: "Requirement Discussion", description: "Deep dive into your business goals, target audience, and technical needs to align on scope." },
  { title: "Planning & Research", description: "Architecting the database, choosing the tech stack, and mapping out the user journey." },
  { title: "UI/UX Design", description: "Creating low and high-fidelity wireframes to ensure a premium, intuitive user experience." },
  { title: "Development", description: "Writing clean, scalable code in iterative sprints with regular progress updates." },
  { title: "Testing & QA", description: "Rigorous manual and automated testing to ensure a bug-free, secure product." },
  { title: "Deployment & Support", description: "Launching to production and providing ongoing maintenance and optimization." }
];

export const techStackData = [
  "Java", "Spring Boot", "React", "Next.js", "TypeScript", 
  "JavaScript", "Tailwind CSS", "Node.js", "Express", "Python", 
  "MySQL", "MongoDB", "Git", "GitHub", "Postman", "Docker"
];
