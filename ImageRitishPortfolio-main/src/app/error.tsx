"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-destructive/20 blur-[100px] rounded-full" />
        <div className="h-24 w-24 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center relative z-10 shadow-xl">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold font-outfit text-foreground mb-4">Something went wrong!</h2>
      
      <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
        An unexpected error occurred while loading this section. Please try again or contact support if the issue persists.
      </p>
      
      <Button size="lg" onClick={() => reset()} className="gap-2">
        <RotateCcw className="h-4 w-4" /> Try Again
      </Button>
    </div>
  );
}
