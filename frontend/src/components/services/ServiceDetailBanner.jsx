'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceDetailBanner({ service }) {
  const isBlueTheme = service.theme === 'blue';

  return (
    <section className={`relative py-16 overflow-hidden ${
      isBlueTheme 
        ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800' 
        : 'bg-gradient-to-br from-green-600 via-green-700 to-emerald-800'
    }`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-white/80">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/60">/</li>
            <li>
              <Link href="/our-services" className="hover:text-white transition-colors">
                Our Services
              </Link>
            </li>
            <li className="text-white/60">/</li>
            <li className="text-white font-medium">{service.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <i className={`${service.icon} mr-2`}></i>
              {service.category}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-green-300 mb-2">
              {service.heroTitle}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {service.heroDescription}
            </p>

            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gray-100"
              >
                <i className="fas fa-download mr-3"></i>
                {service.heroButton}
              </a>
            </div>
          </div>

          {/* Image placeholder - empty for now as per original template */}
          <div className="relative">
            <div className="h-64 lg:h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              {/* Empty space as per original template */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
