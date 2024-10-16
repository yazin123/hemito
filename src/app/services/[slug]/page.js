'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';

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

    const params = useParams();
    const serviceSlug = params.slug;


    return (
        <div>
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full flex justify-center items-center " >
                    <h1 className='text-center md:text-9xl text-5xl font-barlow font-black' data-aos="fade-down">{serviceSlug.toUpperCase().replace('-',' ')}</h1>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>
            <div id="serviceSection"></div>
        </div>
    )
}

export default page
