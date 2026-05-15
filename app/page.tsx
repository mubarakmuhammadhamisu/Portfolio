/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden selection:bg-white/20">

      {/* Background ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle tech grid */}
        <div className="absolute inset-0 grid-bg opacity-100" />
        {/* Ambient blobs */}
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-blue-600/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[45%] bg-purple-600/8 blur-[140px] rounded-full" />
        {/* Circuit-line texture overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
      </main>

      {/* Spinning sparkle footer decal */}
      <footer className="fixed bottom-7 right-7 z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-7 h-7 text-white/15" />
        </motion.div>
      </footer>
    </div>
  );
}
