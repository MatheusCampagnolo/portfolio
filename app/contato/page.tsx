"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function ContatoPage() {
    return (
        <main className="flex min-h-screen flex-col bg-black overflow-x-hidden relative">
            <DottedSurface className="opacity-20" />
            <Navbar />

            <section className="pt-24 px-4 flex-grow flex flex-col items-center justify-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                        Vamos Conversar?
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-12">
                        Seja para discutir um novo projeto inovador, ou apenas para trocar ideias sobre o mundo da tecnologia. Minha caixa de entrada está sempre aberta.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <a
                            href="mailto:campagno.matheus@gmail.com"
                            className="group relative flex flex-col items-center p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all text-white backdrop-blur-md overflow-hidden hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-indigo-500 to-transparent" />
                            <div className="h-20 w-20 mb-6 rounded-2xl bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-indigo-500/30 shadow-lg">
                                <Mail className="h-10 w-10 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">E-mail</h3>
                            <p className="text-slate-300 group-hover:text-slate-200 transition-colors">Entre em contato direto comigo.</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/messiasmatheus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col items-center p-10 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all text-white backdrop-blur-md overflow-hidden hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-transparent" />
                            <div className="h-20 w-20 mb-6 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-blue-500/30 shadow-lg">
                                <Linkedin className="h-10 w-10 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all">LinkedIn</h3>
                            <p className="text-slate-300 group-hover:text-slate-200 transition-colors">Conecte-se à minha rede profissional.</p>
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer hideContact={true} />
        </main>
    );
}
