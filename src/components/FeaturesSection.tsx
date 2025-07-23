import React, { useEffect, useRef, useState } from 'react';
import { Mic, FileText, Settings, Globe } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: Mic,
    title: 'Real-time Recognition',
    description: 'Instant voice-to-text conversion with industry-leading accuracy and minimal latency.',
    delay: 0.1
  },
  {
    icon: FileText,
    title: 'Export Transcripts',
    description: 'Save and export your transcriptions in multiple formats including PDF, DOCX, and TXT.',
    delay: 0.2
  },
  {
    icon: Settings,
    title: 'Adjustable Mic Sensitivity',
    description: 'Fine-tune microphone sensitivity to work perfectly in any environment or setup.',
    delay: 0.3
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Support for 50+ languages with real-time translation capabilities.',
    delay: 0.4
  }
];

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for seamless voice-to-text conversion and accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group hover-lift transition-all duration-500 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className="gradient-border h-full">
                  <div className="p-6 h-full flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;