'use client';

import { useEffect, useRef } from 'react';

const GSAPScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    const initScrollSmoother = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          const { ScrollSmoother } = await import('gsap/ScrollSmoother');
          
          // Register plugins
          gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

          // Wait for DOM to be ready
          await new Promise(resolve => requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
          }));

          // Kill existing instance if any
          const existing = ScrollSmoother.get();
          if (existing) {
            existing.kill();
          }

          // Create ScrollSmoother with all features
          const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,                    // How long it takes to catch up (seconds)
            effects: true,                // Enable data-speed and data-lag attributes
            smoothTouch: 1.5,             // Smooth on touch devices
            normalizeScroll: true,        // Prevent mobile address bar issues
            ignoreMobileResize: true,     // Ignore mobile resize events
          });

          smootherRef.current = smoother;
          
          console.log('✅ ScrollSmoother initialized with all features:');
          console.log('- data-speed attribute supported');
          console.log('- data-lag attribute supported');
          console.log('- normalizeScroll enabled');
          console.log('- Native browser scroll (no fake scrollbars)');

        } catch (error) {
          console.warn('⚠️ ScrollSmoother not available (premium plugin)');
          console.log('Falling back to native smooth scroll');
          // Fallback to native smooth scroll
          document.documentElement.style.scrollBehavior = 'smooth';
        }
      }
    };

    const timeout = setTimeout(initScrollSmoother, 100);

    return () => {
      clearTimeout(timeout);
      if (smootherRef.current) {
        smootherRef.current.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default GSAPScrollWrapper;
