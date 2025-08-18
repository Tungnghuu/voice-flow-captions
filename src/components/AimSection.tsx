import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Accessibility } from 'lucide-react';

const AimSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="aim" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Mission
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Making voice the simplest, most intuitive interface for everyone. We envision a world where 
                technology adapts to how humans naturally communicate, not the other way around.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className={`text-center space-y-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: '0.2s' }}>
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Accessibility className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Voice-First Future
                  </h3>
                  <p className="text-muted-foreground">
                    Pioneering natural voice interaction that eliminates the need for 
                    complex menus and interfaces.
                  </p>
                </div>

                <div className={`text-center space-y-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: '0.4s' }}>
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    AI Companion
                  </h3>
                  <p className="text-muted-foreground">
                    Creating an intelligent agent that understands intent, maintains context, 
                    and executes actions safely and efficiently.
                  </p>
                </div>

                <div className={`text-center space-y-4 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: '0.6s' }}>
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Universal Access
                  </h3>
                  <p className="text-muted-foreground">
                    Breaking down barriers through voice, supporting accessibility needs 
                    and multilingual communication seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimSection;