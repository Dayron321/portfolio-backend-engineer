import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: "rgba(0,212,255,0.07)",
    border: "1px solid rgba(0,212,255,0.45)",
    color: "#00d4ff",
    boxShadow:
      "0 0 18px rgba(0,212,255,0.18), inset 0 0 18px rgba(0,212,255,0.04)",
  },
  secondary: {
    background: "rgba(196,0,255,0.06)",
    border: "1px solid rgba(196,0,255,0.4)",
    color: "#c400ff",
    boxShadow:
      "0 0 18px rgba(196,0,255,0.14), inset 0 0 18px rgba(196,0,255,0.03)",
  },
  ghost: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#6b7a99",
    boxShadow: "none",
  },
};

const baseClass =
  "group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 cursor-pointer";

export function NeonButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: NeonButtonProps) {
  const style = variantStyles[variant];
  const fontStyle: React.CSSProperties = {
    ...style,
    fontFamily: "var(--font-mono, monospace)",
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={`${baseClass} ${className}`}
          style={fontStyle}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseClass} ${className}`} style={fontStyle} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${baseClass} ${className}`} style={fontStyle} onClick={onClick}>
      {children}
    </button>
  );
}
