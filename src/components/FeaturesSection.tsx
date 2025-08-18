import React, { useEffect, useRef, useState } from 'react';
import { Mic, Bot, Keyboard, Globe, Eye, Shield } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  delay: number;
}

const features: Feature[] = [
  {
    icon: Mic,
    title: 'Voice-First Interface',
    description: 'Speak naturally to control apps, create content, and automate tasks without menus.',
    delay: 0.1
  },
  {
    icon: Bot,
    title: 'AI Agent Mode',
    description: 'Nova understands intent, asks clarifying questions, and executes actions autonomously.',
    delay: 0.2
  },
  {
    icon: Keyboard,
    title: 'Smart Typing',
    description: 'Real-time voice-to-text with intelligent field detection and multilingual support.',
    delay: 0.3
  },
  {
    icon: Globe,
    title: 'Universal Translation',
    description: 'Instant translation across 50+ languages while you speak or type.',
    delay: 0.4
  },
  {
    icon: Eye,
    title: 'Vision Integration',
    description: 'AI detects input fields and UI elements to safely execute precise actions.',
    delay: 0.5
  },
  {
    icon: Shield,
    title: 'Privacy & Safety',
    description: 'Local processing, confirmation prompts, and reversible actions keep you in control.',
    delay: 0.6
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
            Core Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI capabilities that transform how you interact with technology through voice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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