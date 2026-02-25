"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DotGrid } from "@/components/ui/DotGrid";
import { ExpandableProjectList } from "@/components/ui/ExpandableProjectList";

const advancedProjects = [
    {
        title: "Kaelum Framework",
        description: "Framework Node.js ultrarrápido com roteamento recursivo e suporte nativo a SSR minimalista. Projetado para simplificar a criação de páginas web e APIs RESTful, encapsulando boilerplate comum do Express.",
        tech: ["Node.js", "Express"],
        github: "https://github.com/MatheusCampagnolo/kaelum/",
        live: "https://matheuscampagnolo.github.io/kaelum/",
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
    }
];

const webDevProjects = [
    {
        title: "Nautilis - IFCiência",
        description: "Plataforma web educativa e interativa sobre os oceanos. Apresenta mapa visual, player de áudio imersivo, base de dados geográfica rica e carrosséis dinâmicos de vida marinha, desenhada de forma responsiva.",
        tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express"],
        github: "https://github.com/MatheusCampagnolo/nautilis",
        live: "https://nautilis.vercel.app/",
        color: "from-sky-400 to-blue-600",
        image: "/projects/nautilis.png",
    },
    {
        title: "Landing Page Corporativa",
        description: "Modelo premium de alta conversão para negócios locais e startups. Arquitetura moderna focada em performance, SEO e retenção de usuários com componentes reutilizáveis.",
        tech: ["Next.js", "React", "TailwindCSS", "shadcn/ui", "Framer Motion", "TypeScript"],
        github: "#",
        live: "https://landing-business-model.vercel.app/",
        color: "from-blue-500 to-indigo-600",
        image: "/projects/business_model.png",
    },
    {
        title: "Landing Page Pizzaria",
        description: "Modelo visual focado em negócios de alimentação. Presença digital otimizada na raiz do HTML/CSS/JS, garantindo máxima velocidade de carregamento, SEO inteligente e integração tráfego (GA4).",
        tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Google Analytics"],
        github: "#",
        live: "https://landing-pizza-model.vercel.app/",
        color: "from-orange-500 to-rose-600",
        image: "/projects/pizza_model.png",
    },
    {
        title: "Landing Page Exemplo 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ante a arcu aliquet tempor vitae vitae quam. Quisque non magna et velit consectetur tristique. ",
        tech: ["Next.js", "Stripe", "Prisma"],
        github: "#",
        live: "#",
        color: "from-indigo-500 to-purple-600",
        image: "/projects/exemplo3.jpg",
    },
    {
        title: "Landing Page Exemplo 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ante a arcu aliquet tempor vitae vitae quam. Quisque non magna et velit consectetur tristique. ",
        tech: ["Next.js", "Stripe", "Prisma"],
        github: "#",
        live: "#",
        color: "from-indigo-500 to-purple-600",
        image: "/projects/exemplo4.jpg",
    },
    {
        title: "Landing Page Exemplo 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ante a arcu aliquet tempor vitae vitae quam. Quisque non magna et velit consectetur tristique. ",
        tech: ["Next.js", "Stripe", "Prisma"],
        github: "#",
        live: "#",
        color: "from-indigo-500 to-purple-600",
        image: "/projects/exemplo5.jpg",
    }
];

export default function ProjetosPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black">
            <Navbar />

            <section className="relative pt-32 pb-16 px-4 overflow-hidden min-h-[40vh] flex items-center justify-center">
                {/* Decorative Grid */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
                    }}
                >
                    <DotGrid opacity={0.06} className="bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
                </div>

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
            <section className="py-16 px-4 relative z-10 bg-slate-900/20">
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

            <section className="py-24 px-4 text-center">
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
        <div className="group relative rounded-3xl bg-slate-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 flex flex-col h-full">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${project.color}`} />

            {project.image && (
                <div className="relative w-full h-48 overflow-hidden border-b border-white/5">
                    {/* Placeholder image visualization (skeleton/gradient) while actual images are not provided */}
                    <div className="absolute inset-0 bg-slate-800/80 animate-pulse" />
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                    {/* Shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                </div>
            )}

            <div className="relative p-8 flex-grow flex flex-col z-10 bg-slate-900/30 backdrop-blur-sm">
                <div className="mb-6 flex items-center justify-between">
                    {!project.image && (
                        <div className={`relative h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br ${project.color} opacity-80 shadow-lg overflow-hidden`}>
                            {project.logo ? (
                                <Image src={project.logo} alt={`${project.title} logo`} fill className="object-cover" />
                            ) : (
                                <span className="font-bold text-white text-xl">{project.title[0]}</span>
                            )}
                        </div>
                    )}
                    {project.image && (
                        <div className="flex-grow" /> // Spacer to align icons to right when image is present
                    )}
                    <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                </h3>

                <p className="text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
