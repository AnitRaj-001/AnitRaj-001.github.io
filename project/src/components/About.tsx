import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                I am an enthusiastic engineering graduate with hands-on experience in Flutter, Android, Java, and Kotlin development. Skilled in creating seamless user interfaces, integrating APIs, and delivering high-quality, scalable solutions.
              </p>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold mb-3">My Development Philosophy</h3>
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "I believe in crafting user-centric, innovative, and scalable applications that enhance digital experiences."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <h3 className="text-xl font-semibold mb-2">Flutter Android Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Softair Technology Pvt. Ltd.</p>
                <p className="text-sm text-gray-500">Oct-Dec 2024</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot" />
                <h3 className="text-xl font-semibold mb-2"> Junior Android Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">Dhruv Iconic Pvt. Ltd.</p>
                <p className="text-sm text-gray-500">Jan 2023-Jan 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;