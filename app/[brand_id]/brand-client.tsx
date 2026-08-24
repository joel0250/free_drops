"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Leaf, Mail, Flame, CheckCircle } from "lucide-react";
import Image from "next/image";
import collabBottleImg from "@/public/images/collab-bottle.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import posthog from "posthog-js";

type BrandProps = {
  brandId: string;
};

const MOCK_BRANDS: Record<
  string,
  { name: string; impact: string; offer: string; color: string }
> = {
  "liquid-death": {
    name: "Liquid Death",
    impact: "1,200 lbs of plastic saved",
    offer: "Murder Your Thirst - 20% Off",
    color: "#00F0FF",
  },
  "red-bull": {
    name: "Red Bull",
    impact: "500 trees planted",
    offer: "Get your wings - Free Shipping",
    color: "#FF0000",
  },
};

export default function BrandClient({ brandId }: BrandProps) {
  const brand = MOCK_BRANDS[brandId] || {
    name: brandId,
    impact: "Calculating impact...",
    offer: "Special Offer Available",
    color: "#00F0FF",
  };

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    posthog.capture("offer_claimed", { brand_id: brandId, email });
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto pt-10">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter uppercase mb-4 text-white drop-shadow-lg">
          {brand.name} <span className="text-primary glow-text">x Free Drops</span>
        </h1>
        <p className="text-xl text-zinc-400 font-medium uppercase tracking-widest flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
          Exclusive Collaboration
        </p>
      </motion.header>

      {/* Bento Grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="bento-grid"
      >
        {/* Main Hero Image / Visual */}
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="bento-item col-span-12 md:col-span-8 min-h-[60vh] flex flex-col md:flex-row overflow-hidden p-0 bg-zinc-900/50 border border-zinc-800 relative group">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
            <div className="inline-block px-4 py-1 bg-red-500/20 text-red-500 font-bold uppercase tracking-widest rounded-full mb-6 text-sm border border-red-500/50 w-max">
              Only 500 Drops Left
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-6 text-white leading-tight drop-shadow-md">
              {brand.offer}
            </h2>
            <p className="text-lg text-zinc-300 font-medium max-w-lg leading-relaxed">
              You got this water for free because {brand.name} paid for it. Now, it&apos;s time to claim your exclusive digital asset before it&apos;s gone forever.
            </p>
          </div>
          <div className="flex-1 relative min-h-[300px] w-full">
            <Image 
              src={collabBottleImg}
              alt={`${brand.name} Collaboration Bottle`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/90 via-zinc-900/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Sustainability Widget */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } } }} className="bento-item col-span-12 md:col-span-4 flex flex-col justify-between bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 p-8 hover:border-primary/50 transition-colors rounded-3xl">
          <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-primary mb-4">
            <Leaf className="h-5 w-5" />
            Environmental Impact
          </div>
          <div>
            <p className="text-5xl font-heading font-bold tracking-tighter mb-4 text-white drop-shadow-md">
              {brand.impact}
            </p>
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
              Generated directly by {brand.name} scans
            </p>
          </div>
        </motion.div>

        {/* Direct to Buy */}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } } }} className="bento-item col-span-12 md:col-span-6 flex flex-col justify-between group cursor-pointer bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300 p-8 rounded-3xl">
          <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-8 group-hover:text-black transition-colors text-white">
            Shop The Brand
          </h3>
          <div className="flex items-center justify-between text-zinc-400 group-hover:text-zinc-600 font-medium">
            <span className="text-lg">Direct to store</span>
            <div className="h-14 w-14 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-black text-white transition-all duration-300">
               <ShoppingCart className="h-6 w-6 transform group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </motion.div>

        {/* Claim Offer Modal Trigger */}
        <Dialog>
          <DialogTrigger
            render={
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } } }} className="bento-item col-span-12 md:col-span-6 flex flex-col justify-between group cursor-pointer bg-primary/20 backdrop-blur-xl text-primary-foreground border border-primary/50 hover:bg-white hover:border-white hover:text-black transition-all duration-300 p-8 overflow-hidden relative rounded-3xl shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <h3 className="text-3xl font-heading font-bold uppercase tracking-tighter mb-8 relative z-10 group-hover:text-black text-white">
                  Claim Your Drop
                </h3>
                <div className="flex items-center justify-between font-medium relative z-10">
                  <span className="text-lg opacity-90 group-hover:opacity-100 group-hover:text-zinc-600">Unlock exclusive code now</span>
                  <div className="h-14 w-14 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-black text-white transition-all duration-300">
                    <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
              </motion.div>
            }
          />
          <DialogContent className="sm:max-w-md border-zinc-800/50 bg-zinc-950/80 backdrop-blur-2xl text-white rounded-3xl overflow-hidden p-0 shadow-2xl">
            <div className="p-6 md:p-8 relative">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-3xl font-heading font-bold tracking-tighter uppercase text-white drop-shadow-md">
                    Get The Drop
                  </DialogTitle>
                </DialogHeader>
                
                <AnimatePresence mode="wait">
                    {!submitted ? (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        onSubmit={handleClaim} 
                        className="flex flex-col gap-6 mt-4"
                    >
                        <div className="flex flex-col gap-3">
                        <Label htmlFor="email" className="text-zinc-400 font-mono uppercase tracking-widest text-xs">
                            Secure your offer
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="ENTER YOUR EMAIL"
                            className="rounded-xl border-zinc-800 bg-zinc-900 h-14 uppercase font-mono placeholder:text-zinc-600 focus-visible:ring-primary text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <Button
                        type="submit"
                        className="rounded-xl h-14 bg-primary text-primary-foreground hover:bg-white hover:text-black font-bold uppercase tracking-widest relative overflow-hidden group transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                        >
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            <Mail className="h-5 w-5" /> Unlock Code
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out scale-150" />
                        </Button>
                    </motion.form>
                    ) : (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 text-center flex flex-col items-center justify-center"
                    >
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                          className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary"
                        >
                           <CheckCircle className="h-10 w-10" />
                        </motion.div>
                        <p className="text-3xl font-heading font-bold text-white uppercase tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                        Drop Secured!
                        </p>
                        <p className="text-zinc-400 font-medium text-lg max-w-[250px] mx-auto">
                        Check your inbox. The exclusive code has been sent.
                        </p>
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
}
