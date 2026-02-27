import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown, ArrowRight } from 'lucide-react';
import profile from '../assets/profile.jpg'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-DEFAULT/10 dark:bg-primary-DEFAULT/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-DEFAULT/10 dark:bg-accent-DEFAULT/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-light dark:bg-neutral-800 text-primary-DEFAULT dark:text-primary-light rounded-full text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-pretty"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Anit Raj</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4"
            >
              Flutter & Android Developer
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-xl"
            >
              I craft seamless, high-performance mobile experiences with cutting-edge technologies. Passionate about clean code, intuitive design, and delivering scalable solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#projects"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/AnitRaj-001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary-DEFAULT dark:hover:border-primary-DEFAULT text-neutral-700 dark:text-neutral-300 hover:text-primary-DEFAULT dark:hover:text-primary-light hover:bg-primary-light/10 dark:hover:bg-primary-DEFAULT/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/anitraj01/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-accent-DEFAULT dark:hover:border-accent-DEFAULT text-neutral-700 dark:text-neutral-300 hover:text-accent-DEFAULT dark:hover:text-accent-light hover:bg-accent-light/10 dark:hover:bg-accent-DEFAULT/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="lg:w-1/2 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-DEFAULT to-accent-DEFAULT rounded-3xl blur-2xl opacity-30" />
                <img
                  src={profile}
                  alt="Anit Raj"
                  className="relative w-full h-full rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Scroll to explore</p>
          <ChevronDown size={28} className="text-primary-DEFAULT dark:text-primary-light" />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
