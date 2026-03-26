"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Database, Cpu, GitBranch, Container, Zap, Shield } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Reusable Architecture Node
───────────────────────────────────────────────────────── */
function ArchNode({
  icon: Icon,
  label,
  sublabel,
  color,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  sublabel?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
      className="flex flex-col items-center gap-2.5 text-center"
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm flex items-center justify-center"
        style={{
          background: `${color}12`,
          border: `1px solid ${color}40`,
          boxShadow: `0 0 18px ${color}18`,
        }}
      >
        <Icon size={32} style={{ color }} />
      </div>
      <p className="text-sm font-bold text-[#ffffff] tracking-wide" style={{ fontFamily: "var(--font-space)", textShadow: `0 0 8px ${color}40` }}>
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-[#aab2cc]" style={{ fontFamily: "var(--font-mono)" }}>
          {sublabel}
        </p>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Arrow connector
───────────────────────────────────────────────────────── */
function Arrow({ color = "#00d4ff", label, vertical = false }: { color?: string; label?: string; vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0.5 py-1">
        {label && (
          <span className="text-[11px] text-[#aab2cc] tracking-[0.15em] font-medium py-1" style={{ fontFamily: "var(--font-mono)" }}>
            {label}
          </span>
        )}
        <div className="w-px h-8 sm:h-12" style={{ background: `linear-gradient(180deg, transparent, ${color}, transparent)` }} />
        <div className="w-0 h-0" style={{ borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: `6px solid ${color}` }} />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-0.5 px-1 sm:px-3">
      <div className="h-px w-6 sm:w-16" style={{ background: `linear-gradient(90deg, transparent, ${color}, ${color})` }} />
      {label && (
        <span className="text-[11px] text-[#aab2cc] tracking-[0.15em] font-medium mx-1.5" style={{ fontFamily: "var(--font-mono)" }}>
          {label}
        </span>
      )}
      <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: `6px solid ${color}` }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Layer wrapper
───────────────────────────────────────────────────────── */
function Layer({ label, color, children }: { label: string; color: string; children: React.ReactNode }) {
  return (
    <div className="relative flex items-center gap-4">
      {/* Layer label on left */}
      <div
        className="hidden lg:flex flex-col items-center w-28 flex-shrink-0"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span
          className="text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm whitespace-nowrap"
          style={{ color, background: `${color}10`, border: `1px solid ${color}35` }}
        >
          {label}
        </span>
      </div>

      {/* Content */}
      <div
        className="flex-1 rounded-sm p-6"
        style={{
          background: "rgba(8,8,22,0.7)",
          border: `1px solid ${color}18`,
          backdropFilter: "blur(12px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Design principle card
───────────────────────────────────────────────────────── */
function PrincipleCard({
  icon: Icon,
  title,
  desc,
  color,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-sm p-5"
      style={{
        background: "rgba(8,8,22,0.75)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}10`, border: `1px solid ${color}30` }}
        >
          <Icon size={15} style={{ color }} />
        </div>
        <h3
          className="text-sm font-bold text-[#eef2ff]"
          style={{ fontFamily: "var(--font-space)" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-xs text-[#6b7a99] leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────── */
export default function SystemDesign() {
  return (
    <main
      className="relative min-h-screen pt-24 pb-24 overflow-x-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,0,255,0.04) 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left mb-14"
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)", color: "rgba(0,212,255,0.6)" }}
          >
            // system-design
          </p>
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#c400ff]">
              Architecture Blueprint
            </span>
          </h1>
          <p className="text-[#6b7a99] text-lg max-w-2xl">
            Full-stack reference architecture for production-grade systems — built around GCP, containerization, and automated CI/CD.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            ARCHITECTURE DIAGRAM (pure JSX, no libs)
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-sm p-6 md:p-10 mb-6"
          style={{
            background: "rgba(5,5,14,0.92)",
            border: "1px solid rgba(0,212,255,0.12)",
            backdropFilter: "blur(20px)",
          }}
        >
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#4a5568] mb-8 flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse"
              style={{ boxShadow: "0 0 6px #00d4ff" }} />
            Live Architecture — Production Reference
          </p>

          <div className="space-y-6">

            {/* ── CI/CD Layer ── */}
            <Layer label="CI/CD" color="#c400ff">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <ArchNode icon={GitBranch} label="GitHub" sublabel="Source Control" color="#c400ff" delay={0.1} />
                <Arrow color="#c400ff" label="push" />
                <ArchNode icon={Cpu} label="GitHub Actions" sublabel="Test + Lint" color="#c400ff" delay={0.2} />
                <Arrow color="#c400ff" label="on pass" />
                <ArchNode icon={Cloud} label="Cloud Build" sublabel="GCP CI" color="#c400ff" delay={0.3} />
                <Arrow color="#c400ff" label="→ build" />
                <ArchNode icon={Container} label="Artifact Registry" sublabel="Docker Image" color="#c400ff" delay={0.4} />
              </div>
            </Layer>

            <div className="lg:ml-40 py-2">
              <Arrow vertical color="#c400ff" label="deploy" />
            </div>

            {/* ── Frontend Layer ── */}
            <Layer label="Frontend" color="#00d4ff">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <ArchNode icon={Server} label="Next.js" sublabel="App Router / SSR" color="#00d4ff" delay={0.5} />
                <Arrow color="#00d4ff" label="CDN" />
                <ArchNode icon={Cloud} label="Vercel Edge" sublabel="Edge Network" color="#00d4ff" delay={0.6} />
                <Arrow color="#00d4ff" label="HTTPS" />
                <ArchNode icon={Cpu} label="Browser" sublabel="End User" color="#00d4ff" delay={0.7} />
              </div>
            </Layer>

            <div className="lg:ml-40 py-2">
              <Arrow vertical color="#00d4ff" label="API calls" />
            </div>

            {/* ── Backend Layer ── */}
            <Layer label="Backend" color="#00ff88">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <ArchNode icon={Shield} label="Load Balancer" sublabel="GCP / HTTPS LB" color="#00ff88" delay={0.8} />
                <Arrow color="#00ff88" />
                <ArchNode icon={Container} label="Cloud Run" sublabel="Containerized API" color="#00ff88" delay={0.9} />
                <Arrow color="#00ff88" label="cache" />
                <ArchNode icon={Zap} label="Redis" sublabel="In-Memory Cache" color="#f97316" delay={1.0} />
              </div>
            </Layer>

            <div className="lg:ml-40 py-2">
              <Arrow vertical color="#00ff88" label="read/write" />
            </div>

            {/* ── Data Layer ── */}
            <Layer label="Data" color="#7b44ff">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <ArchNode icon={Database} label="Cloud SQL" sublabel="PostgreSQL" color="#7b44ff" delay={1.1} />
                <Arrow color="#7b44ff" label="replica" />
                <ArchNode icon={Database} label="Read Replica" sublabel="High Availability" color="#7b44ff" delay={1.2} />
                <Arrow color="#7b44ff" label="backup" />
                <ArchNode icon={Shield} label="Auto Backup" sublabel="Point-in-time" color="#7b44ff" delay={1.3} />
              </div>
            </Layer>

          </div>

          {/* Tech badges */}
          <div className="mt-8 pt-6 flex flex-wrap gap-2 justify-center"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              ["Docker",     "#00d4ff"],
              ["Terraform",  "#c400ff"],
              ["Cloud Run",  "#00ff88"],
              ["Cloud Build","#c400ff"],
              ["PostgreSQL", "#7b44ff"],
              ["Redis",      "#f97316"],
              ["Next.js",    "#00d4ff"],
              ["E2E Testing", "#00ff88"],
              ["GitHub Actions", "#c400ff"],
            ].map(([tech, color]) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-sm text-xs"
                style={{
                  background: `${color}08`,
                  border: `1px solid ${color}25`,
                  color,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Design Principles ── */}
        <div className="mb-4">
          <p
            className="text-xs uppercase tracking-[0.25em] text-[#4a5568] mb-5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // design-principles
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <PrincipleCard
            icon={Zap}
            title="Zero-Downtime Deploys"
            desc="Cloud Run handles new revisions with traffic splitting. Old revision stays live until health checks pass."
            color="#00d4ff"
            delay={1.4}
          />
          <PrincipleCard
            icon={Shield}
            title="Least-Privilege IAM"
            desc="Service accounts scoped to minimum required permissions. No shared credentials across environments."
            color="#c400ff"
            delay={1.5}
          />
          <PrincipleCard
            icon={Container}
            title="Immutable Infrastructure"
            desc="Terraform provisions infra declaratively. Every change is versioned, reproducible, and auditable."
            color="#00ff88"
            delay={1.6}
          />
          <PrincipleCard
            icon={GitBranch}
            title="Test-Gated Pipeline"
            desc="E2E test automation frameworks and unit tests block every merge to main. No deployment without a green pipeline."
            color="#7b44ff"
            delay={1.7}
          />
        </div>

      </div>
    </main>
  );
}
