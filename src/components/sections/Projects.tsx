"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, BarChart3, Cloud, Lock, CheckCircle2, Cpu } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

type ProjectType = {
  title: string;
  badge?: string;
  description: string;
  confidential?: boolean;
  tags: string[];
  github?: string;
  demo?: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  glow: "cyan" | "lime" | "magenta";
};

const projects: ProjectType[] = [
  {
    title: "Automatización de Facturación – La Previsora Seguros",
    badge: "Empresa · Producción",
    description:
      "Diseñé e implementé un sistema de automatización de facturación en producción para La Previsora Seguros, procesando más de 200 facturas por ejecución con validación de integridad de datos financieros en tiempo real. Reemplazé procesos manuales críticos, eliminando errores humanos y reduciendo el tiempo de procesamiento mensual en más del 80%. El sistema incluye lógica de validación multicapa, generación automática de reportes en Excel y alertas por correo ante inconsistencias detectadas.",
    confidential: true,
    tags: ["Python", "SQL", "Pandas", "Excel", "Automation"],
    stats: [
      { label: "Facturas/ejecución", value: "200+", icon: <Zap size={14} /> },
      { label: "Precisión de datos", value: "99.9%", icon: <CheckCircle2 size={14} /> },
      { label: "Reducción tiempo", value: "80%", icon: <BarChart3 size={14} /> },
    ],
    glow: "lime",
  },
  {
    title: "Infraestructura Cloud & DevOps – Microservicios en GCP",
    badge: "Empresa · Producción",
    description:
      "Arquitecté y desplegué infraestructura cloud escalable en Google Cloud Platform utilizando Terraform como IaC. Diseñé pipelines de CI/CD con Google Cloud Build para despliegues automáticos de microservicios en Cloud Run con zero-downtime. Implementé estrategias de rollback automático, monitoreo con Cloud Monitoring y alertas configuradas por umbrales. El entorno alcanzó 99.99% de disponibilidad mensual en producción con cargas variables.",
    confidential: true,
    tags: ["Terraform", "GCP", "Docker", "Cloud Run", "CI/CD", "IaC"],
    stats: [
      { label: "Disponibilidad", value: "99.99%", icon: <Cloud size={14} /> },
      { label: "Entornos gestionados", value: "3+", icon: <Cpu size={14} /> },
      { label: "Tiempo de deploy", value: "< 3 min", icon: <Zap size={14} /> },
    ],
    glow: "magenta",
  },
  {
    title: "Framework E2E & Performance Testing – Proyecto Personal",
    badge: "Personal · Open Source",
    description:
      "Diseñé y construí desde cero un framework completo de pruebas automatizadas con Playwright + TypeScript bajo el patrón Page Object Model. Integré pruebas de rendimiento con k6, alcanzando 10.000 requests/segundo con latencia promedio de 32 ms en entornos distribuidos. Desplegué microservicios backend en Node.js sobre Google Cloud Run y configuré pipelines CI/CD con Terraform + GitHub Actions. Resultado: cobertura E2E superior al 85% y reducción del 70% en tiempo de ejecución de pruebas manuales.",
    tags: ["Playwright", "TypeScript", "k6", "Node.js", "GCP", "Terraform", "GitHub Actions"],
    github: "https://github.com/Dayron321",
    demo: "https://portfolio-backend-engineer.vercel.app/",
    stats: [
      { label: "Rendimiento", value: "10k req/s", icon: <Zap size={14} /> },
      { label: "Reducción manual", value: "70%", icon: <BarChart3 size={14} /> },
      { label: "Cobertura E2E", value: "> 85%", icon: <CheckCircle2 size={14} /> },
    ],
    glow: "cyan",
  },
];

const glowStyles: Record<string, string> = {
  cyan: "#00d4ff",
  lime: "#a3e635",
  magenta: "#e879f9",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
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
          {projects.map((project, index) => {
            const accentColor = glowStyles[project.glow];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col rounded-sm border border-white/8 bg-white/[0.02] p-8 overflow-hidden transition-all duration-300 hover:border-white/20"
                style={{
                  boxShadow: `0 0 0 0 ${accentColor}00`,
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 32px -8px ${accentColor}55`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${accentColor}00`;
                }}
              >
                {/* Línea de acento superior */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                />

                {/* Encabezado: tecnologías + badge */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 uppercase tracking-wide"
                        style={{ color: accentColor + "cc" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.badge && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border whitespace-nowrap"
                      style={{
                        borderColor: accentColor + "44",
                        color: accentColor,
                        background: accentColor + "11",
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h4
                  className="text-xl font-bold mb-3 transition-colors leading-snug"
                  style={{ color: "#fff" }}
                >
                  {project.title}
                </h4>

                {/* Descripción */}
                <p className="text-white/55 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Métricas */}
                <div className="grid grid-cols-3 gap-3 mb-6 pt-5 border-t border-white/5">
                  {project.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="flex items-center gap-1.5 mb-1" style={{ color: accentColor }}>
                        {stat.icon}
                        <span className="text-xs font-bold uppercase tracking-wider">{stat.value}</span>
                      </div>
                      <div className="text-[10px] text-white/30 uppercase font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Nota de confidencialidad O botones */}
                {project.confidential ? (
                  <div
                    className="flex items-start gap-2.5 rounded-sm border p-3 text-xs leading-relaxed mt-auto"
                    style={{
                      borderColor: accentColor + "30",
                      background: accentColor + "08",
                      color: accentColor + "bb",
                    }}
                  >
                    <Lock size={13} className="mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
                    <span>
                      <strong>Nota:</strong> Código fuente confidencial por política de la empresa.
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 mt-auto">
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
                      className="flex items-center justify-center gap-2 py-3 font-bold text-xs uppercase tracking-widest transition-all border"
                      style={{
                        background: accentColor + "15",
                        borderColor: accentColor + "40",
                        color: accentColor,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = accentColor + "28";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = accentColor + "15";
                      }}
                    >
                      <ExternalLink size={14} />
                      Ver demostración en vivo
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
