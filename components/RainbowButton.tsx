"use client";

import { ReactNode } from "react";

interface RainbowButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost";
  /** Accessible label — falls back to visible text */
  ariaLabel?: string;
  /** Type for <button> element */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
}

export default function RainbowButton({
  children,
  icon,
  href,
  onClick,
  className = "",
  variant = "primary",
  ariaLabel,
  type = "button",
  disabled = false,
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
        <span
          className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/20 text-white/80 shrink-0 text-sm"
          aria-hidden="true"
        >
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
    ${disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "transition-all duration-200 hover:-translate-y-[2px] active:translate-y-0"}
    w-full
    ${className}
  `;

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={base}
        aria-label={ariaLabel}
        role="button"
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={base}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {inner}
    </button>
  );
}
