"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplet, Send, Menu, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters";
    }
    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!validateEmail(value)) error = "Please enter a valid email address";
    }
    if (name === "message") {
      if (!value.trim()) error = "Message is required";
      else if (value.trim().length < 10) error = "Message must be at least 10 characters";
    }
    return error;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    // Check if there are any errors
    if (Object.values(newErrors).some((err) => err)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-20">
      {/* Navigation */}
      <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Free Drops Home" title="Free Drops Home" className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Droplet className="h-5 w-5 text-primary fill-primary" />
            FREE DROPS
          </Link>
          <div className="hidden md:flex items-center gap-6 font-mono text-sm tracking-widest text-muted-foreground uppercase">
            <Link href="/business" aria-label="For Brands" title="Information for Brands" className="hover:text-primary transition-colors">B2B Platform</Link>
            <Link href="/contact" aria-label="Contact Us" title="Contact Us" className="text-primary font-bold">Contact</Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
             <Menu className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </nav>

      <section className="pt-12 md:pt-20 px-6 max-w-[1440px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 relative min-h-[80vh] items-center">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.header 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter uppercase mb-6 leading-[0.9] text-white drop-shadow-2xl">
            Talk
            <br />
            To
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 glow-text">Us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight max-w-md leading-relaxed">
            Ready to sponsor a drop? Have a question? We respond instantly. No bots, no generic slop.
          </p>
        </motion.header>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
           className="md:w-1/2 w-full z-10"
        >
          <div className="p-8 md:p-12 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-8 relative z-10"
                  noValidate
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="name" className={`text-sm font-mono tracking-widest uppercase ${errors.name ? 'text-red-400' : 'text-zinc-400'}`}>Full Name</Label>
                      {errors.name && <span className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                    </div>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="ENTER YOUR NAME"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`rounded-xl border-white/10 bg-white/5 h-14 uppercase font-mono placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:border-primary text-white px-4 text-lg transition-all ${errors.name ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400' : ''}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email" className={`text-sm font-mono tracking-widest uppercase ${errors.email ? 'text-red-400' : 'text-zinc-400'}`}>Email Address</Label>
                      {errors.email && <span className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                    </div>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="ENTER YOUR EMAIL"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`rounded-xl border-white/10 bg-white/5 h-14 uppercase font-mono placeholder:text-zinc-600 focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:border-primary text-white px-4 text-lg transition-all ${errors.email ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message" className={`text-sm font-mono tracking-widest uppercase ${errors.message ? 'text-red-400' : 'text-zinc-400'}`}>Message</Label>
                      {errors.message && <span className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</span>}
                    </div>
                    <textarea
                      id="message"
                      required
                      placeholder="WHAT'S ON YOUR MIND?"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`rounded-xl border border-white/10 bg-white/5 min-h-[120px] uppercase font-mono placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:border-primary text-white px-4 text-lg resize-y pt-4 transition-all ${errors.message ? 'border-red-400 focus-visible:border-red-400 focus-visible:ring-red-400' : ''}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-2 rounded-xl h-14 bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold uppercase tracking-widest text-lg relative overflow-hidden group cursor-pointer border-none transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? "Sending..." : "Submit Inquiry"} {!isSubmitting && <Send className="h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                    {!isSubmitting && <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out scale-150" />}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="py-20 flex flex-col items-center justify-center text-center relative z-10 min-h-[400px]"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="h-24 w-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(0,240,255,0.3)]"
                  >
                    <CheckCircle2 className="h-12 w-12 text-primary" />
                  </motion.div>
                  <p className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white">
                    Message Received.
                  </p>
                  <p className="text-zinc-400 font-medium text-xl">
                    We&apos;ll be in touch shortly.
                  </p>
                  <Button 
                    onClick={() => { setSubmitted(false); setFormData({name: "", email: "", message: ""}); setTouched({}); }}
                    variant="link" 
                    className="mt-8 text-zinc-400 hover:text-white font-mono tracking-widest uppercase"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Brutalist graphic accent */}
            <div className="absolute -bottom-32 -right-32 opacity-5 pointer-events-none text-primary">
              <Droplet className="w-[500px] h-[500px]" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
