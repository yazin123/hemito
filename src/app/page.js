'use client'
import Image from "next/image";
import { FaChevronDown, FaArrowRight, FaMapMarked, FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaYoutube } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from "next/link";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollToSection = () => {
    const element = document.getElementById("marketingSection");
    if (element) {
      const yOffset = -100; // Adjust this value to fine-tune the scroll position
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sectionRef = useRef(null);
  const topBannerRef = useRef(null);
  const bottomBannerRef = useRef(null);

  const services = [
    { id: 1, name: 'Social Media Marketing', duration: 1300 },
    { id: 2, name: 'Website Development', duration: 1400 },
    { id: 3, name: 'Content Marketing', duration: 1500 },
    { id: 4, name: 'SEO Optimization', duration: 1600 },
    { id: 5, name: 'Email Campaigns', duration: 1700 },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const topBanner = topBannerRef.current;
    const bottomBanner = bottomBannerRef.current;

    gsap.to(topBanner, {
      x: '-20%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    gsap.to(bottomBanner, {
      x: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const banners = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: '/banner.png',
    alt: `Perlin Banner ${i + 1}`
  }));

  const topBanners = banners.slice(0, 5);
  const bottomBanners = banners.slice(5);

  const caseStudies = [
    {
      logo: "/path-to-veza-tax-logo.png",
      companyName: "Veza Tax",
      description: "In the vast digital marketplace, a distinct identity is paramount. We crafted a comprehensive branding strategy for Veza Tax, elevating their visual presence and market positioning.",
      images: [
        "/banner.png",
        "/banner.png",
        "/banner.png",
        "/banner.png",
        "/banner.png",
      ]
    },
    {
      logo: "/path-to-aps-logo.png",
      companyName: "APS",
      description: "APS required a brand refresh that would resonate with their tech-savvy audience. Our team developed a modern, dynamic identity that perfectly captures their innovative spirit.",
      images: [
        "/banner.png",
        "/banner.png",
        "/banner.png",
        "/banner.png",
        "/banner.png",
      ]
    },
  ];
  const CaseStudyCard = ({ logo, companyName, description, images }) => {
    return (
      <div className="font-poppins flex flex-col md:flex-row items-start p-6 mb-8" data-aos="fade-right">
        <div className="w-full md:w-1/3 mb-6 md:mb-0  border h-full">
          <div className="border-2 border-blue-500 rounded-lg p-4 flex items-center justify-center h-full">
            <Image src={logo} alt={companyName} width={200} height={100} objectFit="contain" />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-2">{companyName}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {images.map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`${companyName} image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
          <Link href={`/case-study/${companyName.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-2xl hover:bg-slate-900 transition-all duration-300 group">
            View case study
            <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />

          </Link>
        </div>
      </div>
    );
  };
  const blogPosts = [
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
    { title: "What are the best AI use automation Tasks for SEO", description: "In the vast digital marketplace, a distinct identity is paramount. Hemito Digital specializes in branding that resonates and endures. We delve deep into your brand's ethos, crafting a narrative and visual identity that sets you apart. With Hemito", image: "/banner.png" },
  ];

  const qualities = ['CREATIVITY', 'INNOVATION', 'EXCELLENCE', 'DEDICATION', 'PASSION'];
  const [currentQuality, setCurrentQuality] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuality((prev) => (prev + 1) % qualities.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center bg-[#1A75BB] rounded-3xl h-4/6 w-full" data-aos="fade-right">
        </div>
        <button className="absolute bottom-8 border border-[#1A75BB] transform -translate-x-1/2 bg-white rounded-full p-4 animate-bounce" onClick={scrollToSection}>
          <FaChevronDown className="text-blue-500" size={24} />
        </button>
      </div>

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

      <div ref={sectionRef} className="relative h-screen overflow-hidden hidden md:block">
        <div ref={topBannerRef} className="absolute top-0 left-0 w-[200%] flex">
          {topBanners.concat(topBanners).map((banner, index) => (
            <div key={`${banner.id}-${index}`} className="w-1/5 p-4">
              <Image width={200} height={200} src={banner.src} alt={banner.alt} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
        <div ref={bottomBannerRef} className="absolute bottom-0 left-[-100%] w-[200%] flex">
          {bottomBanners.concat(bottomBanners).map((banner, index) => (
            <div key={`${banner.id}-${index}`} className="w-1/5 p-4">
              <Image width={200} height={200} src={banner.src} alt={banner.alt} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          ))}
        </div>
      </div>

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

      <div className="">
        <h1 className="font-barlow font-black text-center text-7xl lg:text-9xl mt-40 mb-20  uppercase" >What they have to say</h1>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20">
        <h1 data-aos="fade-right" className=" font-barlow font-black text-center text-5xl lg:text-9xl mt-40 mb-20  uppercase">
          Take a close look at our <span className="hemito-blue" > professionals</span>
        </h1>
        <div className="flex justify-center" data-aos="fade-right">
          <Link href='/team' className="flex duration-300 group justify-center gap-3 text-5xl font-barlow font-bold uppercase align-middle items-center hemito-bg rounded-2xl text-white px-7 py-5">
            Our Team  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" size={30} /> </Link>
        </div>
      </div>
      {/* location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20 mt-40">
        <div className="rounded-lg transition-transform">
          <h2 className="text-5xl uppercase mb-4 text-center font-barlow font-black">Visit Us</h2>
          <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => window.open('https://goo.gl/maps/your-company-location', '_blank')}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/banner.png" layout="fill"
                objectFit="cover" alt="Hemito Logo" className="max-w-full max-h-full " />
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg">
              <FaMapMarked size={24} />
            </div>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20 mt-40">
        <div>
          <h2 className="text-5xl uppercase mb-4 text-center font-barlow font-black">Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 font-poppins">
            {blogPosts.map((post, index) => (
              <div key={index} data-aos="fade-up"
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                onClick={() => window.location.href = `/blogs/${encodeURIComponent(post.title)}`}>
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h1 className="font-bold">{post.title}</h1>
                  <p className="text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center font-poppins">
            <button onClick={() => window.location.href = '/blogs'}
              className=" text-white px-5 py-2 rounded-full hemito-bg transition-colors">
              View More
            </button>
          </div>
        </div>
      </div>
      {/* get a free consultation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center mb-20 mt-40 font-poppins">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="text-7xl font-black font-barlow mb-4" data-aos="fade-right">
              GET A FREE<br />
              <span className="hemito-blue">CONSULTATION</span><br />
              ON
            </h1>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button data-aos-duration={service.duration} data-aos="fade-right"
                  key={service.id}
                  className="flex items-center justify-between w-full md:w-64 hemito-bg text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <span>{service.name}</span>
                  <FaArrowRight />
                </button>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <Image data-aos="fade-right"
              src="/consultation.png"
              alt="Free Consultation"
              width={1000}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="hemito-bg text-white p-8 font-poppins">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 ">
            {/* logo */}
            <div className="mb-4 md:mb-0" data-aos="fade-right">
              <img src="/logo.png" alt="Hemito logo" className="h-16 w-auto" style={{ filter: "brightness(0) invert(1)"}} />
            </div>
            {/* quick links */}
            <div className="grid grid-cols-2 gap-8 lg:gap-32 pr-5 mt-5 ">
              <div>
                <h3 className="font-light mb-5" data-aos="fade-right">quick links</h3>
                <ul className="space-y-1 font-light" data-aos="fade-right">
                  {['about', 'services', 'portfolio', 'contact', 'blog', 'career', 'team'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} className="hover:underline">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-light mb-5" data-aos="fade-right">follow us</h3>
                <ul className="space-y-1 font-light" data-aos="fade-right">
                  {[
                    { name: 'instagram', icon: FaInstagram },
                    { name: 'facebook', icon: FaFacebook },
                    { name: 'whatsapp', icon: FaWhatsapp },
                    { name: 'linkedin', icon: FaLinkedin },
                    { name: 'youtube', icon: FaYoutube },
                  ].map((item) => (
                    <li key={item.name} className="flex items-center">
                      {/* {item.icon && <item.icon size={16} className="mr-2" />} */}
                      <a href={`https://${item.name}.com`} className="hover:underline">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=" pt-4 " data-aos="fade-right">
            <h2 className=" text-5xl lg:text-9xl font-black font-barlow mt-4 md:mt-0 ">{qualities[currentQuality]}</h2>
          </div>
          <div className="flex lg:justify-center">
            <p className="text-sm">&copy; 2024 hemito. All rights reserved.</p>
          </div>
        </div>
      </footer>
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
