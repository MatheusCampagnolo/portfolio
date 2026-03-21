"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, PhoneCall, Code2, Terminal, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      { prefix: "Full Stack", suffix: " Developer" },
      { prefix: "Back-End", suffix: " Developer" },
      { prefix: "Software", suffix: " Engineering" },
      { prefix: "Front-End", suffix: " Developer" },
      { prefix: "System", suffix: " Architecture" }
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black pointer-events-none" />

      <div className="z-20 w-full container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button variant="secondary" size="sm" className="gap-2 rounded-full border border-white/10 bg-white/5 text-indigo-400 hover:bg-white/10 backdrop-blur-md">
              <Rocket className="w-4 h-4" /> Disponível para novos projetos
            </Button>
          </motion.div>
          
          <div className="flex gap-4 flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl max-w-5xl tracking-tighter text-center font-bold"
            >
              <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent block mb-2">Matheus Messias</span>
              <span className="relative flex flex-col md:flex-row w-full justify-center items-center overflow-hidden text-center h-[2.5em] md:h-[1.5em] mt-2">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={titles[titleNumber].prefix}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"
                  >
                    {titles[titleNumber].prefix}
                  </motion.span>
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={titles[titleNumber].suffix}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent md:whitespace-pre"
                  >
                    {titles[titleNumber].suffix}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-400 max-w-2xl text-center mt-6"
            >
              Engenheiro de Software apaixonado por criar experiências digitais imersivas e performáticas. Especialista em Java, Node.js, React e arquitetura escalável.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0"
          >
            <Button size="lg" className="gap-2 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all" asChild>
              <Link href="/projetos">
                Ver Meus Projetos <Code2 className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-2 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all font-medium text-white backdrop-blur-md" variant="outline" asChild>
              <Link href="/contato">
                Entrar em Contato <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
