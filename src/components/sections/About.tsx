"use client";

import { motion } from "framer-motion";
import { Server, ShieldCheck, Cloud, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4">Sobre mí</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Ingeniería de Software <br />
              <span className="text-white/40">con mentalidad Automation-First.</span>
            </h3>
            
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Soy un ingeniero apasionado por construir sistemas robustos y escalables. Mi enfoque principal 
              combina el desarrollo de **Backend** eficiente con arquitecturas de **QA Automation** avanzadas. 
              Tengo experiencia diseñando frameworks E2E desde cero, optimizando pipelines de **CI/CD** 
              y desplegando soluciones Cloud en **GCP**.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Mi misión es eliminar los cuellos de botella manuales mediante la automatización inteligente, 
              garantizando que cada línea de código sea probada bajo presión y cumpla con los estándares de 
              producción más exigentes de la industria actual.
            </p>

            <div className="p-4 rounded-sm border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-8">
              <p className="text-sm font-mono text-[#00d4ff]/80">
                Portafolio completo y CV: <br />
                <a href="https://portfolio-backend-engineer.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
                  https://portfolio-backend-engineer.vercel.app/
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <AboutCard
              icon={<Server className="text-[#00d4ff]" />}
              title="Backend"
              desc="Arquitecturas limpias y APIs RESTful de alto rendimiento."
            />
            <AboutCard
              icon={<ShieldCheck className="text-[#00d4ff]" />}
              title="QA Automation"
              desc="Frameworks E2E, pruebas de performance y carga extrema."
            />
            <AboutCard
              icon={<Cloud className="text-[#00d4ff]" />}
              title="Cloud"
              desc="Infraestructura como código (Terraform) y microservicios."
            />
            <AboutCard
              icon={<Globe className="text-[#00d4ff]" />}
              title="Global"
              desc="Enfoque en soluciones distribuidas y alta disponibilidad."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 rounded-sm glass border border-white/5 hover:border-[#00d4ff]/30 transition-cyber group">
      <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/10 transition-colors">
        {icon}
      </div>
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
