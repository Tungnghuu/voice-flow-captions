import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About LiveSubtitles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team dedicated to making communication accessible 
            through innovative voice-to-text technology.
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
                To revolutionize communication accessibility by providing cutting-edge, 
                real-time voice-to-text technology that empowers individuals with hearing 
                impairments and enhances communication for everyone. We believe that 
                technology should break down barriers, not create them.
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
                    Community Focused
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Every feature we build is designed with our community in mind. 
                  We actively listen to user feedback and continuously improve 
                  our platform based on real-world needs and experiences.
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
                    Innovation Driven
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We're constantly pushing the boundaries of what's possible 
                  with voice recognition technology, incorporating the latest 
                  advances in AI and machine learning to deliver superior accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* User Stories */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground text-center">
              User Stories
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-xl space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">S</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Sarah Chen</h4>
                  <p className="text-sm text-muted-foreground">University Student</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "LiveSubtitles has transformed my lecture experience. As someone with 
                  hearing loss, I can now follow along in real-time and never miss 
                  important information."
                </p>
              </div>

              <div className="glass p-6 rounded-xl space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">M</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Marcus Johnson</h4>
                  <p className="text-sm text-muted-foreground">Business Manager</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Perfect for our international meetings. The real-time translation 
                  feature helps our global team communicate seamlessly across 
                  language barriers."
                </p>
              </div>

              <div className="glass p-6 rounded-xl space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">E</span>
                  </div>
                  <h4 className="font-semibold text-foreground">Elena Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">Content Creator</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Game-changer for my video production workflow. I can generate 
                  accurate subtitles in real-time, saving hours of post-production work."
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