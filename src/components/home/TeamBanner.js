import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const TeamBanner = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20">
                <h1 data-aos="fade-right" className=" font-barlow font-black text-center text-5xl lg:text-9xl mt-40 mb-20  uppercase">
                    Take a close look at our <span className="hemito-blue" > professionals</span>
                </h1>
                <div className="flex justify-center" data-aos="fade-right">
                    <Link href='/team' className="flex duration-300 group justify-center gap-3 text-5xl font-barlow font-bold uppercase align-middle items-center hemito-bg rounded-2xl text-white px-7 py-5">
                        Our Team  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" size={30} /> </Link>
                </div>
            </div>
        </div>
    )
}

export default TeamBanner
