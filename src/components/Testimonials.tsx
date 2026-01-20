import React from 'react';
import { Quote } from 'lucide-react';
import nexfordLogo from 'figma:asset/f8aedfd02482dc82d1df00c7c15b7149ca5c62b1.png';
import unicafLogo from 'figma:asset/316233581d06a756f5029356d5598808ca5af10f.png';
import ncbaLogo from 'figma:asset/fc71d5ed274b19a67d5bf81905342bd89a4c5ec2.png';

export function Testimonials() {
  const testimonials = [
    {
      company: 'NCBA',
      quote: 'BrighterMonday Digital Solutions transformed our recruitment marketing strategy. Their targeted campaigns helped us reach high-quality candidates faster than ever before.',
      author: 'Head of Talent Acquisition',
      logo: 'NCBA',
      logoType: 'image',
      logoImage: ncbaLogo
    },
    {
      company: 'Nexford University',
      quote: 'The results speak for themselves. We saw a 300% increase in qualified applications within the first three months of partnering with BrighterMonday.',
      author: 'Director of Admissions',
      logo: 'Nexford',
      logoType: 'image',
      logoImage: nexfordLogo
    },
    {
      company: 'UNICAF',
      quote: 'Their data-driven approach and expert team have been instrumental in scaling our student acquisition efforts across multiple markets.',
      author: 'Marketing Director',
      logo: 'UNICAF',
      logoType: 'image',
      logoImage: unicafLogo
    }
  ];

  return (
    <section className="bg-[#fffaf4] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold text-[#374152] mb-4">
            What our clients say
          </h2>
          <div className="w-24 h-1.5 bg-[#D32F2F] mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#D32F2F]" />
              </div>

              {/* Quote Text */}
              <p className="text-[#6b7280] mb-6 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t-2 border-gray-200 mt-auto">
                <div className="flex items-center gap-4">
                  {testimonial.logoType === 'image' ? (
                    <div className="w-20 h-12 flex items-center justify-center">
                      <img src={testimonial.logoImage} alt={testimonial.logo} className="w-full h-auto object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-[#D32F2F] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">
                        {testimonial.logo.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="text-sm text-[#6b7280]">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}