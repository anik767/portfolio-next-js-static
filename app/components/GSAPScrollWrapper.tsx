'use client';

import { useEffect, useRef } from 'react';

const GSAPScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAPScroll = async () => {
      if (typeof window !== 'undefined' && scrollContainerRef.current) {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        const { ScrollSmoother } = await import('gsap/ScrollSmoother');
        
        // Register the plugins (ScrollSmoother requires ScrollTrigger)
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        
        const smoother = ScrollSmoother.create({
          wrapper: "#scroll-wrapper",
          content: "#scroll-content",
          smooth: 1.5,
          effects: true,
          normalizeScroll: true
        });

        // Configure ScrollTrigger for ScrollSmoother
        ScrollTrigger.config({
          ignoreMobileResize: true,
        });
       

        return smoother;
      }
    };

    let smoother: any = null;

    initGSAPScroll().then((scrollInstance) => {
      smoother = scrollInstance;
    });

    // Cleanup on unmount
    return () => {
      if (smoother && typeof smoother.kill === 'function') {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="scroll-wrapper" ref={scrollContainerRef}>
      <div id="scroll-content">
        {children}
      </div>
    </div>
  );
};

export default GSAPScrollWrapper;
