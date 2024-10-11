import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTimes, FaChevronUp } from 'react-icons/fa';

const Location = () => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactInfo = [
        { icon: FaPhone, text: "+1 (555) 123-4567", link: "tel:+15551234567" },
        { icon: FaEnvelope, text: "contact@hemito.com", link: "mailto:contact@hemito.com" },
        { icon: FaClock, text: "Mon-Fri: 9AM-6PM", link: null }
    ];

    return (
        <div className="relative w-full h-screen font-poppins bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Full-screen map (replace with actual map component if available) */}
            <div className="absolute inset-0 opacity-50">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>

            {/* Overlay header */}
            <motion.div 
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-8"
                style={{ opacity: 1 - scrollPosition / 200 }}
            >
                <h1 className="text-4xl font-bold mb-2 text-blue-400">Visit Hemito Digital</h1>
                <p className="text-xl text-blue-200">Your Gateway to the Digital Future</p>
            </motion.div>

            {/* Info panel toggle button */}
            <motion.button
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg flex items-center hover:bg-blue-600 transition-all duration-300"
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ x: isInfoOpen ? 0 : '-50%' }}
            >
                {isInfoOpen ? 'Close Info' : 'Explore Our World'}
                <FaChevronUp className={`ml-2 transform transition-transform ${isInfoOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* Info panel */}
            <AnimatePresence>
                {isInfoOpen && (
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-blue-800 p-8 rounded-t-3xl shadow-lg text-white"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold text-blue-300">Hemito Digital Hub</h2>
                                <button onClick={() => setIsInfoOpen(false)} className="text-blue-300 hover:text-white">
                                    <FaTimes size={24} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold mb-4 text-blue-200">Our Coordinates</h3>
                                    <p className="flex items-center text-lg mb-2">
                                        <FaMapMarkerAlt className="mr-2 text-blue-400" />
                                        123 Innovation Blvd, TechCity, TC 94000
                                    </p>
                                    <a 
                                        href="https://goo.gl/maps/your-company-location" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-700 transition-colors duration-300"
                                    >
                                        Navigate to Us
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold mb-4 text-blue-200">Connect with Us</h3>
                                    <ul className="space-y-4">
                                        {contactInfo.map((item, index) => (
                                            <li key={index} className="flex items-center text-lg">
                                                <item.icon className="mr-2 text-blue-400" />
                                                {item.link ? (
                                                    <a href={item.link} className="hover:text-blue-300 transition-colors duration-300">
                                                        {item.text}
                                                    </a>
                                                ) : (
                                                    <span>{item.text}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl font-semibold mb-2 text-blue-200">Ready to Step into the Future?</h3>
                                <p className="mb-4 text-blue-100">Experience digital transformation like never before. Our experts are ready to guide you.</p>
                                <motion.button 
                                    className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgb(59, 130, 246)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Your Digital Journey
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Location;