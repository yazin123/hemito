// Frontend Component (Careers.js)
'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaDollarSign,
    FaChevronDown,
    FaClock,
    FaSearch,
    FaFilter,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import CVSubmissionSection from './CvSubmission';

export default function Careers() {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage] = useState(6); // Number of items to show per page

    const scrollToSection = () => {
        const element = document.getElementById("jobListings");
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}career/vacancies?page=${currentPage}&limit=${itemsPerPage}&search=${searchTerm}&type=${filterType}`
                );
                const data = await response.json();
                setVacancies(data.vacancies);
                setTotalPages(Math.ceil(data.total / itemsPerPage));
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch vacancies. Please try again later.');
                setLoading(false);
            }
        };

        fetchVacancies();
    }, [currentPage, searchTerm, filterType, itemsPerPage]);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to top of listings when page changes
        document.getElementById("jobListings")?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Pagination controls component
    const PaginationControls = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

        return (
            <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                >
                    <FaChevronLeft />
                </button>
                
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        className={`px-4 py-2 rounded-lg ${
                            currentPage === number 
                                ? 'bg-blue-600 text-white' 
                                : 'text-blue-600 hover:bg-blue-50'
                        }`}
                    >
                        {number}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'}`}
                >
                    <FaChevronRight />
                </button>
            </div>
        );
    };

    return (
        <div className="min-h-screen font-poppins">
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center hemito-bg rounded-3xl h-4/6 w-full flex justify-center items-center " >
                <div className="relative z-10 text-center px-4">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl uppercase text-white mb-6 font-barlow font-black"
                    >
                        Take Your Career to New Heights
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white mb-8"
                    >
                        Join our team of innovators and build the future together
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        onClick={scrollToSection}
                        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                    >
                        View Open Positions
                    </motion.button>
                </div>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>

             {/* Job Listings Section */}
             <div className="max-w-7xl mx-auto px-4 py-16" id="jobListings">
                {/* Search and Filter */}
                <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                    <div className="relative flex-1 max-w-lg">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search positions..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); // Reset to first page on search
                            }}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaFilter className="text-gray-400" />
                        <select
                            value={filterType}
                            onChange={(e) => {
                                setFilterType(e.target.value);
                                setCurrentPage(1); // Reset to first page on filter change
                            }}
                            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="all">All Types</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>
                </div>

                {/* Job Cards */}
                {loading ? (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-12">{error}</div>
                ) : (
                    <>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {vacancies.map((vacancy) => (
                                <Link href={`/career/${vacancy._id}`} key={vacancy._id}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-semibold text-gray-800">{vacancy.title}</h3>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm w-1/3">
                                                {vacancy.type}
                                            </span>
                                        </div>
                                        <div className="space-y-2 text-gray-600">
                                            <div className="flex items-center">
                                                <FaMapMarkerAlt className="mr-2" />
                                                <span>{vacancy.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaDollarSign className="mr-2" />
                                                <span>{vacancy.salary}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FaClock className="mr-2" />
                                                <span>Posted {new Date(vacancy.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                        <PaginationControls />
                    </>
                )}
            </div>
            <CVSubmissionSection/>
        </div>
    );
}
