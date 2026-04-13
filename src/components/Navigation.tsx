"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, Briefcase, TestTube, Server, Mail } from "lucide-react";

const navItems = [
  { path: "/",             name: "Inicio",         icon: Home },
  { path: "/about",        name: "Sobre mí",       icon: User },
  { path: "/projects",     name: "Proyectos",      icon: Briefcase },
  { path: "/testing",      name: "Pruebas",        icon: TestTube },
  { path: "/system-design",name: "Arquitectura",   icon: Server },
  { path: "/contact",      name: "Contacto",       icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-50"
      style={{
        background: "rgba(5,5,8,0.80)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-1 group select-none">
            <span
              className="text-lg font-black tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-orbitron)",
                color: "#00d4ff",
                textShadow: "0 0 18px rgba(0,212,255,0.55)",
              }}
            >
              Dayron
            </span>
            <span
              className="text-lg font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-300"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              .dev
            </span>
          </Link>

          {/* ── Links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-3 py-2 rounded text-sm font-medium transition-all duration-200 group"
                  style={{
                    color: isActive ? "#00d4ff" : "#6b7a99",
                    fontFamily: "var(--font-space)",
                  }}
                >
                  <span className="flex items-center gap-1.5 group-hover:text-[#00d4ff] transition-colors">
                    <Icon size={13} />
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px]"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #00d4ff, transparent)",
                        boxShadow: "0 0 8px rgba(0,212,255,0.9)",
                      }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
