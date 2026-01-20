import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { SocialProofStats } from './components/SocialProofStats';
import { MethodologyGrid } from './components/MethodologyGrid';
import { Testimonials } from './components/Testimonials';
import { LeadGenForm } from './components/LeadGenForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf4]">
      <Navigation />
      <HeroSection />
      <div id="services">
        <SocialProofStats />
        <MethodologyGrid />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <LeadGenForm />
      </div>
      <Footer />
    </div>
  );
}