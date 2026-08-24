"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroBottleImg from "@/public/images/hero-bottle.png";
import { Droplet, ArrowRight, Activity, Menu, Scan, Gift, Zap } from "lucide-react";

export default function HomeClient() {
  const [impactCount, setImpactCount] = useState(1450320);

  // Simulate live impact counter
  useEffect(() => {
    const interval = setInterval(() => {
      setImpactCount((prev) => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Free Drops Home" title="Go to Free Drops Home" className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Droplet className="h-5 w-5 text-primary fill-primary" />
            FREE DROPS
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium tracking-tight">
            <Link href="/business" aria-label="For Brands" title="Information for Brands" className="hover:text-primary transition-colors">FOR BRANDS</Link>
            <Link href="/contact" aria-label="Contact Us" title="Contact Us" className="hover:text-primary transition-colors">CONTACT</Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
             <Menu className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          {/* Main Headline & Image */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 lg:col-span-8 min-h-[50vh] flex flex-col md:flex-row rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden relative group">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10 relative">
              <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-bold leading-[0.9] tracking-tighter uppercase text-white drop-shadow-2xl">
                Water
                <br />
                Should
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 glow-text">Be Free.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl font-medium tracking-tight text-zinc-400 max-w-md leading-relaxed">
                A disruptive model where brands pay for your hydration. Scan the drop, unlock exclusive offers, stay hydrated. It&apos;s that simple.
              </p>
            </div>
            <div className="flex-1 relative min-h-[350px] md:min-h-full w-full">
               <Image 
                 src={heroBottleImg}
                 alt="Free Drops Premium Aluminum Bottle"
                 fill
                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Live Impact Counter */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 lg:col-span-4 flex flex-col justify-between rounded-3xl border border-primary/30 bg-primary/10 text-primary p-8 md:p-10 relative overflow-hidden group backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.1)]">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase mb-4 relative z-10 text-primary/90">
              <Activity className="h-4 w-4 animate-pulse" />
              Live Global Impact
            </div>
            <div className="relative z-10">
              <motion.div 
                key={impactCount}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-bold tracking-tighter tabular-nums text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                {impactCount.toLocaleString()}
              </motion.div>
              <div className="text-sm font-medium tracking-tight mt-2 uppercase opacity-90 text-primary/80">
                Plastic Bottles Prevented
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-700" />
          </motion.div>

          {/* Manifesto Teaser */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 md:col-span-6 min-h-[300px] p-8 md:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6 uppercase text-white">The Manifesto</h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
              We pay for water in plastic bottles that destroy the earth, while advertising interrupts everything we do. We flipped the model. Premium aluminum bottles, pristine water, <strong className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">paid for by brands you actually want to hear from.</strong>
            </p>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          {/* Call to Action for Brands */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 md:col-span-6">
            <Link href="/business" aria-label="Sponsor a Drop" title="Go to Business Portal" className="h-full min-h-[300px] p-8 md:p-12 flex flex-col justify-between group cursor-pointer rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:border-white transition-all duration-500 block relative overflow-hidden shadow-xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase relative z-10 group-hover:text-black transition-colors text-white">Sponsor a Drop</h2>
              <div className="flex items-center justify-between mt-auto relative z-10">
                <p className="font-medium text-lg md:text-xl text-zinc-400 group-hover:text-zinc-600 transition-colors">Put your brand directly in their hands.</p>
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-black text-primary group-hover:text-white transition-all duration-500 shrink-0 ml-4">
                  <ArrowRight className="h-8 w-8 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto border-t border-zinc-800">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Scan, title: "1. Scan", desc: "Find a Free Drop in the wild and scan the dynamic QR code on the bottle." },
            { icon: Gift, title: "2. Claim", desc: "Enter your email to unlock an exclusive offer or digital asset from the sponsor." },
            { icon: Zap, title: "3. Hydrate", desc: "Enjoy premium, icy cold water in an infinitely recyclable aluminum bottle." }
          ].map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-10 bg-black/40 rounded-3xl border border-white/10 backdrop-blur-xl hover:border-primary/50 hover:bg-white/5 transition-all duration-500 group shadow-lg"
            >
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold uppercase tracking-widest mb-4 text-white drop-shadow-sm">{step.title}</h3>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Marquee */}
      <div className="border-y border-zinc-800 py-6 overflow-hidden flex whitespace-nowrap bg-primary text-primary-foreground shadow-[0_0_50px_rgba(0,240,255,0.1)]">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-4xl font-bold tracking-tighter uppercase flex gap-8"
        >
          <span>Free to you.</span>
          <span>Paid by Brands.</span>
          <span>Free to you.</span>
          <span>Paid by Brands.</span>
          <span>Free to you.</span>
          <span>Paid by Brands.</span>
          <span>Free to you.</span>
          <span>Paid by Brands.</span>
          <span>Free to you.</span>
          <span>Paid by Brands.</span>
        </motion.div>
      </div>

    </main>
  );
}
