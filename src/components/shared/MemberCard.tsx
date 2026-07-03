"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Member } from "@/lib/mock-data";
import { Sparkles, RotateCcw } from "lucide-react";

interface MemberCardProps {
  member: Member;
  onEnterOrbit: () => void;
}

export function MemberCard({ member, onEnterOrbit }: MemberCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-[500px] max-w-[340px] mx-auto perspective-1000 group">
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
      >
        {/* ── FRONT ── */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#0A0F1D]/45 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col cursor-pointer transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          style={{
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 12px 0 ${member.themeColor}10`
          }}
          onClick={() => !isFlipped && setIsFlipped(true)}
        >
          {/* Top subtle accent */}
          <div 
            className="absolute top-0 left-0 w-full h-1 opacity-60 z-10"
            style={{ backgroundColor: member.themeColor }}
          />

          {/* Aesthetic Emoji Display */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {/* Glowing background orb */}
            <motion.div 
              className="absolute w-44 h-44 rounded-full blur-[70px] opacity-25"
              style={{ backgroundColor: member.themeColor }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Emoji Container */}
            <motion.div 
              className="relative z-10 w-28 h-28 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md group-hover:bg-white/[0.06] transition-all duration-500"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-6xl filter drop-shadow-xl select-none">
                {member.favoriteEmoji}
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 pt-0 bg-gradient-to-t from-[#0A0F1D]/80 via-[#0A0F1D]/40 to-transparent">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" style={{ color: member.themeColor }} />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                {member.title}
              </span>
            </div>

            <h3 className="font-heading text-3xl font-bold text-white tracking-wide mb-1 leading-tight">
              {member.nickname}
            </h3>
            
            <p className="text-sm font-serif text-white/50 italic mb-5">
              {member.realName}
            </p>

            <div className="w-full h-[1px] bg-white/10 mb-4 relative overflow-hidden">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1/3 opacity-50"
                style={{ backgroundColor: member.themeColor }}
                initial={{ x: "-100%" }}
                whileInView={{ x: "300%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <p className="font-serif text-sm italic text-white/60 leading-relaxed line-clamp-3">
              &ldquo;{member.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div 
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#0A0F1C]/45 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col cursor-pointer transition-all duration-500 hover:border-white/20"
          style={{
            boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 12px 0 ${member.themeColor}10`
          }}
          onClick={(e) => {
            if (isFlipped) {
              onEnterOrbit();
            }
          }}
        >
          {/* Top Header */}
          <div className="flex items-center justify-between p-6 pb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Constellation File
            </span>
            <div className="flex items-center gap-3">
              {/* Flip Back Button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                title="Flip back"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden text-sm">
                {member.favoriteEmoji}
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col p-6 pt-2 overflow-hidden">
            {/* Scrollable container if poem/text is too long */}
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide space-y-5">
              
              <div className="flex flex-col items-center justify-center py-4">
                <p className="font-poem text-[15px] italic text-white/90 leading-relaxed text-center">
                  {member.poem[0]}
                  <br />
                  {member.poem[1]}
                  <br />
                  {member.poem[2]}
                  <br />
                  {member.poem[3]}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid gap-3">
                {Object.entries(member.personality).slice(0, 3).map(([trait, value]) => (
                  <div key={trait} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-3 backdrop-blur-md">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">{trait}</span>
                      <span className="text-[10px] text-white/40">{value}%</span>
                    </div>
                    <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isFlipped ? `${value}%` : "0%" }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: member.themeColor }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hint message at bottom */}
            <div className="pt-4 border-t border-white/5 text-center">
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium group-hover:text-white/50 transition-colors duration-300">
                Click anywhere to open full file
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
