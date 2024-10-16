'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaBolt, FaBullhorn, FaChartLine, FaChartPie, FaChevronDown, FaChevronRight, FaCode, FaHandshake, FaLightbulb, FaMobileAlt, FaPaintBrush, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';


const page = () => {
    const scrollToSection = () => {
        const element = document.getElementById("serviceSection");
        if (element) {
            const yOffset = -30; // Adjust this value to fine-tune the scroll position
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    const [isVisible, setIsVisible] = useState(false);
    const params = useParams();
    const serviceSlug = params.slug;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(document.getElementById('serviceSection'));
        return () => observer.disconnect();
    }, []);

    const workSteps = [
        { icon: FaLightbulb, title: 'Ideate', description: 'Brainstorm innovative strategies' },
        { icon: FaChartLine, title: 'Analyze', description: 'Dive deep into data-driven insights' },
        { icon: FaRocket, title: 'Execute', description: 'Launch campaigns with precision' },
        { icon: FaHandshake, title: 'Collaborate', description: 'Partner for long-term success' },
    ];

    const title = serviceSlug;
    const description = 'Engage your audience, build brand loyalty, and increase conversions with powerful social media campaigns. We craft tailored strategies for platforms like Facebook, Instagram, LinkedIn, and more.';



    const WorkStep = ({ icon: Icon, title, description, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group font-poppins"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <Icon className="text-4xl mb-4 text-purple-600 group-hover:text-pink-500 transition-colors duration-300" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-center text-gray-600">{description}</p>
        </motion.div>
    );



    return (
        <div>
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full flex justify-center items-center " >
                    <h1 className='text-center md:text-9xl text-5xl font-barlow font-black' data-aos="fade-down">{serviceSlug.toUpperCase().replace('-', ' ')}</h1>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>

            <section className="py-16 px-4 relative" id="serviceSection">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-96 h-96 hemito-bg rounded-full -top-20 -left-20 animate-pulse" />
                    <div className="absolute w-96 h-96 hemito-bg rounded-full -bottom-20 -right-20 animate-pulse" />
                </div>
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:text-7xl uppercase text-5xl font-black font-barlow text-center mb-12"
                    >
                        How We Work
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {workSteps.map((step, index) => (
                            <WorkStep key={step.title} {...step} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            <motion.div
                className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-52 mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >

                {/* Service Title */}
                <motion.h1
                    className="text-5xl font-black font-barlow mb-4 text-gray-900 uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    What is <span className='hemito-blue'>{title}</span> 
                </motion.h1>

                {/* Service Description */}
                <motion.p
                    className=" text-gray-700 text-center  font-poppins"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {description}
                </motion.p>

                {/* Call to Action */}
                <motion.a href=''
                    className="mt-8 px-8 py-4 hemito-bg text-white rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 font-poppins"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn More
                </motion.a>
            </motion.div>

        </div>
    )
}

export default page
