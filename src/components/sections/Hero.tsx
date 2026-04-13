"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

function scrollToProjects() {
  const el = document.getElementById("projects");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/cv-dayron-vera.pdf";
  link.download = "cv-dayron-vera.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial opacity-40" />
        <div className="absolute inset-0 bg-grid opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge de estado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00b4ff]/30 bg-[#00b4ff]/10 text-[#00b4ff] text-xs font-bold uppercase tracking-wider mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_8px_#00d4ff]" />
            Disponible para trabajar
          </motion.div>

          {/* Nombre y título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-glow-cyan leading-tight">
              Dayron Farid{" "}
              <span className="text-white/40">Vera Castro</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#00b4ff]/80 font-medium tracking-wide mb-8 font-mono">
              Ingeniero de Software — Backend & QA Automation
            </p>
          </motion.div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Especialista en arquitecturas robustas, automatización inteligente y despliegues en la nube.
            Transformando pruebas manuales en pipelines CI/CD de alto rendimiento para el software de 2026.
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="px-8 py-4 bg-[#00b4ff] text-[#0a0a0a] font-bold rounded-sm border border-[#00b4ff] hover:bg-transparent hover:text-[#00b4ff] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={downloadCV}
              className="px-8 py-4 bg-transparent text-white font-bold rounded-sm border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Descargar CV
              <Download size={18} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gradiente decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-0 pointer-events-none" />
    </section>
  );
}
