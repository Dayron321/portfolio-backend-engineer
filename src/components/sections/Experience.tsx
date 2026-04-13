"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Globe2 } from "lucide-react";

const experience = [
  {
    role: "Ingeniero QA / Soporte Backend",
    company: "Glocation",
    period: "Sep 2025 — Mar 2026",
    description: "Lidero la estrategia de automatización de pruebas para plataformas de logística. Diseño de frameworks Playwright de alto rendimiento y ejecución de pruebas de carga críticas.",
  },
  {
    role: "Desarrollador Backend (Prácticas)",
    company: "La Previsora Seguros",
    period: "Ago 2024 — Jul 2025",
    description: "Desarrollo de lógica de servidor y automatización de procesos financieros. Implementación de sistemas de facturación masiva y optimización de bases de datos.",
  },
];

const education = [
  {
    degree: "Ingeniería de Sistemas / Software",
    school: "Universidad / Institución",
    period: "2020 — 2025",
  },
];

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B1 / Técnico" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Experience Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Experiencia Profesional</h2>
              <h3 className="text-4xl font-black">Trayectoria <span className="text-white/40">Técnica.</span></h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-white/5 ml-4 pl-10 relative">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[51px] top-1 w-5 h-5 rounded-full bg-[#111111] border-2 border-[#00b4ff] flex items-center justify-center">
                    <Briefcase size={10} className="text-[#00d4ff]" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-glow-cyan">{exp.role}</h4>
                    <span className="text-xs font-mono text-white/30 uppercase">{exp.period}</span>
                  </div>
                  <p className="text-[#00d4ff]/80 text-sm font-bold mb-4 uppercase tracking-wider">{exp.company}</p>
                  <p className="text-white/50 text-base leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Languages Column */}
          <div className="space-y-16">
            {/* Education */}
            <div>
              <div className="mb-12">
                <h2 className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Educación</h2>
                <h3 className="text-4xl font-black">Formación <span className="text-white/40">Académica.</span></h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-sm glass border border-white/5 relative group overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap size={64} />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-[#00d4ff] mb-2 uppercase">{edu.period}</div>
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-white/40 text-sm italic">{edu.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="mb-12">
                <h2 className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Idiomas</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-sm glass border border-white/5 flex items-center justify-between hover:border-[#00d4ff]/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Globe2 size={16} className="text-[#00d4ff]" />
                      <span className="font-bold text-sm tracking-tight">{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#00ff88]">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
