export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  description: string;
}

export const contactInfo = {
  availability: "Open to Opportunities",
  status: "Job Opportunity & Freelancing",
  location: "Bengaluru, India",
  email: "kannurritish@gmail.com",
  preferredCommunication: "Email or LinkedIn",
  expectedResponseTime: "< 24 Hours",
  workingHours: "9:00 AM - 6:00 PM",
  timezone: "IST (UTC+5:30)",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dashboard",
    iconName: "Github",
    description: "Check out my open-source contributions and code."
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ritishkannur",
    iconName: "Linkedin",
    description: "Connect with me professionally."
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/message/PN2QM2ZVWN6GF1",
    iconName: "MessageCircle",
    description: "Message me directly on WhatsApp."
  },
];

export const projectTypeOptions = [
  "Full-Time Opportunity",
  "Freelance Project",
  "Internship",
  "Contract Work",
  "Consultation",
  "Collaboration",
  "General Inquiry",
  "Other"
];

export const budgetOptions = [
  "Not Applicable",
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

export const timelineOptions = [
  "Not Applicable",
  "Immediate (< 1 Month)",
  "1-3 Months",
  "3-6 Months",
  "Flexible"
];
