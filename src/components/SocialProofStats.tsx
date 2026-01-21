import React from 'react';
import { Users, TrendingUp, Briefcase, Mail, Eye, Share2, FileText, Crosshair, Volume2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import nexfordLogo from 'figma:asset/f8aedfd02482dc82d1df00c7c15b7149ca5c62b1.png';
import unicafLogo from 'figma:asset/316233581d06a756f5029356d5598808ca5af10f.png';
import absaLogo from 'figma:asset/c109dccc7a4974b1c592092fea0844767fd4c793.png';
import ncbaLogo from 'figma:asset/fc71d5ed274b19a67d5bf81905342bd89a4c5ec2.png';

export function SocialProofStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Reordered stats explicitly for the 4-over-3 Flexbox Layout
  const stats = [
    // Top Row (4 Highest Impact Stats)
    {
      icon: Eye,
      value: '1M+',
      label: 'Banner Ad Views',
      color: 'bg-[#FF6F00]'
    },
    {
      icon: Users,
      value: '800K+',
      label: 'Jobseekers visit monthly',
      color: 'bg-[#D32F2F]'
    },
    {
      icon: Share2,
      value: '560K+',
      label: 'Followers on Social Media',
      color: 'bg-[#D32F2F]'
    },
    {
      icon: Mail,
      value: '340K+',
      label: 'Email Subscribers',
      color: 'bg-[#FF6F00]'
    },
    // Bottom Row (3 Supporting Stats)
    {
      icon: TrendingUp,
      value: '136K+',
      label: 'Employer visits per month',
      color: 'bg-[#FF6F00]'
    },
    {
      icon: Briefcase,
      value: '10K+',
      label: 'Active Employers',
      color: 'bg-[#D32F2F]'
    },
    {
      icon: FileText,
      value: '5K+',
      label: 'Blog Readers per Month',
      color: 'bg-[#D32F2F]'
    }
  ];

  const clients = [
    { name: 'NCBA', type: 'image', logo: ncbaLogo },
    { name: 'ABSA', type: 'image', logo: absaLogo },
    { name: 'Nexford University', type: 'image', logo: nexfordLogo },
    { name: 'UNICAF', type: 'image', logo: unicafLogo },
    { name: 'Study Now', type: 'text' },
    { name: 'QSMBA', type: 'text' },
    { name: 'APHRC', type: 'text' },
    { name: 'Ecobank', type: 'text' },
    { name: 'AutoExpress Ltd', type: 'text' },
    { name: 'Sasini Ltd', type: 'text' }
  ];

  // Duplicate clients array for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <>
      {/* Services Offered Section - Subtle Red Background */}
      <section className="bg-[#fef2f2] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#374152] mb-4">
              Services Offered
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#D32F2F] to-[#FF6F00] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Quality Candidate Applications', icon: FileText },
              { title: 'Talent Database Pipelining', icon: Users },
              { title: 'Lead Generation Services', icon: Crosshair },
              { title: 'Employer Branding', icon: Volume2 }
            ].map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-[#D32F2F]/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D32F2F] to-[#FF6F00] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                    <ServiceIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#374152] text-lg text-center leading-tight">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Cream Background */}
      <section ref={sectionRef} className="bg-[#fffaf4] py-24 relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D32F2F]/5 to-[#FF6F00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF6F00]/5 to-[#D32F2F]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#374152] mb-4">
              Our Reach & Impact
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#D32F2F] to-[#FF6F00] mx-auto mt-6"></div>
          </div>

          {/* Stats Flexbox Layout - Forces 4-over-3 layout on large screens */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  // Mobile: Full width
                  // Tablet (md): 2 items per row (calc(50% - gap))
                  // Laptop (lg): 4 items per row (calc(25% - gap))
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <AnimatedStatCard
                    stat={stat}
                    Icon={Icon}
                    isVisible={isVisible}
                    delay={index * 100}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Logos - Full Width */}
        <div className="bg-gradient-to-r from-[#ce1313] to-[#f69322] py-12 overflow-hidden">
          <h3 className="text-center text-xl text-white mb-8 font-semibold">
            Trusted by leading companies:
          </h3>
          <div className="relative">
            <div className="flex animate-scroll">
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-white/90 hover:text-white transition-colors cursor-pointer whitespace-nowrap px-8 flex-shrink-0 flex items-center"
                >
                  {client.type === 'image' ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`${client.name === 'NCBA' ? 'h-28' : 'h-12'} w-auto object-contain`}
                    />
                  ) : (
                    client.name
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Animated Stat Card Component
function AnimatedStatCard({ stat, Icon, isVisible, delay }: { stat: { icon: any, value: string, label: string, color: string }, Icon: any, isVisible: boolean, delay: number }) {
  const [count, setCount] = useState(0);

  // Extract numeric value from stat.value (e.g., "800K+" -> 800, "1M+" -> 1)
  const targetValue = parseInt(stat.value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, targetValue, delay]);

  // Format the count back to display format
  const formatValue = (num: number) => {
    if (stat.value.includes('M')) {
      return `${num}M+`;
    }
    if (stat.value.includes('K')) {
      return `${num}K+`;
    }
    return `${num}+`;
  };

  return (
    <div
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm h-full"
    >
      <div className="flex items-start gap-4 h-full">
        <div className={`${stat.color} p-3 rounded-lg shadow-md shrink-0`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-4xl font-bold text-[#374152] mb-1 tabular-nums">
            {isVisible ? formatValue(count) : stat.value}
          </div>
          <div className="text-[#6b7280] leading-tight">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );
}