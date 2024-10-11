import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const blogPosts = [
        { 
            title: "Top AI Automation Tasks for SEO",
            description: "Discover how AI is revolutionizing SEO strategies and boosting online visibility.",
            image: "/banner.png",
            author: "John Doe",
            date: "2023-05-15"
        },
        { 
            title: "The Future of Digital Marketing",
            description: "Explore emerging trends that will shape the digital marketing landscape in the coming years.",
            image: "/banner.png",
            author: "Jane Smith",
            date: "2023-05-20"
        },
        { 
            title: "Mastering Social Media Engagement",
            description: "Learn effective techniques to increase your brand's social media presence and engagement.",
            image: "/banner.png",
            author: "Mike Johnson",
            date: "2023-05-25"
        },
        { 
            title: "E-commerce Optimization Strategies",
            description: "Unlock the secrets to boosting your online store's conversion rates and customer retention.",
            image: "/banner.png",
            author: "Sarah Brown",
            date: "2023-05-30"
        },
        { 
            title: "Content Marketing in the AI Era",
            description: "Discover how AI tools are transforming content creation and distribution strategies.",
            image: "/banner.png",
            author: "Chris Lee",
            date: "2023-06-05"
        },
        { 
            title: "The Power of Video Marketing",
            description: "Explore the impact of video content on brand awareness and customer engagement.",
            image: "/banner.png",
            author: "Emma Wilson",
            date: "2023-06-10"
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20 mt-40">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl uppercase mb-4 text-center font-barlow font-black">
                    Our <span className="hemito-blue">Insights</span>
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Stay ahead of the curve with our expert analysis and cutting-edge strategies in digital marketing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 font-poppins">
                    {blogPosts.map((post, index) => (
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
                                        <FaUser className="mr-2" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button className="bg-white text-black py-2 px-4 rounded-full flex items-center hover:bg-hemito-blue  transition-colors duration-300">
                                    Read More <FaArrowRight className="ml-2" />
                                </button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <button 
                        onClick={() => window.location.href = '/blogs'}
                        className="hemito-bg text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-lg flex items-center mx-auto"
                    >
                        View All Posts <FaArrowRight className="ml-2" />
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Blogs;