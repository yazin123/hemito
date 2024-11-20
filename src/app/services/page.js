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
        { name: "Business Consultancy", description: "Digital marketing is a powerful tool for businesses to reach wider audiences and achieve success." },
        { name: "Website Development", description: "We create responsive and user-friendly websites tailored to your business needs." },
        { name: "SEO Optimization", description: "Improve your website's visibility on search engines with our expert SEO services." },
        { name: "Social Media Marketing", description: "Engage your audience and grow your brand on social media platforms." },
        { name: "Graphic Designing", description: "Create stunning visuals that capture your brand's essence and message." },
        { name: "Mobile App Development", description: "Develop custom mobile applications to enhance your business's reach and user experience." },
        { name: "Content Creation", description: "Craft high-quality content that resonates with your audience and drives engagement." },
        { name: "E-commerce Solutions", description: "Build and optimize your online store for a seamless shopping experience." },
        { name: "Cloud Solutions", description: "Leverage cloud technology for better scalability and flexibility in your business operations." },
        { name: "IT Support Services", description: "Reliable IT support to keep your business running smoothly and efficiently." },
    ];


    return (
        <>
            {/* hero */}
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center hemito-bg rounded-3xl h-4/6 w-full flex justify-center items-center " >
                    <div className="relative z-10 text-center px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-9xl uppercase text-white mb-6 font-barlow font-black"
                        >
                            where creativity knows no bound
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
            {/* content */}
            <div id="serviceSection" className="relative py-20 overflow-hidden bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-52">

                {services.map((item, index) => (
                    <div key={index} className="flex flex-wrap justify-between items-center mt-28">
                        <div className='mt-3' data-aos="fade-right">
                            <h2 className={`text-5xl md:text-7xl  mb-2 font-barlow font-black uppercase ${index % 2 === 1 ? 'text-black' : 'hemito-blue'}`}>
                                {item.name}
                            </h2>
                            <p className="text-gray-600 text-sm font-poppins">
                                {item.description}
                            </p>
                        </div>
                        <Link data-aos="fade-right" href={`/services/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className={` rounded-full p-3 md:w-1/12 md:h-1/12 flex justify-center items-center mt-3  ${index % 2 === 1 ? 'bg-black' : 'hemito-bg'} `}>
                            <FaArrowRight className="text-white text-xl -rotate-45 h-full w-full hover:-rotate-12 transition ease-in-out" />
                        </Link>
                    </div>
                ))}

            </div>

            <FreeConsultation />
        </>
    );
}

export default page;
