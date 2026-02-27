import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'IMS Noida',
    year: '2020-2023',
    score: '65.6%',
    color: 'from-primary-DEFAULT to-primary-dark',
    lightColor: 'bg-primary-light dark:bg-neutral-800',
  },
  {
    degree: 'Intermediate',
    institution: 'CBSE',
    year: '2017-2019',
    score: '66.7%',
    color: 'from-accent-DEFAULT to-accent-dark',
    lightColor: 'bg-accent-light dark:bg-neutral-800',
  },
  {
    degree: 'Matriculation',
    institution: 'CBSE',
    year: '2017',
    score: '9 CGPA',
    color: 'from-primary-DEFAULT to-accent-DEFAULT',
    lightColor: 'bg-neutral-100 dark:bg-neutral-800',
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-DEFAULT/5 dark:bg-accent-DEFAULT/3 rounded-full blur-3xl" />
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
            <span className="inline-block px-4 py-2 bg-accent-light dark:bg-neutral-800 text-accent-DEFAULT dark:text-accent-light rounded-full text-sm font-semibold mb-4">
              Learning Journey
            </span>
            <h2 className="gradient-text text-4xl md:text-5xl">Education</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-DEFAULT via-accent-DEFAULT to-primary-DEFAULT rounded-full" />

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  variants={itemVariants}
                  className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="card-glass p-8 rounded-2xl shadow-lg border-white/20 dark:border-neutral-700/20 hover:shadow-xl transition-shadow duration-300 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3.5 rounded-lg ${item.lightColor}`}>
                          <GraduationCap className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                            {item.degree}
                          </h3>
                          <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <BookOpen size={16} className="text-primary-DEFAULT" />
                          <span>{item.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} className={`bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                          <span className="font-bold bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT bg-clip-text text-transparent">
                            {item.score}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex justify-center md:w-auto my-6 md:my-0">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 border-white dark:border-neutral-900 bg-gradient-to-br ${item.color} shadow-lg z-20`}
                      whileHover={{ scale: 1.3 }}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
