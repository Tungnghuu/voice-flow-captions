import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Nova
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of voice-first computing and human-AI interaction 
            through revolutionary AI companion technology.
          </p>
        </div>

        <div className="space-y-16">
          {/* Mission Statement */}
          <div className="glass p-8 rounded-xl text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To make voice the simplest, most intuitive interface by creating an AI companion 
                that understands human intent and executes actions naturally. Nova represents the 
                future where technology adapts to humans, not the other way around - enabling 
                seamless interaction through conversation.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gradient-border">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Agent-First Design
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nova is built around conversation-driven interaction. Instead of 
                  complex menus and interfaces, users simply speak their intentions 
                  and Nova interprets, clarifies, and executes actions intelligently.
                </p>
              </div>
            </div>

            <div className="gradient-border">
              <div className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    AI Safety Pioneer
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Combining cutting-edge AI with rigorous safety measures. Nova uses 
                  computer vision, natural language processing, and structured tool calling 
                  to ensure actions are accurate, reversible, and user-controlled.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Overview */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center">
              Technology Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-xl space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Core Architecture</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nova combines advanced speech recognition, natural language processing, and computer vision 
                  to create a seamless voice-first interface. Built with safety and privacy at its core.
                </p>
              </div>

              <div className="glass p-6 rounded-xl space-y-4">
                <h4 className="font-semibold text-foreground text-lg">AI Integration</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Powered by fine-tuned language models specifically trained for tool calling and desktop automation. 
                  Structured JSON outputs ensure reliable and safe system interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;