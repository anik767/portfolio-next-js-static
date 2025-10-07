'use client';

import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const initScrollAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Wait for ScrollSmoother to be ready (if available)
        try {
          const { ScrollSmoother } = await import('gsap/ScrollSmoother');
          let smoother = ScrollSmoother.get();
          let attempts = 0;
          
          while (!smoother && attempts < 30) {
            await new Promise(resolve => setTimeout(resolve, 100));
            smoother = ScrollSmoother.get();
            attempts++;
          }
          
          if (smoother) {
            console.log('✅ ScrollSmoother detected, animations will work with it');
          }
        } catch (error) {
          console.log('ScrollSmoother not available, using standard ScrollTrigger');
        }

        // Additional delay to ensure everything is ready
        await new Promise(resolve => setTimeout(resolve, 200));

        // Configure ScrollTrigger
        ScrollTrigger.config({
          ignoreMobileResize: true,
        });

        console.log('ScrollTrigger animations initialized');

        // ===== RULES =====
        // 1. NEVER use Tailwind classes in GSAP animations (e.g., .text-center, .grid)
        // 2. ONLY use IDs and custom classes (e.g., #about-header, .service-card)
        // 3. Each section must have unique IDs for headers and content
        // 4. Use descriptive custom class names for repeated elements (e.g., .service-card, .project-card)

        // ===== REUSABLE ANIMATION FUNCTIONS =====
        
        // Simple animations without ScrollTrigger (for immediate use with delay)
        const fadeInDown = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { opacity: 0, y: -30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.6,
              ease: "power2.out",
              delay: delay
            }
          );
        };

        const slideInFromLeft = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { opacity: 0, x: -50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.8,
              ease: "power3.out",
              delay: delay
            }
          );
        };

        const slideInFromRight = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { opacity: 0, x: 50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.8,
              ease: "power3.out",
              delay: delay
            }
          );
        };

        const zoomInBounce = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { opacity: 0, scale: 0.8 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 0.8,
              ease: "back.out(1.3)",
              delay: delay
            }
          );
        };

        const fadeInUp = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { opacity: 0, y: 30 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              ease: "power2.out",
              delay: delay
            }
          );
        };

        const bounceInStagger = (selector: string, delay: number = 0, stagger: number = 0.15) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              y: -100,
              scale: 0.3
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "bounce.out",
              stagger: stagger,
              delay: delay
            }
          );
        };

        // ScrollTrigger animations
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
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
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
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
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
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Slide up with scale animation
        const slideUpWithScale = (selector: string, trigger: string, delay: number = 0) => {
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
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
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
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Zoom in animation
        const zoomIn = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              scale: 0.5
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Rotate and fade in animation
        const rotateIn = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              rotation: -15,
              scale: 0.8
            },
            {
              opacity: 1,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.2)",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Flip in animation
        const flipIn = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              rotationY: 90,
              transformOrigin: "center center"
            },
            {
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Bounce in animation
        const bounceIn = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              y: -100,
              scale: 0.3
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "bounce.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%", // Trigger when section enters 80% viewport
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Slide and rotate from left - CONSISTENT SIGNATURE
        const slideRotateLeft = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              x: -100,
              rotation: -20
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // Slide and rotate from right - CONSISTENT SIGNATURE
        const slideRotateRight = (selector: string, trigger: string, delay: number = 0) => {
          gsap.fromTo(selector, 
            { 
              opacity: 0,
              x: 100,
              rotation: 20
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: delay,
              scrollTrigger: {
                trigger: trigger,
                start: "top 80%",
                toggleActions: "play none none reverse",
                //markers: true
              }
            }
          );
        };

        // ===== SECTION ANIMATIONS =====

        // HERO SECTION - Just add IDs and use animation functions
        fadeInDown('#hero-greeting', 0.2);
        slideInFromLeft('#hero-i-am', 0.2);
        zoomInBounce('#hero-name', 0.2);
        slideInFromRight('#hero-title', .3);
        fadeInUp('#hero-buttons', .7);
        bounceInStagger('#hero-social-links .hero-social-item', .1, 0.15);

        // ABOUT SECTION - Grid skills appear one by one
        slideFromBottom('#about-header', '#about');
        slideFromRight('#technical-skills > div', '#about', 0.2); // Increased stagger for one-by-one effect

        // SERVICES SECTION - Grid items appear one by one
        slideFromBottom('#services-header', '#services');
        bounceIn('#services-content .service-card', '#services', 0.25); // Increased stagger

        // EXPERIENCE SECTION - Items appear one by one
        slideFromBottom('#experience-header', '#experience');
        slideFromLeft('#experience-content .experience-item', '#experience', 0.3); // Increased stagger

        // EDUCATION SECTION - Items appear one by one
        slideFromBottom('#education-header', '#education');
        slideFromBottom('#education-content .education-item', '#education', 0.3); // Increased stagger
        slideFromBottom('#certifications-content .certification-card', '#education', 0.25); // Increased stagger

        // PROJECTS SECTION - Grid cards fade in one by one
        fadeIn('#projects-header', '#projects');
        fadeIn('#projects-content .project-card', '#projects', 0.25); // Increased stagger for one-by-one effect

        // CONTACT SECTION - Cards appear one by one
        slideFromBottom('#contact-header', '#contact');
        rotateIn('#contact-content .contact-card', '#contact', 0.3); // Increased stagger

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
              //markers: true
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