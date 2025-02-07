import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import profile from '../assets/profile.jpg'
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Anit Raj
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300">
              Flutter & Android Developer 
            </h2>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
              Crafting seamless mobile experiences with passion and precision
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all"
              >
                Get in Touch
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AnitRaj-001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anitraj01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <img
                src={profile}
                alt="Anit Raj"
                className="rounded-full shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-300" />
      </motion.a>
    </section>
  );
};

export default Hero;