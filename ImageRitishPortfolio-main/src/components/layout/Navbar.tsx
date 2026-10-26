"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Menu, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold font-outfit tracking-tighter"
        >
          Ritish <span className="text-primary">Kannur</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="hidden h-5 w-5 dark:block" />
            </Button>
            
            <Button variant="outline" className="hidden lg:flex gap-2" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
              <Download className="h-4 w-4" /> Resume
            </Button>
            <Button render={<Link href="/#contact" />}>Hire Me</Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 dark:hidden" />
            <Moon className="hidden h-5 w-5 dark:block" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="flex flex-col gap-6">
              <div className="text-2xl font-bold font-outfit mt-8">
                Ritish<span className="text-primary">.dev</span>
              </div>
              <ul className="flex flex-col gap-4 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-muted-foreground hover:text-foreground w-full text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 mt-auto mb-8">
                <Button variant="outline" className="w-full gap-2" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
                  <Download className="h-4 w-4" /> Resume
                </Button>
                <Button className="w-full" render={<Link href="/#contact" />}>Hire Me</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
