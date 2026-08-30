"use client";

import { motion } from "motion/react";
import { Code2, Bot, ShieldCheck, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "High-performance, mobile-responsive sites and full-stack apps — React, Next.js, and Tailwind, with secure auth and payment integration when you need it.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "AI agents that handle customer support around the clock, plus WhatsApp and Telegram bots that capture leads and answer clients while you sleep.",
  },
  {
    icon: ShieldCheck,
    title: "Hosting & Maintenance",
    desc: "Domain setup, server hosting, and ongoing upkeep — so your site stays fast and online without you having to think about it.",
  },
  {
    icon: Wrench,
    title: "Site Audits & Fixes",
    desc: "Already have a site that's slow, buggy, or insecure? I'll diagnose it and fix what's actually holding it back.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="container mx-auto px-6 py-20"
    >
      <div className="space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <span
            className="text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase"
            aria-hidden="true"
          >
            Expertise
          </span>
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl font-display font-semibold"
          >
            What I Can Build For You
          </h2>
          <div
            className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500"
            aria-hidden="true"
          />
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass p-7 rounded-2xl hover:bg-white/[0.08] transition-all duration-300 group cursor-default"
            >
              <service.icon
                className="w-8 h-8 text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              />
              <h3 className="text-base font-bold mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
