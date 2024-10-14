'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronDown, FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FreeConsultation from '@/components/home/FreeConsultation';

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

    const services = [
        { name: "Business Consultancy", description: "Digital marketing is a powerful tool for businesses to reach wider audiences and achieve success.", href: "/services/business-consultancy" },
        { name: "Website Development", description: "We create responsive and user-friendly websites tailored to your business needs.", href: "/services/website-development" },
        { name: "SEO Optimization", description: "Improve your website's visibility on search engines with our expert SEO services.", href: "/services/seo-optimization" },
        { name: "Social Media Marketing", description: "Engage your audience and grow your brand on social media platforms.", href: "/services/social-media-marketing" },
        { name: "Graphic Designing", description: "Create stunning visuals that capture your brand's essence and message.", href: "/services/graphic-designing" },
        { name: "Mobile App Development", description: "Develop custom mobile applications to enhance your business's reach and user experience.", href: "/services/mobile-app-development" },
        { name: "Content Creation", description: "Craft high-quality content that resonates with your audience and drives engagement.", href: "/services/content-creation" },
        { name: "E-commerce Solutions", description: "Build and optimize your online store for a seamless shopping experience.", href: "/services/ecommerce-solutions" },
        { name: "Cloud Solutions", description: "Leverage cloud technology for better scalability and flexibility in your business operations.", href: "/services/cloud-solutions" },
        { name: "IT Support Services", description: "Reliable IT support to keep your business running smoothly and efficiently.", href: "/services/it-support-services" },
    ];


    return (
        <>
            {/* hero */}
            <div className="relative h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-white bg-[#1A75BB] rounded-3xl h-4/6 w-full flex"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="flex flex-col justify-center w-1/2 p-8 text-left">
                        <motion.h1
                            className="text-5xl lg:text-8xl text-black font-barlow font-black uppercase leading-tight"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                        >
                            where <br />
                            <motion.span
                                className="text-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                            >
                                creativity
                            </motion.span> <br />
                            knows no bounds.
                        </motion.h1>
                    </div>
                    <motion.div
                        className='flex justify-center items-center w-full h-full p-4'
                        initial={{ opacity: 0, rotate: -20 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <FaRegLightbulb className='w-20 h-20  md:w-52 md:h-52 ' />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.button
                    className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce"
                    onClick={scrollToSection}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6, ease: "easeInOut" }}
                >
                    <FaChevronDown className="text-blue-500" size={24} />
                </motion.button>
            </div>
            {/* content */}
            <div id="serviceSection" className="relative py-20 overflow-hidden bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-52">

                {services.map((item, index) => (
                    <div key={index} className="flex flex-wrap justify-between items-center mt-28">
                        <div className='mt-3'>
                            <h2 className={`text-5xl md:text-7xl  mb-2 font-barlow font-black uppercase ${index % 2 === 1 ? 'text-black' : 'hemito-blue'}`}>
                                {item.name}
                            </h2>
                            <p className="text-gray-600 text-sm font-poppins">
                                {item.description}
                            </p>
                        </div>
                        <Link href={item.href} className={` rounded-full p-3 md:w-1/12 md:h-1/12 flex justify-center items-center mt-3  ${index % 2 === 1 ? 'bg-black' : 'hemito-bg'} `}>
                            <FaArrowRight className="text-white text-xl -rotate-45 h-full w-full hover:-rotate-12 transition ease-in-out" />
                        </Link>
                    </div>
                ))}

            </div>

            <FreeConsultation/>
        </>
    );
}

export default page;
