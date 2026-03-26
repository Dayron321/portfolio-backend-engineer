import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  hideAmbientGlow?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  hideAmbientGlow = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen py-24 overflow-x-hidden cyber-grid ${className}`}
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Ambient neon glows */}
      {!hideAmbientGlow && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-1/4 right-[-5%] w-[700px] h-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,212,255,0.055) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-[-5%] w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(196,0,255,0.05) 0%, transparent 65%)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {children}
      </div>
    </section>
  );
}
