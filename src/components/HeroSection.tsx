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

  // Futuristic typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;
    
    const typeText = () => {
      if (index < helloText.length) {
        setTypedText(helloText.slice(0, index + 1));
        index++;
        // Variable speed for more natural typing
        const delay = helloText[index - 1] === ' ' ? 150 : Math.random() * 100 + 80;
        timeout = setTimeout(typeText, delay);
      } else {
        // Show other elements after typing is complete
        setTimeout(() => {
          setShowElements(true);
          setTimeout(() => setAnimationComplete(true), 1200);
        }, 800);
      }
    };

    const initialDelay = setTimeout(typeText, 1500);
    
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
          {/* Futuristic Typing Animation */}
          <div className="min-h-[200px] flex items-center justify-center">
            {!showElements ? (
              <div className="text-4xl md:text-6xl font-bold neon-text relative">
                {typedText}
                <span className="typing-cursor ml-1"></span>
              </div>
            ) : (
              <div className={`space-y-6 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h1 className="hero-title text-5xl md:text-7xl font-bold neon-text">
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
                {/* Top Toolbar - Visual Only */}
                <div className="futuristic-ui rounded-lg p-4 mb-4 pointer-events-none select-none">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="px-3 py-1 bg-primary/20 rounded text-xs text-primary border border-primary/30">
                        <FileText className="h-4 w-4 mr-1 inline" />
                        Voice Typing
                      </div>
                      <div className="px-3 py-1 bg-muted/20 rounded text-xs text-muted-foreground border border-muted/30">
                        Live Subtitle
                      </div>
                      <div className="px-3 py-1 bg-muted/20 rounded text-xs text-muted-foreground border border-muted/30">
                        AI Mode
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="bg-accent/50 border border-border/50 rounded px-2 py-1 text-xs text-foreground">EN</div>
                      <div className="bg-accent/50 border border-border/50 rounded px-2 py-1 text-xs text-foreground">VI</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Circle className="h-2 w-2 fill-current text-red-400" />
                        <span>00:00</span>
                      </div>
                      <div className="text-xs text-primary">Not Running • Connected</div>
                      <div className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <RotateCcw className="h-3 w-3 mr-1 inline" />
                        Start Over
                      </div>
                      <div className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground transition-colors">
                        <EyeOff className="h-3 w-3 mr-1 inline" />
                        Hide
                      </div>
                      <div className="p-1 rounded hover:bg-accent/50 transition-colors">
                        <Settings className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice Transcription Panel - Visual Only */}
                <div className="futuristic-ui rounded-lg pointer-events-none select-none">
                  <div className="p-6 space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-neon/20 rounded-lg border border-neon-purple/30">
                        <span className="text-sm font-bold neon-text">AI</span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Voice Transcription</h3>
                    </div>

                    {/* Main transcription area */}
                    <div className="min-h-[120px] bg-card/30 rounded-lg border border-border/50 p-6 flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center space-y-4">
                        <div className={`relative p-4 rounded-full transition-all duration-300 ${
                          isRecording 
                            ? 'bg-gradient-neon shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-pulse' 
                            : 'bg-accent/50 hover:bg-accent/70 border border-primary/30'
                        }`}>
                          <Mic className={`h-6 w-6 ${isRecording ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {isRecording ? "Listening..." : "Click microphone to start"}
                        </p>
                        {animationComplete && subtitleText && (
                          <p className="text-foreground text-center animate-fade-in mt-4 p-3 bg-gradient-neon/10 rounded border border-neon-purple/30 backdrop-blur-sm">
                            {subtitleText}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="futuristic-ui px-8 py-4 rounded-xl cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 animate-float pointer-events-none select-none">
                <div className="flex items-center justify-center space-x-3">
                  <Download className="h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold neon-text">Download Nova</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;