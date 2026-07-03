"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Member } from "@/lib/mock-data";
import { X, Star, Award, Heart } from "lucide-react";
import { useEffect } from "react";

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

export function MemberModal({ member, onClose }: MemberModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0F1C]/80 backdrop-blur-2xl border border-white/[0.1] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing top border */}
            <div
              className="absolute top-0 left-0 w-full h-1 opacity-50 z-10"
              style={{ backgroundColor: member.themeColor }}
            />

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Column: Avatar & Identity */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at top, ${member.themeColor}, transparent 70%)`,
                      }}
                    />

                    {/* Emoji Avatar */}
                    <div className="relative mb-8 w-32 h-32 md:w-40 md:h-40">
                      <div
                        className="absolute inset-0 rounded-full blur-[30px] opacity-40 animate-pulse"
                        style={{ backgroundColor: member.themeColor }}
                      />
                      <div
                        className="w-full h-full rounded-full bg-[#0A0F1C] flex items-center justify-center relative z-10 border-4 shadow-2xl"
                        style={{ borderColor: member.themeColor }}
                      >
                        <span className="text-6xl md:text-7xl">{member.favoriteEmoji}</span>
                      </div>
                    </div>

                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                      {member.nickname}
                    </h1>
                    <p className="font-serif text-lg italic text-white/70 mb-2">
                      "{member.title}"
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-6">
                      {member.realName}
                    </p>

                    <div className="w-full h-[1px] bg-white/10 mb-6" />

                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-white/40">
                        Signature Ability
                      </span>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" style={{ color: member.themeColor }} />
                        <span className="text-sm text-white/90 font-medium">
                          {member.specialAbility}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Personality Stats */}
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl">
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">
                      Personality Matrix
                    </h3>
                    <div className="space-y-5">
                      {Object.entries(member.personality).map(([trait, value], idx) => (
                        <div key={trait}>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-white/80 font-medium">{trait}</span>
                            <span className="text-white/40">{value}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{
                                duration: 1,
                                delay: 0.3 + idx * 0.1,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: member.themeColor }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  {/* The Poem */}
                  <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
                      <Star className="w-32 h-32" style={{ color: member.themeColor }} />
                    </div>
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6 md:mb-8">
                      Personal Constellation
                    </h3>
                    <div className="font-poem text-xl md:text-3xl text-white/90 leading-loose italic space-y-3">
                      {member.poem.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* About & Quote */}
                    <div className="flex flex-col gap-6">
                      <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex-1">
                        <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">
                          About
                        </h3>
                        <p className="text-white/80 leading-relaxed font-sans font-light text-sm md:text-base">
                          {member.about}
                        </p>

                        <div className="mt-6 pt-6 border-t border-white/10">
                          <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">
                            Hidden Fact
                          </h3>
                          <p className="text-white/60 italic text-sm">
                            {member.hiddenFact}
                          </p>
                        </div>
                      </div>

                      <div
                        className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl border-l-4"
                        style={{ borderLeftColor: member.themeColor }}
                      >
                        <p className="font-serif italic text-lg text-white/90 leading-relaxed">
                          "{member.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Achievements & Notes */}
                    <div className="flex flex-col gap-6">
                      <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl">
                        <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent-gold" />
                          Achievements
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {member.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 flex items-center gap-2"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: member.themeColor }}
                              />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-8 rounded-3xl flex-1">
                        <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
                          <Heart className="w-4 h-4 text-accent-rose" />
                          Appreciation Notes
                        </h3>
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-white/5 text-sm text-white/70 font-serif italic border border-white/5">
                            "Thank you for making everyone feel included. The tribe wouldn't be the same without you."
                          </div>
                          <div className="p-4 rounded-xl bg-white/5 text-sm text-white/70 font-serif italic border border-white/5">
                            "You always make the group brighter. Your energy is unmatched!"
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
