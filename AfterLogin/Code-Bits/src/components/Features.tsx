
import React from 'react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon, index }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={cn(
        "group relative p-8 rounded-2xl transition-all duration-500 hover:bg-white/50 dark:hover:bg-black/20 backdrop-blur-sm hover:shadow-xl",
        "border border-transparent hover:border-border",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.1 });
  
  const features = [
    {
      title: "Minimalist Design",
      description: "Clean aesthetics that focus on essential elements, removing visual clutter for a more focused experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
      ),
    },
    {
      title: "Intuitive Interactions",
      description: "Thoughtfully designed user interactions that feel natural and effortless, enhancing the overall experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
      ),
    },
    {
      title: "Premium Materials",
      description: "Crafted from the highest quality materials for durability, sustainability, and a luxurious feel.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      ),
    },
    {
      title: "Precision Engineering",
      description: "Every component is engineered with meticulous attention to detail, ensuring reliability and performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
      ),
    },
    {
      title: "Seamless Experience",
      description: "Software and hardware perfectly integrated to create a cohesive and unified user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19 17v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1"></path></svg>
      ),
    },
    {
      title: "Sustainable Design",
      description: "Environmentally conscious design that minimizes ecological impact without compromising quality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0"></path><path d="M12 6a6 6 0 0 0-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 0 0-6-6"></path></svg>
      ),
    },
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
        <ParallaxSection className="text-center mb-16">
          <div 
            ref={titleRef}
            className={cn(
              "max-w-3xl mx-auto transition-all duration-1000 ease-out",
              isTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted with precision, designed for perfection</h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of our product is thoughtfully considered to deliver an exceptional experience that feels intuitive and natural.
            </p>
          </div>
        </ParallaxSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-50/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-blue-50/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-30"></div>
    </section>
  );
};

export default Features;
