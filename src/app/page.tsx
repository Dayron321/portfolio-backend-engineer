"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CodeDemo from "@/components/sections/CodeDemo";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#020205] text-white selection:bg-[#00d4ff]/20 selection:text-[#00d4ff]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodeDemo />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
