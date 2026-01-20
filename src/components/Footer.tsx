import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Play } from 'lucide-react';

export function Footer() {
  const links = [
    "About",
    "Companies Hiring",
    "Privacy Policy",
    "Terms",
    "CV Review Services",
    "Skills Assessments",
    "Product Brochure"
  ];

  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-y-2 mb-8 text-sm w-full">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <a href="#" className="text-[#3b82f6] hover:text-[#1d4ed8] transition-colors whitespace-nowrap">{link}</a>
              {index < links.length - 1 && (
                <div className="hidden md:block w-px h-4 bg-gray-300 mx-4 lg:mx-8"></div>
              )}
              {/* Add a separator for mobile if needed, or just let them wrap */}
              <span className="md:hidden mx-2 text-gray-300">|</span>
            </React.Fragment>
          ))}
        </div>

        {/* Social & App */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <span className="text-gray-500 text-sm font-medium">Follow us On:</span>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-8 h-8 text-[#1877F2] fill-current" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-8 h-8 text-[#E4405F]" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-8 h-8 text-[#0A66C2] fill-current" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-8 h-8 text-black fill-current" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <Youtube className="w-8 h-8 text-[#FF0000] fill-current" />
            </a>
          </div>

          <div className="md:ml-4">
            <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-1.5 rounded-lg hover:bg-gray-800 transition-colors border border-black w-fit">
              <Play className="w-6 h-6 fill-current text-[#ffffff]" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase leading-none">GET IT ON</span>
                <span className="text-sm font-bold leading-none">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            <span>&copy;</span> 2026 BrighterMonday
          </p>
        </div>
      </div>
    </footer>
  );
}
