import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-medium mb-4">Let's build something amazing together!</p>
          <p className="text-gray-600 dark:text-gray-400">© 2024 Anit Raj. All rights reserved.</p>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;