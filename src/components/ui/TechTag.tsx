import { ReactNode } from "react";

interface TechTagProps {
  children: ReactNode;
  className?: string;
}

export function TechTag({ children, className = "" }: TechTagProps) {
  return (
    <span className={`px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-mono text-slate-300 shadow-inner ${className}`}>
      {children}
    </span>
  );
}
