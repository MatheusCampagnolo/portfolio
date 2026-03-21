"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectType {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  color: string;
  logo?: string;
}

const projects: ProjectType[] = [
  {
    title: "Kaelum Framework",
    description: "Framework Node.js ultrarrápido com roteamento recursivo e suporte nativo a SSR minimalista. Projetado para simplificar a criação de páginas web e APIs RESTful, encapsulando boilerplate comum do Express.",
    tech: ["Node.js", "Express"],
    github: "https://github.com/kaelumjs/kaelum",
    live: "https://kaelumjs.vercel.app/",
    color: "from-blue-500 to-cyan-500",
    logo: "/logos/kaelum.jpg",
  },
  {
    title: "Kargo Inventory API",
    description: "Sistema robusto de gerenciamento de inventário construído com Spring Boot 3 e Java 17. Oferece rastreamento de estoque e insights estatísticos operando com PostgreSQL, JPA e OpenAPI (Swagger).",
    tech: ["Java 17", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/MatheusCampagnolo/kargo",
    live: "#",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "TechSentinel",
    description: "Dashboard desktop para monitoramento de hardware e privacidade em tempo real. Interface moderna que alerta usuários sobre ativações suspeitas de webcams/microfones e analisa tráfego.",
    tech: ["Electron", "Python", "React"],
    github: "https://github.com/MatheusCampagnolo/tech-sentinel",
    live: "#",
    color: "from-purple-500 to-indigo-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Projetos em Destaque
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Uma coleção de trabalhos que demonstram minha paixão por resolver problemas complexos com código limpo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />

              {/* Image Banner (if exists) */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className={`relative p-8 flex-grow flex flex-col z-10 ${project.image ? 'pt-4' : ''}`}>
                <div className="mb-6 flex items-center justify-between">
                  <div className={`relative h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg overflow-hidden border border-white/20`}>
                    {project.logo ? (
                      <Image src={project.logo} alt={`${project.title} logo`} fill className="object-cover" />
                    ) : (
                      <span className="font-bold text-white text-xl">{project.title[0]}</span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10 border border-white/10">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10 border border-white/10">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-8 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/projetos" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all font-medium text-white backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
            Explorar Portfólio Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
