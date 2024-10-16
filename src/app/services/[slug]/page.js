'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const serviceSlug = params.slug;

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await fetch(`/api/services/${serviceSlug}`);
                if (!response.ok) {
                    throw new Error('Service not found');
                }
                const data = await response.json();
                setService(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchService();
    }, [serviceSlug]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    if (!service) {
        return <div className="flex justify-center items-center h-screen">Service not found</div>;
    }
    
    return (
        <div>

        </div>
    )
}

export default page
