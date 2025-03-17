
import React, { useRef } from 'react';
import { useInView, useMagneticEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [headingRef, isHeadingInView] = useInView({ threshold: 0.1 });
  const [subtitleRef, isSubtitleInView] = useInView({ threshold: 0.1 });
  const [ctaRef, isCtaInView] = useInView({ threshold: 0.1 });
  
  const magneticButtonRef = useRef<HTMLDivElement>(null);
  useMagneticEffect(magneticButtonRef, 30);
  
  return (
    <section id="home" className="min-h-screen w-full flex flex-col items-center justify-center relative pt-20 pb-20 overflow-hidden">
      {/* Visual elements for depth */}
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] top-[-400px] left-[-400px] rounded-full bg-gradient-to-br from-blue-50/30 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] bottom-[-300px] right-[-300px] rounded-full bg-gradient-to-tr from-blue-50/20 to-transparent opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 max-w-6xl">
        {/* Headline */}
        <div 
          ref={headingRef} 
          className={cn(
            "text-center transition-all duration-1000 ease-out delay-300",
            isHeadingInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="relative inline-block mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary">
              Introducing Essence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-tight">
            <span className="block mb-2">Simplicity is the</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-primary">
              Ultimate Sophistication
            </span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div 
          ref={subtitleRef} 
          className={cn(
            "mt-8 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out delay-500",
            isSubtitleInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the perfect balance of form and function. Designed with meticulous attention to detail, our product embodies the philosophy that less is more.
          </p>
        </div>
        
        {/* Call to Action */}
        <div 
          ref={ctaRef} 
          className={cn(
            "mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-1000 ease-out delay-700",
            isCtaInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div ref={magneticButtonRef} className="magnetic-button">
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-base font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]">
              Discover Now
            </button>
          </div>
          
          <a href="#features" className="group flex items-center text-base font-medium text-primary transition-all duration-300 hover:text-primary/80">
            <span>Learn more</span>
            <svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
          <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll</span>
          <div className="w-0.5 h-8 bg-primary/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-primary animate-[slide-in-top_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
