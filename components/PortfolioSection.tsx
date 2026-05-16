"use client";

import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Local Bakery",
    category: "Mobile App",
    desc: "A mobile-first ordering experience for a Lagos bakery — smooth UI, real-time order tracking.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Supabase"],
    live: "#",
  },
  {
    title: "Startup Lab",
    category: "Landing Page",
    desc: "High-converting landing page for a Nigerian tech incubator with waitlist integration.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Framer Motion"],
    live: "#",
  },
  {
    title: "TITECX",
    category: "E-Learning Platform",
    desc: "Full-stack e-learning platform with Paystack payments, video lessons, and certificates.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Supabase", "Paystack"],
    live: "#",
  },
  {
    title: "Restaurant POS",
    category: "Web App",
    desc: "Point-of-sale dashboard for a restaurant chain — inventory, orders, and sales analytics.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL"],
    live: "#",
  },
  {
    title: "Real Estate Listing",
    category: "Landing Page",
    desc: "Property listing site with map integration and WhatsApp inquiry flow for Abuja market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind", "Maps API"],
    live: "#",
  },
  {
    title: "Logistics Dashboard",
    category: "Web App",
    desc: "Fleet tracking and delivery management dashboard with live driver status updates.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Supabase", "Realtime"],
    live: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-20">
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
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Portfolio
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500" />
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            Real projects built for real businesses — from Lagos to Abuja.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="glass rounded-2xl overflow-hidden group hover:ring-1 hover:ring-white/15 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[9px] font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full text-white/70">
                  {project.category}
                </span>

                {/* Live link */}
                <a
                  href={project.live}
                  className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-base font-bold">{project.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold tracking-wider uppercase text-blue-400/70 border border-blue-400/20 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors group"
          >
            Have a project in mind?
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
