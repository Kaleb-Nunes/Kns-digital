import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sun, Moon } from "lucide-react";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "bg-black text-white min-h-screen" : "bg-gray-50 text-black min-h-screen"}>
      <nav className="fixed top-0 w-full z-50 backdrop-blur border-b px-10 py-6 flex justify-between items-center">
        <span className="font-mono tracking-widest text-cyan-400">KNS GLOBAL</span>
        <div className="flex gap-6 items-center">
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="bg-cyan-400 text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase">
            Solicitar Acesso
          </button>
        </div>
      </nav>

      <header className="pt-64 pb-40 flex flex-col items-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="mb-10 px-6 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase font-mono text-cyan-400 border border-cyan-400/30">
          INFRAESTRUTURA CRÍTICA & ENGENHARIA DE REDE
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
          CONTINUIDADE ABSOLUTA.
        </motion.h1>

        <p className="max-w-3xl text-gray-400 text-lg md:text-xl mb-14">
          Arquitetura de rede certificada SAGE para operações que não podem falhar.
        </p>

        <motion.button whileHover={{ scale: 1.05 }}
          className="bg-cyan-50 text-black px-12 py-6 rounded-xl font-bold flex items-center gap-4">
          Iniciar Diálogo Estratégico <ArrowRight />
        </motion.button>
      </header>
    </div>
  );
}



