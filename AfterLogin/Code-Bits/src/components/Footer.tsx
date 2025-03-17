
import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/animations';

const Footer: React.FC = () => {
  const [footerRef, isFooterInView] = useInView({ threshold: 0.1 });
  
  const links = [
    {
      title: "Product",
      items: ["Features", "Specifications", "Pricing", "Support", "Warranty"],
    },
    {
      title: "Company",
      items: ["About", "Team", "Careers", "Press", "Blog"],
    },
    {
      title: "Resources",
      items: ["Documentation", "Guides", "FAQs", "Community", "Contact"],
    },
    {
      title: "Legal",
      items: ["Privacy", "Terms", "Cookies", "Licenses", "Trademarks"],
    },
  ];
  
  return (
    <footer 
      id="contact"
      ref={footerRef}
      className={cn(
        "pt-20 pb-10 relative overflow-hidden transition-all duration-1000 ease-out border-t border-border",
        isFooterInView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {links.map((group, groupIndex) => (
            <div key={group.title} className={cn("transition-all duration-700", isFooterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")} style={{ transitionDelay: `${groupIndex * 0.1}s` }}>
              <h4 className="font-medium text-base mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      style={{ transitionDelay: `${(groupIndex * 5 + itemIndex) * 0.03}s` }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="font-bold text-xl mr-4">Essence</div>
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
          
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">{social}</a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-full h-80 bg-gradient-to-t from-background/50 to-transparent -z-10 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
