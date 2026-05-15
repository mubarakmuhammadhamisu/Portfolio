"use client";

import { motion } from "motion/react";
import { Code2, Layers, Terminal, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Crafting robust, scalable web applications with Next.js and modern technologies.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    desc: "Creating intuitive, aesthetic interfaces with a strong focus on user experience.",
  },
  {
    icon: Terminal,
    title: "API Integration",
    desc: "Seamlessly connecting services and data for dynamic, high-performance apps.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "Implementing intelligent features powered by the latest AI models and APIs.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-6 py-32">
      <div className="space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Digital Solutions
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass p-7 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 group cursor-default"
            >
              <service.icon className="w-8 h-8 text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-base font-bold mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
