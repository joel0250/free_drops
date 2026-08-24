"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Droplet, BarChart3, Users, DollarSign, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import scanningImg from "@/public/images/scanning.png";
import dashboardImg from "@/public/images/dashboard.png";
import { Button } from "@/components/ui/button";

export default function BusinessClient() {
  const [bottles, setBottles] = useState(10000);
  
  // Basic ROI math
  const costPerBottle = 0.85; // $0.85 per bottle for brands
  const totalCost = bottles * costPerBottle;
  const estimatedScans = bottles * 0.45; // 45% scan rate
  const estimatedLeads = estimatedScans * 0.20; // 20% lead conversion from scans
  const cpa = totalCost / estimatedLeads;

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
            B2B Platform
            <Link href="/contact" aria-label="Contact Us" title="Contact Us" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
             <Menu className="h-6 w-6 text-foreground" />
          </div>
        </div>
      </nav>

      <section className="pt-12 md:pt-20 px-6 max-w-[1440px] mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter uppercase mb-6 leading-[0.9] drop-shadow-xl">
            Marketing with <span className="text-primary glow-text">Water.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight">
            Stop paying for ignored digital ads. Put your brand directly into their hands. An offline physical ad with an instant digital conversion path.
          </p>
        </motion.header>

        {/* Hero Visual for Business */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-20 border border-zinc-800"
        >
          <Image 
            src={scanningImg}
            alt="Person scanning a Free Drops bottle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-transparent" />
          <div className="absolute bottom-10 left-10 max-w-lg">
             <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white mb-2 shadow-xl drop-shadow-lg">The Ultimate Billboard</h2>
             <p className="text-lg text-zinc-200 font-medium shadow-xl">100% Viewability. Zero Banner Blindness.</p>
          </div>
        </motion.div>

        <div className="bento-grid mb-24">
          {/* ROI Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-item col-span-12 lg:col-span-8 flex flex-col gap-8 p-6 md:p-10 bg-zinc-900/50 backdrop-blur-md border border-zinc-800"
          >
            <h2 className="text-3xl font-heading font-bold tracking-tighter uppercase text-white drop-shadow-md">
              ROI Calculator
            </h2>
            
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex justify-between items-end">
                <span className="font-medium text-zinc-400 uppercase tracking-widest text-sm">
                  Sponsored Drops
                </span>
                <motion.span 
                  key={bottles}
                  initial={{ scale: 1.1, color: '#00F0FF' }}
                  animate={{ scale: 1, color: '#FFFFFF' }}
                  className="text-4xl font-bold tabular-nums"
                >
                  {bottles.toLocaleString()}
                </motion.span>
              </div>
              {/* Touch-friendly padding for mobile slider */}
              <div className="py-6">
                <Slider 
                  value={[bottles]} 
                  onValueChange={(v) => setBottles(Array.isArray(v) ? v[0] : (v as unknown as number))} 
                  min={1000} 
                  max={100000} 
                  step={1000} 
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, type: "spring", bounce: 0.5 }} viewport={{ once: true }} className="border border-zinc-800 rounded-2xl p-6 bg-black/50 text-white hover:border-primary/50 transition-colors backdrop-blur-md">
                <DollarSign className="h-6 w-6 text-primary mb-4" />
                <div className="text-sm font-mono tracking-widest uppercase mb-1 text-zinc-400">Total Cost</div>
                <div className="text-3xl font-bold">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
              </motion.div>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring", bounce: 0.5 }} viewport={{ once: true }} className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900/50 text-white hover:border-primary/50 transition-colors backdrop-blur-md">
                <Users className="h-6 w-6 text-primary mb-4" />
                <div className="text-sm font-mono tracking-widest uppercase mb-1 text-zinc-400">Est. Scans</div>
                <div className="text-3xl font-bold">{Math.round(estimatedScans).toLocaleString()}</div>
              </motion.div>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, type: "spring", bounce: 0.5 }} viewport={{ once: true }} className="border border-primary/20 rounded-2xl p-6 bg-primary/10 text-primary shadow-[0_0_20px_rgba(220,38,38,0.2)] relative overflow-hidden backdrop-blur-md">
                <BarChart3 className="h-6 w-6 mb-4 relative z-10" />
                <div className="text-sm font-mono tracking-widest uppercase mb-1 opacity-80 relative z-10 text-primary">Est. CPA</div>
                <div className="text-3xl font-bold relative z-10">${cpa.toFixed(2)}</div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Value Prop */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-item col-span-12 lg:col-span-4 flex flex-col justify-between p-6 md:p-10 bg-zinc-900/50 backdrop-blur-md border border-zinc-800"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold tracking-tighter uppercase mb-6 text-white drop-shadow-md">
                The Specs
              </h3>
              <ul className="space-y-6 font-medium text-zinc-300">
                {[
                  "Premium Aluminum Bottles",
                  "Zero-CLS Dynamic QR Code",
                  "Real-time Analytics Dashboard",
                  "Brand-owned Landing Page"
                ].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full shrink-0 shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12">
              <Link href="/contact" aria-label="Start Campaign" title="Contact us to start campaign" className="block w-full">
                <Button className="w-full h-14 bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold uppercase tracking-widest text-lg rounded-xl group overflow-hidden relative cursor-pointer transition-all">
                  <span className="relative z-10">Start Campaign</span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out scale-150" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Analytics Section */}
        <section className="mb-24 pt-12 border-t border-zinc-800">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter mb-6 text-white drop-shadow-xl">Actionable Insights. <br/><span className="text-primary glow-text">Zero Guesswork.</span></h2>
                <p className="text-xl text-zinc-400 font-medium mb-8 leading-relaxed">
                  Track every drop. Our proprietary dashboard gives you real-time visibility into scans, geographic distribution, and post-scan conversion rates. It&apos;s physical marketing with digital attribution.
                </p>
                <ul className="space-y-4 text-zinc-300 font-medium">
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-primary rounded-full" /> Heatmap analytics for distribution</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-primary rounded-full" /> A/B testing for landing page offers</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-primary rounded-full" /> CRM integration for lead capture</li>
                </ul>
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl shadow-primary/10 group"
              >
                 <Image 
                   src={dashboardImg}
                   alt="Free Drops Analytics Dashboard"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
              </motion.div>
           </div>
        </section>

      </section>
    </main>
  );
}
