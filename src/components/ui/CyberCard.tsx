"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { AnimatedItem } from "./AnimatedContainer";

type GlowColor = "cyan" | "magenta" | "lime" | "default";

interface CyberCardProps {
  children: ReactNode;
  glowColor?: GlowColor;
  className?: string;
  disableAnimation?: boolean;
}

const glowBorderMap: Record<GlowColor, string> = {
  cyan:    "hover:border-[rgba(0,212,255,0.45)] hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]",
  magenta: "hover:border-[rgba(196,0,255,0.45)] hover:shadow-[0_0_30px_rgba(196,0,255,0.12)]",
  lime:    "hover:border-[rgba(0,255,136,0.45)] hover:shadow-[0_0_30px_rgba(0,255,136,0.12)]",
  default: "hover:border-[rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
};

const topLineMap: Record<GlowColor, React.CSSProperties> = {
  cyan:    { background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" },
  magenta: { background: "linear-gradient(90deg, transparent, #c400ff, transparent)" },
  lime:    { background: "linear-gradient(90deg, transparent, #00ff88, transparent)" },
  default: { background: "linear-gradient(90deg, transparent, #4a5568, transparent)" },
};

export function CyberCard({
  children,
  glowColor = "default",
  className = "",
  disableAnimation = false,
}: CyberCardProps) {
  const content = (
    <div
      className={`relative rounded-sm overflow-hidden transition-all duration-500 group ${glowBorderMap[glowColor]} ${className}`}
      style={{
        background: "rgba(8,8,22,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Neon top line on hover */}
      <div
        className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={topLineMap[glowColor]}
      />
      {children}
    </div>
  );

  if (disableAnimation) return content;

  return <AnimatedItem>{content}</AnimatedItem>;
}
