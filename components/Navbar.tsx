"use client";

import { Bell } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { label: "ABOUT",     href: "#about" },
  { label: "SERVICES",  href: "#services" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT",   href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("ABOUT");
  const [isOpen, setIsOpen] = useState(false);

  // Sync active item with scroll position
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.label.toLowerCase());
    const handleScroll = () => {
      for (const id of sections.reverse()) {
        const el = document.getElementById(id === "about" ? "main-content" : id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id.toUpperCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = useCallback((label: string, href: string) => {
    setActive(label);
    setIsOpen(false);
    // Smooth scroll
    const target = href === "#about" ? "main-content" : href.slice(1);
    const el = document.getElementById(target);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleNav(label, href);
      }
    },
    [handleNav]
  );

  return (
    <header role="banner">
      <nav
        aria-label="Main navigation"
        className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      >
        {/* Nav pill */}
        <div
          className="glass px-1 sm:px-2 py-1 sm:py-1.5 rounded-full flex items-center gap-0"
          role="menubar"
          aria-label="Site sections"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              onClick={() => handleNav(item.label, item.href)}
              onKeyDown={(e) => handleKeyDown(e, item.label, item.href)}
              aria-current={active === item.label ? "page" : undefined}
              aria-label={`Navigate to ${item.label.toLowerCase()} section`}
              className={`
                px-3 sm:px-5 py-1.5 sm:py-2
                text-[8px] sm:text-[10px]
                font-bold tracking-[0.12em] sm:tracking-[0.18em]
                rounded-full transition-all duration-300
                focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-1
                ${active === item.label
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/80"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Notification bell */}
        <button
          className="hidden sm:flex glass p-2.5 sm:p-3 rounded-full hover:bg-white/10 transition-colors group focus-visible:outline-2 focus-visible:outline-indigo-400 focus-visible:outline-offset-1"
          aria-label="Notifications (none)"
          title="Notifications"
        >
          <Bell
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50 group-hover:text-white transition-colors"
            aria-hidden="true"
          />
        </button>
      </nav>
    </header>
  );
}
