// app/career/[id]/page.js
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaDollarSign,
    FaBriefcase,
    FaClock,
    FaArrowLeft,
    FaCheckCircle,
    FaEnvelope,
    FaPhone,
    FaFileAlt,
    FaPaperPlane,
    FaChevronDown,
    FaRupeeSign
} from 'react-icons/fa';

export default function CareerDetails({ params }) {
    const [vacancy, setVacancy] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const scrollToSection = () => {
        const element = document.getElementById("jobdetails");
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    useEffect(() => {
        const fetchVacancyDetails = async () => {
            try {
                const response = await fetch(`process.env.NEXT_PUBLIC_BACKEND_URLcareer/vacancies/${params.id}`);
                const data = await response.json();
                setVacancy(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch vacancy details. Please try again later.');
                setLoading(false);
            }
        };

        fetchVacancyDetails();
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-poppins">
            {/* Header */}
            <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center hemito-bg rounded-3xl h-4/6 w-full flex justify-center items-center " >

                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link href="/career" className="md:hidden inline-flex items-center text-white mb-6 hover:text-blue-100">
                                <FaArrowLeft className="mr-2" />
                                Back to Listings
                            </Link>
                            <h1 className="text-7xl md:text-9xl uppercase text-white mb-6 font-barlow font-black">{vacancy.title}</h1>
                            <div className="flex flex-wrap gap-6 md:text-lg">
                                <div className="flex items-center ">
                                    <FaMapMarkerAlt className="mr-2" />
                                    {vacancy.location}
                                </div>
                                <div className="flex items-center">
                                    <FaRupeeSign className="mr-2" />
                                    {vacancy.salary}
                                </div>
                                <div className="flex items-center">
                                    <FaBriefcase className="mr-2" />
                                    {vacancy.type}
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="mr-2" />
                                    Posted {new Date(vacancy.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
                    <FaChevronDown className="text-blue-500" size={24} />
                </button>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12" id='jobdetails'>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 font-barlow">Job Description</h2>
                            <p className="text-gray-600 whitespace-pre-line leading-relaxed">{vacancy.description}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 font-barlow">Requirements</h2>
                            <ul className="space-y-3">
                                {vacancy.requirements.map((requirement, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-600">{requirement}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Benefits Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-xl shadow-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 font-barlow">Benefits</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                    <h3 className="font-semibold text-blue-800 mb-2">Health & Wellness</h3>
                                    <p className="text-gray-600">Comprehensive health insurance, dental, and vision coverage</p>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                    <h3 className="font-semibold text-green-800 mb-2">Work-Life Balance</h3>
                                    <p className="text-gray-600">Flexible working hours and remote work options</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                    <h3 className="font-semibold text-purple-800 mb-2">Professional Growth</h3>
                                    <p className="text-gray-600">Learning budget and career development opportunities</p>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                    <h3 className="font-semibold text-orange-800 mb-2">Company Perks</h3>
                                    <p className="text-gray-600">Regular team events and annual retreats</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Application Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-1"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                            <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
                            <ApplicationForm vacancy={vacancy} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ApplicationForm({ vacancy }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch(
                `process.env.NEXT_PUBLIC_BACKEND_URLcareer/apply/${vacancy._id}`,
                {
                    method: 'POST',
                    body: formDataToSend
                }
            );

            if (response.ok) {
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    resume: null,
                    coverLetter: ''
                });
            } else {
                throw new Error('Failed to submit application');
            }
        } catch (error) {
            setSubmitError('Error submitting application. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="text-center py-8">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-4">Thank you for your interest. We'll be in touch soon.</p>
                <button
                    onClick={() => setSubmitSuccess(false)}
                    className="text-blue-600 hover:text-blue-800"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    <FaEnvelope className="inline-block mr-2" />
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    <FaEnvelope className="inline-block mr-2" />
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    <FaPhone className="inline-block mr-2" />
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    <FaFileAlt className="inline-block mr-2" />
                    Resume
                </label>
                <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    accept=".pdf,.doc,.docx"
                    required
                />
                <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">
                    Cover Letter
                </label>
                <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                    placeholder="Tell us why you're interested in this position..."
                    required
                />
            </div>

            {submitError && (
                <div className="text-red-500 text-sm">{submitError}</div>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
                {submitting ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                    </>
                ) : (
                    <>
                        <FaPaperPlane />
                        <span>Submit Application</span>
                    </>
                )}
            </button>
        </form>
    );
}