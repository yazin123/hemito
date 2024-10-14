'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const dropdownRef = useRef(null);

    const services = [
        { name: 'Digital Marketing', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'Web Development', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'Mobile Apps', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
        { name: 'UI/UX Design', subServices: ['Service 1', 'Service 2', 'Service 3', 'Service 4'] },
    ];
    const navLink = [
        { name: 'Home', href: '/' },
        { name: 'about', href: '/about' },
        { name: 'contact', href: '/contact' },
        { name: 'team', href: '/team' },
        { name: 'case studies', href: '/case-studies' },
    ]

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setActiveService(null);
        setIsOpenNavbar(!isOpenNavbar)
    };


    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const closeDropdown = () => {
        setIsOpen(false);
        setActiveService(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 w-full z-50 font-poppins">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" alt="Hemito Logo" className="h-8 w-auto" />
                        </Link>

                        {/* Navigation links - hidden on small screens */}
                        <div className="hidden md:flex space-x-4 lg:gap-10">
                            <Link href="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                            <Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link>
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-800 hover:text-blue-500 flex items-center gap-1"
                            >
                                Services {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                            </button>
                            <Link href="/team" className="text-gray-800 hover:text-blue-500">Team</Link>
                            <Link href="/case-studies" className="text-gray-800 hover:text-blue-500">Case Studies</Link>
                            <Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
                        </div>

                        {/* "Get A Quote" button */}
                        <Link href="/quote" className="hemito-bg text-white px-4 py-2 rounded hidden md:block" style={{ borderRadius: "0 16px 0 16px" }}>
                            Get A Quote
                        </Link>

                        {/* Hamburger menu for small screens */}
                        <div className="md:hidden flex items-center">
                            <Link href="/quote" className="hemito-bg text-white px-4 py-2 rounded mr-2" style={{ borderRadius: "0 16px 0 16px" }}>
                                Get A Quote
                            </Link>
                            <button onClick={toggleDropdown} className="text-gray-800 focus:outline-none">
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dropdown menu */}

            {isOpen && (
                <div ref={dropdownRef} className="fixed left-0 right-0 top-[64px] text-sm bg-white z-40 overflow-auto transition-all duration-300 ease-in-out shadow-lg font-poppins">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {navLink.map((item) => (
                                <Link href={item.href} className="w-full md:hidden text-left font-semibold text-gray-800 hover:text-blue-500 focus:outline-none flex justify-between items-center lg:bg-blue-100 lg:p-3 lg:rounded-lg">{item.name}</Link>
                            ))
                            }
                            {services.map((service, index) => (
                                <div key={index} className="space-y-2">
                                    <button
                                        onClick={() => toggleService(index)}
                                        className="w-full text-left font-semibold text-gray-800 hover:text-blue-500 focus:outline-none flex justify-between items-center lg:bg-blue-100 lg:p-3 lg:rounded-lg"
                                    >
                                        {service.name}
                                        {activeService === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    <div className={`space-y-2 ${activeService === index ? 'block' : 'hidden md:block'} lg:bg-blue-100 lg:p-3 p-2 rounded-lg`}>
                                        {service.subServices.map((subService, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}/${subService.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="block text-gray-600 hover:text-blue-500"
                                                onClick={closeDropdown}
                                            >
                                                {subService}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center">
                            <Link href="/services" className="hemito-bg text-white px-6 py-3 rounded-2xl w-full flex justify-center items-center gap-4 hover:bg-blue-600" onClick={closeDropdown}>
                                View all services <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;