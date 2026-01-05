import { Navbar } from './Navbar';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
    const { theme } = useTheme();
    const location = useLocation();

    return (
        <div
            className={clsx(
                'w-screen h-[100dvh] overflow-hidden transition-colors duration-500 ease-in-out relative',
                theme === 'dark' ? 'bg-graphite-dark text-pearl' : 'bg-off-white text-anthracite'
            )}
        >
            <Navbar />

            <main className="w-full h-full relative">
                {/* Page Transitions */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={location.pathname}
                        className="w-full h-full absolute top-0 left-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};
