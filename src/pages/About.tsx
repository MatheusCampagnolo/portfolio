
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export default function About() {
    const { theme } = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
    };

    return (
        <motion.div
            className="w-full h-full flex items-center justify-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                variants={itemVariants}
                className={clsx(
                    "relative p-8 md:p-12 rounded-3xl max-w-lg w-full flex flex-col items-center text-center shadow-2xl backdrop-blur-lg border",
                    theme === 'dark'
                        ? "bg-white/5 border-white/10"
                        : "bg-white/40 border-white/20"
                )}
            >
                {/* Profile Image */}
                <div className="relative mb-6">
                    <div className={clsx(
                        "w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4",
                        theme === 'dark' ? "border-white/10" : "border-white/50"
                    )}>
                        <img
                            src="https://media.licdn.com/dms/image/v2/D4D03AQG3wtgu5YlXnw/profile-displayphoto-scale_400_400/B4DZtx4a7sK0Ag-/0/1767142176659?e=1773273600&v=beta&t=e-mNwRf5G2j8OQ92GQLnoM1_sub8CMmT4Pr6N3ZIHMc"
                            alt="Matheus Messias"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#111111]" />
                </div>

                <h2 className={clsx(
                    "text-3xl font-bold mb-2",
                    theme === 'dark' ? "text-white" : "text-anthracite"
                )}>
                    Matheus Messias
                </h2>

                <p className={clsx(
                    "font-mono text-sm mb-6",
                    theme === 'dark' ? "text-blue-300" : "text-blue-600"
                )}>
                    Full Stack Developer
                </p>

                <p className={clsx(
                    "text-base leading-relaxed mb-8",
                    theme === 'dark' ? "text-pearl/80" : "text-anthracite/80"
                )}>
                    Turning complex problems into elegant, high-performance solutions.
                    Dedicated to architecting and building complete, scalable systems across the entire stack, from robust back-ends to intuitive user interfaces.
                </p>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a href="https://github.com/MatheusCampagnolo" target="_blank" rel="noopener noreferrer"
                        className={clsx("transition-transform hover:scale-110", theme === 'dark' ? "text-white hover:text-blue-300" : "text-anthracite hover:text-blue-600")}>
                        <Github size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-campagnolo/" target="_blank" rel="noopener noreferrer"
                        className={clsx("transition-transform hover:scale-110", theme === 'dark' ? "text-white hover:text-blue-300" : "text-anthracite hover:text-blue-600")}>
                        <Linkedin size={28} />
                    </a>
                    <a href="mailto:campagno.matheus@gmail.com"
                        className={clsx("transition-transform hover:scale-110", theme === 'dark' ? "text-white hover:text-blue-300" : "text-anthracite hover:text-blue-600")}>
                        <Mail size={28} />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
