'use client'
import { caseStudies } from '@/api/Blog'
import CardsLong from '@/components/CardsLong'
import React, { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

    return (
        <div>
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center hemito-bg rounded-3xl h-4/6 w-full flex justify-center items-center " >
                    <div className="relative z-10 text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-9xl uppercase text-white mb-6 font-barlow font-black"
                        >
                            case studies
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-white mb-8"
                        >

                        </motion.p>

                    </div>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>
            <div id='serviceSection' ></div>
            <CardsLong data={caseStudies} />
        </div>
    )
}

export default page
