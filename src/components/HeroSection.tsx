import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, ChevronDown, Download, FileText, Settings, RotateCcw, EyeOff, Circle } from 'lucide-react';

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
  const [typedText, setTypedText] = useState('');
  const [showElements, setShowElements] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const demoSubtitles = [
    "Nova is listening and ready to help",
    "Try: 'Open my email and compose a new message'",
    "Or: 'Translate this document to French'",
    "Voice-first AI that understands your intent"
  ];

  const helloText = "Hello I am Nova";

  // Typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;
    
    const typeText = () => {
      if (index < helloText.length) {
        setTypedText(helloText.slice(0, index + 1));
        index++;
        timeout = setTimeout(typeText, 100);
      } else {
        // Show other elements after typing is complete
        setTimeout(() => {
          setShowElements(true);
          setTimeout(() => setAnimationComplete(true), 1000);
        }, 500);
      }
    };

    const initialDelay = setTimeout(typeText, 1000);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!animationComplete) return;
    
    let index = 0;
    const interval = setInterval(() => {
      setSubtitleText(demoSubtitles[index]);
      index = (index + 1) % demoSubtitles.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [animationComplete]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Typing Animation */}
          <div className="min-h-[200px] flex items-center justify-center">
            {!showElements ? (
              <div className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            ) : (
              <div className={`space-y-6 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h1 className="hero-title text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Nova
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                  Your voice-first AI companion. Speak naturally to control apps, create content, and get things done.
                </p>
              </div>
            )}
          </div>

          {/* Nova Demo Interface */}
          {showElements && (
            <div className={`hero-cta flex flex-col items-center space-y-8 transition-all duration-1000 delay-500 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-full max-w-2xl mx-auto">
                {/* Top Toolbar */}
                <div className="glass rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <FileText className="h-4 w-4 mr-1" />
                        Voice Typing
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                        Live Subtitle
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                        AI Mode
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <select className="bg-accent border border-border rounded px-2 py-1 text-xs">
                        <option>EN</option>
                        <option>VI</option>
                      </select>
                      <select className="bg-accent border border-border rounded px-2 py-1 text-xs">
                        <option>VI</option>
                        <option>EN</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Circle className="h-2 w-2 fill-current" />
                        <span>00:00</span>
                      </div>
                      <div className="text-xs text-primary">Not Running • Connected</div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <RotateCcw className="h-3 w-3 mr-1" />
                        Start Over
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <EyeOff className="h-3 w-3 mr-1" />
                        Hide
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Voice Transcription Panel */}
                <div className="gradient-border">
                  <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <span className="text-sm font-bold text-primary">AI</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Voice Transcription</h3>
                    </div>

                    {/* Main transcription area */}
                    <div className="min-h-[120px] bg-card/50 rounded-lg border border-border p-6 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <button
                          onClick={toggleRecording}
                          className={`relative p-4 rounded-full transition-all duration-300 ${
                            isRecording 
                              ? 'bg-primary shadow-glow mic-pulse' 
                              : 'bg-accent hover:bg-accent/80'
                          }`}
                        >
                          <Mic className={`h-6 w-6 ${isRecording ? 'text-white' : 'text-primary'}`} />
                        </button>
                        <p className="text-muted-foreground text-sm">
                          {isRecording ? "Listening..." : "Click microphone to start"}
                        </p>
                        {animationComplete && subtitleText && (
                          <p className="text-foreground text-center animate-fade-in mt-4 p-3 bg-accent/30 rounded border border-border/50">
                            {subtitleText}
                          </p>
                        )}
                      </div>
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
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;