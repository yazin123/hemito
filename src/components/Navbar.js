'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowRight, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeService, setActiveService] = useState(null);
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
                                Get A Quote
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
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 top-[64px] bg-white z-40 overflow-hidden shadow-sm font-sans"
                    >
                        <div className="max-w-4xl mx-auto px-4 py-8">
                            <motion.div
                                className="space-y-6"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                initial="hidden"
                                animate="show"
                            >
                                {services.map((service, index) => (
                                    <motion.div key={index} variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        show: { opacity: 1, y: 0 }
                                    }}>
                                        <button
                                            onClick={() => toggleService(index)}
                                            className="w-full text-left font-medium text-gray-800 hover:text-gray-600 focus:outline-none flex justify-between items-center py-2 border-b border-gray-200 transition duration-150"
                                        >
                                            <span>{service.name}</span>
                                            {activeService === index ? <FaMinus className="text-gray-400" /> : <FaPlus className="text-gray-400" />}
                                        </button>
                                        <AnimatePresence>
                                            {activeService === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="mt-2 ml-4 space-y-2"
                                                >
                                                    {service.subServices.map((subService, subIndex) => (
                                                        <motion.div
                                                            key={subIndex}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ delay: subIndex * 0.05 }}
                                                        >
                                                            <Link
                                                                href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}/${subService.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className="block text-gray-600 hover:text-gray-800 text-sm py-1 transition duration-150"
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
                                className="mt-8 flex flex-wrap gap-4 md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {navLinks.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-sm text-gray-600 hover:text-gray-800 transition duration-150">
                                        {item.name}
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
