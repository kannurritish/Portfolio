import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyHireMeSection } from "@/components/sections/WhyHireMeSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Doe",
  url: "https://yourdomain.com",
  jobTitle: "Senior Software Engineer",
  sameAs: [
    "https://www.linkedin.com/in/ritishkannur",
    "https://github.com/dashboard"
  ],
  knowsAbout: ["React", "Next.js", "Java", "Spring Boot", "Full Stack Development"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyHireMeSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  );
}
