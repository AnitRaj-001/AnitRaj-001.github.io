import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 flex justify-center top-0 pt-6 transition-all duration-500 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-5xl pointer-events-auto transition-all duration-500 ${isScrolled
          ? 'glass-panel rounded-full px-6 py-2 shadow-premium'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-poppins font-black gradient-text tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            ANIT.
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 px-4 rounded-full hover:bg-neutral-100/50 dark:hover:bg-white/5"
                whileHover={{ y: -1 }}
              >
                {item.name}
              </motion.a>
            ))}

            <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 mx-2" />

            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-slate-600" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600" />}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden glass-panel mt-4 p-4 rounded-3xl absolute left-4 right-4"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="font-semibold text-neutral-700 dark:text-neutral-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-xl px-4 py-3 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
