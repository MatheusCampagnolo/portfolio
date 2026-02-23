"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const items = [
  "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-emerald-400 to-cyan-400",
  "bg-gradient-to-br from-orange-400 to-rose-400",
  "bg-gradient-to-br from-blue-600 to-indigo-600",
  "bg-gradient-to-br from-fuchsia-500 to-purple-600",
  "bg-gradient-to-br from-lime-400 to-emerald-500",
  "bg-gradient-to-br from-rose-500 to-pink-500",
  "bg-gradient-to-br from-sky-400 to-blue-500",
];

function Mockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-slate-950 shadow-2xl",
        className
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-20 h-[18px] w-[40%] -translate-x-1/2 rounded-b-xl bg-slate-800" />

      {/* Screen Content */}
      <div className="h-full w-full bg-slate-900 p-2">
        {/* Simulate UI */}
        <div className="flex h-full flex-col gap-2 animate-pulse">
          <div className="h-32 w-full rounded-xl bg-white/5" />
          <div className="h-8 w-3/4 rounded-lg bg-white/10" />
          <div className="h-4 w-1/2 rounded bg-white/5" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-24 rounded-lg bg-white/5" />
            <div className="h-24 rounded-lg bg-white/5" />
          </div>
          <div className="mt-auto h-12 w-full rounded-full bg-indigo-500/20" />
        </div>
      </div>

      {/* Reflection/Glare */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50" />
    </div>
  );
}

function Column({
  items,
  className,
  duration = 20,
  reverse = false,
}: {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className={cn("relative flex h-full w-full flex-col overflow-hidden", className)}>
      <motion.div
        className="flex flex-col gap-8 py-4"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((color, i) => (
          <div key={i} className="relative w-full px-2">
            <Mockup className={cn("border-slate-800/50", color.replace("bg-gradient", "border-t-4 border-t-transparent"))} />
            {/* Overlay actual gradient on the screen area if desired, or just keep the mockup style */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay rounded-[2rem] mx-2 mt-[4px]" style={{ background: 'linear-gradient(to bottom, transparent, black)' }}></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-20">

      {/* Background Animated Columns */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 gap-4 opacity-70 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 rotate-0 scale-105 transform-gpu blur-[2px]">
        <Column items={items} duration={35} />
        <Column items={items} duration={45} reverse />
        <Column items={items} duration={40} className="hidden md:flex" />
        <Column items={items} duration={50} reverse className="hidden lg:flex" />
        <Column items={items} duration={38} className="hidden xl:flex" />
      </div>

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black" />

      {/* Content */}
      <div className="z-20 flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-400 backdrop-blur-md">
            Disponível para novos projetos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl md:text-8xl"
        >
          Matheus Messias
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-base text-slate-400 sm:text-xl"
        >
          Desenvolvedor Full Stack apaixonado por criar experiências digitais imersivas e performáticas. Especialista em Java, Node.js, React e arquitetura escalável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/projetos"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-black font-bold hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Ver Meus Projetos
          </Link>
          <Link
            href="/contato"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all font-medium text-white backdrop-blur-md"
          >
            Entrar em Contato
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
