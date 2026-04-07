"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
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
              icon={<Mail className="text-[#00b4ff]" />}
              label="Email"
              value="dayronvc98@gmail.com"
              href="mailto:dayronvc98@gmail.com"
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
              href="https://wa.me/573116134972?text=Hola%20Dayron%2C%20vi%20tu%20portafolio%20y%20estoy%20interesado%20en%20tu%20perfil%20como%20Software%20Engineer%20%E2%80%94%20Backend%20%26%20QA%20Automation.%20%C2%BFPodemos%20hablar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] text-[#0a0a0a] font-bold rounded-sm border border-[#25d366] hover:bg-transparent hover:text-[#25d366] transition-all duration-300 group"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Contactar por WhatsApp
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
