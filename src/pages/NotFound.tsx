import { DotGrid } from '../components/DotGrid';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    const { theme } = useTheme();

    return (
        <div className="relative w-full h-full flex items-center justify-center p-8">
            {/* Background */}
            <DotGrid />

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center gap-6 text-center max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className={clsx(
                    "text-8xl font-bold tracking-tight",
                    theme === 'dark' ? "text-white" : "text-black"
                )}>
                    404
                </h1>

                <div className={clsx(
                    "h-2 w-32 rounded-full",
                    theme === 'dark' ? "bg-white" : "bg-black"
                )} />

                <h2 className={clsx(
                    "text-2xl md:text-3xl font-light",
                    theme === 'dark' ? "text-pearl/80" : "text-anthracite/80"
                )}>
                    Page not found
                </h2>

                <p className={clsx(
                    "text-lg",
                    theme === 'dark' ? "text-pearl/60" : "text-anthracite/60"
                )}>
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className={clsx(
                        "mt-4 flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300",
                        theme === 'dark'
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                    )}
                >
                    <Home size={20} />
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}
