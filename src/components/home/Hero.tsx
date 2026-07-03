"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple aurora gradient animation
    if (!containerRef.current) return;
    
    gsap.to(".aurora-glow", {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <div ref={containerRef} className="relative flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-glow absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-lavender/10 blur-[100px] mix-blend-screen" />
        <div className="aurora-glow absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-accent-sky/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-accent-emerald/5 blur-[150px] mix-blend-screen rounded-t-full" />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-2 leading-none drop-shadow-2xl">
            FindUrTribe
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <p className="font-sans text-xs md:text-sm lg:text-base text-white/40 tracking-[0.3em] font-extralight uppercase leading-loose text-center">
            "Every soul is a star.<br />
            Every star completes the sky."
          </p>

          <div className="flex items-center justify-center pt-8">
            <Link href="/gallery" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-background font-semibold rounded-full hover:bg-accent-gold hover:text-background transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(245,208,97,0.4)]"
              >
                Enter Tribe
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Moon glow at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[20vh] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
