import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

export default function MiniProjects() {
  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Terminal className="w-48 h-48 md:w-64 md:h-64 transform translate-x-12 -translate-y-12" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-sm font-semibold mb-6">
              Aprenda Fazendo
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Mini-Projeto prático funcional ao fim de cada módulo
            </h2>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Acreditamos que a melhor forma de aprender é colocando a mão na massa. 
              Por isso, você não verá apenas teoria. Ao final de cada módulo, você 
              construirá um script completo e útil que já poderá ser aplicado no seu dia a dia.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="https://pay.kiwify.com.br/zDuIf3s" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-yellow-400 text-brand-blue font-bold rounded-xl text-lg transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-yellow/20 flex items-center justify-center gap-2 group">
                Quero Aprender na Prática
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
