import React from 'react';
import { DotGrid } from '../components/DotGrid';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

import {
    BiLogoReact,
    BiLogoTypescript,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoJava,
    BiLogoSpringBoot,
    BiLogoPython
} from 'react-icons/bi';

const TechIconWrapper: React.FC<{ name: string; children: React.ReactNode }> = ({ name, children }) => (
    <div className="flex flex-col items-center gap-2 group cursor-default" title={name}>
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/10">
            {children}
        </div>
        {/* Screen reader only label */}
        <span className="sr-only">{name}</span>
    </div>
);

export default function Home() {
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const techStack = [
        { name: 'React', icon: BiLogoReact },
        { name: 'TypeScript', icon: BiLogoTypescript },
        { name: 'JavaScript', icon: BiLogoJavascript },
        { name: 'Node.js', icon: BiLogoNodejs },
        { name: 'Java', icon: BiLogoJava },
        { name: 'Spring Boot', icon: BiLogoSpringBoot },
        { name: 'Python', icon: BiLogoPython },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-start px-8 md:px-20 lg:px-32">
            {/* Background */}
            <DotGrid />

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col gap-6 max-w-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants}>
                    <h2 className={clsx(
                        "text-2xl md:text-3xl font-light tracking-wide",
                        theme === 'dark' ? "text-pearl/80" : "text-anthracite/80"
                    )}>
                        Hi there! I'm
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <h1 className={clsx(
                        "text-5xl md:text-7xl font-bold tracking-tight mb-2",
                        theme === 'dark' ? "text-white" : "text-black"
                    )}>
                        Matheus Messias
                    </h1>
                    <div className={clsx(
                        "h-2 w-24 rounded-full",
                        theme === 'dark' ? "bg-white" : "bg-black"
                    )} />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <p className={clsx(
                        "text-xl md:text-2xl font-mono",
                        theme === 'dark' ? "text-blue-300" : "text-blue-600"
                    )}>
                        Full Stack Developer &lt;/&gt;
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-8">
                    <div className="flex flex-wrap gap-6">
                        {techStack.map((tech) => (
                            <TechIconWrapper key={tech.name} name={tech.name}>
                                <tech.icon size={28} className={clsx("transition-colors duration-300", theme === 'dark' ? "text-white" : "text-black")} />
                            </TechIconWrapper>
                        ))}
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}
