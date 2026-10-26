"use client";

import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Search, 
  Zap, 
  MessageSquare, 
  MonitorPlay, 
  BrainCircuit
} from "lucide-react";

const reasons = [
  {
    title: "Clean Code",
    description: "I write maintainable, well-documented, and scalable code following industry best practices and SOLID principles.",
    icon: Code2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Responsive Design",
    description: "Every interface is built mobile-first, ensuring a flawless experience across all devices and screen sizes.",
    icon: Smartphone,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Scalable Architecture",
    description: "I design systems that can grow with your business, focusing on performance and robust backend structures.",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "SEO Friendly",
    description: "Websites optimized for search engines with semantic HTML, metadata, and fast loading times.",
    icon: Search,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Fast Performance",
    description: "Committed to achieving 95+ Lighthouse scores through optimized assets, caching, and efficient rendering.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Strong Communication",
    description: "I value transparency and clear communication, keeping stakeholders updated throughout the development lifecycle.",
    icon: MessageSquare,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Modern UI/UX",
    description: "Creating visually stunning, accessible, and intuitive interfaces inspired by leading design trends.",
    icon: MonitorPlay,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Problem Solving",
    description: "Analytical mindset focused on breaking down complex problems and delivering elegant, effective solutions.",
    icon: BrainCircuit,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="container px-6 md:px-12 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-foreground">
              Why <span className="text-primary">Hire Me?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, design sensibility, and a problem-solving mindset to every project.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-secondary/20 border-border/50 hover:bg-secondary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm group">
                  <CardContent className="p-6 flex flex-col items-start text-left space-y-4">
                    <div className={`p-3 rounded-xl ${reason.bg} ${reason.color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold font-outfit text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
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
