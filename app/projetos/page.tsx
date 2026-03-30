"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExpandableProjectList } from "@/components/ui/ExpandableProjectList";
import { DottedSurface } from "@/components/ui/dotted-surface";

const advancedProjects = [
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
        //live: "#",
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "TechSentinel",
        description: "Dashboard desktop para monitoramento de hardware e privacidade em tempo real. Interface moderna que alerta usuários sobre ativações suspeitas de webcams/microfones e analisa tráfego.",
        tech: ["Electron", "Python", "React"],
        github: "https://github.com/MatheusCampagnolo/tech-sentinel",
        //live: "#",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "ComSenso - Enquetes Online em Tempo Real",
        description: "Plataforma de enquetes em tempo real via WebSockets com resultados instantâneos. Possui autenticação social, gestão de perfis e controle de privacidade, unindo design moderno a uma experiência de alta performance.",
        tech: ["React", "Supabase", "TailwindCSS", "Motion", "TypeScript", "Vite"],
        //github: "#",
        live: "https://comsenso.matthcodes.dev",
        color: "from-orange-500 to-orange-700",
        image: "/projects/comsenso.png",
        logo: "/logos/comsenso.svg",
    }
];

const webDevProjects = [
    {
        title: "EngPrime - Engenharia Diagnóstica",
        description: "Landing page EXEMPLO premium para serviços de engenharia diagnóstica, perícias e avaliações. Design clean e corporativo com animações fluidas de scroll, glassmorphism e paleta de cores focada em confiança e precisão técnica.",
        tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "TypeScript"],
        //github: "#",
        live: "https://landing-eng-model.vercel.app/",
        color: "from-slate-800 to-slate-950",
        image: "/projects/eng_model.png",
    },
    {
        title: "Gabriel Phos - Fotografia Fine Art",
        description: "Landing page EXEMPLO premium e cinematográfica para fotógrafos. Design imersivo focado em impacto visual, com animações fluidas de scroll, glassmorphism e galeria interativa.",
        tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "TypeScript"],
        //github: "#",
        live: "https://landing-photo-model.vercel.app/",
        color: "from-zinc-700 to-zinc-950",
        image: "/projects/photo_model.png",
    },
    {
        title: "OdontoLumi - Clínica Odontológica",
        description: "Landing page EXEMPLO moderna e minimalista para uma clínica odontológica premium. Desenvolvida com foco em UI/UX, apresentando animações fluidas, formas orgânicas, seções interativas (FAQ, Depoimentos) e design totalmente responsivo.",
        tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        //github: "#",
        live: "https://landing-odonto-model.vercel.app",
        color: "from-teal-500 to-teal-700",
        image: "/projects/odonto-model.png",
    },
    {
        title: "Landing Page Pizzaria",
        description: "Landing page EXEMPLO focado em negócios de alimentação. Presença digital otimizada na raiz do HTML/CSS/JS, garantindo máxima velocidade de carregamento, SEO inteligente e integração tráfego (GA4).",
        tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Google Analytics"],
        //github: "#",
        live: "https://landing-pizza-model.vercel.app/",
        color: "from-orange-500 to-rose-600",
        image: "/projects/pizza_model.png",
    },
    {
        title: "Nautilis - IFCiência",
        description: "Plataforma web educativa e interativa sobre os oceanos. Apresenta mapa visual, player de áudio imersivo, base de dados geográfica rica e carrosséis dinâmicos de vida marinha, desenhada de forma responsiva.",
        tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
        github: "https://github.com/MatheusCampagnolo/nautilis",
        live: "https://nautilis.vercel.app/",
        color: "from-sky-400 to-blue-600",
        image: "/projects/nautilis.png",
    }
];

export default function ProjetosPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black relative">
            <DottedSurface className="opacity-30" />
            <Navbar />

            <section className="relative pt-32 pb-16 px-4 overflow-hidden min-h-[40vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto relative z-10 text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                        Meus Projetos
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Um mergulho profundo no meu portfólio. Desde engenharia de software complexa e arquitetura de APIs, até soluções web focadas na conversão e design premium para negócios.
                    </p>
                </motion.div>
            </section>

            {/* Advanced Projects */}
            <section className="py-16 px-4 relative z-10">
                <div className="container mx-auto">
                    <div className="mb-12 border-l-4 border-indigo-500 pl-4">
                        <h2 className="text-3xl font-bold text-white mb-2">Engenharia & Sistemas</h2>
                        <p className="text-slate-400">Projetos Full Stack, Arquitetura de APIs e Frameworks.</p>
                    </div>

                    <ExpandableProjectList
                        projects={advancedProjects}
                        initialCount={3}
                        renderCard={(project, index) => <ProjectCard key={index} project={project} />}
                    />
                </div>
            </section>

            {/* Web Dev Projects */}
            <section className="py-16 px-4 relative z-10">
                <div className="container mx-auto">
                    <div className="mb-12 border-l-4 border-emerald-500 pl-4">
                        <h2 className="text-3xl font-bold text-white mb-2">Web Design & Institucional</h2>
                        <p className="text-slate-400">Portfólio de serviços autônomos. Landing pages, sites corporativos e interfaces de alta conversão.</p>
                    </div>

                    <ExpandableProjectList
                        projects={webDevProjects}
                        initialCount={3}
                        renderCard={(project, index) => <ProjectCard key={index} project={project} />}
                    />
                </div>
            </section>

            <section className="py-24 px-4 text-center relative z-10">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8">Quer explorar mais do meu código?</h3>
                    <a
                        href="https://github.com/MatheusCampagnolo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 hover:scale-105 transition-all group"
                    >
                        <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Acessar meu GitHub completo
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ProjectCard({ project }: { project: any }) {
    return (
        <div className="group relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col h-full">
            {/* Gradient Background Effect on Hover */}
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
                    {project.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
