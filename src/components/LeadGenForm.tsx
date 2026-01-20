import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function LeadGenForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#374152] mb-4">
            Ready to grow with us?
          </h2>
          <p className="text-xl text-[#6b7280]">
            Drop an inquiry below
          </p>
          <div className="w-24 h-1.5 bg-[#D32F2F] mx-auto mt-6"></div>
        </div>

        {/* Form */}
        <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all bg-white"
                  placeholder="Your name"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all bg-white"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all bg-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all bg-white"
                  placeholder="+254 700 000 000"
                />
              </div>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-900 mb-2">
                Service Interest *
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                required
                value={formData.serviceInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all bg-white"
              >
                <option value="">Select a service</option>
                <option value="email">Email Marketing</option>
                <option value="paid">Paid Performance</option>
                <option value="content">Organic Content</option>
                <option value="push">Push/In App</option>
                <option value="seo">Website Visibility</option>
                <option value="all">All Services</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#D32F2F] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#B71C1C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span>Request a Demo</span>
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 text-center">
                <p className="text-green-800 font-semibold">
                  Thank you! We'll be in touch shortly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}