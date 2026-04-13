"use client";

import { motion } from "framer-motion";
import { Terminal, Zap, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const codeSnippet = `import { Test, Expect } from "qa-agent";
import { BackendCore } from "@/system/core";

describe("Production Architecture", () => {
  it("handles 10k req/s smoothly", async () => {
    const server = new BackendCore({ cluster: true });
    await server.deploy();

    // Stress test — max capacity
    const metrics = await server.stressTest({
      requests: 10_000,
      duration: "1s"
    });

    Expect(metrics.latency).toBeLessThan(50);
    Expect(metrics.errors).toBe(0);
  });
});`;

export default function CodeDemo() {
  const [isTyping, setIsTyping] = useState(true);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
      setTimeout(() => setShowResult(true), 1000);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="demo" className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Demo de Ingeniería</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Pruebas de <span className="text-white/40">Carga en Tiempo Real.</span>
            </h3>
            <p className="text-white/50 max-w-xl mx-auto">
              Simulación de una suite de pruebas de performance ejecutandose en un entorno de producción distribuido.
            </p>
          </div>

          <div className="relative rounded-sm overflow-hidden bracket-corner glass border border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">
                <Terminal size={12} />
                <span>load-test.spec.ts — performance-suite</span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto min-h-[400px]">
              <div className="flex gap-4">
                <div className="flex flex-col text-white/20 select-none text-right w-8">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="flex-1">
                  <pre className="text-white/80 whitespace-pre">
                    {codeSnippet}
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-[#00d4ff] align-middle ml-1"
                      />
                    )}
                  </pre>
                </div>
              </div>

              {/* Terminal Output */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-white/5"
                >
                  <div className="flex items-center gap-3 text-[#00ff88] mb-2">
                    <CheckCircle2 size={16} />
                    <span className="font-bold text-sm uppercase tracking-wider">Todas las pruebas pasaron</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[11px] font-mono uppercase tracking-widest text-white/40">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#00d4ff]/40">Entorno</span>
                      <span className="text-white/80">Google Cloud Run</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#00d4ff]/40">Latencia p95</span>
                      <span className="text-[#00ff88]">32.4ms</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[#00d4ff]/40">Solicitudes</span>
                      <span className="text-[#00ff88]">10,000 req/s</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Terminal Footer */}
            <div className="bg-white/3 py-3 px-6 text-[10px] font-mono flex items-center justify-between text-white/20 border-t border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-[#00ff88]/40">main*</span>
                <span>ln 18, col 24</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={10} className="text-[#00d4ff]" />
                <span>Listo para despliegue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
