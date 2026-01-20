import React from 'react';
import { Mail, DollarSign, FileText, Smartphone, Globe, MonitorPlay, Calendar, Share2, Layout } from 'lucide-react';

export function MethodologyGrid() {
  const methodologies = [
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted campaigns that reach the right audience with personalized messaging.',
    },
    {
      icon: MonitorPlay,
      title: 'Online Webinars',
      description: 'Engage your audience with interactive, educational, and high-value online sessions.',
    },
    {
      icon: DollarSign,
      title: 'Paid Performance',
      description: 'Data-driven paid advertising strategies that maximize ROI.',
    },
    {
      icon: Calendar,
      title: 'Activations/Events',
      description: 'Memorable brand experiences that drive engagement and real-world connection.',
    },
    {
      icon: FileText,
      title: 'Customized Blog Posts',
      description: 'SEO-optimized content that positions your brand as an industry thought leader.',
    },
    {
      icon: Share2,
      title: 'Social Media Posts',
      description: 'Creative, platform-specific content designed to boost community engagement.',
    },
    {
      icon: Smartphone,
      title: 'Push/In App Ads',
      description: 'Direct user engagement through mobile push notifications and in-app messaging.',
    },
    {
      icon: Layout,
      title: 'Website Banner Ads',
      description: 'High-visibility display ads placed strategically to capture user attention.',
    },
    {
      icon: Globe,
      title: 'Landing Page',
      description: 'Conversion-focused pages optimized to turn visitors into qualified leads.',
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#374152] mb-4">
            Our winning methodology
          </h2>
          <div className="w-24 h-1.5 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* 3x3 Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-transparent hover:border-[#D32F2F]/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#D32F2F] to-[#FF6F00] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#374152] mb-3 group-hover:text-[#D32F2F] transition-colors">
                  {method.title}
                </h3>

                <p className="text-[#6b7280] leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}