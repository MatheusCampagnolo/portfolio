"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSpringboot, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiDocker, SiGit } from "react-icons/si";

const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Python", icon: FaPython, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Docker", icon: SiDocker, color: "text-blue-600" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
];

export function Stack() {
  return (
    <section className="py-20 bg-black/80 overflow-hidden relative">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-300 to-slate-500 mb-4">
          Tech Stack
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Ferramentas modernas que utilizo para criar soluções escaláveis e robustas.
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        <div className="absolute inset-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 z-10 w-20 h-full bg-gradient-to-l from-black to-transparent" />
        
        <motion.div
          className="flex min-w-full gap-8 py-8"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] gap-3 group relative"
            >
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 transform group-hover:scale-110">
                <tech.icon className={`w-10 h-10 ${tech.color} transition-colors duration-300`} />
              </div>
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
