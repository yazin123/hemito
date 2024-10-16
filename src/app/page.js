'use client'
import { FaChevronDown } from "react-icons/fa";
import FreeConsultation from "@/components/home/FreeConsultation";
import Location from "@/components/home/Location";
import TeamBanner from "@/components/home/TeamBanner";
import ServiceFloating from "@/components/home/ServiceFloating";
import PostersBanners from "@/components/home/PostersBanners";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { blogPosts, caseStudies } from '@/api/Blog'
import Cards from "@/components/Cards";
import CardsLong from "@/components/CardsLong";

export default function Home() {
  const scrollToSection = () => {
    const element = document.getElementById("marketingSection");
    if (element) {
      const yOffset = -100; // Adjust this value to fine-tune the scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
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

    observer.observe(document.getElementById('marketingSection'));
    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* hero */}
      <div className="relative w-full overflow-hidden   h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full" data-aos="fade-right">
        </div>
        <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
          <FaChevronDown className="text-blue-500" size={24} />
        </button>
      </div>
      {/* content */}
      <div id="marketingSection" className="relative py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between">
            <motion.div
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl    font-black mb-6 font-barlow leading-tight text-gray-900">
                <span className="block relative">
                  BEST DIGITAL
                  <motion.span
                    className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: '50%' } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.span>
                </span>
                <span className="block mt-2">MARKETING</span>
                <span className="block mt-2">
                  COMPANY
                  <span className="text-blue-600">.</span>
                </span>
              </h1>
              <motion.p
                className="text-xl text-gray-600 mt-6"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Elevating brands in Kerala through innovative digital strategies.
              </motion.p>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 mb-6 relative z-10">
                Digital marketing is a powerful tool for businesses to reach wider audiences and achieve success. <span className="text-blue-600 font-semibold">Hemito Digital</span>, the top digital marketing agency in <span className="text-blue-600 font-semibold">Kochi, Kerala</span>, offers expert services to elevate your brand.
              </p>
              <ul className="space-y-4 text-gray-700">
                {['Social Media Marketing', 'Google and YouTube Ads', 'Content Marketing', 'SEO', 'Influencer Marketing'].map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Minimalist background elements */}
        <svg className="absolute top-0 right-0 w-64 h-64 text-gray-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.5,-67.2C59.9,-56.7,67.3,-40.8,71.9,-24.3C76.5,-7.8,78.4,9.3,73.3,24.3C68.3,39.2,56.4,52,42.2,62.3C28,72.7,11.6,80.6,-4.4,86.2C-20.4,91.7,-40.8,94.9,-56.3,87.3C-71.8,79.7,-82.3,61.4,-86.8,42.8C-91.3,24.3,-89.7,5.6,-83.3,-10.3C-76.9,-26.1,-65.6,-39.1,-52.3,-49.4C-39.1,-59.7,-24,-67.3,-7.1,-58.9C9.8,-50.5,35.1,-77.6,47.5,-67.2Z" transform="translate(100 100)" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-64 h-64 text-gray-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M35.9,-47.3C48.3,-42.1,61.5,-35.1,67.7,-24.3C73.9,-13.4,73.1,1.3,69.7,15.5C66.3,29.7,60.3,43.3,49.9,53.3C39.5,63.3,24.8,69.7,9.7,72.5C-5.4,75.2,-20.9,74.4,-33.7,68.1C-46.5,61.8,-56.7,50,-62.3,36.9C-67.9,23.8,-68.9,9.4,-67.5,-4.3C-66,-18,-62,-31,-53.7,-40.2C-45.4,-49.5,-32.7,-55,-20.9,-58.1C-9.1,-61.2,1.9,-62,11.9,-58.6C21.9,-55.2,23.5,-52.5,35.9,-47.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      <PostersBanners />
      <ServiceFloating />
      <motion.h1
        className="font-barlow font-black text-center text-5xl md:text-7xl lg:text-9xl mt-20 mb-16 uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What they have to say
      </motion.h1>
      <CardsLong data={caseStudies} />
      <TeamBanner />
      <h2 className="text-5xl uppercase mb-4 text-center font-barlow font-black  mt-40">
        Our <span className="hemito-blue">Insights</span>
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay ahead of the curve with our expert analysis and cutting-edge strategies in digital marketing.
      </p>
      <Cards data={blogPosts} page={'blogs'} className='mb-20' />
      <Location />
      <FreeConsultation />

    </>
  );
}
