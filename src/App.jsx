import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Globe, Shield, Server, Cloud, Mail, MapPin, Phone, Award, ArrowRight, Sun, Moon, Star } from "lucide-react";

const TRANSLATIONS = {
  pt: {
    nav: { s: "Serviços", a: "Sobre", c: "Contato", cta: "Solicitar Acesso" },
    hero: { b: "INFRAESTRUTURA CRÍTICA & ENGENHARIA DE REDE", t: "CONTINUIDADE ABSOLUTA.", s: "Arquitetura de rede certificada SAGE para a elite global. Zero downtime. Máxima performance.", cta: "Iniciar Diálogo Estratégico" }
  }
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const t = TRANSLATIONS.pt;

  return (
    <div className={"min-h-screen font-sans overflow-x-hidden transition-colors duration-700 " + (isDark ? "bg-black text-white" : "bg-gray-50 text-black")}>
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none" />
      <nav className={"fixed w-full z-50 border-b backdrop-blur-md px-8 py-4 flex justify-between items-center " + (isDark ? "border-white/5 bg-black/80" : "border-black/5 bg-white/80")}>
        <span className="text-2xl font-bold tracking-tighter font-mono text-cyan-500">KNS GLOBAL</span>
        <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-bold text-[10px] uppercase shadow-[0_0_30px_rgba(6,182,212,0.3)]">{t.nav.cta}</button>
      </nav>
      <header className="relative pt-64 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border border-cyan-500/30 px-4 py-1 rounded-full text-[10px] text-cyan-500 font-mono mb-8 uppercase tracking-[0.3em] bg-cyan-500/5">{t.hero.b}</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">{t.hero.t}</motion.h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12">{t.hero.s}</p>
        <button className="bg-cyan-50 text-black px-10 py-5 rounded-xl font-bold flex items-center gap-3">{t.hero.cta} <ArrowRight size={20} /></button>
      </header>
    </div>
  );
}



