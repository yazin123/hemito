'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const page = () => {
    const scrollToSection = () => {
        const element = document.getElementById("marketingSection");
        if (element) {
            const yOffset = -100; // Adjust this value to fine-tune the scroll position
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    const [isVisible, setIsVisible] = useState(false);

    const teamMembers = Array(3).fill({
        name: 'Mr. Clint',
        role: 'sales head',
        image:'/clint.png'
    });

    return (
        <div>
            {/* hero */}
            <div className="relative h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full flex justify-center items-center" data-aos="fade-right">
                    <h1 className='text-center text-9xl font-barlow font-black'> MEET OUR TEAM</h1>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>
            {/* CEO */}
            <div className="mt-32 flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id='marketingSection'>
                <div className='md:w-2/3   flex justify-end items-center'>
                    <div className='text-end w-10/12'>
                        <h3 className='font-barlow text-gray-600 font-black text-5xl'>OUR CEO</h3>
                        <h1 className='font-barlow font-black text-9xl hemito-blue'>Mr. JOHN DOE</h1>
                        <p>
                            Hemito digital is at the heart of digital marketing services in Kochi ,
                            Kerala that has grown a lot since 2015. Based in Cochin, the business capital
                            of Kerala, God’s own country, the services include SEO, SMM, PPC,
                            web development and every service required for your website to be on top of SERP
                            service required for your website to be on top of SERP
                        </p>
                    </div>
                </div>
                <div className='md:w-1/3'><Image src='/person.png' width={500} height={500} className=" w-10/12" /></div>
            </div>
            {/* DIRECTOR */}
            <div className="mt-32 flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >

                <div className='md:w-1/3'><Image src='/person.png' width={500} height={500} className=" w-10/12" /></div>
                <div className='md:w-2/3   flex justify-start items-center'>
                    <div className='text-start w-10/12'>
                        <h3 className='font-barlow text-gray-600 font-black text-5xl'>OUR DIRECTOR</h3>
                        <h1 className='font-barlow font-black text-9xl hemito-blue'>Mr. JOHN DOE</h1>
                        <p>
                            Hemito digital is at the heart of digital marketing services in Kochi ,
                            Kerala that has grown a lot since 2015. Based in Cochin, the business capital
                            of Kerala, God’s own country, the services include SEO, SMM, PPC,
                            web development and every service required for your website to be on top of SERP
                            service required for your website to be on top of SERP
                        </p>
                    </div>
                </div>
            </div>
            {/* SALES */}
            <div className="mt-52 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <h3 className='font-barlow font-black text-5xl text-center mb-14'>SALES DEPARTMENT</h3>


                <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="relative aspect-square hover:scale-105 transition">
                                <div className="absolute inset-0 bg-gray-300 rounded-lg overflow-hidden">
                                    {/* Replace the src with the actual image path when available */}
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        width={500}
                                        height={500}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-2 h-1/2 ">
                                        <div className='text-center absolute bottom-0 left-0 right-0'>
                                            <h2 className="font-bold font-barlow text-3xl uppercase">{member.name}</h2>
                                            <p className="text-xs mb-3 uppercase">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
            {/* HR */}
            
            {/* DELIVERY */}
            {/* ACCOUNTANT */}
            {/* TECHNICAL */}
        </div>
    )
}

export default page
