"use client";

import { ReactNode } from "react";

interface RainbowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function RainbowButton({ children, href, onClick, className = "" }: RainbowButtonProps) {
  const inner = (
    <span className="relative z-10 flex items-center justify-center w-full h-full px-8 py-4 bg-[#0d0d0d] rounded-[10px] text-white font-bold text-[11px] tracking-[0.2em] uppercase transition-colors group-hover:bg-[#161616]">
      {children}
    </span>
  );

  const base = `group relative p-[2px] rounded-xl overflow-hidden rainbow-border-btn ${className}`;

  if (href) {
    return (
      <a href={href} className={base}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
