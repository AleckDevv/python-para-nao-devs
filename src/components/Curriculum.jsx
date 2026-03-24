import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2 } from 'lucide-react';

const modules = [
  { id: 1, title: 'Módulo 1: Por que Python? Desmistificando a programação.' },
  { id: 2, title: 'Módulo 2: Python no básico: variáveis, listas e decisões.' },
  { id: 3, title: 'Módulo 3: Dominando planilhas com openpyxl e pandas.' },
  { id: 4, title: 'Módulo 4: Automatizando e-mails e notificações.' },
  { id: 5, title: 'Módulo 5: Extraindo dados da web (web scraping).' },
  { id: 6, title: 'Módulo 6: Controlando o navegador com Selenium.' },
  { id: 7, title: 'Módulo 7: Agendando tarefas e criando seu robô pessoal.' },
  { id: 'b', title: 'Bônus: Python + IA: integrando ChatGPT nos seus scripts.', isBonus: true },
];

export default function Curriculum() {
  const [openId, setOpenId] = useState(modules[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Conteúdo Direto ao Ponto
          </h2>
          <p className="text-lg text-slate-600">
            Um cronograma desenhado para resultados rápidos.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod) => (
            <motion.div 
              key={mod.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border rounded-2xl overflow-hidden transition-colors ${mod.isBonus ? 'border-brand-yellow/50 bg-yellow-50/30' : 'border-slate-200 bg-white'}`}
            >
              <button
                onClick={() => setOpenId(openId === mod.id ? null : mod.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${mod.isBonus ? 'bg-brand-yellow text-brand-blue' : 'bg-brand-blue text-white'}`}>
                    {mod.isBonus ? '★' : mod.id}
                  </div>
                  <h3 className={`font-semibold md:text-lg ${mod.isBonus ? 'text-brand-blue' : 'text-slate-800'}`}>
                    {mod.title}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform ${openId === mod.id ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openId === mod.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 pt-0 text-slate-600 border-t border-slate-100 flex items-start gap-3 mt-4">
                      <Code2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                      <p>Aprenda na prática e construa um mini-projeto neste módulo para solidificar seu conhecimento.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
