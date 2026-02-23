"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Heart, Layers, Terminal } from "lucide-react";

export default function SobrePage() {
    return (
        <main className="flex min-h-screen flex-col bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                                Olá, eu sou o<br />Matheus Messias.
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Engenheiro de Software Full Stack com uma paixão inabalável por transformar lógica bruta em experiências digitais fluidas e impactantes.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Baseado no Brasil, atuo construindo desde interfaces premium com React e Next.js até arquiteturas de microsserviços pesadas e ecossistemas robustos com Java, Python e JavaScript. Acredito que o código limpo é a base, mas o design focado no usuário é o que define o sucesso de um produto.
                            </p>
                        </div>

                        {/* Abstract Representation / Profile Image Placeholder */}
                        <div className="w-64 h-64 md:w-80 md:h-80 relative shrink-0">
                            <div className="absolute inset-0 rounded-full border border-white/20 border-dashed animate-[spin_60s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-indigo-500/30 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-800 to-black border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl shadow-indigo-900/20">
                                {/* Pode trocar por um componente <Image /> real do Matheus */}
                                <Terminal className="w-16 h-16 text-slate-600" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 px-4 bg-slate-900/30 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Meus Pilares</h2>
                        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PillarCard
                            icon={Globe}
                            title="Front-End Premium"
                            color="text-emerald-400"
                            border="group-hover:border-emerald-500/50"
                            desc="Desenvolvimento de interfaces modernas, animações fluidas (Framer Motion) e estilos consistentes focados totalmente na conversão e retenção do usuário."
                        />
                        <PillarCard
                            icon={Cpu}
                            title="Engenharia de Back-End"
                            color="text-blue-400"
                            border="group-hover:border-blue-500/50"
                            desc="Construção de APIs resilientes, clean architecture, engenharia de software aplicada, desenvolvimento de sistemas completos e modelagem de bancos de dados."
                        />
                        <PillarCard
                            icon={Heart}
                            title="Inovação & IA"
                            color="text-purple-400"
                            border="group-hover:border-purple-500/50"
                            desc="Fascinado pela integração de IA em aplicações do dia-a-dia, seja moldando o prompt engineering ou criando frameworks experimentais (Kaelum)."
                        />
                    </div>
                </div>
            </section>

            {/* Mini Timeline / Experience */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Jornada na Tecnologia</h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                        <TimelineItem
                            align="left"
                            year="2026 - Presente"
                            title="Consultor Web Autônomo"
                            desc="Atuando na ponta, entregando landing pages e sites institucionais sob medida para clientes B2B e B2C, com foco extremo em performance e SEO."
                        />

                        <TimelineItem
                            align="right"
                            year="2026 - Presente"
                            title="Ciência da Computação (Max Planck)"
                            desc="Aprofundamento nos fundamentos teóricos da computação, engenharia de software e desenvolvimento de sistemas embarcados."
                        />

                        <TimelineItem
                            align="left"
                            year="2025"
                            title="Criador do Kaelum & Iniciação Científica"
                            desc="Desenvolvimento do framework Node.js minimalista (Kaelum) como iniciação científica no IFSP, simplificando a criação de APIs e páginas com SSR nativo."
                        />

                        <TimelineItem
                            align="right"
                            year="2023 - 2024"
                            title="Técnico em Informática (IFSP)"
                            desc="Imersão pesada em desenvolvimento Full Stack e Engenharia de Software. Base sólida pavimentada em Java, Python, JavaScript, Node.js, Spring Boot e relacionais como PostgreSQL."
                        />

                        <TimelineItem
                            align="left"
                            year="O Início"
                            title="Curiosidade & Game Mods"
                            desc="O primeiro contato avançado com código não foi apenas curiosidade, mas explorando o desenvolvimento prático da lógica de programação criando mods para jogos usando a linguagem LUA."
                        />

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function PillarCard({ icon: Icon, title, desc, color, border }: any) {
    return (
        <div className={`group p-8 rounded-3xl bg-white/5 border border-white/10 ${border} transition-all hover:bg-white/10 hover:-translate-y-2 backdrop-blur-sm`}>
            <div className={`h-14 w-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 border border-white/5 shadow-inner`}>
                <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );
}

function TimelineItem({ year, title, desc, align = "left" }: { year: string, title: string, desc: string, align?: "left" | "right" }) {
    return (
        <div className="relative flex items-center justify-between md:justify-normal group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-indigo-500 absolute left-0 md:left-1/2 -translate-x-1/2 shadow-lg shadow-indigo-500/40 z-10 transition-transform group-hover:scale-110" />

            {/* Content box */}
            <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-colors ml-auto ${align === "left" ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"}`}>
                <div className="text-indigo-400 font-mono text-sm mb-2">{year}</div>
                <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
