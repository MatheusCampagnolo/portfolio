"use client";

import { Timeline } from "@/components/ui/timeline";
import { Code2, Cpu, Globe, Terminal } from "lucide-react";

export function Journey() {
  const data = [
    {
      title: "2026 - Presente",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Consultor Web Autônomo e Estudante de Ciência da Computação (Max Planck).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Consultor Web</h4>
              <p className="text-slate-400 text-sm">Entregando landing pages e sites institucionais sob medida para clientes B2B e B2C, com foco extremo em performance e SEO.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Ciência da Computação</h4>
              <p className="text-slate-400 text-sm">Aprofundamento nos fundamentos teóricos da computação, engenharia de software e desenvolvimento de sistemas embarcados.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Criador do Kaelum & Iniciação Científica.
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Terminal className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Kaelum Framework</h4>
            <p className="text-slate-400 text-sm">Desenvolvimento do framework Node.js minimalista (Kaelum) como iniciação científica no IFSP, simplificando a criação de APIs e páginas com SSR nativo.</p>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2025",
      content: (
        <div>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Técnico em Informática (IFSP).
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Code2 className="w-8 h-8 text-indigo-400 mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Formação Técnica</h4>
            <p className="text-slate-400 text-sm">Imersão pesada em desenvolvimento Full Stack e Engenharia de Software. Base sólida pavimentada em Java, Python, JavaScript, Node.js, Spring Boot e relacionais como PostgreSQL.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="journey" className="w-full bg-black">
      <Timeline data={data} />
    </section>
  );
}
