import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white pt-24 pb-32">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-yellow via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8"
          >
            <Code className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm font-medium text-slate-300">Curso Prático & Direto ao Ponto</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Python para <span className="text-brand-yellow">Quem Não É Dev</span>: Automatize Seu Trabalho em 30 Dias
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Crie scripts que poupam horas de trabalho repetitivo por semana. Nenhuma experiência prévia em programação necessária.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a href="https://pay.kiwify.com.br/zDuIf3s" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-yellow-400 text-brand-blue font-bold rounded-xl text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-yellow/20 flex items-center justify-center gap-2 group">
              Quero Automatizar Minha Rotina
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
