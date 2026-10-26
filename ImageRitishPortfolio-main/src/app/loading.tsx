"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <Loader2 className="h-12 w-12 text-primary animate-spin relative z-10" />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-6 text-sm font-medium tracking-widest text-muted-foreground uppercase"
        >
          Loading Ecosystem
        </motion.p>

        {/* Skeleton UI placeholder below the loader to give structure */}
        <div className="mt-12 flex flex-col items-center space-y-4 opacity-50">
          <div className="h-4 w-48 bg-secondary/50 rounded animate-pulse" />
          <div className="h-3 w-64 bg-secondary/50 rounded animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}
