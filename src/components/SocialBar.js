import React from 'react'
import {FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const SocialBar = () => {
    return (
        <div  className="fixed z-50 right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 bg-white p-2 rounded-l-lg shadow-md">
            <a href="#" className="text-pink-500 hover:text-pink-600">
                <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
                <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
                <FaWhatsapp size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600">
                <FaFacebook size={24} />
            </a>
        </div>
    );
};

export default SocialBar