"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import posthog from "posthog-js";

export default function ScanClient({ brandId }: { brandId: string }) {
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!brandId) return;

    posthog.capture("qr_scan", {
      brand_id: brandId,
      timestamp: new Date().toISOString(),
    });

    const timer = setTimeout(() => {
      if (brandId === "invalid") {
        setError(true);
      } else {
        router.replace(`/${brandId}`);
      }
    }, 1500); // Extended delay for visual effect

    return () => clearTimeout(timer);
  }, [brandId, router]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2">Invalid Drop</h1>
          <p className="text-muted-foreground">We couldn&apos;t find that brand.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 overflow-hidden relative">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="flex flex-col items-center gap-12 relative z-10">
        
        {/* Radar Animation Container */}
        <div className="relative w-48 h-48 flex items-center justify-center">
           {/* Outer Ring */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
             className="absolute inset-0 rounded-full border border-zinc-800 border-t-primary border-l-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.2)]"
           />
           {/* Inner Ring */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
             className="absolute inset-4 rounded-full border border-dashed border-zinc-700"
           />
           {/* Radar Sweep */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
             className="absolute inset-0 rounded-full overflow-hidden"
           >
             <div className="w-[150%] h-[150%] -top-1/4 -left-1/4 absolute bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,240,255,0.3)_90deg,transparent_90deg)] blur-md" />
           </motion.div>
           
           {/* Center Icon */}
           <div className="relative z-10 bg-zinc-950 rounded-full p-4 border border-zinc-800 shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
             <ScanLine className="h-10 w-10 text-primary animate-pulse" />
           </div>
        </div>

        {/* Text Decrypt Effect */}
        <div className="flex flex-col items-center gap-2">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-mono text-2xl font-bold tracking-widest text-white uppercase flex gap-1"
           >
             {"Authenticating".split("").map((char, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className="text-primary glow-text"
                >
                  {char}
                </motion.span>
             ))}
           </motion.div>
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="font-mono text-sm tracking-widest text-zinc-500 uppercase"
           >
             Locating Drop...
           </motion.p>
        </div>
      </div>
    </div>
  );
}
