"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Music3 } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col"
          >
            <span className="font-heading text-2xl font-semibold tracking-wider text-white">
              FindUrTribe
            </span>
            <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase mt-1">
              Constellation Project
            </span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
            <Link href="/gallery" className="text-white/70 hover:text-white transition-colors relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full flex items-center justify-center glass-panel hover:bg-white/10 transition-colors"
            aria-label="Toggle Music"
          >
            {isPlaying ? (
              <Music className="w-4 h-4 text-accent-gold animate-pulse" />
            ) : (
              <Music3 className="w-4 h-4 text-white/50" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
