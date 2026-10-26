"use client";

import Link from "next/link";
import { Mail, ArrowUp, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/icons";
import { Button } from "@/components/ui/button";

const publicContactEmail = "your-public-email@example.com";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold font-outfit text-foreground tracking-tight"
            >
              Ritish <span className="text-primary">Kannur</span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Designing and developing modern, scalable, and high-performance
              web applications. Turning ideas into reliable digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>

            <nav className="flex flex-col space-y-2">
              {[
                "About",
                "Experience",
                "Projects",
                "Services",
                "Certifications",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>

            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${publicContactEmail}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit"
              >
                <Mail className="h-4 w-4" />
                {publicContactEmail}
              </a>

              <a
                href="https://github.com/kannurritish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ritishkannur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href="https://wa.me/message/PN2QM2ZVWN6GF1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="md:col-span-1 space-y-4">
            <h4 className="font-semibold text-foreground">Actions</h4>

            <Button
              variant="outline"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              render={
                <a
                  href="/resume/Ritish_Kannur_Resume.pdf"
                  download="Ritish_Kannur_Resume.pdf"
                />
              }
            >
              Download Resume
            </Button>

            <Button
              variant="secondary"
              className="w-full justify-start text-primary"
              render={<Link href="/#contact" />}
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Ritish Kannur. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with Next.js, TypeScript & Tailwind CSS.</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

