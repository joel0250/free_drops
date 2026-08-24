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
          className="bento-grid"
        >
          {/* Main Headline & Image */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bento-item col-span-12 md:col-span-8 min-h-[50vh] flex flex-col md:flex-row overflow-hidden p-0 bg-zinc-900/50 border-zinc-800 backdrop-blur-xl relative group">
            <div className="flex-1 p-6 md:p-10 flex flex-col justify-center z-10 relative">
              <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase text-white drop-shadow-lg">
                Water
                <br />
                Should
                <br />
                <span className="text-primary glow-text">Be Free.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl font-medium tracking-tight text-zinc-300 max-w-md leading-relaxed">
                A disruptive model where brands pay for your hydration. Scan the drop, unlock exclusive offers, stay hydrated. It&apos;s that simple.
              </p>
            </div>
            <div className="flex-1 relative min-h-[300px] md:min-h-full w-full">
               <Image 
                 src={heroBottleImg}
                 alt="Free Drops Premium Aluminum Bottle"
                 fill
                 className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Live Impact Counter */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bento-item col-span-12 md:col-span-4 flex flex-col justify-between bg-primary text-primary-foreground p-6 md:p-8 relative overflow-hidden group">
            <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase mb-4 relative z-10">
              <Activity className="h-4 w-4 animate-pulse" />
              Live Global Impact
            </div>
            <div className="relative z-10">
              <motion.div 
                key={impactCount}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-7xl font-bold tracking-tighter tabular-nums"
              >
                {impactCount.toLocaleString()}
              </motion.div>
              <div className="text-sm font-medium tracking-tight mt-2 uppercase opacity-90">
                Plastic Bottles Prevented
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 blur-[100px] rounded-full group-hover:bg-white/30 transition-colors duration-500" />
          </motion.div>

          {/* Manifesto Teaser */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6, delay: 0.4 }}
            className="col-span-12 md:col-span-5 bg-zinc-900/40 bento-item p-0 overflow-hidden flex flex-col group relative rounded-3xl"
          >
            <div className="p-8 pb-0 z-10 relative">
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tighter drop-shadow-lg">Paid by brands you actually want to hear from.</h2>
            </div>
          </motion.div>

          {/* Call to Action for Brands */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="col-span-12 md:col-span-6">
            <Link href="/business" aria-label="Sponsor a Drop" title="Go to Business Portal" className="bento-item h-full min-h-[300px] p-6 md:p-10 flex flex-col justify-between group cursor-pointer bg-zinc-900/80 border-zinc-700 hover:bg-white hover:text-black transition-all duration-300 block relative overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 uppercase relative z-10 group-hover:text-black transition-colors">Sponsor a Drop</h2>
              <div className="flex items-center justify-between mt-auto relative z-10">
                <p className="font-medium text-lg md:text-xl text-zinc-400 group-hover:text-zinc-600 transition-colors">Put your brand directly in their hands.</p>
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-black text-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2, type: "spring", bounce: 0.5 }}
              className="bento-item col-span-12 md:col-span-4 bg-zinc-900/40 rounded-3xl flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="h-14 w-14 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase tracking-tighter mb-4 text-white">{step.title}</h3>
              <p className="text-zinc-400 font-medium text-lg">{step.desc}</p>
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
