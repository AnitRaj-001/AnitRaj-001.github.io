import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, ArrowUpRight } from 'lucide-react';

import addjery from '../assets/adjerry.jpg'
import nexttour from '../assets/next tour.jpg'
import mercytv from '../assets/mercy_tv.png'
import cashpey from '../assets/cashpey.png'
import playpalPoster from '../assets/playpalPoster.png'
import sampark_banner from '../assets/sampark_banner.png';
import yorastro_banner from '../assets/yorastro_banner.png';

const projects = [
  {
    title: 'CashPey',
    category: 'FinTech',
    description: 'India’s Own Loan App. A digital lending platform for instant personal loans with a secure, paperless process. Focuses on compliance and performance optimization.',
    image: cashpey,
    github: 'https://play.google.com/store/apps/details?id=com.cashpey',
    technologies: ['React Native', 'KYC', 'FinTech', 'Security'],
    highlights: ['Instant Loans', 'Paperless KYC', 'Secure Auth'],
  },
  {
    title: 'Sampark',
    category: 'Communication',
    description: 'A modern real-time chat application designed for seamless communication. Sampark offers instant messaging, easy connections, and a clean user experience with a focus on performance and privacy.',
    image: sampark_banner,
    github: 'https://samparkchat.netlify.app/',
    technologies: ['React Native', 'Realtime Chat', 'Firebase/Sockets', 'UI/UX'],
    highlights: ['Real-time Messaging', 'Clean UI', 'Fast & Lightweight', 'Secure Chats'],
  },
  {
    title: 'YorAstro',
    category: 'Astrology',
    description: 'A complete astrology platform providing personalized horoscopes, kundli insights, and live astrologer consultations. Designed to deliver accurate predictions with a smooth and engaging user experience.',
    image: yorastro_banner,
    github: 'https://play.google.com/store/apps/details?id=com.yorastro.user&hl=en_IN',
    technologies: ['React Native', 'Astrology APIs', 'Realtime Chat', 'Payments'],
    highlights: ['Daily Horoscope', 'Kundli & Birth Chart', 'Live Astrologer Chat', 'Pooja Booking'],
  },
  {
    title: 'PlayPal Stream',
    category: 'Streaming & OTT',
    description: 'An all-in-one streaming powerhouse delivering movies, TV series, anime, and 700+ live channels. Engineered for high performance with a clean, intuitive UI for seamless navigation on any device.',
    image: playpalPoster,
    github: 'https://playpalstream.netlify.app/',
    technologies: ['React Native', 'HLS/DASH', 'Node.js', 'WebRTC'],
    highlights: ['700+ Live Channels', 'Multi-Language', 'Ad-Free Experience'],
  },
  {
    title: 'Mercy TV',
    category: 'OTT & Media',
    description: 'High-performance streaming platform available on Play Store, App Store, and Android TV. Features a cinematic UI and seamless VOD experience.',
    image: mercytv,
    github: 'https://play.google.com/store/apps/details?id=com.mercyott.app',
    technologies: ['Flutter', 'Android TV SDK', 'OTT', 'VOD'],
    highlights: ['Multi-platform', 'Cinematic UI', 'Live Streaming'],
  },
  {
    title: 'AdJerry Promotion',
    category: 'Mobile Application',
    description: 'A comprehensive 56-screen Flutter application featuring RESTful API integration and high-performance animations. Designed to maximize user engagement through intuitive flows.',
    image: addjery,
    github: 'https://github.com/AnitRaj-001',
    technologies: ['Flutter', 'Dart', 'REST API', 'Firebase'],
    highlights: ['56+ Screens', 'Real-time Analytics', 'Optimized UX'],
  },
  {
    title: 'NextTour Guide',
    category: 'Travel & Management',
    description: 'A sophisticated 24-screen travel management platform with real-time Google Maps integration and geolocation services. Built for scale and reliability.',
    image: nexttour,
    github: 'https://nxttour.in/',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Geolocation'],
    highlights: ['Map Integration', 'Live Syncing', '1000+ Users'],
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
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950/20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Code2 size={14} />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white">
              Selected <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="relative -mx-6 px-6 lg:-mx-12 lg:px-12">
            <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-8 lg:gap-12 pb-12 pt-4">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[560px] snap-center group relative"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-premium group-hover:shadow-premium-hover transition-all duration-500">
                    <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Floating Tech Tags */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* External Link Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                        <ArrowUpRight size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="px-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-primary-500 font-bold text-xs uppercase tracking-widest mb-1">{project.category}</p>
                        <h3 className="text-2xl lg:text-3xl font-black text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors uppercase">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-primary-500 transition-colors underline decoration-2 underline-offset-8 decoration-primary-500/30 hover:decoration-primary-500"
                      >
                        <ArrowUpRight size={18} />
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-24 p-12 glass-panel border-white/20 dark:border-white/5 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Looking for something specific?</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto italic">
                "Each project is a unique challenge solved through modern architecture and clean code. Check out my GitHub for more exploration into cross-platform and web development."
              </p>
              <a href="https://github.com/AnitRaj-001" target="_blank" rel="noopener noreferrer" className="btn-premium">
                Explore All Projects
              </a>
            </div>

            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Code2 size={200} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
