import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Programming Languages': [
    { name: 'Flutter/Dart', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Kotlin', level: 80 },
    { name: 'XML', level: 85 },
    { name: 'MySQL', level: 75 },
  ],
  'Frameworks/Tools': [
    { name: 'Firebase', level: 85 },
    { name: 'Retrofit', level: 80 },
    { name: 'Volley', level: 75 },
    { name: 'Git & GitHub', level: 85 },
  ],
  'Concepts': [
    { name: 'OOP', level: 90 },
    { name: 'REST API', level: 85 },
    { name: 'SDLC', level: 80 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div
          className="skill-progress-bar"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                {items.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + index * 0.1}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Professional Accomplishments</h3>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start"
              >
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                <p>Improved API response time by 20% in an internal app project</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start"
              >
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                <p>Increased user retention by 15% through enhanced UI/UX design</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start"
              >
                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 mr-3" />
                <p>Completed Flutter and Android Development certifications</p>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;