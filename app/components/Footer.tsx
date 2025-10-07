'use client';

import { useEffect, useRef } from 'react';
import SocialLink from './common/SocialLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // GSAP Footer Animation
  useEffect(() => {
    const animateFooter = async () => {
      if (footerRef.current) {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          footerRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    };

    animateFooter();
  }, []);

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div ref={footerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 footer-content">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AA</span>
              </div>
              <span className="text-xl font-bold">Azmain Iqtidar Anik</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Full Stack Developer & UI/UX Designer creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" platform="github" />
              <SocialLink href="https://linkedin.com" platform="linkedin" />
              <SocialLink href="https://twitter.com" platform="twitter" />
              <SocialLink href="https://instagram.com" platform="instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-300 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">azmain.anik@example.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Azmain Iqtidar Anik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
