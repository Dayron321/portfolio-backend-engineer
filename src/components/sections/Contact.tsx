"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#05050a] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(0,112,243,0.08)_0%,transparent_50%)] z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4"
            >
              Contacto
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              ¿Listo para <span className="text-white/40">Siguiente Nivel?</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#00d4ff] font-medium italic"
            >
              "¡Hablemos de oportunidades en QA Automation y Backend!"
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactMethod
              icon={<Mail className="text-[#00d4ff]" />}
              label="Email"
              value="dayron.vera@example.com"
              href="mailto:dayron.vera@example.com"
              delay={0.3}
            />
            <ContactMethod
              icon={<LinkedinIcon className="text-[#00d4ff]" />}
              label="LinkedIn"
              value="Dayron Vera"
              href="https://www.linkedin.com/in/dayron-vera-7a7b14211/"
              delay={0.4}
            />
            <ContactMethod
              icon={<GithubIcon className="text-[#00d4ff]" />}
              label="GitHub"
              value="Dayron321"
              href="https://github.com/Dayron321"
              delay={0.5}
            />
          </div>

          {/* Simple Message Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-8 rounded-sm glass border border-white/5 bg-white/2 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00d4ff]/10 mb-6">
              <MessageSquare className="text-[#00d4ff]" size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4">Envíame un mensaje directo</h4>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Estoy abierto a discutir nuevos proyectos, arquitectura de software y estrategias de automatización avanzadas.
            </p>
            <a
              href="mailto:dayron.vera@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#020205] font-bold rounded-sm border border-[#00d4ff] hover:bg-transparent hover:text-[#00d4ff] transition-all duration-300 group"
            >
              Contactar Ahora
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon, label, value, href, delay }: { icon: React.ReactNode; label: string; value: string; href: string; delay: number }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-sm glass border border-white/5 hover:border-[#00d4ff]/30 transition-cyber group text-center block"
    >
      <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00d4ff]/10 transition-colors">
        {icon}
      </div>
      <h4 className="text-xs font-mono text-white/30 mb-2 uppercase tracking-widest">{label}</h4>
      <p className="text-lg font-bold group-hover:text-[#00d4ff] transition-colors">{value}</p>
    </motion.a>
  );
}
