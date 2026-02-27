import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white relative overflow-hidden border-t border-neutral-800">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-DEFAULT/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-DEFAULT/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-3">AR</h3>
              <p className="text-neutral-400 mb-6">
                Building innovative mobile solutions with Flutter and Android. Let's create something extraordinary together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-800 hover:bg-primary-DEFAULT text-neutral-400 hover:text-white rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-light transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-DEFAULT rounded-full group-hover:scale-150 transition-transform" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6">Let's Work Together</h4>
              <p className="text-neutral-400 mb-6">
                Ready to bring your ideas to life? Let's collaborate and create something amazing.
              </p>
              <motion.a
                href="#contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-800 my-8" />

          {/* Bottom Footer */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">Anit Raj</span>. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT text-white rounded-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

// Import AnimatePresence from framer-motion
import { AnimatePresence } from 'framer-motion';

export default Footer;
