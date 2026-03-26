import { ReactNode } from "react";

type GradientVariant =
  | "cyan-magenta"
  | "cyan-lime"
  | "blue-cyan"
  | "cyan-emerald"
  | "magenta-cyan";

interface GradientTitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  gradient?: GradientVariant;
}

export function GradientTitle({
  children,
  as = "h2",
  className = "",
  gradient = "cyan-magenta",
}: GradientTitleProps) {
  const Component = as;

  const baseStyles: Record<string, string> = {
    h1:   "font-extrabold tracking-tight",
    h2:   "font-bold tracking-tight",
    h3:   "font-bold tracking-tight",
    span: "",
  };

  const gradientMap: Record<GradientVariant, string> = {
    "cyan-magenta": "from-[#00d4ff] via-[#7b44ff] to-[#c400ff]",
    "cyan-lime":    "from-[#00d4ff] to-[#00ff88]",
    "blue-cyan":    "from-blue-400 to-[#00d4ff]",
    "cyan-emerald": "from-[#00d4ff] to-emerald-400",
    "magenta-cyan": "from-[#c400ff] to-[#00d4ff]",
  };

  const glowMap: Record<GradientVariant, string> = {
    "cyan-magenta": "drop-shadow-[0_0_25px_rgba(0,212,255,0.35)]",
    "cyan-lime":    "drop-shadow-[0_0_25px_rgba(0,212,255,0.3)]",
    "blue-cyan":    "drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]",
    "cyan-emerald": "drop-shadow-[0_0_20px_rgba(0,212,255,0.28)]",
    "magenta-cyan": "drop-shadow-[0_0_25px_rgba(196,0,255,0.35)]",
  };

  return (
    <Component
      className={`${baseStyles[as]} ${glowMap[gradient]} ${className}`}
      style={{ fontFamily: "var(--font-orbitron, inherit)" }}
    >
      <span
        className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientMap[gradient]}`}
      >
        {children}
      </span>
    </Component>
  );
}
