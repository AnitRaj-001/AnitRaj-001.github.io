import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AnitRaj-001', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anitraj01/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:anitraj862002@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-neutral-950 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-3xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-2xl shadow-premium">
              AR
            </div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white mb-6"
          >
            Let's build something <span className="gradient-text">exceptional</span>.
          </motion.h3>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-neutral-100 dark:bg-white/5 text-neutral-500 hover:text-primary-500 hover:bg-white dark:hover:bg-white/10 rounded-2xl border border-transparent hover:border-neutral-200 dark:hover:border-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={link.label}
                >
                  <Icon size={22} />
                </motion.a>
              );
            })}
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-16 text-sm font-bold uppercase tracking-widest text-neutral-400">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary-500 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="w-full pt-12 border-t border-neutral-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-neutral-500 font-medium">
              © {currentYear} <span className="text-neutral-900 dark:text-white font-bold">Anit Raj</span>.
              Built with <Heart size={14} className="inline-block text-red-500 mx-1 fill-red-500" /> & Passion.
            </p>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
              <span className="flex items-center gap-2">
                <Code2 size={14} />
                Flutter & React Specialist
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 p-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl shadow-premium z-50 group overflow-hidden"
          >
            <div className="relative z-10">
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
