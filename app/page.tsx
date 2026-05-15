/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import { 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles,
  Layers,
  Code2,
  Terminal,
  Cpu
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("ABOUT");

  const NavItem = ({ name }: { name: string }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-4 py-1.5 text-xs font-medium tracking-widest transition-all duration-300 rounded-full ${
        activeTab === name 
          ? "bg-white/10 text-white" 
          : "text-white/50 hover:text-white"
      }`}
    >
      {name}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white/20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="glass px-2 py-1.5 rounded-full flex items-center gap-1">
          <NavItem name="ABOUT" />
          <NavItem name="SERVICES" />
          <NavItem name="PORTFOLIO" />
          <NavItem name="CONTACT" />
        </div>
        <button className="glass p-2.5 rounded-full hover:bg-white/10 transition-colors group">
          <Bell className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 min-h-screen flex items-center justify-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center w-full max-w-7xl">
            
            {/* Left Column - Hero Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-7xl lg:text-8xl font-display font-bold tracking-tighter"
                >
                  MUBARAK
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-y-1"
                >
                  <p className="text-xl lg:text-2xl font-medium text-white/90">
                    Modern Web Developer &
                  </p>
                  <p className="text-xl lg:text-2xl font-medium text-white/90">
                    Digital Solutions Expert
                  </p>
                </motion.div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-white/60 max-w-md leading-relaxed text-sm italic"
              >
                "Crafting exceptional digital experiences for local businesses. Next.js, Glassmorphism, and dynamic performance."
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-1"
              >
                <p className="text-xs font-bold tracking-widest text-white/40 uppercase">About Me:</p>
                <p className="text-md font-medium">Tech Innovator, Problem Solver.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 pt-4"
              >
                <a href="#services" className="group relative overflow-hidden px-8 py-4 rounded-xl glass font-bold text-xs tracking-widest uppercase glow-btn-rainbow text-center">
                  <span className="relative z-10">View My Services</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Center Column - Profile Pic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white/5 ring-1 ring-white/10 shadow-2xl shadow-blue-500/20 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Mubarak" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              
              {/* Decals */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center animate-pulse">
                <Sparkles className="text-white/40 w-10 h-10" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center animate-bounce duration-[3000ms]">
                <Cpu className="text-white/40 w-8 h-8" />
              </div>
            </motion.div>

            {/* Right Column - Projects Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8 lg:items-end"
            >
              <div className="w-full max-w-sm glass rounded-3xl p-6 relative group hover:ring-2 hover:ring-white/20 transition-all overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Projects: 5+ Live</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="relative aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/5">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" 
                    alt="Project Preview" 
                  />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                    <h3 className="text-lg font-bold">Local Bakery</h3>
                    <p className="text-xs text-white/40">E-commerce Solution</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
                      <ChevronLeft className="w-3 h-3" />
                    </button>
                    <button className="p-2 rounded-full glass hover:bg-white/10 transition-colors">
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase hover:text-blue-400 transition-colors group">
                    Case Study <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="w-full max-w-sm"
              >
                <button className="w-full group relative overflow-hidden px-8 py-4 rounded-xl glass font-bold text-xs tracking-widest uppercase glow-btn-rainbow">
                  <span className="relative z-10">Book a Consultation</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section Demo */}
        <section id="services" className="container mx-auto px-6 py-32">
          <div className="space-y-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <span className="text-xs font-bold tracking-[0.3em] text-blue-500 uppercase">Expertise</span>
              <h2 className="text-5xl font-display font-medium">Digital Solutions</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Code2, title: "Web Development", desc: "Crafting robust, scalable web applications with Next.js and modern technologies." },
                { icon: Layers, title: "UI/UX Design", desc: "Creating intuitive, aesthetic interfaces with focus on user experience." },
                { icon: Terminal, title: "API Integration", desc: "Seamlessly connecting services and data for dynamic app performance." },
                { icon: Sparkles, title: "AI Solutions", desc: "Implementing intelligent features powered by the latest AI models." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group"
                >
                  <service.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Decal */}
      <footer className="fixed bottom-8 right-8 z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-8 h-8 text-white/20" />
        </motion.div>
      </footer>

      {/* Grid Lines Overlay */}
      <div className="fixed inset-0 z-1 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}
