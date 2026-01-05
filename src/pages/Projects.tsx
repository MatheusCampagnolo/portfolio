import { motion } from 'framer-motion';
import { BiLogoGithub, BiLinkExternal, BiBox, BiShield, BiAnchor, BiServer } from 'react-icons/bi';
import { SiNpm } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

const projects = [
    {
        title: 'Kaelum.js',
        image: '',
        desc: 'Minimalist Node.js framework abstracting Express.js for rapid API development.',
        icon: BiBox,
        repo: 'https://github.com/MatheusCampagnolo/kaelum',
        deploy: 'https://matheuscampagnolo.github.io/kaelum/',
        npm: 'https://www.npmjs.com/package/kaelum'
    },
    {
        title: 'Nautilis',
        image: '',
        desc: 'Interactive ocean education platform built for the IFCiência 2025 project.',
        icon: BiAnchor,
        repo: 'https://github.com/MatheusCampagnolo/nautilis',
        deploy: 'https://nautilis.vercel.app/',
        npm: null
    },
    {
        title: 'TechSentinel',
        image: '',
        desc: 'Real-time hardware and privacy monitoring desktop app using Electron & Python.',
        icon: BiShield,
        repo: 'https://github.com/MatheusCampagnolo/tech-sentinel',
        deploy: null,
        npm: null
    },
    {
        title: 'ShelterMap API',
        image: '',
        desc: 'Backend API for ShelterMap managing authentication, shelters, and needs using PostgreSQL.',
        icon: BiServer,
        repo: 'https://github.com/MatheusCampagnolo/ShelterMap-backend',
        deploy: null,
        npm: null
    }
];

export default function Projects() {
    const { theme } = useTheme();


    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-6 md:p-20 overflow-y-auto custom-scrollbar">

            <div
                className="max-w-2xl w-full pt-20 pb-20"
            >
                <div className="flex flex-col gap-5">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            whileHover={{ y: -2 }}
                            className={clsx(
                                "group relative p-5 md:p-6 rounded-2xl border transition-all duration-300 w-full",
                                theme === 'dark'
                                    ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                                    : "bg-white border-black/5 shadow-sm hover:shadow-md"
                            )}
                        >
                            <div className="flex flex-col md:flex-row gap-5 md:items-start">
                                {/* Icon or Image */}
                                <div className="shrink-0">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-12 h-12 min-w-[3rem] rounded-xl object-cover border border-black/5"
                                        />
                                    ) : (
                                        <div className={clsx(
                                            "w-12 h-12 min-w-[3rem] rounded-xl flex items-center justify-center transition-colors",
                                            theme === 'dark' ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-600"
                                        )}>
                                            <project.icon size={24} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className={clsx("text-xl font-bold mb-1", theme === 'dark' ? "text-white" : "text-anthracite")}>
                                        {project.title}
                                    </h3>
                                    <p className={clsx("text-sm leading-relaxed mb-4", theme === 'dark' ? "text-pearl/70" : "text-anthracite/70")}>
                                        {project.desc}
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        {project.deploy && (
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={clsx(
                                                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                                                    theme === 'dark'
                                                        ? "bg-white text-black hover:bg-white/90"
                                                        : "bg-black text-white hover:bg-black/80"
                                                )}
                                            >
                                                <BiLinkExternal size={14} /> Visit
                                            </a>
                                        )}

                                        {/* Spacer to push Code/NPM to the right */}
                                        <div className="ml-auto flex items-center gap-3">
                                            {project.npm && (
                                                <a
                                                    href={project.npm}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={clsx(
                                                        "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border",
                                                        theme === 'dark'
                                                            ? "bg-red-600/10 border-red-500/50 text-red-400 hover:bg-red-600/20"
                                                            : "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                                                    )}
                                                >
                                                    <SiNpm size={18} /> NPM
                                                </a>
                                            )}

                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={clsx(
                                                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors",
                                                    theme === 'dark'
                                                        ? "border-white/20 text-white hover:bg-white/10"
                                                        : "border-black/10 text-anthracite hover:bg-black/5"
                                                )}
                                            >
                                                <BiLogoGithub size={16} /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
