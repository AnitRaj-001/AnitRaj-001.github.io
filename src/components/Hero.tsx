import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import profile from '../assets/profile.jpg'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center mesh-bg relative pt-20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12 lg:py-0">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold tracking-widest uppercase border border-primary-200 dark:border-primary-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight"
            >
              Mobile Application <br />
              <span className="gradient-text">Developer</span> <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-500 block mt-2">Flutter & React Native Specialist</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl leading-relaxed"
            >
              Architecting <span className="font-bold text-neutral-900 dark:text-white">scalable, production-ready</span> mobile solutions. Expert in clean architecture, performance optimization, and seamless API integrations for high-growth startups and enterprises.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-5 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                className="btn-premium group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Connect
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/Anit_Resume.pdf"
                download="Anit_Resume.pdf"
                className="px-8 py-4 bg-white dark:bg-white/5 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/AnitRaj-001", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/anitraj01/", label: "LinkedIn" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-100 dark:bg-white/5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-white/10 border border-transparent hover:border-neutral-200 dark:hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <motion.div
            className="order-1 lg:order-2 flex items-center justify-center relative"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />

              <motion.div
                className="relative z-10 w-full h-full rounded-full overflow-hidden"
                initial={{ rotate: 3 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <img
                  src={profile}
                  alt="Anit Raj"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Stats/Badge Cards */}
              <motion.div
                className="absolute -right-6 bottom-12 glass-card p-4 flex items-center gap-3 z-20"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-500">Status</p>
                  <p className="text-sm font-bold">App Developer @ NEXTBIGBOX</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 group-hover:text-primary-500 transition-colors">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-primary-500 rounded-full" />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;