"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col bg-black overflow-x-hidden relative">
            <DottedSurface className="opacity-20" />
            <Navbar />

            <section className="flex-grow flex flex-col items-center justify-center text-center px-4 relative z-10 pt-24 pb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="flex flex-col items-center"
                >
                    <div className="h-24 w-24 mb-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                        <Compass className="h-12 w-12 text-indigo-400" />
                    </div>

                    <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600 mb-4 tracking-tighter">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Página não encontrada
                    </h2>

                    <p className="text-lg text-slate-400 max-w-md mb-10 leading-relaxed">
                        Parece que você se perdeu no ciberespaço. A rota que você tentou acessar não existe ou foi movida.
                    </p>

                    <Button
                        size="lg"
                        className="gap-2 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all bg-white text-black hover:bg-slate-200"
                        asChild
                    >
                        <Link href="/">
                            <Home className="w-4 h-4" /> Voltar para o Início
                        </Link>
                    </Button>
                </motion.div>
            </section>

            <Footer hideContact={true} />
        </main>
    );
}
