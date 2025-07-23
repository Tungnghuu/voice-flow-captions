import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Apple, Monitor, Github } from 'lucide-react';

const DownloadSection = () => {
  const downloadOptions = [
    {
      platform: 'Windows',
      icon: Monitor,
      version: 'v2.1.0',
      size: '45.2 MB',
      variant: 'hero' as const
    },
    {
      platform: 'macOS',
      icon: Apple,
      version: 'v2.1.0',
      size: '38.7 MB',
      variant: 'premium' as const
    }
  ];

  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Download LiveSubtitles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with LiveSubtitles on your preferred platform. 
            Free download with all features included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {downloadOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.platform} className="gradient-border">
                <div className="p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {option.platform}
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Version {option.version}</p>
                      <p>{option.size}</p>
                    </div>
                  </div>

                  <Button variant={option.variant} size="lg" className="w-full">
                    <Download className="h-5 w-5 mr-2" />
                    Download for {option.platform}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Installation Instructions */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Installation Instructions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Monitor className="h-5 w-5 mr-2 text-primary" />
                Windows
              </h4>
              <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Download the .exe installer</li>
                <li>Run as administrator if prompted</li>
                <li>Follow the setup wizard</li>
                <li>Launch from Start Menu or Desktop</li>
              </ol>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <Apple className="h-5 w-5 mr-2 text-primary" />
                macOS
              </h4>
              <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Download the .dmg file</li>
                <li>Open and drag to Applications</li>
                <li>Allow in System Preferences if needed</li>
                <li>Launch from Applications folder</li>
              </ol>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Prefer to build from source?
            </p>
            <Button variant="glass" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;