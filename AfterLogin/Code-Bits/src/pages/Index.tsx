
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductView from '@/components/ProductView';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingElements from '@/components/FloatingElements';
import Cursor from '@/components/Cursor';
import { useMagicTrail, useSmoothScroll } from '@/lib/animations';

const Index: React.FC = () => {
  // Initialize smooth scrolling
  useSmoothScroll();
  
  // Initialize magic mouse trail effect on large screens
  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024;
    if (isLargeScreen) {
      useMagicTrail(15);
    }
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom cursor for desktop */}
      <div className="hidden lg:block">
        <Cursor />
      </div>
      
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Floating glass elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <Features />
        <ProductView />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
