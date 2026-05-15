"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Local Bakery",
    label: "Mobile App",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Lab",
    label: "Landing Page",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TITECX",
    label: "E-Learning Platform",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectCard() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  return (
    <div className="w-full glass rounded-2xl p-5 relative hover:ring-1 hover:ring-white/20 transition-all overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase">
          Projects: {PROJECTS.length}+ Live
        </span>
        <div className="flex gap-1">
          {PROJECTS.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === index ? "bg-white/60" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] bg-black/40 rounded-xl overflow-hidden border border-white/5 group">
        <img
          src={project.image}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-base font-bold leading-tight">{project.title}</h3>
          <p className="text-[10px] text-white/40 mt-0.5">{project.label}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % PROJECTS.length)}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
        <button className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors group">
          Case Study{" "}
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
