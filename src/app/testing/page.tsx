import { CheckCircle2, FlaskConical, TestTube2, Workflow, Terminal } from "lucide-react";

export default function Testing() {
  const strategy = [
    {
      label: "Unit Testing",
      tool: "Jest / Vitest",
      desc: "80%+ coverage on critical business logic and pure utility functions.",
    },
    {
      label: "Integration Testing",
      tool: "Supertest / Jest",
      desc: "Service interaction tests covering API routes, controllers, and database layers.",
    },
    {
      label: "E2E Testing",
      tool: "Playwright",
      desc: "Critical user flows validated in real browsers — happy paths and edge cases.",
    },
  ];

  return (
    <main
      className="relative min-h-screen pt-24 pb-20 overflow-hidden cyber-grid"
      style={{ background: "#050508", color: "#eef2ff" }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center md:text-left mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#00ff88]/60 mb-3"
            style={{ fontFamily: "var(--font-mono)" }}>// testing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-orbitron)" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              QA Philosophy
            </span>
          </h1>
          <p className="text-[#6b7a99] text-lg max-w-2xl">
            Quality is a system property, not an afterthought. Automated validation at every layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Strategy card */}
          <div className="rounded-sm p-8"
            style={{ background: "rgba(8,8,22,0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(0,212,255,0.12)" }}>
            <div className="h-11 w-11 rounded-sm flex items-center justify-center mb-6"
              style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <FlaskConical size={22} className="text-[#00d4ff]" />
            </div>
            <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-space)" }}>
              QA Strategy
            </h2>
            <ul className="space-y-5">
              {strategy.map(({ label, tool, desc }) => (
                <li key={label} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-[#00ff88] shrink-0 mt-0.5"
                    style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.5))" }} />
                  <span className="text-sm text-[#aab2cc] leading-relaxed">
                    <strong className="text-[#eef2ff]">{label}</strong>
                    <span className="text-[#00d4ff]/70 ml-1" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem" }}>
                      ({tool})
                    </span>
                    {" — "}{desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CI/CD card */}
          <div className="rounded-sm p-8"
            style={{ background: "rgba(8,8,22,0.8)", backdropFilter: "blur(20px)", border: "1px solid rgba(196,0,255,0.12)" }}>
            <div className="h-11 w-11 rounded-sm flex items-center justify-center mb-6"
              style={{ background: "rgba(196,0,255,0.08)", border: "1px solid rgba(196,0,255,0.2)" }}>
              <Workflow size={22} className="text-[#c400ff]" />
            </div>
            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-space)" }}>
              CI/CD Integration
            </h2>
            <p className="text-sm text-[#aab2cc] mb-5 leading-relaxed">
              All tests are wired into the GitHub Actions pipeline.
              Branches cannot be merged to{" "}
              <code className="text-[#00d4ff]" style={{ fontFamily: "var(--font-mono)" }}>main</code>{" "}
              if any test fails.
            </p>
            <div className="rounded-sm p-4"
              style={{ background: "rgba(5,5,14,0.95)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs text-[#4a5568] mb-2 flex items-center gap-1.5"
                style={{ fontFamily: "var(--font-mono)" }}>
                <Terminal size={11} />$ Local commands
              </p>
              <pre style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}><code className="text-[#00ff88]">{`$ npx playwright test\n$ npx playwright show-report`}</code></pre>
            </div>
          </div>
        </div>

        {/* Portfolio tests callout */}
        <div className="rounded-sm p-8 text-center"
          style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}>
          <TestTube2 size={40} className="text-[#00d4ff] mx-auto mb-4"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,212,255,0.45))" }} />
          <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-space)" }}>
            Tests in This Portfolio
          </h2>
          <p className="text-sm text-[#aab2cc] max-w-xl mx-auto leading-relaxed">
            This site includes Playwright E2E tests validating the homepage load and main navigation.
            Source:{" "}
            <code className="text-[#00d4ff]" style={{ fontFamily: "var(--font-mono)" }}>
              tests/portfolio.spec.ts
            </code>
          </p>
        </div>

      </div>
    </main>
  );
}
