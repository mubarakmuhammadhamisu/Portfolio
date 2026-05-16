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
    <span className="relative z-10 flex items-center justify-center w-full h-full px-8 py-3.5 bg-[#0d0d0d] rounded-[10px] text-white font-bold text-[10px] tracking-[0.22em] uppercase transition-colors group-hover:bg-[#161616]">
      {children}
    </span>
  );

  // p-[2px] = 2px rainbow border; rounded-[12px] outer + rounded-[10px] inner = pixel-perfect edge
  const base = `group relative p-[2px] rounded-[12px] overflow-hidden rainbow-border-btn ${className}`;

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
