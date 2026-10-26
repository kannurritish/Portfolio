"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Zap, Shield, Target } from "lucide-react";
import { Github } from "@/components/shared/icons";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-background/95 backdrop-blur-2xl border-border overflow-hidden flex flex-col">
        
        {/* Header Section (Fixed) */}
        <div className="p-6 border-b border-border bg-secondary/20">
          <DialogHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <DialogTitle className="text-2xl md:text-3xl font-bold font-outfit text-foreground mb-2">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-base text-primary font-medium">
                  {project.tagline}
                </DialogDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Back to Projects
                </Button>
                {project.githubUrl && (
                  <Button size="sm" className="gap-2" onClick={() => window.open(project.githubUrl, "_blank")}>
                    <Github className="h-4 w-4" /> GitHub Repository
                  </Button>
                )}
              </div>
            </div>
          </DialogHeader>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <strong className="text-foreground">Role:</strong> {project.role}
            </div>
            <div className="flex items-center gap-2">
              <strong className="text-foreground">Timeline:</strong> {project.timeline}
            </div>
            <div className="flex items-center gap-2">
              <strong className="text-foreground">Status:</strong> {project.status}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-grow p-6">
          <div className="space-y-12 max-w-3xl mx-auto pb-12">
            
            {/* Tech Stack */}
            <section>
              <h3 className="text-lg font-bold font-outfit mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Overview & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="space-y-3">
                <h3 className="text-lg font-bold font-outfit flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" /> Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.overview}
                </p>
              </section>
              <section className="space-y-3">
                <h3 className="text-lg font-bold font-outfit flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" /> Business Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy.businessProblem}
                </p>
              </section>
            </div>

            {/* Objectives */}
            <section className="bg-secondary/30 p-6 rounded-xl border border-border">
              <h3 className="text-lg font-bold font-outfit mb-4">Key Objectives</h3>
              <ul className="space-y-3">
                {caseStudy.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold font-outfit border-b border-border pb-2">Technical Deep Dive</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    Challenges Faced
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {caseStudy.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    Architectural Solutions
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {caseStudy.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Advanced Metrics & Optimizations */}
            {(caseStudy.performanceOptimizations || caseStudy.securityConsiderations) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.performanceOptimizations && (
                  <section className="bg-background border border-border p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold font-outfit mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" /> Performance
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {caseStudy.performanceOptimizations.map((opt, i) => (
                        <li key={i}>{opt}</li>
                      ))}
                    </ul>
                  </section>
                )}
                {caseStudy.securityConsiderations && (
                  <section className="bg-background border border-border p-5 rounded-lg shadow-sm">
                    <h4 className="font-bold font-outfit mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" /> Security
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {caseStudy.securityConsiderations.map((sec, i) => (
                        <li key={i}>{sec}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            )}

            {/* Business Impact */}
            <section className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
              <h3 className="text-lg font-bold font-outfit mb-3 flex items-center gap-2 text-primary">
                <Lightbulb className="h-5 w-5" /> Business Impact & Outcomes
              </h3>
              <p className="text-foreground font-medium leading-relaxed">
                {caseStudy.businessImpact}
              </p>
            </section>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
