import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-DEFAULT/5 dark:bg-primary-DEFAULT/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-light dark:bg-neutral-800 text-primary-DEFAULT dark:text-primary-light rounded-full text-sm font-semibold mb-4">
              My Journey
            </span>
            <h2 className="gradient-text text-4xl md:text-5xl">About Me</h2>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            variants={itemVariants}
            className="card-glass p-8 md:p-10 rounded-2xl mb-12 shadow-lg border-white/20 dark:border-neutral-700/20"
          >
            <div className="flex gap-4 items-start mb-6">
              <Sparkles className="text-primary-DEFAULT dark:text-primary-light flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  I am an enthusiastic engineering graduate with hands-on experience in <span className="font-semibold">Flutter, Android, Java, and Kotlin</span> development. Skilled in creating seamless user interfaces, integrating APIs, and delivering high-quality, scalable solutions that drive real business value.
                </p>
                
                <div className="bg-gradient-to-br from-primary-light/50 to-accent-light/50 dark:from-neutral-800 dark:to-neutral-700 border-l-4 border-primary-DEFAULT p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-white">My Development Philosophy</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                    "I believe in crafting user-centric, innovative, and scalable applications that enhance digital experiences and solve real-world problems."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-8 text-neutral-900 dark:text-white">
              <Briefcase className="text-primary-DEFAULT dark:text-primary-light" size={28} />
              Professional Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Experience 1 */}
              <motion.div
                variants={itemVariants}
                className="card-glass p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-white/20 dark:border-neutral-700/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-light dark:bg-neutral-800 rounded-lg">
                    <Briefcase className="text-primary-DEFAULT dark:text-primary-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Flutter Android Developer</h4>
                    <p className="text-sm font-semibold text-primary-DEFAULT dark:text-primary-light">Softair Technology Pvt. Ltd.</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-DEFAULT rounded-full" />
                  Oct - Dec 2024
                </p>
              </motion.div>

              {/* Experience 2 */}
              <motion.div
                variants={itemVariants}
                className="card-glass p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-white/20 dark:border-neutral-700/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-accent-light dark:bg-neutral-800 rounded-lg">
                    <Briefcase className="text-accent-DEFAULT dark:text-accent-light" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white">Junior Android Developer</h4>
                    <p className="text-sm font-semibold text-accent-DEFAULT dark:text-accent-light">Dhruv Iconic Pvt. Ltd.</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-DEFAULT rounded-full" />
                  Jan 2023 - Jan 2024
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
