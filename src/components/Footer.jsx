import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-base">
          &copy; {new Date().getFullYear()} Python para Quem Não É Dev. Todos os direitos reservados.
        </p>
        <p className="max-w-2xl mx-auto leading-relaxed mb-6">
          Este material não tem o objetivo de formar desenvolvedores de software complexos, mas sim de equipar profissionais de diversas áreas com ferramentas práticas de automação para acelerar o dia a dia.
        </p>
        <div className="flex justify-center items-center">
          <a href="mailto:contato.alex.lopes@gmail.com" className="inline-flex items-center gap-2 text-slate-300 hover:text-brand-yellow transition-colors font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            Suporte: contato.alex.lopes@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
