import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Sparkles, User, Target } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
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
              <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white">
              Behind the <span className="gradient-text">Developer</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Biography */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="glass-card p-8 md:p-10 border-white/20 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <User size={120} />
                </div>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="text-primary-500" size={24} />
                  Professional Narrative
                </h3>

                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  I am a high-performance <span className="text-neutral-900 dark:text-white font-bold">Mobile Solutions Architect</span> specializing in building production-ready apps that scale. My focus lies at the intersection of complex systems engineering and elite-level user experience.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Leveraging <span className="text-neutral-900 dark:text-white font-bold">Clean Architecture</span> and robust state management patterns, I deliver maintainable codebases that empower startups and enterprises. I don't just build apps; I engineer digital assets for long-term growth.
                </p>

                <div className="mt-10 pt-10 border-t border-neutral-200 dark:border-white/10 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-black gradient-text">2+</p>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-tighter">Years Engineering</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black gradient-text">15+</p>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-tighter">Production Apps</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Target/Goal */}
            <motion.div variants={itemVariants} className="lg:col-span-5 h-full">
              <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center bg-gradient-to-br from-primary-600 to-accent-600 text-white border-0 shadow-premium">
                <Target size={40} className="mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">Core Philosophy</h3>
                <p className="text-lg opacity-90 leading-relaxed italic">
                  "I prioritize architectural integrity and performance over simple functionality. My mission is to engineer mobile experiences that are infinitely scalable, uncompromisingly secure, and visually breathtaking."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Professional Experience */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
              <Briefcase size={28} className="text-primary-500" />
              Work Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  role: "APP Developer",
                  company: "NEXTBIGBOX private limited",
                  period: "Aug 2025 - Present",
                  color: "primary"
                },
                {
                  role: "Flutter Android Developer",
                  company: "Softair Technology Pvt. Ltd.",
                  period: "Oct - Dec 2024",
                  color: "accent"
                },
                {
                  role: "Junior Android Developer",
                  company: "Dhruv Iconic Pvt. Ltd.",
                  period: "Jan 2023 - Jan 2024",
                  color: "accent"
                }
              ].map((exp) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-6 md:p-8 border-white/20 dark:border-white/5 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl bg-${exp.color}-500/10 text-${exp.color}-600 dark:text-${exp.color}-400 group-hover:bg-${exp.color}-500 group-hover:text-white transition-all duration-300`}>
                      <Briefcase size={24} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">{exp.role}</h4>
                  <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-bold text-sm`}>{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
