import React, { useState, useRef, useEffect } from 'react';
import { Monitor, MessageCircle, Settings, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="modes" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-card"
    >
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Two Ways to Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred interaction style - traditional UI controls or pure conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Seamless UI Mode */}
          <div 
            className={`bg-card border border-border rounded-3xl p-8 space-y-6 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0ms' }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Seamless UI Mode</h3>
                <p className="text-muted-foreground">Minimal, transparent controls</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground text-sm">
                  Perfect for users who want lightweight visual controls with obvious affordances.
                </p>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Small overlay with status indicators</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Hotkey activation for voice features</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Visual language and device selection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Clear status feedback (listening, typing)</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure UI Mode
                </Button>
              </div>
            </div>
          </div>

          {/* AI Mode */}
          <div 
            className={`bg-card border border-border rounded-3xl p-8 space-y-6 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">AI Agent Mode</h3>
                <p className="text-muted-foreground">Conversation-first experience</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground text-sm">
                  Best for hands-free workflows and natural, companion-like interaction.
                </p>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Natural conversation drives all actions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Nova asks clarifying questions when needed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Confirms destructive actions before executing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Tiny listening indicator only</span>
                </li>
              </ul>

              <div className="pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Mic className="w-4 h-4 mr-2" />
                  Try AI Mode
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Switch between modes anytime with a simple voice command or hotkey
          </p>
          <Button variant="outline" size="lg">
            Learn More About Modes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModesSection;