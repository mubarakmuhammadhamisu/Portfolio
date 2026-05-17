"use client";

import { motion } from "motion/react";
import { Sparkles, Cpu, ArrowUpRight, Phone } from "lucide-react";
import RainbowButton from "./RainbowButton";
import ProjectCard from "./ProjectCard";

export default function HeroSection() {
  return (
    <section className="relative container mx-auto px-2 min-h-[680px] flex items-center justify-center pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 xl:gap-16 items-center w-full max-w-7xl">

        {/* ── LEFT: Text Info ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-7 order-2 lg:order-1"
        >
          <div className="space-y-2">
            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-display font-bold tracking-tighter leading-none">
              MUBARAK
            </h1>
            <div className="space-y-0.5">
              <p className="text-lg xl:text-xl font-medium text-white/90 leading-snug">
                Modern Web Developer &amp;
              </p>
              <p className="text-lg xl:text-xl font-medium text-white/90 leading-snug">
                Digital Solutions Expert
              </p>
            </div>
          </div>

          <p className="text-white/50 max-w-[340px] leading-relaxed text-sm italic">
            "Crafting exceptional digital experiences for local businesses.
            Next.js, Glassmorphism, and dynamic performance."
          </p>

          <div className="space-y-0.5">
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
              About Me:
            </p>
            <p className="text-sm font-medium text-white/80">
              Tech Innovator, Problem Solver.
            </p>
          </div>

          <div className="pt-2 w-full max-w-[280px]">
            <RainbowButton href="#services" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
              View My Services
            </RainbowButton>
          </div>
        </motion.div>

        {/* ── CENTER: Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          {/* Glow ring behind */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent blur-2xl scale-110 pointer-events-none" />

          {/* Circle frame */}
          <div
            className="relative rounded-full overflow-hidden shadow-2xl"
            style={{
              width: "clamp(240px, 30vw, 360px)",
              height: "clamp(240px, 30vw, 360px)",
              border: "2px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(80,100,255,0.15), inset 0 0 40px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src="/profile.png"
              alt="Mubarak"
              className="w-full h-full object-cover object-top scale-105"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decal: top-right */}
          <div className="absolute top-0 right-0 w-14 h-14 glass rounded-2xl flex items-center justify-center">
            <Sparkles className="text-white/30 w-6 h-6 animate-pulse" />
          </div>

          {/* Decal: bottom-left */}
          <div className="absolute bottom-2 left-0 w-12 h-12 glass rounded-full flex items-center justify-center">
            <Cpu className="text-white/30 w-5 h-5" />
          </div>
        </motion.div>

        {/* ── RIGHT: Project Card + CTA ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-5 lg:items-end order-3"
        >
          <div className="w-full max-w-xs">
            <ProjectCard />
          </div>

          <div className="w-full max-w-[280px]">
            <RainbowButton href="#contact" icon={<Phone className="w-3 h-3" />}>
              Book a Consultation
            </RainbowButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
