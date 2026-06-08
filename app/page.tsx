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
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans overflow-x-hidden selection:bg-white/20">

      {/* Fixed background */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-blue-600/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[45%] bg-purple-600/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Max-width shell */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <HeroSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <ServicesSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <PortfolioSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <TechStackSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <PricingSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <TestimonialsSection />

          <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />
          <ContactSection />
        </main>

        <footer
          className="border-t border-white/5 py-8 px-6 flex items-center justify-between text-white/20 text-xs font-mono"
          role="contentinfo"
          aria-label="Site footer"
        >
          <span>© {new Date().getFullYear()} Mubarak</span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <Sparkles className="w-5 h-5 text-white/15" />
          </motion.div>
          <span>Built with Next.js</span>
        </footer>

      </div>
    </div>
  );
}
