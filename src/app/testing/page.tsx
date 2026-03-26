"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, FlaskConical, TestTube2, Workflow, Terminal } from "lucide-react";

export default function Testing() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const strategy = [
    {
      label: "Unit & Component Testing",
      tool: "Vitest / React Testing Library",
      desc: "Ensuring 90%+ coverage on business logic and isolated UI components using fast, deterministic test suites.",
    },
    {
      label: "Integration & API Testing",
      tool: "Supertest / Jest",
      desc: "Validating contract integrity between microservices, database schemas, and external API integrations.",
    },
    {
      label: "E2E & Visual Regression",
      tool: "Playwright / Percy",
      desc: "Simulating critical user journeys in headless/headed browsers with automated visual diffing for UI consistency.",
    },
  ];

  return (
    <main
      className="relative min-h-screen pt-24 pb-20 overflow-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm text-[10px] tracking-[0.3em] uppercase"
            style={{ background: "rgba(0,255,136,0.06)", border: "1px solid rgba(0,255,136,0.2)", color: "#00ff88", fontFamily: "var(--font-mono)" }}>
            <span className="w-1 h-1 rounded-full bg-[#00ff88] animate-ping" />
            // quality_assurance_protocol
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-orbitron)" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              Testing Philosophy
            </span>
          </h1>
          <p className="text-[#6b7a99] text-lg md:text-xl max-w-3xl leading-relaxed font-light">
            Quality is not a phase; it&apos;s a constant state of the system. I architect automated 
            validation layers that ensure reliability from unit functions to complex user journeys.
          </p>
        </div>

        <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Strategy card */}
          <motion.div variants={item} className="group relative rounded-sm p-8 transition-all duration-300 hover:border-[#00ff88]/30"
            style={{ background: "rgba(8,8,22,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(0,255,136,0.15)" }}>
            <div className="h-12 w-12 rounded-sm flex items-center justify-center mb-8"
              style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
              <FlaskConical size={24} className="text-[#00ff88]" />
            </div>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-space)" }}>
              Multi-Layer Strategy
            </h2>
            <ul className="space-y-6">
              {strategy.map(({ label, tool, desc }) => (
                <li key={label} className="flex gap-4">
                  <CheckCircle2 size={20} className="text-[#00ff88] shrink-0 mt-0.5"
                    style={{ filter: "drop-shadow(0 0 5px rgba(0,255,136,0.4))" }} />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#eef2ff] font-bold text-sm tracking-wide">{label}</span>
                      <span className="text-[10px] text-[#00d4ff]/60 px-2 py-0.5 rounded-sm border border-[#00d4ff]/20 bg-[#00d4ff]/5" 
                            style={{ fontFamily: "var(--font-mono)" }} translate="no">
                        {tool}
                      </span>
                    </div>
                    <p className="text-xs text-[#8892b0] leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CI/CD card */}
          <motion.div variants={item} className="group relative rounded-sm p-8 transition-all duration-300 hover:border-[#c400ff]/30"
            style={{ background: "rgba(8,8,22,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(196,0,255,0.15)" }}>
            <div className="h-12 w-12 rounded-sm flex items-center justify-center mb-8"
              style={{ background: "rgba(196,0,255,0.08)", border: "1px solid rgba(196,0,255,0.2)" }}>
              <Workflow size={24} className="text-[#c400ff]" />
            </div>
            <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "var(--font-space)" }}>
              CI/CD Integration
            </h2>
            <p className="text-sm text-[#aab2cc] mb-6 leading-relaxed font-light">
              Every commit initiates an automated gatekeeping process. Code cannot reach production 
              without passing the full suite of security, style, and functional audits.
            </p>
            <div className="rounded-sm p-5 space-y-4"
              style={{ background: "rgba(5,5,14,0.98)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between text-[10px] text-[#4a5568]" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="flex items-center gap-1.5"><Terminal size={12} /> $ build-logs --qa</span>
                <span className="text-[#00ff88]/50">SECURE: ENV_PROD</span>
              </div>
              <div className="space-y-2 text-[11px] font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Linting & Types</span>
                  <span className="text-[#00ff88]">PASS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Unit Tests (Vitest)</span>
                  <span className="text-[#00ff88]">PASS [842]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">E2E (Playwright)</span>
                  <span className="text-[#00ff88]">PASS [14]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Portfolio tests callout */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} 
          className="relative rounded-sm p-8 text-center overflow-hidden"
          style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="absolute top-0 left-0 w-full h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />
          <TestTube2 size={42} className="text-[#00d4ff] mx-auto mb-5"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,212,255,0.5))" }} />
          <h2 className="text-2xl font-bold mb-3 text-[#eef2ff]" style={{ fontFamily: "var(--font-space)" }}>
            Live Validation
          </h2>
          <p className="text-base text-[#aab2cc] max-w-2xl mx-auto leading-relaxed font-light">
            This portfolio is itself a test subject. I use <span translate="no" className="font-bold text-[#00ff88]">Playwright</span> to validate layout 
            integrity and navigation flows across all viewport sizes before every deployment.
            <br />
            <span className="inline-block mt-4 px-3 py-1 rounded-sm border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-xs text-[#00d4ff]" style={{ fontFamily: "var(--font-mono)" }}>
              Source: tests/portfolio.spec.ts
            </span>
          </p>
        </motion.div>

      </div>
    </main>
  );
}
