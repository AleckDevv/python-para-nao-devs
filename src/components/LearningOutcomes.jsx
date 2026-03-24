import React from 'react';
import { motion } from 'framer-motion';
import { Table, Send, Globe, CalendarClock, Bot } from 'lucide-react';

const outcomes = [
  {
    icon: <Table className="w-6 h-6" />,
    title: "Automação de Planilhas",
    description: "Leia, edite e crie planilhas Excel automaticamente usando openpyxl e pandas."
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Envio de E-mails em Massa",
    description: "Crie scripts para enviar e-mails personalizados para centenas de contatos em segundos."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Coleta de Dados da Web",
    description: "Aprenda Web Scraping para extrair informações de qualquer site que precisar."
  },
  {
    icon: <CalendarClock className="w-6 h-6" />,
    title: "Agendamento de Scripts",
    description: "Faça seus scripts rodarem sozinhos nos dias e horários que você programar."
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Bônus: Integração com IA",
    description: "Conecte seus scripts ao ChatGPT para analisar dados e gerar textos automaticamente."
  }
];

export default function LearningOutcomes() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-lg text-slate-600">
            Habilidades práticas e diretas para resolver problemas do seu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {outcomes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col items-start"
            >
              <div className="w-12 h-12 bg-brand-blue text-brand-yellow rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
