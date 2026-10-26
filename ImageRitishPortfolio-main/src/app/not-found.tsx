import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground text-center px-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
        <div className="h-32 w-32 rounded-3xl bg-secondary/30 border border-border/50 flex items-center justify-center relative z-10 shadow-xl">
          <SearchX className="h-16 w-16 text-primary" />
        </div>
      </div>
      
      <h1 className="text-6xl font-bold font-outfit text-foreground mb-4 tracking-tight">404</h1>
      <h2 className="text-2xl font-semibold text-foreground/80 mb-6">Page Not Found</h2>
      
      <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
        The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable. 
      </p>
      
      <Link href="/">
        <Button size="lg" className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
