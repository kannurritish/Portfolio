"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Github } from "@/components/shared/icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative cursor-pointer"
      onClick={() => {
        if (project.githubUrl && project.githubUrl !== "#") {
          window.open(project.githubUrl, "_blank");
        }
      }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/50 via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <Card className="relative h-full flex flex-col bg-background/80 backdrop-blur-xl border-border group-hover:border-transparent transition-all overflow-hidden z-10">
        
        <div className="p-4 pb-0 flex gap-2">
          {project.featured && (
            <Badge variant="default" className="bg-primary text-primary-foreground shadow-sm flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
          )}
          <Badge variant="secondary" className="bg-secondary/50">
            {project.category}
          </Badge>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-bold font-outfit text-foreground leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm font-medium text-primary/80 mt-1">{project.tagline}</p>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-col gap-4 mt-auto pt-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="bg-transparent border-border/50 text-xs">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="bg-transparent border-border/50 text-xs text-muted-foreground">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick(project);
              }}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1 w-fit"
            >
              View Case Study <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
