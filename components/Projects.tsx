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
    image: "/project1.jpg", // Placeholder
    github: "https://github.com/MatheusCampagnolo/kaelum/",
    live: "https://matheuscampagnolo.github.io/kaelum/",
    color: "from-blue-500 to-cyan-500",
    logo: "/logos/kaelum.jpg",
  },
  {
    title: "Kargo Inventory API",
    description: "Sistema robusto de gerenciamento de inventário construído com Spring Boot 3 e Java 17. Oferece rastreamento de estoque e insights estatísticos operando com PostgreSQL, JPA e OpenAPI (Swagger).",
    tech: ["Java 17", "Spring Boot", "PostgreSQL"],
    image: "/project2.jpg", // Placeholder
    github: "https://github.com/MatheusCampagnolo/kargo",
    live: "#",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "TechSentinel",
    description: "Dashboard desktop para monitoramento de hardware e privacidade em tempo real. Interface moderna que alerta usuários sobre ativações suspeitas de webcams/microfones e analisa tráfego.",
    tech: ["Electron", "Python", "React"],
    image: "/project3.jpg", // Placeholder
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
              className="group relative rounded-3xl bg-slate-900 border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`relative h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br ${project.color} opacity-80 shadow-lg overflow-hidden`}>
                    {project.logo ? (
                      <Image src={project.logo} alt={`${project.title} logo`} fill className="object-cover" />
                    ) : (
                      <span className="font-bold text-white text-xl">{project.title[0]}</span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github className="h-6 w-6" />
                    </a>
                    <a href={project.live} className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
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
