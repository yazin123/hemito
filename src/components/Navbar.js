'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animatedItems, setAnimatedItems] = useState([]);
    const [navHeight, setNavHeight] = useState(0); // State to store navbar height
    const navbarRef = useRef(null); // Ref to access navbar element

    const navbaritems = [
        { name: "home", href: "/", duration: 100 },
        { name: "about", href: "/about", duration: 200 },
        { name: "team", href: "/team", duration: 300 },
        { name: "contact", href: "/contact", duration: 400 },
        { name: "services", href: "/services", duration: 500 },
        { name: "case studies", href: "/case-studies", duration: 600 },
        { name: "career", href: "/career-at-hemito", duration: 700 }
    ];

    // Animate the items when the menu is opened
    useEffect(() => {
        if (isOpen) {
            setAnimatedItems([]);
            navbaritems.forEach((item, index) => {
                setTimeout(() => {
                    setAnimatedItems(prev => [...prev, item.name]);
                }, index * 200);
            });
        } else {
            // Immediately clear the animation when closed
            setAnimatedItems([]);
        }
    }, [isOpen]);

    // Get the height of the top navbar dynamically
    useEffect(() => {
        if (navbarRef.current) {
            setNavHeight(navbarRef.current.offsetHeight);
        }
    }, [navbarRef, isOpen]);

    return (
        <nav ref={navbarRef} className="fixed top-0 left-0 w-full bg-white z-50 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-auto p-5" >
                    <div className="flex-1 flex lg:justify-center">
                        <Image className="lg:h-16 h-8 w-auto " src="/logo.png" alt="Hemito logo" width={1000} height={1000} />
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md focus:border-none"
                    >
                        {isOpen ? (
                            <FaTimes className="lg:h-10 h-6 lg:w-10 w-6 text-[#1A75BB]" />
                        ) : (
                            <FaBars className="lg:h-10 h-6 lg:w-10 w-6 text-[#1A75BB]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Expanded div below the navbar */}
            <div
                className={`fixed right-0 left-0 bottom-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ top: `${navHeight}px` }} // Dynamically set top position
            >
                <div className="h-full w-full flex flex-col justify-center items-start px-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {navbaritems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative group py-4 text-3xl font-light font-poppins text-gray-900 transition-all duration-500 ease-in-out ${animatedItems.includes(item.name)
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-8'
                                }`}
                            onClick={() => setIsOpen(false)}
                            style={{
                                transitionDelay: `${item.duration}ms`,
                            }}
                        >
                            {item.name}
                            {/* Bottom line */}
                            <span
                                className="absolute bottom-0 left-0 w-4/6 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"
                            ></span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
