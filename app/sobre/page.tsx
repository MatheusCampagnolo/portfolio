"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Heart } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { Journey } from "@/components/Journey";

export default function SobrePage() {
    return (
        <main className="flex min-h-screen flex-col bg-black relative">
            <Particles className="absolute inset-0 z-0 opacity-50" quantity={50} color="#4f46e5" />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center flex flex-col items-center gap-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                            Olá, eu sou o<br />Matheus Messias.
                        </h1>
                        <div className="max-w-3xl">
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Engenheiro de Software Full Stack com uma paixão inabalável por transformar lógica bruta em experiências digitais fluidas e impactantes.
                            </p>
                            <p className="text-lg text-slate-500 leading-relaxed">
                                Baseado no Brasil, atuo construindo desde interfaces premium com React e Next.js até arquiteturas de microsserviços pesadas e ecossistemas robustos com Java, Python e JavaScript. Acredito que o código limpo é a base, mas o design focado no usuário é o que define o sucesso de um produto.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 px-4 relative z-10">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center md:text-left mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Meus Pilares</h2>
                        <div className="h-1 w-20 bg-indigo-500 rounded-full md:mx-0 mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PillarCard
                            index={0}
                            icon={Globe}
                            title="Front-End Premium"
                            color="text-emerald-400"
                            border="group-hover:border-emerald-500/50"
                            desc="Desenvolvimento de interfaces modernas, animações fluidas (Framer Motion) e estilos consistentes focados totalmente na conversão e retenção do usuário."
                        />
                        <PillarCard
                            index={1}
                            icon={Cpu}
                            title="Engenharia de Back-End"
                            color="text-blue-400"
                            border="group-hover:border-blue-500/50"
                            desc="Construção de APIs resilientes, clean architecture, engenharia de software aplicada, desenvolvimento de sistemas completos e modelagem de bancos de dados."
                        />
                        <PillarCard
                            index={2}
                            icon={Heart}
                            title="Inovação & IA"
                            color="text-purple-400"
                            border="group-hover:border-purple-500/50"
                            desc="Fascinado pela integração de IA em aplicações do dia-a-dia, seja moldando o prompt engineering ou criando frameworks experimentais (Kaelum)."
                        />
                    </div>
                </div>
            </section>

            <Journey />

            <Footer />
        </main>
    );
}

function PillarCard({ icon: Icon, title, desc, color, border, index = 0 }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 ${border} transition-all hover:bg-white/[0.04] hover:-translate-y-2 backdrop-blur-md overflow-hidden`}
        >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />
            <div className={`h-14 w-14 rounded-2xl bg-black/50 flex items-center justify-center mb-6 border border-white/10 shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {desc}
            </p>
        </motion.div>
    );
}
