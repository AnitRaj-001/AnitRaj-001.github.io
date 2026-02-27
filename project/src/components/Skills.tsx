import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Zap } from 'lucide-react';

const skills = {
  'Programming Languages': [
    { name: 'Flutter/Dart', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Kotlin', level: 80 },
    { name: 'XML', level: 85 },
    { name: 'MySQL', level: 75 },
  ],
  'Frameworks & Tools': [
    { name: 'Firebase', level: 85 },
    { name: 'Retrofit', level: 80 },
    { name: 'Volley', level: 75 },
    { name: 'Git & GitHub', level: 85 },
  ],
  'Core Concepts': [
    { name: 'OOP', level: 90 },
    { name: 'REST API', level: 85 },
    { name: 'SDLC', level: 80 },
  ],
};

const accomplishments = [
  { title: 'Performance Optimization', description: 'Improved API response time by 20% in production applications' },
  { title: 'User Retention', description: 'Increased user retention by 15% through enhanced UI/UX design' },
  { title: 'Certifications', description: 'Completed Flutter and Android Development certifications' },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref} 
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-neutral-900 dark:text-white text-sm">{name}</span>
        <span className="text-sm font-bold text-primary-DEFAULT dark:text-primary-light">{level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div
          className="skill-progress-bar"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-DEFAULT/5 dark:bg-accent-DEFAULT/3 rounded-full blur-3xl" />
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
              Technical Expertise
            </span>
            <h2 className="gradient-text text-4xl md:text-5xl">Skills & Expertise</h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="card-glass p-8 rounded-2xl shadow-lg border-white/20 dark:border-neutral-700/20 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-gradient-to-br from-primary-light to-accent-light dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
                    <Zap className="text-primary-DEFAULT dark:text-primary-light" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{category}</h3>
                </div>
                <div className="space-y-6">
                  {items.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.3 + index * 0.15}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Accomplishments Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary-DEFAULT dark:text-primary-light" size={28} />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Professional Accomplishments</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {accomplishments.map((accomplishment, index) => (
                <motion.div
                  key={accomplishment.title}
                  variants={itemVariants}
                  className="card-glass p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-white/20 dark:border-neutral-700/20 group cursor-pointer"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary-light dark:bg-neutral-800 rounded-lg group-hover:bg-primary-DEFAULT group-hover:text-white transition-colors">
                      <Award className="text-primary-DEFAULT dark:text-primary-light group-hover:text-white" size={20} />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm">{accomplishment.title}</h4>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {accomplishment.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
