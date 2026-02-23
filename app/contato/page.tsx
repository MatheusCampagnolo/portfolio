"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

export default function ContatoPage() {
    return (
        <main className="flex h-screen flex-col bg-black overflow-hidden">
            <Navbar />

            <section className="pt-24 px-4 flex-grow flex flex-col items-center justify-center text-center">
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
                            className="group flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all text-white backdrop-blur-sm"
                        >
                            <div className="h-16 w-16 mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail className="h-8 w-8 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">E-mail</h3>
                            <p className="text-slate-400 group-hover:text-slate-300">Entre em contato direto comigo.</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/messiasmatheus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-white backdrop-blur-sm"
                        >
                            <div className="h-16 w-16 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Linkedin className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">LinkedIn</h3>
                            <p className="text-slate-400 group-hover:text-slate-300">Conecte-se à minha rede profissional.</p>
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer hideContact={true} />
        </main>
    );
}
