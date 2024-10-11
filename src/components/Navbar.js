'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaQuoteRight } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animatedItems, setAnimatedItems] = useState([]);
    const [navHeight, setNavHeight] = useState(0);
    const navbarRef = useRef(null);

    const navbaritems = [
        { name: "home", href: "/", duration: 100 },
        { name: "about", href: "/about", duration: 200 },
        { name: "team", href: "/team", duration: 300 },
        { name: "contact", href: "/contact", duration: 400 },
        { name: "services", href: "/services", duration: 500 },
        { name: "case studies", href: "/case-studies", duration: 600 },
        { name: "career", href: "/career-at-hemito", duration: 700 }
    ];

    useEffect(() => {
        if (isOpen) {
            setAnimatedItems([]);
            navbaritems.forEach((item, index) => {
                setTimeout(() => {
                    setAnimatedItems(prev => [...prev, item.name]);
                }, index * 200);
            });
        } else {
            setAnimatedItems([]);
        }
    }, [isOpen]);

    useEffect(() => {
        if (navbarRef.current) {
            setNavHeight(navbarRef.current.offsetHeight);
        }
    }, [navbarRef, isOpen]);

    return (
        <nav ref={navbarRef} className="fixed top-0 left-0 w-full bg-white z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-auto p-5">
                    <div className="flex-1 flex lg:justify-center">
                        <Image className="lg:h-16 h-8 w-auto" src="/logo.png" alt="Hemito logo" width={1000} height={1000} />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => alert('Get a Quote clicked!')}
                            className="hemito-bg text-white px-4 py-2 rounded-md items-center  hidden lg:flex hover:bg-blue-700 transition-colors duration-300"
                        >
                            <FaQuoteRight className="mr-2" />
                            Get a Quote
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                        >
                            {isOpen ? (
                                <FaTimes className="lg:h-10 h-6 lg:w-10 w-6 text-[#1A75BB]" />
                            ) : (
                                <FaBars className="lg:h-10 h-6 lg:w-10 w-6 text-[#1A75BB]" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`fixed right-0 left-0 bottom-0 bg-white z-40 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                style={{ top: `${navHeight}px` }}
            >
                <div className="h-full w-full flex flex-col justify-center items-start px-12 max-w-7xl mx-auto sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Background animations */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                        <circle cx="10%" cy="30%" r="5%" fill="#3B82F6" opacity="0.1">
                            <animate attributeName="r" values="5%;7%;5%" dur="5s" repeatCount="indefinite" />
                        </circle>
                        <path d="M70 50 Q 100 25, 130 50 T 190 50" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.2">
                            <animate attributeName="d" values="M70 50 Q 100 25, 130 50 T 190 50;M70 50 Q 100 75, 130 50 T 190 50;M70 50 Q 100 25, 130 50 T 190 50" dur="10s" repeatCount="indefinite" />
                        </path>
                        <polygon points="75,60 100,40 125,60" fill="#F59E0B" opacity="0.15">
                            <animateTransform attributeName="transform" type="rotate" from="0 100 50" to="360 100 50" dur="20s" repeatCount="indefinite" />
                        </polygon>
                        <defs>
                            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                            </pattern>
                        </defs>
                    </svg>

                    {navbaritems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative group py-4 text-3xl font-light font-poppins text-gray-900 transition-all duration-500 ease-in-out z-10 ${animatedItems.includes(item.name)
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-8'
                                }`}
                            onClick={() => setIsOpen(false)}
                            style={{
                                transitionDelay: `${item.duration}ms`,
                            }}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-4/6 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;