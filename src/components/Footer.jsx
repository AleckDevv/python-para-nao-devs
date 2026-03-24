import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-base">
          &copy; {new Date().getFullYear()} Python para Quem Não É Dev. Todos os direitos reservados.
        </p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Este material não tem o objetivo de formar desenvolvedores de software complexos, mas sim de equipar profissionais de diversas áreas com ferramentas práticas de automação para acelerar o dia a dia.
        </p>
      </div>
    </footer>
  );
}
