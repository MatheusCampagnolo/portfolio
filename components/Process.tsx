"use client";

import { motion, useInView } from "framer-motion";
import { Layers, Code2, Rocket, FileText, CheckCircle, RefreshCw } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { DotGrid } from "./ui/DotGrid";

const steps = [
  {
    title: "1. Levantamento de Requisitos",
    description: "Reuniões imersivas para extrair a visão do cliente, definir o escopo de atuação e mapear os casos de uso críticos do domínio de negócios.",
    icon: FileText,
    color: "bg-amber-500",
  },
  {
    title: "2. Arquitetura & Especificação Técnica",
    description: "Seleção da stack tecnológica rigorosa e design de sistemas (ERD, fluxos de dados, prototipagem UI/UX). Planejamento da arquitetura voltada para escala.",
    icon: Layers,
    color: "bg-blue-500",
  },
  {
    title: "3. Desenvolvimento do Produto",
    description: "Codificação do software guiada por Clean Code e padrões arquiteturais sólidos. Implementação em sprints interativas de Front-end e Back-end.",
    icon: Code2,
    color: "bg-indigo-500",
  },
  {
    title: "4. Testes & Code Review",
    description: "Criação de testes automatizados (unitários e E2E), revisões por pares e auditorias de segurança antes da fusão (merge) na branch principal.",
    icon: CheckCircle,
    color: "bg-emerald-500",
  },
  {
    title: "5. Publicação & Deploy",
    description: "Lançamento em ambiente de produção sob pipelines de CI/CD automatizadas (ex: GitHub Actions), com configuração robusta na infraestrutura de nuvem.",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    title: "6. Otimização & Monitoramento",
    description: "Análise contínua de performance pós-lançamento, escalabilidade vertical/horizontal do banco de dados e manutenção preditiva do código-fonte.",
    icon: RefreshCw,
    color: "bg-rose-500",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative w-full py-24 px-4 bg-black/50 overflow-hidden">
      {/* Interactive DotGrid Background with Top/Bottom Fades */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <DotGrid opacity={0.06} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Fluxo de Desenvolvimento
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Metodologia ágil e estruturada para transformar ideias complexas em produtos digitais de alta performance.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:left-1/2 md:-ml-0.5" />

          <div className="flex flex-col gap-12 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Center Icon/Node for Mobile (Absolute) and Desktop (Relative) */}
                <div className="absolute left-0 top-6 md:relative md:top-auto md:left-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-black bg-slate-900 shadow-xl z-10 md:mx-auto">
                  <div className={cn("absolute inset-0 rounded-full opacity-20 animate-pulse", step.color)} />
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full pl-20 md:pl-0">
                  <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 backdrop-blur-sm">
                    <div className={cn("absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500", step.color)} />
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
