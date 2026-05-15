"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ["ABOUT", "SERVICES", "PORTFOLIO", "CONTACT"];

export default function Navbar() {
  const [active, setActive] = useState("ABOUT");

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <div className="glass px-2 py-1.5 rounded-full flex items-center gap-0.5">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-5 py-2 text-[10px] font-bold tracking-[0.18em] rounded-full transition-all duration-300 ${
              active === item
                ? "bg-white/10 text-white"
                : "text-white/40 hover:text-white/80"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="glass p-3 rounded-full hover:bg-white/10 transition-colors group">
        <Bell className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
      </button>
    </nav>
  );
}
