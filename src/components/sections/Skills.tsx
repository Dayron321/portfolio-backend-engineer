"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cloud, ShieldCheck, Layers, GitBranch, Cpu, Code2 } from "lucide-react";

const skills = [
  { name: "Java", icon: <Cpu />, color: "#ED8B00" },
  { name: "Python", icon: <Terminal />, color: "#3776AB" },
  { name: "TypeScript", icon: <Code2 />, color: "#3178C6" },
  { name: "Node.js", icon: <Layers />, color: "#339933" },
  { name: "Playwright", icon: <ShieldCheck />, color: "#2EAD33" },
  { name: "k6", icon: <Terminal />, color: "#7B61FF" },
  { name: "Postman", icon: <Globe size={18} />, color: "#FF6C37" },
  { name: "GCP", icon: <Cloud />, color: "#4285F4" },
  { name: "Terraform", icon: <Database />, color: "#7B42BC" },
  { name: "Docker", icon: <Layers />, color: "#2496ED" },
  { name: "GitHub Actions", icon: <GitBranch />, color: "#2088FF" },
  { name: "SQL / PL-SQL", icon: <Database />, color: "#4479A1" },
  { name: "REST APIs", icon: <Globe size={18} />, color: "#00d4ff" },
  { name: "CI/CD", icon: <GitBranch />, color: "#FF9900" },
];

import { Globe } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-[#00d4ff] uppercase mb-4"
          >
            Habilidades Técnicas
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Mi Stack <span className="text-white/40">Tecnológico Core.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-sm glass border border-white/5 hover:border-[#00d4ff]/20 transition-all flex flex-col items-center justify-center gap-4 group"
            >
              <div 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors group-hover:bg-[#00d4ff]/10 group-hover:text-[#00d4ff]"
              >
                {skill.icon}
              </div>
              <span className="text-sm font-mono tracking-tight text-white/60 group-hover:text-white transition-colors text-center font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
