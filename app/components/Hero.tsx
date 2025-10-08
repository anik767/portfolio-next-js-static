'use client';

import TypingAnimation from './TypingAnimation';
import { Button, Badge, SocialLink, Text } from './common';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#F4F1EA]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/example.png')`,
        }}
      />

      {/* Enhanced Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900/90 via-gray-800/80 to-gray-900 z-10"></div>
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/40 z-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl z-5"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left Section - Text Content */}
          <div id="hero-content" className="text-white space-y-7 relative z-40">
              {/* Small text with enhanced styling */}
              <div id="hero-greeting" className="inline-block">
                <Badge variant="secondary" className="tracking-[0.3em]">
                  Hallo
                </Badge>
              </div>

            {/* Main heading with enhanced effects */}
            <div className="space-y-0.5 ">
              <Text id="hero-i-am" variant="h1" size="4xl" color="primary" fontFamily="rajdhani" className="md:text-5xl lg:text-6xl leading-[1.2] tracking-tight drop-shadow-2xl">
                I AM
              </Text>
              <Text id="hero-name" variant="h1" size="4xl" color="primary" fontFamily="rajdhani" className="md:text-5xl lg:text-6xl leading-[1.2] tracking-tight drop-shadow-2xl">
               Azmain Iqtidar Anik
              </Text>
              <Text 
                id="hero-title"
                variant="h1" 
                size="4xl" 
                gradientDirection="to-r"
                fontFamily="rajdhani"
                className="md:text-5xl lg:text-7xl"
                style={{
                  WebkitTextStroke: '.8px gray',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Web Developer
              </Text>
            </div>

            {/* Description with typing animation */}

              <TypingAnimation
                text={[
                  "I create modern web applications using cutting-edge technologies like React, Node.js, and TypeScript.",
                  "With expertise in both frontend and backend development, I bring innovative ideas to life.",
                  "I specialize in clean code and exceptional user experiences that make a difference.",
                  "Let's build something amazing together!"
                ]}
                speed={20}
                backSpeed={10}
                backDelay={1500}
                loop={true}
                textColor="secondary"
                fontFamily="poppins"
                className="text-xl h-[80px] leading-relaxed font-light"
              />
            
            {/* Enhanced CTA Button */}
            <div id="hero-buttons" className="flex flex-col sm:flex-row gap-6">
              <Button
                scrollTo="projects"
                variant="secondary"
                size="sm"
              >
                View My Work
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/damo.pdf';
                  link.download = 'Azmain Iqtidar Anik.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                variant="outline"
                size="sm"
                color="gray"
              >
                Download Resume
                <svg className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <Text variant="caption" color="muted" weight="medium" className="tracking-wide">
                Find me on:
              </Text>
              <div id="hero-social-links" className="flex space-x-6">
                <SocialLink href="https://www.facebook.com/azmainiqtidaranik" platform="facebook" className="hero-social-item" />
                <SocialLink href="https://www.instagram.com/anikazmain535" platform="instagram" className="hero-social-item" />
                <SocialLink href="https://www.linkedin.com/in/anik-azmain" platform="linkedin" className="hero-social-item" />
                <SocialLink href="https://twitter.com" platform="twitter" className="hero-social-item" />
                <SocialLink href="https://github.com/anik767" platform="github" className="hero-social-item" />
              </div>
            </div>
          </div>

          {/* Right Section - Enhanced Image and Overlay */}
          <div className="relative z-40">
            {/* Profile Image Container */}
            <div className="relative group">
              {/* Professional Image with enhanced styling */}
              <div className=" h-[600px] relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                {/* Replace this with your actual image */}
                <img
                  src="/images/Home/damo.png"
                  alt="Azmain Iqtidar Anik - Full Stack Web Developer"
                  className="w-full h-full object-contain object-center"
                />

                {/* Enhanced Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="gsap-parallax-bg absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-pink-500/40 to-pink-600/20 rounded-full opacity-70 transform translate-x-24 translate-y-24 blur-3xl"></div>
                <div className="gsap-parallax-bg absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 blur-2xl"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-lg transition-all duration-1000 ease-in-out"></div>

              {/* Experience Badge */}
              <div className="absolute -bottom-8 left-[50%] translate-x-[-50%] bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-pink-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-linear-to-r from-pink-500 to-pink-600 rounded-full"></div>
                  <span className="text-gray-900 font-bold text-sm">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
