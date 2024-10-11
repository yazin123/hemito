'use client'
import React, { useEffect, useState, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const qualities = ['CREATIVITY', 'INNOVATION', 'EXCELLENCE', 'DEDICATION', 'PASSION'];
    const [currentQuality, setCurrentQuality] = useState(0);
    const [animate, setAnimate] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentQuality((prev) => (prev + 1) % qualities.length);
                setAnimate(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.1;
            }

            draw() {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const createParticles = () => {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].size <= 0.2) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            if (particles.length < 50) {
                createParticles();
            }

            animationFrameId = requestAnimationFrame(animateParticles);
        };

        createParticles();
        animateParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <footer className="hemito-bg text-white p-8 font-poppins relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-4 md:mb-0 group" data-aos="fade-right">
                        <img 
                            src="/logo.png" 
                            alt="Hemito logo" 
                            className="h-16 w-auto transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                            style={{ filter: "brightness(0) invert(1)" }} 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 lg:gap-32 pr-5 mt-5">
                        <div>
                            <h3 className="font-light mb-5 text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-500" data-aos="fade-right">Quick Links</h3>
                            <ul className="space-y-2 font-light" data-aos="fade-right">
                                {['about', 'services', 'portfolio', 'contact', 'blog', 'career', 'team'].map((item) => (
                                    <li key={item} className="transform hover:translate-x-2 transition-transform duration-300">
                                        <a href={`#${item}`} className="hover:text-yellow-300 relative group">
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-light mb-5 text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" data-aos="fade-right">Connect With Us</h3>
                            <ul className="space-y-2 font-light" data-aos="fade-right">
                                {[
                                    { name: 'Instagram', icon: FaInstagram, color: 'hover:text-pink-500' },
                                    { name: 'Facebook', icon: FaFacebook, color: 'hover:text-blue-500' },
                                    { name: 'WhatsApp', icon: FaWhatsapp, color: 'hover:text-green-500' },
                                    { name: 'LinkedIn', icon: FaLinkedin, color: 'hover:text-blue-700' },
                                    { name: 'YouTube', icon: FaYoutube, color: 'hover:text-red-500' },
                                ].map((item) => (
                                    <li key={item.name} className="flex items-center group">
                                        <item.icon size={20} className={`mr-2 ${item.color} transition-colors duration-300`} />
                                        <a href={`https://${item.name.toLowerCase()}.com`} className={`${item.color} transition-colors duration-300 relative group-hover:pl-2`}>
                                            {item.name}
                                            <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-4 relative" data-aos="fade-right">
                    <h2 className={`text-5xl lg:text-9xl font-black font-barlow mt-4 md:mt-0 transition-all duration-500 ${animate ? 'opacity-0 transform -translate-y-10' : 'opacity-100 transform translate-y-0'}`}>
                        {qualities[currentQuality]}
                    </h2>
                    <div className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600"></div>
                </div>
                <div className="flex justify-center mt-8">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Hemito. All rights reserved.</p>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        </footer>
    )
}

export default Footer