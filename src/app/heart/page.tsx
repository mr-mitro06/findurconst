"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Heart, Sparkles, BookOpen, Stars } from "lucide-react";
import Link from "next/link";

export default function SecretPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#070B16] selection:bg-white/20">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-rose/10 via-[#070B16]/50 to-[#070B16]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 rounded-full bg-accent-rose/10 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(253,164,175,0.3)]">
            <Heart className="w-10 h-10 text-accent-rose animate-pulse" fill="currentColor" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            The Heart of <br/> FindUrTribe
          </h1>
          <p className="font-serif text-white/60 italic text-xl max-w-2xl">
            You found the hidden stars. Welcome to the core of the constellation.
          </p>
        </motion.div>

        <div className="w-full space-y-12">
          {/* Thank You Letter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="glass-panel p-10 md:p-14 rounded-3xl border-accent-rose/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="w-6 h-6 text-accent-rose" />
              <h2 className="font-heading text-3xl font-semibold text-white">A Letter to the Tribe</h2>
            </div>
            
            <div className="font-serif text-lg leading-loose text-white/80 space-y-6">
              <p>
                When we first created this community, none of us knew what it would become. It wasn't just about chatting or playing games; it was about finding a place where we could truly be ourselves.
              </p>
              <p>
                Every single one of you brought a different kind of light. Some brought warmth, some brought chaos, and some brought a quiet comfort that made the hard days a little easier.
              </p>
              <p>
                I built this digital universe to show you how I see you. Not just as names on a screen, but as vital stars in a constellation that wouldn't make sense if even one was missing.
              </p>
              <p className="font-medium text-white italic pt-4">
                "You didn't just join this tribe. You became part of its constellation."
              </p>
              <p className="text-right text-sm uppercase tracking-widest text-accent-rose pt-4">
                — Abhi
              </p>
            </div>
          </motion.div>

          {/* Grid of Extras */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-accent-sky/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5 text-accent-sky" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">Behind the Scenes</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Sketches, early designs, and the late-night thoughts that went into crafting every single card and poem.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent-sky group-hover:underline">Explore →</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stars className="w-5 h-5 text-accent-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-3">Community Memories</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                A gallery of our funniest quotes, most chaotic voice calls, and the moments that made us a family.
              </p>
              <span className="text-xs uppercase tracking-widest text-accent-gold group-hover:underline">View Memories →</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex justify-center pt-12"
          >
            <Link href="/gallery">
              <button className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-background transition-all duration-300 font-medium">
                Return to the Stars
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
