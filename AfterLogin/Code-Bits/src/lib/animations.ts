
import { useState, useEffect, useRef, MutableRefObject } from 'react';

// Custom hook for intersection observer animations
export function useInView(options = {}): [MutableRefObject<any>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
}

// Custom hook to create mouse follow effect
export function useMouseFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return position;
}

// Custom hook to create parallax effect
export function useParallax(factor = 0.1) {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return {
    y: offset * factor,
  };
}

// Custom hook for smooth scrolling
export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href') as string;
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 100,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

// Custom hook for implementing magic mouse trail effect
export function useMagicTrail(trailCount = 20) {
  useEffect(() => {
    const trails: HTMLDivElement[] = [];
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'magic-trail';
      trail.style.background = `hsla(${240 + i * 10}, 100%, 70%, 0.6)`;
      document.body.appendChild(trail);
      trails.push(trail);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    const positions = Array(trailCount).fill({ x: 0, y: 0 });
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    const animate = () => {
      for (let i = 0; i < trailCount; i++) {
        // Follow the mouse with delay
        const delayFactor = (trailCount - i) / trailCount;
        
        // Update positions with easing
        positions[i] = {
          x: positions[i].x + (mouseX - positions[i].x) * (0.2 * delayFactor),
          y: positions[i].y + (mouseY - positions[i].y) * (0.2 * delayFactor),
        };
        
        // Update trail appearance
        if (trails[i]) {
          trails[i].style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
          trails[i].style.opacity = `${(i / trailCount) * 0.5}`;
          trails[i].style.width = `${(i / trailCount) * 15}px`;
          trails[i].style.height = `${(i / trailCount) * 15}px`;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      trails.forEach(trail => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
    };
  }, [trailCount]);
}

// Utility for staggered animations
export function getStaggerDelay(index: number, base = 0.1, stagger = 0.05) {
  return base + index * stagger;
}

// Magnetic button effect implementation
export function useMagneticEffect(ref: React.RefObject<HTMLElement>, strength = 50) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const deltaX = Math.floor((e.clientX - centerX) / 8) * (strength / 100);
      const deltaY = Math.floor((e.clientY - centerY) / 8) * (strength / 100);
      
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength]);
}
