'use client'
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaChevronLeft } from 'react-icons/fa';

const SocialBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const socialLinks = [
        { icon: FaInstagram, color: 'text-pink-500', hoverColor: 'hover:text-pink-600', link: '#' },
        { icon: FaLinkedin, color: 'text-blue-600', hoverColor: 'hover:text-blue-700', link: '#' },
        { icon: FaWhatsapp, color: 'text-green-500', hoverColor: 'hover:text-green-600', link: '#' },
        { icon: FaFacebook, color: 'text-blue-500', hoverColor: 'hover:text-blue-600', link: '#' },
    ];

    return (
        <div className={`fixed z-50 right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out
                        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="relative flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white p-2 rounded-l-lg shadow-md text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                    <FaChevronLeft className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className="flex flex-col space-y-4 bg-white p-2 rounded-l-lg shadow-md">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className={`${social.color} ${social.hoverColor} transform transition-all duration-200 hover:scale-110`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.icon size={24} className="md:w-6 md:h-6 lg:w-8 lg:h-8" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialBar;