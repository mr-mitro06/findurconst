"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { INITIAL_MEMBERS, Member } from "@/lib/mock-data";
import { Star, ChevronLeft, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function MemberPage() {
  const { id } = useParams();
  const router = useRouter();
  const [member, setMember] = useState<Member | null>(null);
  const [starFound, setStarFound] = useState(false);

  useEffect(() => {
    const foundMember = INITIAL_MEMBERS.find((m) => m.id === id);
    if (foundMember) {
      setMember(foundMember);
    } else {
      router.push("/gallery");
    }
  }, [id, router]);

  if (!member) return null;

  const handleStarClick = () => {
    setStarFound(true);
    // In a full implementation, we'd save this to local storage or backend
    // to track progress towards finding all stars.
    setTimeout(() => {
      // Just for demo, one star unlocks it
      router.push("/heart");
    }, 2000);
  };

  return (
    <main className="relative min-h-screen pt-24 pb-24 bg-background selection:bg-white/20">
      <Navbar />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <Link href="/gallery">
          <button className="flex items-center text-white/50 hover:text-white transition-colors mb-12 group">
            <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest font-medium">Return to Galaxy</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Avatar & Core Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top, ${member.themeColor}, transparent 70%)` }}
              />
              
              <div className="relative mb-8 w-40 h-40">
                <div 
                  className="absolute inset-0 rounded-full blur-[30px] opacity-40 animate-pulse"
                  style={{ backgroundColor: member.themeColor }}
                />
                <div 
                  className="w-full h-full rounded-full glass-panel flex items-center justify-center relative z-10 border-4 shadow-2xl" 
                  style={{ borderColor: member.themeColor }}
                >
                  <span className="text-7xl">{member.favoriteEmoji}</span>
                </div>
              </div>

              <h1 className="font-heading text-4xl font-bold text-white mb-2">{member.nickname}</h1>
              <p className="font-serif text-lg italic text-white/70 mb-2">"{member.title}"</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-6">{member.realName}</p>

              <div className="w-full h-[1px] bg-white/10 mb-6" />

              <div className="flex flex-col items-center gap-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-white/40">Signature Ability</span>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" style={{ color: member.themeColor }} />
                  <span className="text-sm text-white/90 font-medium">{member.specialAbility}</span>
                </div>
              </div>

              {/* Hidden Star Feature */}
              <button 
                onClick={handleStarClick}
                className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity hover:opacity-100 hover:scale-125 focus:opacity-100"
                aria-label="Hidden Star"
              >
                <Star className={`w-4 h-4 transition-all duration-1000 ${starFound ? "text-accent-gold drop-shadow-[0_0_10px_#F5D061] animate-spin" : "text-white/20"}`} />
              </button>
            </div>

            {/* Personality Stats */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6">Personality Matrix</h3>
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
                        transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: member.themeColor }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Poem, About, Notes */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            {/* The Poem */}
            <div className="glass-panel p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-10 right-10 opacity-10">
                <Star className="w-32 h-32" style={{ color: member.themeColor }} />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-8">Personal Constellation</h3>
              <div className="font-poem text-2xl md:text-3xl lg:text-4xl text-white/90 leading-loose italic space-y-4">
                {member.poem.map((line, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 + (idx * 0.5) }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About & Quote */}
              <div className="flex flex-col gap-8">
                <div className="glass-panel p-8 rounded-3xl">
                  <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">About</h3>
                  <p className="text-white/80 leading-relaxed font-sans font-light">
                    {member.about}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h3 className="text-xs uppercase tracking-widest text-white/50 mb-4">Hidden Fact</h3>
                    <p className="text-white/60 italic text-sm">
                      {member.hiddenFact}
                    </p>
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl border-l-4" style={{ borderLeftColor: member.themeColor }}>
                  <p className="font-serif italic text-xl text-white/90 leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Achievements & Notes */}
              <div className="flex flex-col gap-8">
                <div className="glass-panel p-8 rounded-3xl">
                  <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent-gold" />
                    Achievements
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {member.achievements.map((achievement, idx) => (
                      <div 
                        key={idx}
                        className="px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: member.themeColor }} />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-8 rounded-3xl flex-1">
                  <h3 className="text-xs uppercase tracking-widest text-white/50 mb-6 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent-rose" />
                    Appreciation Notes
                  </h3>
                  <div className="space-y-4">
                    {/* Mock notes since they weren't fully fleshed out in the PRD data for everyone */}
                    <div className="p-4 rounded-xl bg-white/5 text-sm text-white/70 font-serif italic">
                      "Thank you for making everyone feel included. The tribe wouldn't be the same without you."
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 text-sm text-white/70 font-serif italic">
                      "You always make the group brighter. Your energy is unmatched!"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
