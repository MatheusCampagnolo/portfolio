import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: User },
        { name: 'Projects', path: '/projects', icon: Briefcase },
    ];

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className={clsx(
                    "flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300",
                    theme === 'dark'
                        ? "bg-white/10 border-white/10 shadow-black/20"
                        : "bg-black/5 border-black/5 shadow-black/5"
                )}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => clsx(
                                "relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                                isActive
                                    ? (theme === 'dark' ? "text-white" : "text-black")
                                    : (theme === 'dark' ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")
                            )}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={clsx(
                                                "absolute inset-0 rounded-full",
                                                theme === 'dark' ? "bg-white/10" : "bg-white shadow-sm"
                                            )}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <item.icon size={16} className="relative z-10" />
                                    <span className="relative z-10">{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </nav>

            <button
                onClick={toggleTheme}
                className={clsx(
                    "fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 group",
                    theme === 'dark'
                        ? "bg-white/10 text-white hover:bg-white/20"
                        : "bg-black/5 text-anthracite hover:bg-black/10"
                )}
                aria-label="Toggle Theme"
            >
                <div className="relative w-5 h-5">
                    <motion.div
                        initial={false}
                        animate={{ opacity: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : 90, scale: theme === 'dark' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Moon size={20} />
                    </motion.div>
                    <motion.div
                        initial={false}
                        animate={{ opacity: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? 0 : -90, scale: theme === 'light' ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Sun size={20} />
                    </motion.div>
                </div>
            </button>
        </>
    );
};
