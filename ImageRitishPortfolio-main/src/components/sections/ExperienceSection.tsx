"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Trophy, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experienceData, type ExperienceCategory } from "@/data/experience";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  work: Briefcase,
  graduation: GraduationCap,
  code: Code2,
  award: Trophy,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export function ExperienceSection() {
  const journeyData = experienceData.filter(
    (item) => item.category === "work" || item.category === "freelance"
  );
  
  const educationData = experienceData.filter(
    (item) => item.category === "education"
  );

  const renderTimeline = (data: typeof experienceData) => {
    return (
      <div className="max-w-5xl mx-auto relative mb-24">
        {/* Main vertical line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

        <div className="space-y-12 lg:space-y-24">
          <AnimatePresence mode="popLayout">
            {data.map((item, idx) => {
              const Icon = iconMap[item.iconType] || Briefcase;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? "lg:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Timeline Center Indicator (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 h-12 w-12 rounded-full bg-background border-4 border-secondary items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:border-primary group-hover:text-primary transition-colors duration-500 z-10 text-muted-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Timeline Left Line (Mobile) */}
                  <div className="lg:hidden absolute left-[15px] top-6 bottom-[-3rem] w-px bg-border group-last:bottom-0 group-last:bg-transparent" />
                  
                  {/* Mobile Indicator */}
                  <div className="lg:hidden absolute left-0 top-6 h-8 w-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors duration-300 z-10 text-muted-foreground">
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-[calc(50%-3rem)] pl-12 lg:pl-0 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                    <Card className="relative overflow-hidden bg-background/50 backdrop-blur-xl border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]">
                      {/* Subtle top gradient line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <Badge variant="secondary" className="w-fit text-primary bg-primary/10 border-primary/20">
                            <Calendar className="mr-1.5 h-3 w-3" /> {item.date}
                          </Badge>
                          {item.location && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <MapPin className="h-3 w-3" /> {item.location}
                            </span>
                          )}
                        </div>
                        <CardTitle className="text-2xl font-outfit text-foreground leading-tight">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground/80 mt-1">
                          {item.organization}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">Key Highlights:</h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span className="leading-snug">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-secondary/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Journey Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A chronological timeline of my professional growth and freelance technical deliveries.
          </p>
        </motion.div>

        {renderTimeline(journeyData)}

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 space-y-4 pt-12 border-t border-border/50"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic foundations and advanced training.
          </p>
        </motion.div>

        {renderTimeline(educationData)}

      </div>
    </section>
  );
}
