'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaChevronUp, FaShare, FaShareAlt } from 'react-icons/fa';

const SocialBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { icon: FaInstagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500', link: '#' },
        { icon: FaLinkedin, color: 'bg-blue-600', link: '#' },
        { icon: FaWhatsapp, color: 'bg-green-500', link: '#' },
        { icon: FaFacebook, color: 'bg-blue-500', link: '#' },
    ];

    return (
        <div className="fixed z-30 lg:z-50 right-4 bottom-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-2 flex flex-col-reverse items-end space-y-2 space-y-reverse"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                className={`${social.color} text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="hemito-bg p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaShareAlt
                    className={`text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    size={24}
                />
            </motion.button>
        </div>
    );
};

export default SocialBar;