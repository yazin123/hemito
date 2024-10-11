import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const CaseStudyCards = () => {
  const caseStudies = [
    {
      logo: "/path-to-veza-tax-logo.png",
      companyName: "Veza Tax",
      description: "In the vast digital marketplace, a distinct identity is paramount. We crafted a comprehensive branding strategy for Veza Tax, elevating their visual presence and market positioning.",
      images: ["/banner.png", "/banner.png", "/banner.png", "/banner.png", "/banner.png"],
      testimonial: "Veza Tax's digital presence has skyrocketed since partnering with this amazing team!",
    },
    {
      logo: "/path-to-aps-logo.png",
      companyName: "APS",
      description: "APS required a brand refresh that would resonate with their tech-savvy audience. Our team developed a modern, dynamic identity that perfectly captures their innovative spirit.",
      images: ["/banner.png", "/banner.png", "/banner.png", "/banner.png", "/banner.png"],
      testimonial: "Our new brand identity has positioned us as true innovators in our field.",
      
    },
  ];

  const CaseStudyCard = ({ logo, companyName, description, images, testimonial, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div 
        className="font-poppins flex flex-col md:flex-row items-start p-6 mb-16 rounded-xl shadow-lg mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: `${color}10` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <motion.div 
            className="rounded-lg p-4 flex items-center justify-center h-full"
            style={{ backgroundColor: color }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={logo} alt={companyName} width={200} height={100} objectFit="contain" />
          </motion.div>
        </div>
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-3xl font-bold mb-2" style={{ color }}>{companyName}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {images.map((image, index) => (
              <motion.div 
                key={index} 
                className="aspect-square relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image}
                  alt={`${companyName} image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mb-6 p-4 rounded-lg relative"
            style={{ backgroundColor: `${color}20` }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaQuoteLeft className="text-3xl mb-2" style={{ color }} />
            <p className="italic text-gray-700">{testimonial}</p>
          </motion.div>
          <Link href={`/case-study/${companyName.toLowerCase().replace(/\s+/g, '-')}`}>
            <motion.button
              className="inline-flex items-center px-6 py-3 text-white rounded-full transition-all duration-300 group hemito-bg"
        
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View case study
              <motion.span
                className="ml-2"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight size={20} />
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="font-barlow font-black text-center text-5xl md:text-7xl lg:text-9xl mt-20 mb-16 uppercase"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What they have to say
      </motion.h1>
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={index} {...study} />
      ))}
    </div>
  );
};

export default CaseStudyCards;