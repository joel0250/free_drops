"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroBottleImg from "@/public/images/hero-bottle.png";
import { Droplet, ArrowRight, Activity, Menu, X, Scan, Gift, Zap } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function HomeClient() {
  const [impactCount, setImpactCount] = useState(1450320);
  const [co2Saved, setCo2Saved] = useState(12688);
  const [adImpressions, setAdImpressions] = useState(3458900);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate live impact counter
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 15) + 5;
      setImpactCount((prev) => prev + increment);
      setCo2Saved((prev) => prev + increment * 0.015);
      setAdImpressions((prev) => prev + increment * 3.5);
    }, 1500);
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
          {/* Mobile Menu Icon Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
             {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 shadow-2xl"
            >
              <Link 
                href="/business" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors py-3 border-b border-zinc-800 flex items-center justify-between"
              >
                <span>For Brands</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors py-3 flex items-center justify-between"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5 text-primary" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 md:pt-32 pb-20 px-0 md:px-6 max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-12 gap-4 md:gap-6 px-4 md:px-0"
        >
          {/* Main Headline & Image */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 lg:col-span-8 min-h-[calc(100dvh-4rem)] lg:min-h-[50vh] flex flex-col md:flex-row -mx-4 md:mx-0 rounded-none md:rounded-3xl border-0 md:border border-b md:border-b border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden relative group">
            <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center z-10 relative">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-bold leading-[1.05] sm:leading-[0.95] md:leading-[0.88] tracking-tight md:tracking-tighter uppercase text-white drop-shadow-2xl flex flex-col gap-1 sm:gap-0">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  className="inline-block"
                >
                  Water
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                  className="inline-block"
                >
                  Should
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-300 to-cyan-400 glow-text"
                >
                  Be Free.
                </motion.span>
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
                 fetchPriority="high"
               />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Live Impact Counter */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="col-span-12 lg:col-span-4 flex flex-col justify-between rounded-3xl border border-primary/30 bg-primary/10 text-primary p-8 md:p-10 relative overflow-hidden group backdrop-blur-xl shadow-[0_0_40px_rgba(0,240,255,0.1)] cursor-default">
            <div className="flex items-center gap-3 font-mono text-sm tracking-widest uppercase mb-4 relative z-10 text-primary/90">
              <div className="relative flex h-4 w-4 items-center justify-center shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </div>
              Live Global Impact
            </div>
            
            <div className="relative z-10 my-4 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tighter tabular-nums text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.4)] leading-none truncate">
                <NumberTicker value={impactCount} />
              </div>
              <div className="text-sm font-medium tracking-tight mt-2 uppercase opacity-90 text-primary/80">
                Plastic Bottles Prevented
              </div>
            </div>

            {/* Tap Filling Bottle — Physics Animation */}
            <div className="flex-1 flex items-center justify-center min-h-[180px] relative z-10 opacity-90 mix-blend-screen group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-28 h-44 relative">
                <svg viewBox="0 0 70 140" className="w-full h-full drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  <defs>
                    {/* Bottle interior — strictly contains ALL water */}
                    <clipPath id="bclip">
                      <path d="M 29 42 L 29 52 L 20 63 L 20 126 C 20 130 24 132 35 132 C 46 132 50 130 50 126 L 50 63 L 41 52 L 41 42 Z" />
                    </clipPath>
                    {/* Gradient for water depth effect */}
                    <linearGradient id="wg" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(0,200,230,0.9)" />
                      <stop offset="50%" stopColor="rgba(0,240,255,1)" />
                      <stop offset="100%" stopColor="rgba(0,200,230,0.9)" />
                    </linearGradient>
                    {/* Highlight gradient on bottle glass */}
                    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="40%" stopColor="rgba(255,255,255,0.04)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
                    </linearGradient>
                  </defs>

                  {/* ── TAP ── */}
                  <path d="M 68 14 L 35 14" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M 35 14 L 35 29" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="5" strokeLinecap="round"/>
                  <path d="M 31 29 L 39 29" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3.5" strokeLinecap="round"/>
                  {/* Valve handle */}
                  <path d="M 52 14 L 52 7 L 60 7" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

                  {/* ── BOTTLE GHOST (empty body behind) ── */}
                  <path
                    d="M 29 42 L 29 52 L 20 63 L 20 126 C 20 130 24 132 35 132 C 46 132 50 130 50 126 L 50 63 L 41 52 L 41 42 Z"
                    fill="rgba(255,255,255,0.03)"
                  />

                  {/* ── ALL WATER — single path, wavy top + body, zero gap ── */}
                  <g clipPath="url(#bclip)">
                    <motion.path
                      fill="url(#wg)"
                      animate={{
                        d: [
                          /* empty — wave sitting at bottom */
                          "M 18 132 Q 26.5 129 35 132 Q 43.5 135 52 132 L 52 140 L 18 140 Z",
                          /* wave oscillates at bottom */
                          "M 18 132 Q 26.5 135 35 132 Q 43.5 129 52 132 L 52 140 L 18 140 Z",
                          /* full — wave at top */
                          "M 18 42 Q 26.5 39 35 42 Q 43.5 45 52 42 L 52 140 L 18 140 Z",
                          /* wave oscillates at top */
                          "M 18 42 Q 26.5 45 35 42 Q 43.5 39 52 42 L 52 140 L 18 140 Z",
                          /* draining — wave back at bottom */
                          "M 18 132 Q 26.5 129 35 132 Q 43.5 135 52 132 L 52 140 L 18 140 Z",
                          /* wave oscillates at bottom again */
                          "M 18 132 Q 26.5 135 35 132 Q 43.5 129 52 132 L 52 140 L 18 140 Z",
                        ],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                        times: [0, 0.08, 0.55, 0.62, 0.88, 1],
                      }}
                    />
                  </g>

                  {/* ── WATER STREAM from tap nozzle — clipped above bottle ── */}
                  <motion.path
                    fill="rgba(0,230,255,0.9)"
                    animate={{
                      d: [
                        "M 33.5 30 L 36.5 30 L 36.5 30 L 33.5 30 Z",
                        "M 33.5 30 L 36.5 30 L 37.5 42 L 32.5 42 Z",
                        "M 33.5 30 L 36.5 30 L 37.5 42 L 32.5 42 Z",
                        "M 34.2 30 L 35.8 30 L 36 34 L 34 34 Z",
                        "M 34.5 30 L 35.5 30 L 35.5 30 L 34.5 30 Z",
                        "M 34.5 30 L 35.5 30 L 35.5 30 L 34.5 30 Z",
                      ],
                      opacity: [0, 1, 1, 0.5, 0, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                      times: [0, 0.08, 0.55, 0.60, 0.65, 1],
                    }}
                  />

                  {/* ── BOTTLE OUTLINE drawn last — acts as visual mask ── */}
                  <path
                    d="M 29 42 L 29 52 L 20 63 L 20 126 C 20 130 24 132 35 132 C 46 132 50 130 50 126 L 50 63 L 41 52 L 41 42 Z"
                    fill="none"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.8"
                  />
                  {/* Glass highlight strip (left edge) */}
                  <path
                    d="M 29 42 L 29 52 L 20 63 L 20 126"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Neck threading */}
                  <path d="M 27 42 L 43 42" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="relative z-10 mt-auto pt-6 border-t border-primary/20 grid grid-cols-2 gap-4 group-hover:border-primary/40 transition-colors duration-500">
               <div>
                 <div className="text-xs font-mono text-primary/60 uppercase tracking-widest mb-1">CO₂ Reduced</div>
                 <div className="text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums">
                   <NumberTicker value={Math.floor(co2Saved)} /> <span className="text-sm font-medium text-primary/60">kg</span>
                 </div>
               </div>
               <div>
                 <div className="text-xs font-mono text-primary/60 uppercase tracking-widest mb-1">Ad Impressions</div>
                 <div className="text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums">
                   <NumberTicker value={Math.floor(adImpressions)} />
                 </div>
               </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-700" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
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
