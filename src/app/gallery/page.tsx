"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, SlidersHorizontal } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { MemberCard } from "@/components/shared/MemberCard";
import { MemberModal } from "@/components/shared/MemberModal";
import { INITIAL_MEMBERS, Member } from "@/lib/mock-data";

type SortOption = "alphabetical" | "recent" | "random";

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("alphabetical");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const filteredMembers = INITIAL_MEMBERS.filter((member) => {
    const query = searchQuery.toLowerCase();
    return (
      member.realName.toLowerCase().includes(query) ||
      member.nickname.toLowerCase().includes(query) ||
      member.title.toLowerCase().includes(query)
    );
  }).sort((a, b) => {
    if (a.id === "fatheena") return -1;
    if (b.id === "fatheena") return 1;

    if (sortBy === "alphabetical") return a.nickname.localeCompare(b.nickname);
    if (sortBy === "recent") return new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime();
    return 0.5 - Math.random(); // Note: in real app, random shouldn't re-render on every keystroke
  });

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background selection:bg-white/20">
      <Navbar />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              The Constellation
            </h1>
            <p className="font-serif text-white/60 italic text-lg max-w-xl">
              Every star has a story. Explore the souls that make up our universe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group w-full sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-accent-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Search by name or title..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass-panel bg-white/5 py-3 pl-11 pr-4 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold transition-all"
              />
            </div>
            
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none glass-panel bg-white/5 py-3 pl-4 pr-10 rounded-full text-sm text-white focus:outline-none focus:border-accent-gold transition-all cursor-pointer h-full"
              >
                <option value="alphabetical" className="bg-[#121A2D]">A to Z</option>
                <option value="recent" className="bg-[#121A2D]">Recently Added</option>
                <option value="random" className="bg-[#121A2D]">Randomized</option>
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <MemberCard member={member} onEnterOrbit={() => setSelectedMember(member)} />
            </motion.div>
          ))}
          {filteredMembers.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="font-serif italic text-white/40 text-xl">No stars found matching your search.</p>
            </div>
          )}
        </motion.div>
      </div>

      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </main>
  );
}
