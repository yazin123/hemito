import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';


const PostersBanners = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef = useRef(null);
    const topBannerRef = useRef(null);
    const bottomBannerRef = useRef(null);



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



    return (
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
    )
}

export default PostersBanners
