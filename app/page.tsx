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

      {/* Fixed background — intentionally outside the max-width wrapper so it fills the full screen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-blue-600/8 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[45%] bg-purple-600/8 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* ── Max-width content shell: caps everything at 1400px ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        <Navbar />

        <main>
          <HeroSection />
          <ServicesSection />

          {/* ── PLACEHOLDER: Portfolio / Projects ── */}
          <section id="portfolio" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3 text-center">
                Selected Work
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                Portfolio
              </h2>
              {/* TODO: Replace with real ProjectGrid component */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl h-64 flex items-center justify-center text-white/10 text-sm font-mono border border-dashed border-white/10"
                  >
                    [ Project Card {i} ]
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PLACEHOLDER: Testimonials ── */}
          <section id="testimonials" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3 text-center">
                Client Feedback
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                Testimonials
              </h2>
              {/* TODO: Replace with real TestimonialCarousel component */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl h-40 flex items-center justify-center text-white/10 text-sm font-mono border border-dashed border-white/10"
                  >
                    [ Testimonial {i} ]
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── PLACEHOLDER: Tech Stack / Skills ── */}
          <section id="skills" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3 text-center">
                Tools & Technologies
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
                Tech Stack
              </h2>
              {/* TODO: Replace with real TechStack component */}
              <div className="glass rounded-2xl h-48 flex items-center justify-center text-white/10 text-sm font-mono border border-dashed border-white/10">
                [ Tech Stack Grid ]
              </div>
            </div>
          </section>

          {/* ── PLACEHOLDER: Contact / Book a Call ── */}
          <section id="contact" className="py-24 px-6 border-t border-white/5">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-12">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
              {/* TODO: Replace with real ContactForm component */}
              <div className="glass rounded-2xl h-72 flex items-center justify-center text-white/10 text-sm font-mono border border-dashed border-white/10">
                [ Contact Form ]
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 px-6 flex items-center justify-between text-white/20 text-xs font-mono">
          <span>© 2025 Mubarak</span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-white/15" />
          </motion.div>
          <span>Built with Next.js</span>
        </footer>

      </div>
    </div>
  );
}
