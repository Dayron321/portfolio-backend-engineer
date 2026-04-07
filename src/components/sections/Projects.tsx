"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, BarChart3, Cloud } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
import { CyberCard } from "@/components/ui/CyberCard";

const projects = [
  {
    title: "E2E & Performance Framework",
    description: "Diseñé y desarrollé desde cero un framework completo de pruebas automatizadas E2E con Playwright + TypeScript (Page Object Model y Codegen). Construí microservicios backend en Node.js desplegados en Google Cloud Run para ejecución distribuida de pruebas. Configuré pipelines CI/CD con Google Cloud Build + Terraform para despliegues automáticos. Integré pruebas de performance con k6 alcanzando 10.000 requests/segundo (latencia promedio 32 ms) y reportes automáticos. Logré cobertura end-to-end superior al 85% y reducción estimada del 70% en tiempo de pruebas manuales. Tecnologías: Playwright, TypeScript, Node.js, k6, GCP, Terraform, GitHub Actions.",
    tags: ["Playwright", "k6", "GCP", "Terraform", "Node.js"],
    github: "https://github.com/Dayron321",
    demo: "https://portfolio-backend-engineer.vercel.app/",
    stats: [
      { label: "Throughput", value: "10k req/s", icon: <Zap size={14} /> },
      { label: "Manual Reduction", value: "70%", icon: <BarChart3 size={14} /> },
    ],
    glow: "cyan" as const,
  },
  {
    title: "Invoice Automation - La Previsora",
    description: "Automatización de procesos críticos de facturación procesando más de 200 facturas por ejecución en La Previsora Seguros. Implementación de lógica de validación compleja y generación de reportes automáticos para asegurar la integridad de los datos financieros.",
    tags: ["Python", "Automation", "SQL", "Excel"],
    github: "https://github.com/Dayron321",
    demo: "https://portfolio-backend-engineer.vercel.app/",
    stats: [
      { label: "Batch Size", value: "200+ inv", icon: <Zap size={14} /> },
      { label: "Accuracy", value: "99.9%", icon: <BarChart3 size={14} /> },
    ],
    glow: "lime" as const,
  },
  {
    title: "System Infrastructure & DevOps",
    description: "Diseño de arquitecturas en la nube mediante infraestructura como código (IaC). Implementación de microservicios resilientes y pipelines de despliegue continuo para entornos productivos de alta disponibilidad.",
    tags: ["Terraform", "Docker", "CI/CD", "Cloud Run"],
    github: "https://github.com/Dayron321",
    demo: "https://portfolio-backend-engineer.vercel.app/",
    stats: [
      { label: "Availability", value: "99.99%", icon: <Cloud size={14} /> },
    ],
    glow: "magenta" as const,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#020205]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4"
            >
              Proyectos Destacados
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black"
            >
              Ingeniería de <br />
              <span className="text-white/40">Alto Impacto.</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-md text-right hidden md:block"
          >
            Sistemas diseñados para la escala, automatizados para la velocidad y probados para la resiliencia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CyberCard glowColor={project.glow} className="h-full flex flex-col p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 text-white/40 border border-white/10 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#00d4ff] transition-colors">{project.title}</h4>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/5">
                  {project.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="flex items-center gap-1.5 text-[#00d4ff] mb-1">
                        {stat.icon}
                        <span className="text-xs font-bold uppercase tracking-wider">{stat.value}</span>
                      </div>
                      <div className="text-[10px] text-white/30 uppercase font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    <GithubIcon size={14} />
                    Ver repositorio GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 border border-[#00d4ff]/30 text-[#00d4ff] font-bold text-xs uppercase tracking-widest transition-all"
                  >
                    <ExternalLink size={14} />
                    Ver demo en vivo
                  </a>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
