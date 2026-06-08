"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const PROJECTS = [
  {
    title: "Local Bakery",
    label: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Startup Lab",
    label: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TITECX",
    label: "E-Learning Platform",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectCard() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  const handlePrevious = useCallback(() => {
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((i) => (i + 1) % PROJECTS.length);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); handlePrevious(); }
      if (e.key === "ArrowRight") { e.preventDefault(); handleNext(); }
    },
    [handlePrevious, handleNext]
  );

  // Auto-cycle (pauses on reduced-motion pref)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(handleNext, 4000);
    return () => clearInterval(id);
  }, [handleNext]);

  return (
    <div
      className="w-full glass rounded-2xl p-5 relative hover:ring-1 hover:ring-white/20 transition-all overflow-hidden"
      role="region"
      aria-label="Featured project carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase"
          aria-live="polite"
          aria-atomic="true"
        >
          Project {index + 1} of {PROJECTS.length}
        </span>
        <div
          className="flex gap-1"
          role="tablist"
          aria-label="Project indicators"
        >
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to project: ${p.title}`}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors focus-visible:outline-1 focus-visible:outline-indigo-400 ${
                i === index ? "bg-white/60" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div
        className="relative aspect-[16/10] bg-black/40 rounded-xl overflow-hidden border border-white/5 group"
        aria-label={`${project.title} — ${project.label}`}
      >
        <Image
          src={project.image}
          className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          alt={`Screenshot of ${project.title} — ${project.label}`}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-base font-bold leading-tight text-white">{project.title}</h3>
          <p className="text-[10px] text-white/60 mt-0.5">{project.label}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2" role="group" aria-label="Carousel controls">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="View previous project"
          >
            <ChevronLeft className="w-3 h-3" aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="View next project"
          >
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>
        <a
          href="#portfolio"
          className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-colors group px-3 py-1.5 rounded"
          aria-label={`View ${project.title} case study in portfolio`}
        >
          Case Study{" "}
          <ExternalLink
            className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
