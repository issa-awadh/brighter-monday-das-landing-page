import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Acquire', 'Retain', 'Scale'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#ffffff] overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#374152] leading-tight">
                <span className="inline-block text-[#f59322] transition-all duration-500">
                  {words[currentWord]}
                </span> the right talent to drive business growth, faster.
              </h1>
              <p className="text-xl text-[#6b7280] leading-relaxed">
                We grow your brand visibility & generate leads suited to your business needs through access to a rich & wide database, experienced award winning Digital Marketing Experts & a robust tech stack.
              </p>
            </div>

            <div>
              <a href="#contact" className="inline-block bg-[#D32F2F] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#B71C1C] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Talk to us Today
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700241956172-1045342673ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWFya2V0aW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4NDY3NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Marketing team collaboration"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D32F2F]/20 via-transparent to-[#FF6F00]/20 mix-blend-multiply"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#FF6F00] rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D32F2F] rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}