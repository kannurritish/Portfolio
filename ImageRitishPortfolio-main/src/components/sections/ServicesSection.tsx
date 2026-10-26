"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Layers, Database, Layout, Network, LayoutDashboard, Globe, 
  UserCircle, Zap, Code, Smartphone, TrendingUp, Sparkles, 
  Search, ShieldCheck, Link as LinkIcon, Clock, ArrowRight, CheckCircle2 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { servicesData, featuresData, processData, techStackData } from "@/data/services";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers, Database, Layout, Network, LayoutDashboard, Globe, 
  UserCircle, Zap, Code, Smartphone, TrendingUp, Sparkles, 
  Search, ShieldCheck, Link: LinkIcon, Clock
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-32">
        
        {/* Services Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold font-outfit text-foreground"
          >
            What I Can <span className="text-primary">Build</span>
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            I design and develop modern, scalable, and high-performance web applications that help businesses and individuals turn ideas into reliable digital products.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Layers;
            return (
              <motion.div key={service.id} variants={fadeInUp} className="group relative flex flex-col h-full">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Card className="relative flex-grow flex flex-col bg-background/90 backdrop-blur-xl border-border group-hover:border-transparent transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-outfit leading-tight">{service.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-col gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground/80">Key Features:</p>
                      <ul className="grid grid-cols-1 gap-1">
                        {service.keyFeatures.slice(0, 3).map((feat, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-primary shrink-0" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2"><strong className="text-foreground">Best For:</strong> {service.bestFor}</p>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        render={<Link href="/#contact" />}
                      >
                        Let&apos;s Discuss <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>





        {/* Call to Action */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/20 p-8 md:p-16 text-center max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-indigo-500/10 pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
              Have an Idea? Let&apos;s Build It Together.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re looking for a full-time software engineer or a freelance developer, I&apos;d love to discuss your project and help turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto text-base" render={<Link href="/#contact" />}>
                Hire Me
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" render={<Link href="/#contact" />}>
                Schedule a Discussion
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base" render={<Link href="/#projects" />}>
                View My Projects
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
