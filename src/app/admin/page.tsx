"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Settings, Users, Save, Plus } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <Navbar />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-10 rounded-3xl w-full max-w-md flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-white/50" />
          </div>
          <h1 className="font-heading text-3xl text-white mb-2">Admin Access</h1>
          <p className="text-white/50 text-sm mb-8 text-center">
            Enter the constellation password to manage the tribe. (Hint: "admin")
          </p>
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors"
              placeholder="Password"
            />
            <button 
              type="submit"
              className="w-full bg-white text-background font-medium rounded-xl py-3 hover:bg-accent-gold transition-colors"
            >
              Authenticate
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background selection:bg-white/20">
      <Navbar />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-heading text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Settings className="w-8 h-8 text-white/50" />
              Constellation Control
            </h1>
            <p className="font-serif text-white/50">Manage members, poems, and the universe.</p>
          </div>
          
          <button className="flex items-center gap-2 bg-accent-gold/20 text-accent-gold px-6 py-2.5 rounded-full hover:bg-accent-gold hover:text-background transition-all font-medium text-sm">
            <Save className="w-4 h-4" />
            Publish Changes
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-2">
            <button className="w-full text-left px-6 py-4 rounded-xl bg-white/10 text-white font-medium border border-white/20 flex items-center justify-between group">
              <span className="flex items-center gap-3"><Users className="w-4 h-4" /> Members</span>
              <span className="text-white/30 group-hover:text-white transition-colors">→</span>
            </button>
            <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-white/5 text-white/60 font-medium transition-colors flex items-center justify-between">
              General Settings
            </button>
            <button className="w-full text-left px-6 py-4 rounded-xl hover:bg-white/5 text-white/60 font-medium transition-colors flex items-center justify-between">
              Database Sync (Firebase)
            </button>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-panel rounded-3xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl text-white font-medium">Manage Members</h2>
                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                  <Plus className="w-4 h-4" />
                  Add Member
                </button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                      <div>
                        <h4 className="text-white font-medium text-sm">Member {i}</h4>
                        <p className="text-white/40 text-xs">Title • Nickname</p>
                      </div>
                    </div>
                    <button className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
