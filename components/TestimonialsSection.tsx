"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Amaka Okafor",
    role: "Owner, Local Bakery Lagos",
    quote:
      "Mubarak delivered beyond expectations. Our mobile app is clean, fast, and our customers love it. Orders went up 40% in the first month.",
    rating: 5,
    avatar: "AO",
  },
  {
    name: "Tunde Adeyemi",
    role: "Founder, Startup Lab NG",
    quote:
      "The landing page he built for us converts like crazy. Professional design, delivered on time, and he was available throughout. Highly recommend.",
    rating: 5,
    avatar: "TA",
  },
  {
    name: "Chisom Eze",
    role: "CEO, Rapid Logistics Abuja",
    quote:
      "Our dashboard is exactly what we needed — real-time tracking, clean UI, and no bugs. Mubarak understands what Nigerian businesses actually need.",
    rating: 5,
    avatar: "CE",
  },
  {
    name: "Bayo Lawal",
    role: "Director, Premier Realty",
    quote:
      "I've worked with a few developers before but Mubarak stands out. He communicates clearly, works fast, and the result is always top quality.",
    rating: 5,
    avatar: "BL",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-20">
      <div className="space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Testimonials
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="glass rounded-2xl p-7 hover:bg-white/[0.07] transition-all duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">{t.name}</p>
                  <p className="text-[10px] text-white/30">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
