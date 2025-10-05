'use client';

import TypingAnimation from './TypingAnimation';
import { Button, Badge, SocialLink, Text } from './common';

const Hero = () => {

  return (
    <section id="home" className="min-h-screen flex items-center  relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/example.png')`,
        }}
      />

      {/* Enhanced Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 z-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse z-5"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="text-white space-y-7 relative z-40">
              {/* Small text with enhanced styling */}
              <div className="inline-block">
                <Badge variant="secondary" className="tracking-[0.3em]">
                  Hallo
                </Badge>
              </div>

            {/* Main heading with enhanced effects */}
            <div className="space-y-2">
              <Text variant="h1" size="4xl" color="primary" fontFamily="rajdhani" className="md:text-5xl lg:text-6xl leading-[1.2] tracking-tight drop-shadow-2xl">
                I AM Jhon Dio
              </Text>
              <Text 
                variant="h1" 
                size="4xl" 
                gradient="blue"
                gradientDirection="to-r"
                fontFamily="rajdhani"
                className="md:text-5xl lg:text-6xl leading-[1.2] tracking-tight drop-shadow-2xl"
              >
                Web Developer.
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
            <div className="flex flex-col sm:flex-row gap-6">
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
                scrollTo="contact"
                variant="outline"
                size="sm"
                color="gray"
              >
                Get In Touch
                <svg className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <Text variant="small" color="muted" weight="medium" className="tracking-wide">
                Find me on
              </Text>
              <div className="flex space-x-6">
                <SocialLink href="https://instagram.com" platform="instagram" />
                <SocialLink href="https://linkedin.com" platform="linkedin" />
                <SocialLink href="https://twitter.com" platform="twitter" />
                <SocialLink href="https://github.com" platform="github" />
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
                  alt="Ralph Edwards - Full Stack Web Developer"
                  className="w-full h-full object-contain object-center transition-all group-hover:duration-500 ease- group-hover:scale-110"
                />

                {/* Enhanced Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/40 to-pink-600/20 rounded-full opacity-70 transform translate-x-24 translate-y-24 blur-3xl transition-all duration-700 group-hover:opacity-90 group-hover:scale-110"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 blur-2xl"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-500/30 rounded-full blur-xl animate-pulse transition-all duration-1000 ease-in-out group-hover:scale-125"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000 transition-all duration-1000 ease-in-out group-hover:scale-110"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-500 transition-all duration-1000 ease-in-out"></div>

              {/* Experience Badge */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-pink-200/50 transition-all duration-500 ease-out hover:scale-105 hover:shadow-pink-500/20 group">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-300 group-hover:scale-125"></div>
                  <span className="text-gray-900 font-bold text-sm group-hover:text-pink-600 transition-colors duration-300">2+ Years Experience</span>
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
