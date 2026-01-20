import React from 'react';
import { ChevronDown } from 'lucide-react';
import logo from 'figma:asset/5906320c76ff8f74f2da5d417ac8623df21071ba.png';

export function Navigation() {
  const menuItems = [
    { label: 'Job Seekers', href: '#' },
    { label: 'Career', href: '#' },
    { label: 'Employers', href: '#contact' },
    { label: 'Help Center', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="pl-2 pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Group - Logo + Menu Items */}
          <div className="flex items-center gap-16">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <img
                  src={logo}
                  alt="BrighterMonday Kenya"
                  className="h-64 w-auto"
                />
              </a>
            </div>

            {/* Menu Items */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-1 text-[#6b7280] text-sm font-normal hover:text-[#D32F2F] transition-colors duration-200"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Group - Auth Links & CTA */}
          <div className="flex items-center gap-6">
            {/* Auth Links */}
            <div className="hidden md:flex items-center gap-3 text-[#6b7280] text-sm">
              <a
                href="#"
                className="font-normal hover:text-[#D32F2F] transition-colors duration-200"
              >
                Log In
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="font-normal hover:text-[#D32F2F] transition-colors duration-200"
              >
                Sign Up
              </a>
            </div>

            {/* Primary CTA Button */}
            <a
              href="#contact"
              className="bg-[#D32F2F] text-white px-6 py-2.5 rounded font-semibold hover:bg-[#B71C1C] transition-all duration-200 shadow-sm hover:shadow-md h-10 flex items-center"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}