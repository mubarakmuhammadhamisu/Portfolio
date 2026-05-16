"use client";

import { ReactNode } from "react";

interface RainbowButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** primary = full glow (default). ghost = dimmer, for secondary actions. */
  variant?: "primary" | "ghost";
}

export default function RainbowButton({
  children,
  icon,
  href,
  onClick,
  className = "",
  variant = "primary",
}: RainbowButtonProps) {
  const inner = (
    <span
      className={`
        relative z-10 flex items-center justify-center gap-3
        w-full h-full px-7 py-0
        font-display font-bold text-[11px] tracking-[0.18em] uppercase
        text-white whitespace-nowrap transition-colors duration-200
        ${variant === "primary" ? "group-hover:bg-white/[0.04]" : "group-hover:bg-white/[0.03]"}
      `}
    >
      {children}
      {icon && (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 text-white/80 shrink-0 text-sm">
          {icon}
        </span>
      )}
    </span>
  );

  const base = `
    group relative inline-flex items-center
    h-[54px] rounded-full overflow-hidden
    rainbow-pill-btn
    ${variant === "ghost" ? "opacity-70 hover:opacity-100" : ""}
    transition-all duration-200 hover:-translate-y-[2px]
    w-full
    ${className}
  `;

  if (href) {
    return <a href={href} className={base}>{inner}</a>;
  }

  return <button onClick={onClick} className={base}>{inner}</button>;
}
