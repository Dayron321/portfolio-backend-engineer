"use client";

import { motion } from "framer-motion";
import { Mail, Menu, X, Globe } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold tracking-tighter text-glow-cyan">
          <span className="text-[#00d4ff]">DAYRON</span>
          <span className="text-white/50">.VERA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-[#00d4ff] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="h-4 w-[1px] bg-white/10" />
          
          <div className="flex gap-4">
            <a href="https://github.com/Dayron321" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dayron-vera-7a7b14211/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 py-4 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-[#00d4ff]"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t border-white/5">
            <a href="https://github.com/Dayron321" target="_blank" rel="noopener noreferrer" className="text-white/50">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dayron-vera-7a7b14211/" target="_blank" rel="noopener noreferrer" className="text-white/50">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
