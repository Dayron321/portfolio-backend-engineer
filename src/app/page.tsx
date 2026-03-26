"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimatedContainer, AnimatedItem } from "@/components/ui/AnimatedContainer";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { NeonButton } from "@/components/ui/NeonButton";

export default function Home() {
  return (
    <SectionWrapper className="flex items-center justify-center lg:py-0">

      {/* Hero grid radial mask */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-12 lg:pt-0">

        {/* ── Left: Typography & CTAs ── */}
        <AnimatedContainer className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">

          {/* Status badge */}
          <AnimatedItem className="mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs tracking-widest uppercase rounded-sm"
              style={{
                background: "rgba(0,212,255,0.06)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#00d4ff",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse"
                style={{ boxShadow: "0 0 6px #00d4ff" }}
              />
              System online — Open to work
            </div>
          </AnimatedItem>

          {/* Name */}
          <AnimatedItem className="mb-5 lg:mb-6">
            <p
              className="text-base sm:text-lg text-[#6b7a99] mb-2 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              <GradientTitle as="span" gradient="cyan-magenta" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
                Dayron Vera
              </GradientTitle>
            </h1>
          </AnimatedItem>

          {/* Role */}
          <AnimatedItem className="mb-6 lg:mb-7">
            <p
              className="text-lg sm:text-xl text-[#8892b0] font-medium tracking-wide"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Backend Developer
              <span className="mx-3 text-[#00d4ff]/40">|</span>
              QA Automation
              <span className="mx-3 text-[#00d4ff]/40">|</span>
              CI/CD
            </p>
          </AnimatedItem>

          {/* Description */}
          <AnimatedItem className="mb-10 lg:mb-12">
            <p className="text-base sm:text-lg text-[#6b7a99] leading-relaxed font-light max-w-xl">
              Building robust backend systems, intelligent test automation pipelines,
              and cloud-native deployments that hold under pressure.
            </p>
          </AnimatedItem>

          {/* CTAs */}
          <AnimatedItem className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <NeonButton href="/projects" variant="primary">
              <span className="flex items-center gap-2">
                View Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </NeonButton>
            <NeonButton href="/contact" variant="ghost">
              Get in Touch
            </NeonButton>
          </AnimatedItem>
        </AnimatedContainer>

        {/* ── Right: Floating Terminal ── */}
        <motion.div
          className="hidden lg:block relative w-full max-w-lg xl:max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, type: "spring" }}
        >
          {/* Ambient glow behind terminal */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
              transform: "scale(1.2)",
            }}
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative rounded-sm overflow-hidden bracket-corner"
            style={{
              background: "rgba(5,5,14,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,212,255,0.2)",
              boxShadow: "0 0 40px rgba(0,212,255,0.08), 0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center px-4 py-3"
              style={{ borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,212,255,0.03)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div
                className="flex-1 text-center text-xs text-[#00d4ff]/50 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)", marginRight: "3rem" }}
              >
                <Terminal size={12} className="inline mr-2 mb-0.5" />
                load-test.spec.ts
              </div>
            </div>

            {/* Code body */}
            <div className="p-6 text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "var(--font-mono)" }}>
              <pre><code dangerouslySetInnerHTML={{ __html: `<span class="text-[#c400ff]">import</span> { <span class="text-[#00d4ff]">Test</span>, <span class="text-[#00d4ff]">Expect</span> } <span class="text-[#c400ff]">from</span> <span class="text-[#00ff88]">"qa-agent"</span>;
<span class="text-[#c400ff]">import</span> { <span class="text-[#00d4ff]">BackendCore</span> } <span class="text-[#c400ff]">from</span> <span class="text-[#00ff88]">"@/system/core"</span>;

<span class="text-[#7b44ff]">describe</span>(<span class="text-[#00ff88]">"Production Architecture"</span>, () =&gt; {
  <span class="text-[#7b44ff]">it</span>(<span class="text-[#00ff88]">"handles 10k req/s smoothly"</span>, <span class="text-[#c400ff]">async</span> () =&gt; {
    <span class="text-[#c400ff]">const</span> server = <span class="text-[#c400ff]">new</span> <span class="text-[#00d4ff]">BackendCore</span>({ cluster: <span class="text-[#00ff88]">true</span> });
    <span class="text-[#c400ff]">await</span> server.<span class="text-[#7b44ff]">deploy</span>();

    <span class="text-[#4a5568] italic">// Stress test — max capacity</span>
    <span class="text-[#c400ff]">const</span> metrics = <span class="text-[#c400ff]">await</span> server.<span class="text-[#7b44ff]">stressTest</span>({
      requests: <span class="text-[#00ff88]">10_000</span>,
      duration: <span class="text-[#00ff88]">"1s"</span>
    });

    <span class="text-[#00d4ff]">Expect</span>(metrics.latency).<span class="text-[#7b44ff]">toBeLessThan</span>(<span class="text-[#00ff88]">50</span>);
    <span class="text-[#00d4ff]">Expect</span>(metrics.errors).<span class="text-[#7b44ff]">toBe</span>(<span class="text-[#00ff88]">0</span>);
  });
});` }} /></pre>
            </div>

            {/* Bottom status bar */}
            <div
              className="px-4 py-2 flex items-center justify-between text-xs"
              style={{
                borderTop: "1px solid rgba(0,212,255,0.08)",
                background: "rgba(0,212,255,0.02)",
                fontFamily: "var(--font-mono)",
                color: "#4a5568",
              }}
            >
              <span className="flex items-center gap-1.5">
                <Zap size={10} className="text-[#00ff88]" />
                <span className="text-[#00ff88]">All tests passed</span>
              </span>
              <span>latency: 32ms</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
