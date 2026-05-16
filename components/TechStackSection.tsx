"use client";

import { motion } from "motion/react";

const STACK = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Paystack", category: "Payments" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Node.js", category: "Runtime" },
  { name: "Vercel", category: "Deployment" },
  { name: "Figma", category: "Design" },
  { name: "Git & GitHub", category: "Version Control" },
];

const STATS = [
  { value: "5+", label: "Live Projects" },
  { value: "2+", label: "Years Building" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "48h", label: "Avg Response Time" },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="container mx-auto px-6 py-20">
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
            Tools & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Tech Stack
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            The tools I use to build fast, scalable, and beautiful digital products.
          </p>
        </motion.div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass px-5 py-3 rounded-xl flex flex-col items-center gap-0.5 hover:bg-white/[0.08] hover:ring-1 hover:ring-white/15 transition-all duration-300 cursor-default group min-w-[100px]"
            >
              <span className="text-sm font-semibold text-white/85 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.07] transition-all duration-300"
            >
              <span className="text-3xl font-display font-bold text-white">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
