'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowRight, FaChevronRight, FaMinus, FaPlus, FaCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [hoveredService, setHoveredService] = useState(null);
    const dropdownRef = useRef(null);

    const services = [
        { name: 'Digital Marketing', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'Web Development', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'Mobile Apps', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'UI/UX Design', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Team', href: '/team' },
        { name: 'Case Studies', href: '/case-studies' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setActiveService(null);
    };

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const closeDropdown = () => {
        setIsOpen(false);
        setActiveService(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 w-full z-50 font-poppins">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.png" alt="Hemito Logo" className="h-8 w-auto" width={500} height={500} />
                        </Link>

                        <div className="hidden md:flex space-x-4 lg:gap-10">
                            {navLinks.map((item) => (
                                <Link key={item.name} href={item.href} className="text-gray-800 hover:text-blue-500">
                                    {item.name}
                                </Link>
                            ))}
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-800 hover:text-blue-500 flex items-center gap-1"
                            >
                                Services {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                            </button>
                        </div>

                        <Link href="/quote" className="hemito-bg text-white px-4 py-2 rounded hidden md:block" style={{ borderRadius: "0 16px 0 16px" }}>
                            Get A Quote
                        </Link>

                        <div className="md:hidden flex items-center">
                            <Link href="/quote" className="hemito-bg text-white px-4 py-2 rounded mr-2" style={{ borderRadius: "0 16px 0 16px" }}>
                                Get A Quote now
                            </Link>
                            <button onClick={toggleDropdown} className="text-gray-800 focus:outline-none">
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={closeDropdown}></div>
            )}

<AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 right-0 top-[64px] bg-white z-40 overflow-hidden shadow-sm font-sans"
        >
          <div className="max-w-4xl mx-auto px-4 md:py-12 py-5 relative">
            <motion.div 
              className="space-y-2 md:space-y-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.07
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="relative"
                >
                  <motion.div
                    className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gray-200"
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full text-left font-medium text-gray-800 hover:text-blue-600 focus:outline-none flex justify-between items-center py-2  transition duration-300"
                  >
                    <span className="flex items-center">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredService === index ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mr-2"
                      >
                        <FaCircle className="text-blue-500" />
                      </motion.span>
                      {service.name}
                    </span>
                    {activeService === index ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 ml-4 space-y-3"
                      >
                        {service.subServices.map((subService, subIndex) => (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <Link
                              href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}/${subService.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-gray-600 hover:text-blue-500 text-sm py-1 transition duration-300"
                              onClick={closeDropdown}
                            >
                              {subService}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-12 flex flex-wrap gap-6 justify-center md:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {navLinks.map((item, index) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm text-gray-600 hover:text-blue-500 transition duration-300 relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </motion.div>
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-10 -z-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
        </>
    );
};

export default Navbar;
