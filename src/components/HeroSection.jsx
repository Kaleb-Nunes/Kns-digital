import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ t }) {
  if (!t) return null;
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-medium mb-6">
          {t.badge}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          {t.title}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          {t.subtitle}
        </p>
        <button className="bg-cyan-500 text-black px-8 py-4 rounded-lg font-bold">
          {t.cta}
        </button>
      </div>
    </section>
  );
}




