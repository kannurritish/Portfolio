"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  Users,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/data/skills";
import type { LucideIcon } from "lucide-react";

// Explicit icon mapping to ensure bundler compatibility
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  Users,
  ShieldCheck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 opacity-20 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="mb-16 space-y-4 text-center"
        >
          <h2 className="font-outfit text-3xl font-bold text-foreground md:text-5xl">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Technologies, tools, and frameworks I use to build applications,
            develop projects, and continuously grow as a software developer.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillsData.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Gradient border on hover */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/50 to-indigo-500/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <Card className="relative flex h-full flex-col border-border bg-background/80 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-transparent">
                  <CardHeader className="pb-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <CardTitle className="font-outfit text-xl">
                      {category.title}
                    </CardTitle>

                    <CardDescription className="mt-1 text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pt-2">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="cursor-default border border-border/50 bg-secondary/50 px-3 py-1 transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

