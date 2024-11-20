
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaBars,
    FaTimes,
    FaBriefcase,
    FaFileAlt,
    FaUsers,
    FaNewspaper,
    FaBook,
    FaCog,
    FaChevronDown,
    FaPlus,
    FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isVacancyOpen, setIsVacancyOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleVacancy = () => setIsVacancyOpen(!isVacancyOpen);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="relative min-h-screen">
            {/* Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
                {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <div className={`
        fixed top-0 left-0 h-full 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        bg-gray-900 text-white
        w-64 p-6 space-y-6
        lg:translate-x-0
      `}>
                {/* Logo/Brand */}
                <div className="flex items-center space-x-3 mb-10">
                    <div className="h-8 w-8 bg-indigo-600 rounded-lg"></div>
                    <span className="text-xl font-bold">Admin Panel</span>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                    {/* Vacancy Dropdown */}
                    <div>
                        <button
                            onClick={toggleVacancy}
                            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <div className="flex items-center space-x-3">
                                <FaBriefcase className="w-5 h-5 text-indigo-400" />
                                <span>Vacancy</span>
                            </div>
                            <FaChevronDown className={`w-4 h-4 transition-transform ${isVacancyOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Vacancy Submenu */}
                        <div className={`pl-4 mt-2 space-y-2 ${isVacancyOpen ? 'block' : 'hidden'}`}>
                            <a href="/vacancy/view" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-800 rounded-lg">
                                <FaFileAlt className="w-4 h-4 text-indigo-400" />
                                <span>View</span>
                            </a>
                            <a href="/vacancy/add" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-800 rounded-lg">
                                <FaPlus className="w-4 h-4 text-indigo-400" />
                                <span>Add</span>
                            </a>
                        </div>
                    </div>

                    {/* CV */}
                    <a href="/cv" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
                        <FaFileAlt className="w-5 h-5 text-indigo-400" />
                        <span>CV</span>
                    </a>

                    {/* Team */}
                    <a href="/team" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
                        <FaUsers className="w-5 h-5 text-indigo-400" />
                        <span>Team</span>
                    </a>

                    {/* Blog */}
                    <a href="/blog" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
                        <FaNewspaper className="w-5 h-5 text-indigo-400" />
                        <span>Blog</span>
                    </a>

                    {/* Case Studies */}
                    <a href="/case-studies" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
                        <FaBook className="w-5 h-5 text-indigo-400" />
                        <span>Case Studies</span>
                    </a>

                    {/* Services */}
                    <a href="/services" className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 rounded-lg">
                        <FaCog className="w-5 h-5 text-indigo-400" />
                        <span>Services</span>
                    </a>
                </nav>

                {/* Profile Section */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                    >
                        <FaSignOutAlt className="w-5 h-5" />
                        <span>Logout</span>
                    </button>

                    <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
                        <div>
                            <div className="font-medium">Admin User</div>
                            <div className="text-sm text-gray-400">admin@example.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;