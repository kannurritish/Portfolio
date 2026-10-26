"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Award, Clock, Code2, FolderKanban, GraduationCap, 
  Rocket, Brain, Coffee, Layers, Cloud, 
  BrainCircuit, BarChart, ExternalLink, CheckCircle2 
} from "lucide-react";
import { Github } from "@/components/shared/icons";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certificationsData, achievementsData, learningJourneyData, statsData } from "@/data/certifications";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import * as React from "react";

const iconMap: Record<string, React.ElementType> = {
  Award, Clock, Code2, FolderKanban, GraduationCap, 
  Rocket, Brain, Github, Coffee, Layers, Cloud, 
  BrainCircuit, BarChart
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold font-outfit text-foreground"
          >
            Certifications & <span className="text-primary">Achievements</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            My commitment to continuous learning, professional growth, and staying updated with modern technologies.
          </motion.p>
        </div>



        {/* Certifications Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-outfit text-foreground">Professional Certifications</h3>
          </div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certificationsData.map((cert) => {
              const Icon = iconMap[cert.iconName] || Award;
              return (
                <motion.div key={cert.id} variants={fadeInUp} className="group relative flex flex-col h-full">
                  <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Card className="relative flex-grow flex flex-col bg-background/80 backdrop-blur-xl border-border group-hover:border-transparent transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-secondary/50 font-medium">
                          {cert.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-outfit leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        Issued by <strong className="text-foreground/80">{cert.issuer}</strong> • {cert.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-transparent border-border/50 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border/50 flex gap-2">
                        {cert.credentialUrl && (
                          <Button render={<a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" />} size="sm" className="w-full text-xs gap-1.5" variant="secondary">
                            Verify Certificate <ExternalLink className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Achievements & Journey Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-outfit text-foreground">Key Achievements</h3>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="space-y-4"
            >
              {achievementsData.map((achievement, i) => {
                const Icon = iconMap[achievement.iconName] || Award;
                return (
                  <motion.div key={i} variants={fadeInUp}>
                    <Card className="bg-secondary/20 border-border/50 hover:bg-secondary/40 transition-colors">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                            <Badge variant="outline" className="text-[10px] h-5 px-1.5">{achievement.year}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Learning Journey Roadmap */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-outfit text-foreground">Learning Journey</h3>
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-indigo-500 to-transparent" />
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                className="space-y-6"
              >
                {learningJourneyData.map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative flex items-center gap-4">
                    <div className="absolute -left-[30px] h-3 w-3 rounded-full bg-background border-2 border-primary z-10" />
                    <Card className="bg-background border-border/50 w-full hover:border-primary/50 transition-colors">
                      <CardContent className="p-3 px-4 flex items-center justify-between">
                        <span className="font-medium text-sm text-foreground">{step}</span>
                        <CheckCircle2 className="h-4 w-4 text-primary opacity-50" />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-indigo-500/10 border border-primary/20 p-8 md:p-16 text-center max-w-5xl mx-auto"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
              Always Learning. Always Building.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technology evolves every day, and I continuously improve my skills to build better software and deliver modern solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto text-base" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
                View Resume
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base" render={<Link href="/#projects" />}>
                Explore Projects
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent border-primary/20 hover:bg-primary/10 hover:text-primary" render={<Link href="/#contact" />}>
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
