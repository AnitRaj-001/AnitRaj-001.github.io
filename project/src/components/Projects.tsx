import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2, Zap } from 'lucide-react';

import addjery from '../assets/adjerry.jpg'
import nexttour from '../assets/next tour.jpg'

const projects = [
  {
    title: 'Online Ad Promotion App',
    description: '56-screen Flutter application with RESTful APIs and smooth animations. Increased user engagement by 20% through intuitive UI design and optimized performance.',
    image: addjery,
    github: 'https://github.com/AnitRaj-001',
    technologies: ['Flutter', 'Dart', 'REST API', 'Firebase'],
    highlights: ['56 Screens', 'Real-time Analytics', 'High Performance'],
  },

  {
    title: 'Travel Guide and Management App',
    description: '24-screen Flutter app with real-time API integration and Google Maps. Optimized performance and scalability for 1000+ concurrent users.',
    image: nexttour,
    github: 'https://github.com/AnitRaj-001',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Geolocation'],
    highlights: ['Location Services', 'Real-time Sync', 'Scalable'],
  },
];

const Projects = () => {
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
    <section id="projects" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-DEFAULT/5 dark:bg-primary-DEFAULT/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-light dark:bg-neutral-800 text-primary-DEFAULT dark:text-primary-light rounded-full text-sm font-semibold mb-4">
              Case Studies
            </span>
            <h2 className="gradient-text text-4xl md:text-5xl">Featured Projects</h2>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={containerVariants} className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                whileHover={{ y: -8 }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-primary-DEFAULT text-white text-sm font-bold rounded-full shadow-lg">
                    Featured
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <motion.span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-light dark:bg-neutral-700 text-primary-DEFAULT dark:text-primary-light text-xs font-semibold rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Zap size={14} />
                        {highlight}
                      </motion.span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-2">
                      <Code2 size={16} />
                      TECHNOLOGIES
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-accent-light dark:bg-neutral-700 text-accent-DEFAULT dark:text-accent-light rounded-lg border border-accent-DEFAULT/20 dark:border-accent-DEFAULT/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-light dark:bg-neutral-700 text-primary-DEFAULT dark:text-primary-light hover:bg-primary-DEFAULT hover:text-white dark:hover:bg-primary-DEFAULT dark:hover:text-white rounded-lg font-semibold transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:border-primary-DEFAULT hover:text-primary-DEFAULT dark:hover:border-primary-DEFAULT dark:hover:text-primary-light rounded-lg font-semibold transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={18} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
