import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Cards = ({ data, page }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center ">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 font-poppins">
                    {data.map((post, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer relative group"
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2 hemito-blue">{post.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <div className="flex items-center">

                                        {post.author ? (
                                            <>
                                                <FaUser className="mr-2" />
                                                {post.author}
                                            </>
                                        ) : ''}

                                    </div>
                                    <div className="flex items-center">

                                        {post.date ? (
                                            <>
                                                <FaCalendarAlt className="mr-2" />
                                                {post.date}
                                            </>
                                        ) : ''}

                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {
                                    page ? (
                                        <>
                                            <Link href={`${page}/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white text-black py-2 px-4 rounded-full flex items-center hover:bg-hemito-blue  transition-colors duration-300">
                                                Read More <FaArrowRight className="ml-2" />
                                            </Link>
                                        </>
                                    ) :
                                        ''

                                }

                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-12 text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Link href={`${page ? page : ''}`}

                        className="hemito-bg text-white px-8 py-3 rounded-full w-fit transition-all duration-300 hover:bg-blue-700 hover:shadow-lg flex items-center mx-auto"
                    >
                        View more {page} <FaArrowRight className="ml-2" />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Cards;