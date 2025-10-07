'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const initScrollAnimations = async () => {
      if (typeof window !== 'undefined') {
        // Wait for ScrollSmoother to be ready
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // ===== RULES =====
        // 1. NEVER use Tailwind classes in GSAP animations (e.g., .text-center, .grid)
        // 2. ONLY use IDs and custom classes (e.g., #about-header, .service-card)
        // 3. Each section must have unique IDs for headers and content
        // 4. Use descriptive custom class names for repeated elements (e.g., .service-card, .project-card)

        // ===== REUSABLE ANIMATION FUNCTIONS =====
        
        // Slide from left animation
        const slideFromLeft = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0, 
              x: -100
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: true
              }
            }
          );
        };

        // Slide from right animation
        const slideFromRight = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0, 
              x: 100
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: true
              }
            }
          );
        };

        // Slide from bottom animation
        const slideFromBottom = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0, 
              y: 100
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: true
              }
            }
          );
        };

        // Slide up with scale animation
        const slideUpWithScale = (selector: string, trigger: string) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0, 
              y: 100,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: true
              }
            }
          );
        };

        // Fade in animation
        const fadeIn = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0
            },
            {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: true
              }
            }
          );
        };

        // ===== SECTION ANIMATIONS =====

        // HERO SECTION
        slideUpWithScale('#hero-content', '#home');
        slideFromRight('#hero-social-links .hero-social-item', '#home', 0.15);

        // ABOUT SECTION
        fadeIn('#about-header', '#about');
        slideFromRight('#technical-skills > div', '#technical-skills', 0.1);

        // SERVICES SECTION
        fadeIn('#services-header', '#services');
        slideFromLeft('#services-content .service-card', '#services-content', 0.2);

        // EXPERIENCE SECTION
        fadeIn('#experience-header', '#experience');
        slideFromLeft('#experience-content .experience-item', '#experience-content', 0.2);

        // EDUCATION SECTION
        fadeIn('#education-header', '#education');
        slideFromBottom('#education-content .education-item', '#education-content', 0.2);
        slideFromBottom('#certifications-content .certification-card', '#certifications-content', 0.15);

        // PROJECTS SECTION
        fadeIn('#projects-header', '#projects');
        slideFromBottom('#projects-content .project-card', '#projects-content', 0.2);

        // CONTACT SECTION
        fadeIn('#contact-header', '#contact');
        slideFromLeft('#contact-content .contact-card', '#contact-content', 0.2);
        slideFromRight('#social-links .social-link-item', '#social-links', 0.15);

        // Parallax Effect for Background Elements
        gsap.utils.toArray('.gsap-parallax-bg').forEach((element: any) => {
          gsap.to(element, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers: true
            }
          });
        });

        // Refresh ScrollTrigger after all animations are set up
        ScrollTrigger.refresh();
      }
    };

    initScrollAnimations();

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        });
      }
    };
  }, []);

  return null;
};

export default ScrollAnimations;