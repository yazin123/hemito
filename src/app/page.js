'use client'
import { FaChevronDown } from "react-icons/fa";
import FreeConsultation from "@/components/home/FreeConsultation";
import Blogs from "@/components/blogs/BlogCards";
import Location from "@/components/home/Location";
import TeamBanner from "@/components/home/TeamBanner";
import CaseStudyCards from "@/components/case-study/CaseStudyCards";
import ServiceFloating from "@/components/home/ServiceFloating";
import PostersBanners from "@/components/home/PostersBanners";


export default function Home() {
  const scrollToSection = () => {
    const element = document.getElementById("marketingSection");
    if (element) {
      const yOffset = -100; // Adjust this value to fine-tune the scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <>
      {/* hero */}
      <div className="relative h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full" data-aos="fade-right">
        </div>
        <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
          <FaChevronDown className="text-blue-500" size={24} />
        </button>
      </div>
      {/* content */}
      <div id="marketingSection" className="flex mt-28 mb-28 flex-col md:flex-row overflow-hidden bg-white p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:w-1/2 pr-4 flex lg:justify-center">
          <h1 className="text-7xl font-black mb-4 text-black font-barlow lg:w-4/6" data-aos="fade-right">
            BEST DIGITAL MARKETING COMPANY IN KERALA
          </h1>
        </div>
        <div className="md:w-1/2 flex lg:justify-center">
          <p className="text-gray-700 mb-4 lg:w-4/6 text-justify text-lg" data-aos="fade-left">
            Digital marketing is a powerful tool for businesses to reach wider audiences and achieve success. <span className="text-blue-600 font-semibold">Hemito Digital</span>, the top digital marketing agency in <span className="text-blue-600 font-semibold">Kochi, Kerala</span>, offers expert services like <span className="text-blue-600 font-semibold">social media marketing, Google and YouTube ads, content marketing, SEO, and influencer marketing</span> to elevate your brand.
            With 48% of consumers starting their searches on search engines and 33% visiting brand <span className="text-blue-600 font-semibold">websites</span>, online visibility is crucial. We help you engage your audience effectively through targeted strategies, ensuring your brand stands out in the competitive digital landscape.
          </p>
        </div>
      </div>
      <PostersBanners />
      <ServiceFloating />
      <CaseStudyCards />
      <TeamBanner />
      <Location />
      <Blogs />
      <FreeConsultation />
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
