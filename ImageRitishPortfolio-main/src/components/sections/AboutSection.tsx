"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, Zap, Brain, Rocket, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { timelineData, expertiseData, strengthsData, factsData } from "@/data/about";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Engineering scalable solutions with a relentless focus on user experience and architectural excellence.
          </p>
        </motion.div>

        {/* Bento Grid Layout for Intro & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Main Intro Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-background/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-outfit flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" /> Professional Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate Information Science graduate based in Bengaluru, specializing in Java Full Stack Development. I enjoy building scalable web applications, robust REST APIs, and responsive user interfaces that solve real-world business problems.
                </p>
                <p>
                  <strong>Career Objective:</strong> To secure Full-Time Software Engineer or Java Full Stack Developer roles where I can leverage my expertise in Spring Boot and React to create impactful, production-ready software.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-2" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
                    <Download className="h-4 w-4" /> Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="h-full bg-primary/5 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-outfit flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Interesting Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {factsData.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                      <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>



      </div>
    </section>
  );
}
