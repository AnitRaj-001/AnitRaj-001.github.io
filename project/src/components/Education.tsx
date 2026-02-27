import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Galgotias University',
    year: '2024 — Present',
    score: 'Maintaining Excellence',
    color: 'primary',
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: 'IMS Noida',
    year: '2020 — 2023',
    score: '65.6%',
    color: 'accent',
  },
  {
    degree: 'Intermediate (XII)',
    institution: 'CBSE Board',
    year: '2017 — 2019',
    score: '66.7%',
    color: 'primary',
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent-500" />
              <span className="text-accent-600 dark:text-accent-400 font-bold tracking-widest uppercase text-xs">Learning Path</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative pl-8 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/10" />

            {/* Education Items */}
            <div className="space-y-16">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-8 flex flex-col items-center">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-neutral-50 dark:border-neutral-950 bg-${item.color}-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]`}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="w-full md:w-[45%]">
                    <motion.div
                      className="glass-card p-8 border-white/20 dark:border-white/5 shadow-premium hover:shadow-premium-hover group"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 group-hover:bg-${item.color}-500 group-hover:text-white transition-all duration-300`}>
                          <GraduationCap size={24} />
                        </div>
                        <div>
                          <p className={`text-xs font-bold text-${item.color}-600 dark:text-${item.color}-400 uppercase tracking-widest`}>
                            {item.institution}
                          </p>
                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                            {item.degree}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-6 border-t border-neutral-100 dark:border-white/5">
                        <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
                          <Calendar size={14} className="text-primary-500" />
                          {item.year}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
                          <Award size={14} className="text-accent-500" />
                          <span className="font-bold text-neutral-900 dark:text-white">{item.score}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for alternative layout */}
                  <div className="hidden md:block w-[45%]" />
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
