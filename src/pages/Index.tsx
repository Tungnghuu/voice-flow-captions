import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ModesSection from '@/components/ModesSection';
import AimSection from '@/components/AimSection';
import DownloadSection from '@/components/DownloadSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ModesSection />
      <AimSection />
      <DownloadSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
