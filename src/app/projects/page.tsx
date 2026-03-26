"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Terminal, Server, Cloud, CheckCircle2, Code2, Zap,
  Database, Activity, Layers, Wrench, ChevronDown, ChevronUp, ExternalLink,
} from "lucide-react";

// ── Hardcoded Tailwind safe-listed class maps (fixes purge issue) ──
const glowBorderMap: Record<string, string> = {
  cyan:    "hover:border-[rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]",
  emerald: "hover:border-[rgba(0,255,136,0.4)] hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]",
  blue:    "hover:border-[rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
};
const activeBorderMap: Record<string, string> = {
  cyan:    "border-[rgba(0,212,255,0.4)] shadow-[0_0_30px_rgba(0,212,255,0.1)]",
  emerald: "border-[rgba(0,255,136,0.4)] shadow-[0_0_30px_rgba(0,255,136,0.1)]",
  blue:    "border-[rgba(59,130,246,0.4)] shadow-[0_0_30px_rgba(59,130,246,0.1)]",
};
const textColorMap: Record<string, string> = {
  cyan:    "text-[#00d4ff]",
  emerald: "text-[#00ff88]",
  blue:    "text-blue-400",
};
// Fix: hardcoded dot colors (was dynamically built → purged in prod)
const dotColorMap: Record<string, string> = {
  cyan:    "bg-[#00d4ff]",
  emerald: "bg-[#00ff88]",
  blue:    "bg-blue-400",
};
// Fix: hardcoded via colors (was dynamically built → purged in prod)
const topLineMap: Record<string, React.CSSProperties> = {
  cyan:    { background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" },
  emerald: { background: "linear-gradient(90deg, transparent, #00ff88, transparent)" },
  blue:    { background: "linear-gradient(90deg, transparent, #60a5fa, transparent)" },
};

const projects = [
  {
    id: "qa-automation",
    title: "E2E Test Automation Framework",
    role: "QA Engineer / Independent Setup",
    context: "Personal Architecture Project",
    complexity: "Intermediate–Advanced",
    shortDescription: "Robust UI automation suite replacing manual flows, deeply integrated into CI/CD.",
    problem: "Manual testing of complex user flows took hours per release, creating bottlenecks and regression risk.",
    solution: "Architected a scalable E2E framework using Node.js with Page Object Model and Codegen-based selectors.",
    impact: "Full suite runs in under 3 minutes, catching critical bugs before every deployment.",
    metrics: [
      "Reduced manual testing time by ~85%",
      "Increased core flow coverage to 90%+",
      "Automated execution on every Pull Request",
    ],
    tech: ["QA Frameworks", "Node.js", "TypeScript", "GitHub Actions"],
    icon: Terminal,
    architectureDiagram: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto py-2" style={{ fontFamily: "var(--font-mono)" }}>
        <div className="w-full md:w-32 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-[#00d4ff] shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">Pipeline</div>
          <span className="text-[11px] text-slate-300">GitHub Actions</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-[#00d4ff]" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-[#00d4ff]" />
          </div>
        </div>

        <div className="w-full md:w-40 flex-shrink-0 border border-[rgba(0,212,255,0.4)] bg-[rgba(0,212,255,0.08)] rounded-sm p-3 text-center text-[#00d4ff] relative shadow-[0_0_15px_rgba(0,212,255,0.15)]">
          <div className="text-[10px] font-bold mb-1 opacity-90 tracking-widest uppercase">Core Suite</div>
          <span className="text-[11px] text-[#eef2ff]" translate="no">Node / Playwright</span>
        </div>

        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-[#00d4ff]" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-[#00d4ff]" />
          </div>
        </div>

        <div className="w-full md:w-32 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-[#00d4ff] shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">Target</div>
          <span className="text-[11px] text-slate-300">Staging Env</span>
        </div>
      </div>
    ),
    engineeringHighlights: [
      "Strict Page Object Models to avoid selector duplication.",
      "Automatic retry behavior for flaky tests to stabilize pipelines.",
      "Artifact collection (screenshots & traces) triggered only on failures.",
    ],
    whatIWouldImprove: "Integrate visual regression (Percy) and optimize parallel execution to drop runtime under 1 minute.",
    codeSnippet: `// tests/auth.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pom';

test.describe('Authentication Flows', () => {
  test('Successful login creates valid session', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER, process.env.TEST_PASS);
    await expect(page.locator('#dashboard-header')).toBeVisible();
    await expect(page).toHaveURL(/.*\\/dashboard/);
  });
});`,
    githubLink: "https://github.com/dayronvera-GL/PruebaDevOps",
    glowColor: "cyan",
  },
  {
    id: "backend-automation",
    title: "Financial Operations Automator",
    role: "Backend Developer Intern",
    context: "La Previsora Seguros",
    complexity: "Intermediate",
    shortDescription: "Python backend service automating financial and database operations via REST APIs.",
    problem: "The operations team spent 15+ hours weekly manually querying SQL databases and generating invoices one by one.",
    solution: "Developed a Python task script connecting to internal REST APIs and PostgreSQL for async bulk invoice generation.",
    impact: "Eliminated manual intervention entirely — a multi-day process now runs as a background task in seconds.",
    metrics: [
      "Automated generation of 200+ invoices per execution",
      "Saved ~15 hours of weekly manual labor",
      "100% data fidelity — eliminated human copy-paste errors",
    ],
    tech: ["Python", "REST APIs", "PostgreSQL", "Pandas"],
    icon: Server,
    architectureDiagram: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto py-2" style={{ fontFamily: "var(--font-mono)" }}>
        <div className="w-full md:w-32 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-[#00ff88] shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">Trigger</div>
          <span className="text-[11px] text-slate-300">Task Scheduler</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-[#00ff88]" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-[#00ff88]" />
          </div>
        </div>

        <div className="w-full md:w-40 flex-shrink-0 border border-[rgba(0,255,136,0.4)] bg-[rgba(0,255,136,0.08)] rounded-sm p-3 text-center text-[#00ff88] relative shadow-[0_0_15px_rgba(0,255,136,0.15)]">
          <div className="text-[10px] font-bold mb-1 opacity-90 tracking-widest uppercase">Worker</div>
          <span className="text-[11px] text-[#eef2ff]">Python Processor</span>
        </div>

        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-[#00ff88]" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-[#00ff88]" />
          </div>
        </div>

        <div className="w-full md:w-32 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-[#00ff88] shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">Storage</div>
          <span className="text-[11px] text-slate-300">PostgreSQL Cloud</span>
        </div>
      </div>
    ),
    engineeringHighlights: [
      "Robust error handling preventing crashes on API timeout.",
      "Data validation layer enforcing strict schema before PDF generation.",
      "Connection pooling to prevent SQL max-connection timeouts.",
    ],
    whatIWouldImprove: "Migrate to a message queue (RabbitMQ/Celery) for real-time processing instead of batch-cron.",
    codeSnippet: `def generate_bulk_invoices(client_ids: list):
    try:
        db = get_db_connection()
        batch_results = []
        for cid in client_ids:
            data = db.fetch_financial_data(cid)
            if not validate_schema(data):
                log.error(f"Integrity error for client {cid}")
                continue
            pdf_path = render_invoice(data)
            batch_results.append(pdf_path)
        return {"status": "success", "count": len(batch_results)}
    except Exception as e:
        capture_exception(e)
        raise ProcessingError("Batch failed")`,
    githubLink: "#",
    glowColor: "emerald",
  },
  {
    id: "cloud-microservices",
    title: "Serverless Deployment Pipeline",
    role: "DevOps / Backend Focus",
    context: "Architecture Exploration",
    complexity: "Advanced",
    shortDescription: "IaC + automated deployment to GCP using Terraform + Cloud Run for scalable microservices.",
    problem: "Manual deployments were slow, inconsistent, and prone to configuration drift across environments.",
    solution: "Automated pipeline using Terraform to provision GCP infra and deploy Dockerized containers to Cloud Run.",
    impact: "Environments spin up or down via a single command. Total config drift eliminated.",
    metrics: [
      "Reduced environment setup from hours to ~5 minutes",
      "Zero-downtime serverless deployments via Cloud Run",
      "Config drift eliminated through Terraform definitions",
    ],
    tech: ["GCP", "Docker", "Terraform", "Cloud Build"],
    icon: Cloud,
    architectureDiagram: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto py-2" style={{ fontFamily: "var(--font-mono)" }}>
        <div className="w-full md:w-32 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-blue-400 shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">VCS</div>
          <span className="text-[11px] text-slate-300">GitHub Repo</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-blue-400" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-blue-400" />
          </div>
        </div>

        <div className="w-full md:w-40 flex-shrink-0 border border-slate-700 bg-[rgba(15,23,42,0.8)] rounded-sm p-3 text-center text-blue-400 shadow-sm">
          <div className="text-[10px] font-bold mb-1 opacity-70 tracking-widest uppercase">Build</div>
          <span className="text-[11px] text-slate-300">Cloud Build</span>
        </div>

        <div className="flex flex-col md:flex-row items-center opacity-40">
          <div className="h-4 w-[1px] md:h-[1px] md:w-6 bg-blue-400" />
          <div className="transform rotate-90 md:rotate-0 -translate-y-1 md:translate-y-0 md:-translate-x-1">
            <ChevronDown size={14} className="text-blue-400" />
          </div>
        </div>

        <div className="w-full md:w-32 flex-shrink-0 border border-[rgba(59,130,246,0.4)] bg-[rgba(59,130,246,0.08)] rounded-sm p-3 text-center text-blue-400 relative shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <div className="text-[10px] font-bold mb-1 opacity-90 tracking-widest uppercase">Service</div>
          <span className="text-[11px] text-[#eef2ff]">Cloud Run</span>
        </div>
      </div>
    ),
    engineeringHighlights: [
      "Strict separation of state files using Terraform remote backend.",
      "Least-privileged IAM policies for deployment service accounts.",
      "Multi-stage Docker builds (Alpine base) to minimize attack surface.",
    ],
    whatIWouldImprove: "Add blue/green deployment traffic splitting and Cloud Logging alerts for cold start spikes.",
    codeSnippet: `# infrastructure/main.tf
resource "google_cloud_run_service" "api_service" {
  name     = "api-backend-v1"
  location = "us-east1"
  template {
    spec {
      containers {
        image = "gcr.io/\${var.project_id}/api-service:latest"
        resources { limits = { memory = "512Mi", cpu = "1000m" } }
      }
      container_concurrency = 80
    }
  }
  traffic { percent = 100; latest_revision = true }
}`,
    githubLink: "https://github.com/dayronvera-GL/PruebaDevOps",
    glowColor: "blue",
  },
];

const containerVars: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVars: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <main
      className="relative min-h-screen pt-24 pb-24 overflow-x-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Background glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(196,0,255,0.04) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-sm text-xs tracking-widest uppercase"
            style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", fontFamily: "var(--font-mono)" }}>
            <Activity size={13} /> Engineering Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              Technical Showcase
            </span>
          </h1>
          <p className="text-lg text-[#6b7a99] max-w-2xl font-light">
            Real-world backend architectures, QA automation frameworks, and cloud deployment pipelines — with measurable outcomes.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div variants={containerVars} initial="hidden" animate="show" className="space-y-10">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExpanded = expandedId === project.id;

            return (
              <motion.div key={project.id} variants={itemVars}
                className={`relative rounded-sm overflow-hidden transition-all duration-500 group border ${
                  isExpanded ? activeBorderMap[project.glowColor] : glowBorderMap[project.glowColor]
                }`}
                style={{ background: "rgba(8,8,22,0.8)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.08)" }}>

                {/* Neon top edge line */}
                <div className={`absolute top-0 left-0 w-full h-[1px] transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={topLineMap[project.glowColor]} />

                <div className="p-6 sm:p-8">
                  {/* Meta header */}
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-8">
                    <div className="flex gap-4 items-start">
                      <div className={`p-3 rounded-sm ${textColorMap[project.glowColor]}`}
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <Icon size={26} />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#eef2ff]"
                          style={{ fontFamily: "var(--font-space)" }}>
                          {project.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
                          <span className="text-[#aab2cc] font-medium">{project.role}</span>
                          <span className="text-slate-700 hidden sm:block">·</span>
                          <span className="text-[#6b7a99]">{project.context}</span>
                          <span className={`px-2 py-0.5 rounded-sm text-xs border ${textColorMap[project.glowColor]}`}
                            style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)", fontFamily: "var(--font-mono)" }}>
                            {project.complexity}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap lg:justify-end gap-2 max-w-sm">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-sm text-xs text-[#8892b0]"
                          style={{ background: "rgba(5,5,14,0.9)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "var(--font-mono)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Problem → Solution → Impact */}
                  <div className="grid md:grid-cols-3 gap-5 mb-8 text-sm">
                    {[
                      { label: "The Problem",      color: "#ff4d6d", content: project.problem },
                      { label: "The Solution",     color: "#00d4ff", content: project.solution },
                      { label: "Business Impact",  color: "#00ff88", content: project.impact },
                    ].map(({ label, color, content }) => (
                      <div key={label} className="rounded-sm p-5"
                        style={{ background: "rgba(5,5,14,0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <h3 className="font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"
                          style={{ color, fontFamily: "var(--font-mono)" }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                          {label}
                        </h3>
                        <p className="text-[#8892b0] leading-relaxed font-light">{content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all"
                      style={{
                        background: isExpanded ? "rgba(255,255,255,0.06)" : "transparent",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: isExpanded ? "#eef2ff" : "#6b7a99",
                        fontFamily: "var(--font-mono)",
                      }}>
                      <Code2 size={15} className={textColorMap[project.glowColor]} />
                      {isExpanded ? "Close Technical View" : "Expand Technical View"}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-semibold transition-all"
                      style={{ background: "rgba(5,5,14,0.9)", border: "1px solid rgba(255,255,255,0.1)", color: "#6b7a99", fontFamily: "var(--font-mono)" }}>
                      <ExternalLink size={14} /> Source Code
                    </a>
                  </div>
                </div>

                {/* Accordion: Technical View */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: "easeInOut" }}
                      className="overflow-hidden"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(5,5,14,0.95)" }}>
                      <div className="p-6 sm:p-8">
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">

                          {/* Architecture + Metrics */}
                          <div className="space-y-7">
                            <div>
                              <h3 className="text-xs uppercase tracking-widest text-[#4a5568] mb-4 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-mono)" }}>
                                <Layers size={14} /> Flujo de arquitectura
                              </h3>
                              <div className="rounded-sm p-6 overflow-x-auto"
                                style={{ background: "rgba(8,8,22,0.9)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                {project.architectureDiagram}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xs uppercase tracking-widest text-[#4a5568] mb-4 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-mono)" }}>
                                <Zap size={14} /> Impact Metrics
                              </h3>
                              <ul className="space-y-3">
                                {project.metrics.map((metric) => (
                                  <li key={metric} className="flex gap-3 text-sm text-[#aab2cc]">
                                    <CheckCircle2 size={16} className="text-[#00ff88] shrink-0 mt-0.5"
                                      style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.4))" }} />
                                    {metric}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Highlights + Improvements */}
                          <div className="space-y-7">
                            <div>
                              <h3 className="text-xs uppercase tracking-widest text-[#4a5568] mb-4 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-mono)" }}>
                                <Database size={14} /> Engineering Highlights
                              </h3>
                              <ul className="space-y-3">
                                {project.engineeringHighlights.map((h) => (
                                  <li key={h} className="flex gap-3 text-sm text-[#aab2cc]">
                                    {/* FIX: Hardcoded dot colors instead of dynamic class concat */}
                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${dotColorMap[project.glowColor]}`} />
                                    <span className="leading-relaxed font-light">{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="rounded-sm p-5"
                              style={{ background: "rgba(255,107,0,0.04)", border: "1px solid rgba(255,107,0,0.2)" }}>
                              <h3 className="text-xs uppercase tracking-widest text-orange-400 mb-3 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-mono)" }}>
                                <Wrench size={14} /> What I&apos;d Improve
                              </h3>
                              {/* FIX: was "{project.whatIWouldImprove}" — literal string bug */}
                              <p className="text-orange-200/75 text-sm leading-relaxed font-light italic">
                                {project.whatIWouldImprove}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Code snippet */}
                        <div>
                          <div className="flex items-center px-4 py-2.5 rounded-t-sm"
                            style={{ background: "rgba(8,8,22,0.95)", borderBottom: "1px solid rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
                            <div className="flex gap-1.5 mr-4">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                            </div>
                            <span className="text-xs text-[#4a5568]" style={{ fontFamily: "var(--font-mono)" }}>
                              Code Snippet Preview
                            </span>
                          </div>
                          <div className="p-5 rounded-b-sm overflow-x-auto"
                            style={{ background: "rgba(5,5,12,0.98)", border: "1px solid rgba(255,255,255,0.07)", borderTop: "none" }}>
                            <pre className="text-xs sm:text-sm leading-relaxed text-[#aab2cc]" style={{ fontFamily: "var(--font-mono)" }}><code>{project.codeSnippet}</code></pre>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
