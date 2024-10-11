import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FreeConsultation = () => {
    const [activeService, setActiveService] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const services = [
        { id: 1, name: 'Social Media Marketing', duration: 1300, icon: '📱' },
        { id: 2, name: 'Website Development', duration: 1400, icon: '💻' },
        { id: 3, name: 'Content Marketing', duration: 1500, icon: '📝' },
        { id: 4, name: 'SEO Optimization', duration: 1600, icon: '🔍' },
        { id: 5, name: 'Email Campaigns', duration: 1700, icon: '📧' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering) {
                setActiveService((prev) => (prev === null ? 0 : (prev + 1) % services.length));
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovering, services.length]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20 mt-40 font-poppins">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <motion.h1 
                        className="text-6xl lg:text-7xl font-black font-barlow mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        GET A FREE<br />
                        <span className="hemito-blue">CONSULTATION</span><br />
                        ON
                    </motion.h1>
                    <div className="flex flex-wrap gap-3">
                        {services.map((service, index) => (
                            <motion.button
                                key={service.id}
                                className={`flex items-center justify-between w-full md:w-64 px-6 py-3 rounded-full transition duration-300 ${
                                    index === activeService ? 'hemito-bg text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => {
                                    setIsHovering(true);
                                    setActiveService(index);
                                }}
                                onMouseLeave={() => setIsHovering(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span>{service.name}</span>
                                <FaArrowRight className={index === activeService ? 'animate-pulse' : ''} />
                            </motion.button>
                        ))}
                    </div>
                </div>
                <motion.div 
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        <Image
                            src="/consultation.png"
                            alt="Free Consultation"
                            width={1000}
                            height={100}
                            className="w-full h-full rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>
                        <motion.div 
                            className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <p className="text-lg font-semibold">Book your free consultation now!</p>
                            <p className="text-sm text-gray-600">Limited spots available</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default FreeConsultation;