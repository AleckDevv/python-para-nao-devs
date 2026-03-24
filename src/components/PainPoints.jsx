import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Mail, Clock } from 'lucide-react';

const painPoints = [
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-rose-500" />,
    title: "Já perdeu horas copiando dados entre planilhas?"
  },
  {
    icon: <Mail className="w-8 h-8 text-rose-500" />,
    title: "Já enviou dezenas de e-mails manualmente?"
  },
  {
    icon: <Clock className="w-8 h-8 text-rose-500" />,
    title: "Ficou esperando um relatório enquanto poderia fazer algo mais importante?"
  }
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A rotina não precisa ser o seu limite
          </h2>
          <p className="text-lg text-slate-600">
            Se você respondeu sim a alguma dessas perguntas, você está perdendo o bem mais precioso que tem: o seu tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 leading-snug">
                {point.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
