import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Zap, Code2, Database, Layout, Terminal } from 'lucide-react';

const skills = {
  'Mobile Development': {
    icon: Code2,
    color: 'primary',
    items: ['Flutter', 'React Native', 'TypeScript', 'Java', 'Kotlin']
  },
  'Backend & Integration': {
    icon: Database,
    color: 'accent',
    items: ['REST APIs', 'Firebase (Auth, Firestore)', 'Push Notifications', 'Node.js (Basics)']
  },
  'State Management': {
    icon: Terminal,
    color: 'primary',
    items: ['Provider', 'Riverpod', 'Redux', 'Clean Architecture']
  },
  'Tools & Workflow': {
    icon: Layout,
    color: 'accent',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Android Studio', 'Xcode', 'CI/CD Basics']
  }
};

const accomplishments = [
  {
    title: 'Performance Lead',
    description: 'Improved API response time by 20% in production applications through efficient caching.',
    icon: Zap
  },
  {
    title: 'UX Focused',
    description: 'Increased user retention by 15% through enhanced, intuitive UI/UX design patterns.',
    icon: Layout
  },
  {
    title: 'Certified Dev',
    description: 'Successfully completed professional certifications in Flutter and Android Development.',
    icon: Award
  },
];

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary-500" />
              <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white">
              Skills & <span className="gradient-text">Abilities</span>
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {Object.entries(skills).map(([category, data]) => {
              const Icon = data.icon;
              return (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 border-white/20 dark:border-white/5 relative overflow-hidden group"
                >
                  <div className={`absolute -right-4 -top-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-${data.color}-500`}>
                    <Icon size={100} />
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-xl bg-${data.color}-500/10 text-${data.color}-600 dark:text-${data.color}-400`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-wider">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.items.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 text-sm font-semibold border border-transparent hover:border-primary-500/30 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Accomplishments */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
              <Award size={28} className="text-accent-500" />
              Accomplishments
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {accomplishments.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel p-8 border-white/20 dark:border-white/5 group hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                >
                  <item.icon size={32} className="mb-6 text-primary-500" />
                  <h4 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
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
