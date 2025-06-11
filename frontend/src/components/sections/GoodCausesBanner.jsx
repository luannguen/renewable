'use client';

import React from 'react';

export default function GoodCausesBanner() {
  return (
    <section className="banner banner-21 banner-fixed theme-dark relative bg-gradient-to-br from-green-600 via-green-700 to-blue-800 py-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Giving Back To Good Causes
              <span className="block text-green-300 text-3xl md:text-4xl lg:text-5xl mt-2">
                Charities we support
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
              We are passionate about protecting and sustaining the environment through ethical business practice, 
              we value the work of so many charities and actively donate and get involved.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
