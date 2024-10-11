import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const TeamBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.getElementById('teamBanner'));
    return () => observer.disconnect();
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div id="teamBanner" className="relative py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="font-barlow font-black text-center text-4xl sm:text-5xl lg:text-7xl xl:text-8xl mb-12 uppercase"
          variants={headerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {["Take", "a", "close", "look", "at", "our"].map((word, index) => (
            <motion.span key={index} className="inline-block mr-4" variants={wordVariants}>
              {word}
            </motion.span>
          ))}
          <motion.span 
            className="block mt-2 hemito-blue"
            variants={wordVariants}
          >
            professionals
          </motion.span>
        </motion.h1>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link href="/team" passHref>
            <motion.div 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white hemito-bg rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Our Team</span>
              <FaArrowRight className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-2" size={20} />
              <motion.div 
                className="absolute inset-0 hemito-bg"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <svg className="absolute top-0 right-0 -mt-20 -mr-20 text-blue-100 w-64 h-64 rotate-45 transform" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      
      <svg className="absolute bottom-0 left-0 -mb-20 -ml-20 text-blue-100 w-64 h-64 rotate-45 transform" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
  );
};

export default TeamBanner;