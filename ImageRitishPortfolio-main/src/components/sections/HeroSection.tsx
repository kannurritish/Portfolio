"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const roles = ["Software Engineer", "Java Full Stack Developer", "Frontend Developer"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 bg-primary/30 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Full-Time & Freelance Projects
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tight text-foreground">
              Hi, I&apos;m Ritish Kannur <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500 inline-flex min-h-[1.2em] min-w-[300px] justify-center md:justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I build modern, scalable, production-ready software. Passionate about solving real-world business problems through elegant code and clean architecture.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base gap-2 group" render={<Link href="/#projects" />}>
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base gap-2" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" render={<Link href="/#contact" />}>
              Hire Me
            </Button>
          </motion.div>


          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mt-12 border-t border-border pt-8">
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-foreground font-outfit">15+</span>
              <span className="text-sm text-muted-foreground text-center">Projects Built</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-foreground font-outfit">30+</span>
              <span className="text-sm text-muted-foreground text-center">Certificates Earned</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-foreground font-outfit">7</span>
              <span className="text-sm text-muted-foreground text-center">Intern Experiences</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <span className="text-3xl font-bold text-foreground font-outfit">Java</span>
              <span className="text-sm text-muted-foreground text-center">Full Stack Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-muted-foreground"
      >
        <span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}

