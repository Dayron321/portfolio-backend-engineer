"use client";

import { motion, Variants } from "framer-motion";
import { Server, ShieldCheck, Cloud, Database, Cpu, Target, Zap, GitPullRequest } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const skills = [
  {
    icon: Server,
    label: "Backend Development",
    color: "cyan",
    desc: "REST APIs, complex business logic, and microservices with Node.js, Python, and Java.",
  },
  {
    icon: ShieldCheck,
    label: "Testing & QA Automation",
    color: "magenta",
    desc: "E2E test suites with Playwright, functional testing against user stories, and Postman API validation.",
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    color: "lime",
    desc: "Containerized deployments to GCP (Cloud Run, Cloud Build) and IaC with Terraform.",
  },
  {
    icon: Database,
    label: "Database Architecture",
    color: "cyan",
    desc: "SQL/PL-SQL deep integrity queries, relational schema design, and PostgreSQL management.",
  },
];

const colorMap: Record<string, React.CSSProperties> = {
  cyan:    { color: "#00d4ff", background: "rgba(0,212,255,0.07)",   border: "1px solid rgba(0,212,255,0.2)"   },
  magenta: { color: "#c400ff", background: "rgba(196,0,255,0.07)",   border: "1px solid rgba(196,0,255,0.2)"   },
  lime:    { color: "#00ff88", background: "rgba(0,255,136,0.07)",   border: "1px solid rgba(0,255,136,0.2)"   },
};

const approach = [
  { label: "Requirements First",    desc: "I deeply analyze user stories and edge cases before writing a single line of code." },
  { label: "Test-Driven Mindset",   desc: "High coverage and strict validation are non-negotiable in every codebase I touch." },
  { label: "Relentless Automation", desc: "Identifying bottlenecks and eliminating manual steps through scripting is core to how I work." },
  { label: "Design for Scale",      desc: "Clean code, clear abstractions, and scalability awareness are baked into every decision." },
];

const focus = [
  "Advanced Playwright automation patterns",
  "Serverless GCP deployments at scale",
  "Event-driven microservices architecture",
  "CI/CD pipeline automation & IaC",
];

export default function About() {
  return (
    <main
      className="relative min-h-screen pt-24 pb-20 overflow-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,0,255,0.05) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-14">

          {/* ── Header ── */}
          <motion.div variants={item} className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-[#00d4ff]/60 mb-3"
              style={{ fontFamily: "var(--font-mono)" }}>
              // profile
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-orbitron)" }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#7b44ff] to-[#c400ff]"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,212,255,0.3))" }}>
                Dayron Vera
              </span>
            </h1>
            <p className="text-lg text-[#8892b0]" style={{ fontFamily: "var(--font-space)" }}>
              Software Engineer — Backend & QA Automation
            </p>
          </motion.div>

          {/* ── Professional Summary ── */}
          <motion.div variants={item} className="bracket-corner">
            <div className="rounded-sm p-8"
              style={{ background: "rgba(8,8,22,0.78)", backdropFilter: "blur(20px)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <h2 className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] font-semibold mb-5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)" }}>
                <Target size={15} /> Professional Summary
              </h2>
              <p className="text-[#aab2cc] text-lg leading-relaxed font-light">
                Backend engineer with a QA-first mindset. I specialize in validating software logic against
                strict acceptance criteria — before and after ship. With solid experience building REST APIs,
                writing complex SQL validations, and operating in CI/CD environments, I close the gap between
                development and quality. My toolbox includes Playwright for E2E automation and GCP for
                resilient, scalable deployments.
              </p>
            </div>
          </motion.div>

          {/* ── Core Skills ── */}
          <motion.div variants={item}>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-mono)" }}>
              <Cpu size={15} /> Core Engineering Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skills.map(({ icon: Icon, label, color, desc }) => (
                <div key={label}
                  className="rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: "rgba(8,8,20,0.85)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="h-11 w-11 rounded-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={colorMap[color]}>
                    <Icon size={22} style={{ color: colorMap[color].color as string }} />
                  </div>
                  <h3 className="text-base text-[#eef2ff] font-bold mb-2" style={{ fontFamily: "var(--font-space)" }}>
                    {label}
                  </h3>
                  <p className="text-sm text-[#6b7a99] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Engineering Approach ── */}
          <motion.div variants={item}
            className="rounded-sm p-8"
            style={{ background: "rgba(8,8,22,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] font-semibold mb-7 flex items-center gap-2"
              style={{ fontFamily: "var(--font-mono)" }}>
              <GitPullRequest size={15} /> Engineering Approach
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {approach.map(({ label, desc }) => (
                <div key={label} className="flex gap-4">
                  <span className="text-[#c400ff] mt-1 text-lg leading-none select-none">▸</span>
                  <p className="text-[#aab2cc] text-sm leading-relaxed">
                    <strong className="text-[#eef2ff] font-semibold">{label}:</strong> {desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Current Focus ── */}
          <motion.div variants={item}>
            <div className="rounded-sm p-8 relative overflow-hidden"
              style={{ background: "rgba(5,5,14,0.9)", border: "1px solid rgba(0,212,255,0.12)" }}>
              <div className="absolute inset-y-0 left-0 w-[2px]"
                style={{ background: "linear-gradient(180deg, #00d4ff, #c400ff)" }} />
              <h2 className="text-xs uppercase tracking-[0.25em] text-[#00d4ff] font-semibold mb-6 flex items-center gap-2"
                style={{ fontFamily: "var(--font-mono)" }}>
                <Zap size={15} /> Current Growth Focus
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {focus.map((f, i) => (
                  <li key={f}
                    className="flex items-center gap-3 text-sm text-[#aab2cc] rounded-sm px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-[#00d4ff] font-bold"
                      style={{ fontFamily: "var(--font-mono)" }}>
                      0{i + 1}.
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
