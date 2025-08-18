import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, ChevronDown, Download, FileText } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
];

const HeroSection = () => {
  const [sourceLanguage, setSourceLanguage] = useState(languages[0]);
  const [targetLanguage, setTargetLanguage] = useState(languages[1]);
  const [isRecording, setIsRecording] = useState(false);
  const [subtitleText, setSubtitleText] = useState('');

  const demoSubtitles = [
    "Nova is listening and ready to help",
    "Try: 'Open my email and compose a new message'",
    "Or: 'Translate this document to French'",
    "Voice-first AI that understands your intent"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSubtitleText(demoSubtitles[index]);
      index = (index + 1) % demoSubtitles.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="hero-title text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Nova
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Your voice-first AI companion. Speak naturally to control apps, create content, and get things done.
            </p>
          </div>

          {/* Live Subtitle Widget */}
          <div className="hero-cta flex flex-col items-center space-y-8">
            <div className="w-full max-w-md mx-auto">
              <div className="gradient-border">
                <div className="p-6 space-y-6">
                  {/* Microphone */}
                  <div className="flex justify-center">
                    <button
                      onClick={toggleRecording}
                      className={`relative p-6 rounded-full transition-all duration-300 ${
                        isRecording 
                          ? 'bg-primary shadow-glow mic-pulse' 
                          : 'bg-card hover:bg-accent'
                      }`}
                    >
                      <Mic className={`h-8 w-8 ${isRecording ? 'text-white' : 'text-primary'}`} />
                    </button>
                  </div>

                  {/* Live Subtitle Display */}
                  <div className="min-h-[60px] flex items-center justify-center p-4 bg-accent/50 rounded-lg border border-border">
                    <p className="text-foreground text-center animate-fade-in">
                      {subtitleText || "Say: 'Nova, open my calendar' or 'Translate this text to Spanish'"}
                    </p>
                  </div>

                  {/* Language Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Source</label>
                      <div className="relative">
                        <select 
                          value={sourceLanguage.code}
                          onChange={(e) => setSourceLanguage(languages.find(l => l.code === e.target.value) || languages[0])}
                          className="w-full p-3 bg-accent border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                              {lang.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-muted-foreground">Target</label>
                      <div className="relative">
                        <select 
                          value={targetLanguage.code}
                          onChange={(e) => setTargetLanguage(languages.find(l => l.code === e.target.value) || languages[1])}
                          className="w-full p-3 bg-accent border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                              {lang.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full">
                      <FileText className="h-5 w-5 mr-2" />
                      Try Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main CTA Button */}
            <Button variant="hero" size="xl" className="animate-float">
              <Download className="h-6 w-6 mr-2" />
              Download Nova
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;