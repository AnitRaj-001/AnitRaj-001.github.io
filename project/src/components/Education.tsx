import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'IMS Noida',
    year: '2020-2023',
    score: '65.6%',
  },
  {
    degree: 'Intermediate',
    institution: 'CBSE',
    year: '2017-2019',
    score: '66.7%',
  },
  {
    degree: 'Matriculation',
    institution: 'CBSE',
    year: '2017',
    score: '9 CGPA',
  },
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-start gap-4"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <GraduationCap className="text-blue-500 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{item.year}</span>
                    <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                      {item.score}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;