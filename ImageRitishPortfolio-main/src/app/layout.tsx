import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/Footer";
import GlobalImageSequence from "@/components/layout/GlobalImageSequence";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ritish Kannur | Java Full Stack Developer",
    template: "%s | Ritish Kannur",
  },
  description: "Portfolio of Ritish Kannur, a Java Full Stack Developer based in Bengaluru, specializing in Spring Boot, React, and building scalable web applications.",
  keywords: ["Ritish Kannur", "Java Full Stack Developer", "Software Engineer", "Bengaluru", "React", "Spring Boot", "Web Development"],
  authors: [{ name: "Ritish Kannur" }],
  creator: "Ritish Kannur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Ritish Kannur | Java Full Stack Developer",
    description: "Portfolio of Ritish Kannur, a Java Full Stack Developer based in Bengaluru, specializing in Spring Boot, React, and scalable web apps.",
    siteName: "Ritish Kannur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritish Kannur | Java Full Stack Developer",
    description: "Portfolio of Ritish Kannur, a Java Full Stack Developer based in Bengaluru.",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col relative`}>
        {/* Analytics Placeholders (Google, Vercel) can be injected here via next/script */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalImageSequence />
          <TooltipProvider>
            <div className="flex-grow z-10 relative">
              {children}
            </div>
            <Footer />
            <Toaster richColors position="top-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
