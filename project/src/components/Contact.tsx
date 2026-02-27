import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin, Phone } from 'lucide-react';

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
    // Form submission logic here
    console.log(formData);
  };

  const contactMethods = [
    { icon: Mail, label: 'Email', value: 'anitraj862002@gmail.com', link: 'mailto:anitraj862002@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/AnitRaj-001', link: 'https://github.com/AnitRaj-001' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/anitraj01', link: 'https://www.linkedin.com/in/anitraj01/' },
  ];

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
    <section id="contact" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-DEFAULT/5 dark:bg-primary-DEFAULT/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-DEFAULT/5 dark:bg-accent-DEFAULT/3 rounded-full blur-3xl" />
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
            <span className="inline-block px-4 py-2 bg-primary-light dark:bg-neutral-800 text-primary-DEFAULT dark:text-primary-light rounded-full text-sm font-semibold mb-4">
              Let's Connect
            </span>
            <h2 className="gradient-text text-4xl md:text-5xl mb-4">Get in Touch</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="card-glass p-6 rounded-2xl shadow-lg border-white/20 dark:border-neutral-700/20 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-4 bg-gradient-to-br from-primary-light to-accent-light dark:from-neutral-800 dark:to-neutral-700 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-DEFAULT dark:text-primary-light" size={28} />
                  </div>
                  <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{method.label}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 break-all hover:text-primary-DEFAULT transition-colors">
                    {method.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="card-glass p-8 md:p-10 rounded-2xl shadow-lg border-white/20 dark:border-neutral-700/20">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="text-primary-DEFAULT dark:text-primary-light" size={28} />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent outline-none resize-none transition-all"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mt-6">
              I'll get back to you as soon as possible. Looking forward to hearing from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
