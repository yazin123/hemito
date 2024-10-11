import React from 'react'

const ServiceFloating = () => {
    const services = [
        { id: 1, name: 'Social Media Marketing', duration: 1300 },
        { id: 2, name: 'Website Development', duration: 1400 },
        { id: 3, name: 'Content Marketing', duration: 1500 },
        { id: 4, name: 'SEO Optimization', duration: 1600 },
        { id: 5, name: 'Email Campaigns', duration: 1700 },
    ];
    return (
        <div className="banner-container flex justify-center items-center mt-20 mb-20 overflow-hidden">
            <div className="banner-content p-6 flex flex-wrap justify-center animate-marquee">
                <div className="flex">
                    {services.map(service => (
                        <span key={service.id} className="banner-item p-4 text-lg font-poppins">{service.name}</span>
                    ))}
                    {services.map(service => (
                        <span key={service.id + 5} className="banner-item p-4 text-lg font-poppins">{service.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceFloating
