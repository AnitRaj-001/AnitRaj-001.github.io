import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'anitraj862002@gmail.com', link: 'mailto:anitraj862002@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'AnitRaj-001', link: 'https://github.com/AnitRaj-001' },
    { icon: Linkedin, label: 'LinkedIn', value: 'anitraj01', link: 'https://www.linkedin.com/in/anitraj01/' },
  ];

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
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Side: Info */}
            <div className="lg:col-span-5">
              <motion.div variants={itemVariants} className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary-500" />
                  <span className="text-primary-600 dark:text-primary-400 font-bold tracking-widest uppercase text-xs">Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-8">
                  Let's <span className="gradient-text">Talk</span>
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
                  Have a specific project in mind or just want to explore potential collaborations? I'm always open to discussing new opportunities and innovative ideas.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-0.5">{info.label}</p>
                        <p className="font-bold text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors uppercase tracking-tight">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <div className="glass-card p-8 md:p-12 border-white/20 dark:border-white/5 relative overflow-hidden group">
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-neutral-100 dark:bg-white/5 border border-transparent focus:border-primary-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none transition-all placeholder:text-neutral-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-100 dark:bg-white/5 border border-transparent focus:border-primary-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none transition-all placeholder:text-neutral-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Exploration"
                      className="w-full bg-neutral-100 dark:bg-white/5 border border-transparent focus:border-primary-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none transition-all placeholder:text-neutral-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500 ml-1">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or vision..."
                      rows={6}
                      className="w-full bg-neutral-100 dark:bg-white/5 border border-transparent focus:border-primary-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white outline-none transition-all placeholder:text-neutral-400 resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-premium w-full group overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 py-1">
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare size={150} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
