"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#020205] border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand/Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="text-2xl font-black text-glow-cyan uppercase tracking-tighter">
              <span className="text-[#00d4ff]">Dayron</span>
              <span className="text-white/40">.Vera</span>
            </h2>
            <p className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">
              Backend Engineer & QA Automation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <SocialLink icon={<GithubIcon size={20} />} href="https://github.com/Dayron321" />
              <SocialLink icon={<LinkedinIcon size={20} />} href="https://www.linkedin.com/in/dayron-vera-7a7b14211/" />
              <SocialLink icon={<Mail size={20} />} href="mailto:dayron.vera@example.com" />
            </div>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              © 2026 Portafolio en vivo — Dayron Farid Vera Castro
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-white/30 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/40 hover:text-[#00d4ff] hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
