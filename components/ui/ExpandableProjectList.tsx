"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableProjectListProps {
    projects: any[];
    renderCard: (project: any, index: number) => React.ReactNode;
    initialCount?: number;
}

export function ExpandableProjectList({ projects, renderCard, initialCount = 3 }: ExpandableProjectListProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const showButton = projects.length > initialCount;

    const visibleProjects = isExpanded ? projects : projects.slice(0, initialCount);
    const hiddenCount = projects.length - initialCount;

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence initial={false}>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            layout
                        >
                            {renderCard(project, index)}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {showButton && !isExpanded && (
                <div className="absolute -bottom-16 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10 flex items-end justify-center pb-8">
                    {/* Subtle representation of upcoming cards via glowing top borders */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 blur-sm" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 blur-sm" />
                </div>
            )}

            {showButton && (
                <div className={cn("mt-12 flex justify-center", !isExpanded && "relative z-20")}>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-slate-300 hover:text-white backdrop-blur-md"
                    >
                        {isExpanded ? (
                            <>
                                Ocultar Projetos
                                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                Ver Mais Projetos ({hiddenCount})
                                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
