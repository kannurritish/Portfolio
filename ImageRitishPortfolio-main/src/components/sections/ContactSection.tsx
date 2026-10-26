"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { 
  Mail, MapPin, Clock, 
  ArrowUp, Download, Copy, Send, CheckCircle2, Loader2, MessageCircle
} from "lucide-react";
import { Github, Linkedin } from "@/components/shared/icons";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { contactInfo, socialLinks, projectTypeOptions, budgetOptions } from "@/data/contact";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Github: Github as unknown as LucideIcon, Linkedin: Linkedin as unknown as LucideIcon, Mail, MessageCircle
};

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  projectType: z.string().min(1, "Please select a project type."),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and privacy policy.",
  }),
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: "", company: "", subject: "", 
      projectType: "", budgetRange: "Not Applicable", timeline: "Not Applicable", 
      message: "", termsAccepted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        toast.error(data.error || 'Unable to send message. Please try again.');
        return;
      }

      setIsSuccess(true);
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      const message = error instanceof Error ? error.message : "Unable to send your message. Please try again or contact me directly.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    toast.success("Email copied to clipboard!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Call to Action Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              {contactInfo.availability}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-foreground leading-tight">
              Let&apos;s Build Something <span className="text-primary">Amazing</span> Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Whether you&apos;re hiring for a full-time position, looking for a freelance developer, or simply want to discuss an idea, I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-5 space-y-8"
          >
            {/* Profile & Status Card */}
            <Card className="bg-background/80 backdrop-blur-xl border-border/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500" />
              <CardContent className="p-6 md:p-8 space-y-6">
                
                <div className="flex items-center gap-4 border-b border-border/50 pb-6">
                  <div className="h-16 w-16 rounded-full bg-secondary/80 flex items-center justify-center border-2 border-primary/20 shrink-0">
                    <span className="font-outfit font-bold text-xl text-primary">RK</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Ritish Kannur</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      {contactInfo.status}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Working Hours & Timezone</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.workingHours} • {contactInfo.timezone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Direct Email</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">{contactInfo.email}</p>
                        <button onClick={copyEmail} className="text-primary hover:text-primary/80 transition-colors" title="Copy Email">
                          <Copy className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button className="w-full gap-2" render={<a href="/resume/Ritish_Kannur_Resume.pdf" download="Ritish_Kannur_Resume.pdf" />}>
                    <Download className="h-4 w-4" /> Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.iconName] || Mail;
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="bg-background/50 border-border/50 group-hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{social.name}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">{social.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Premium Contact Form */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="lg:col-span-7"
          >
            <Card className="bg-background/80 backdrop-blur-xl border-border/50 shadow-xl relative overflow-hidden h-full">
              <CardContent className="p-6 md:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold font-outfit text-foreground">Send a Message</h3>
                  <p className="text-sm text-muted-foreground mt-1">I aim to respond to all inquiries within {contactInfo.expectedResponseTime}.</p>
                </div>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                  >
                    <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-outfit text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground max-w-md">Thank you for reaching out. I have received your message and will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-secondary/20" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-secondary/20" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="company" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" className="bg-secondary/20" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        
                        <FormField control={form.control} name="subject" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject *</FormLabel>
                            <FormControl>
                              <Input placeholder="Project Discussion" className="bg-secondary/20" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="projectType" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Inquiry Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-secondary/20">
                                  <SelectValue placeholder="Select type..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {projectTypeOptions.map((opt) => (
                                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        
                        <FormField control={form.control} name="budgetRange" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-secondary/20">
                                  <SelectValue placeholder="Select budget..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetOptions.map((opt) => (
                                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <textarea 
                              className="flex min-h-[150px] w-full rounded-md border border-input bg-secondary/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Tell me about your project or opportunity..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="termsAccepted" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border/50 p-4 bg-secondary/10">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal text-muted-foreground">
                              I agree to the processing of my personal data for the purpose of communicating regarding this inquiry.
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )} />

                      <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="h-4 w-4" /> Send Message</>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-center pt-12">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-border/50 hover:border-primary hover:text-primary transition-colors shadow-sm" onClick={scrollToTop} title="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
