'use client';

import React from 'react';

export default function ServicesBanner() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-blue-800">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      {/* Energy symbols floating */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <i className="fas fa-solar-panel text-4xl text-yellow-300"></i>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
          <i className="fas fa-leaf text-3xl text-green-300"></i>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse delay-500">
          <i className="fas fa-charging-station text-3xl text-blue-300"></i>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-700">
          <i className="fas fa-lightbulb text-2xl text-yellow-300"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <i className="fas fa-cogs mr-2 text-green-300"></i>
              Complete Green Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our 
              <span className="block text-green-300 text-3xl md:text-4xl lg:text-5xl mt-2">
                Green Energy Services
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              We help your business Go Green with our comprehensive portfolio of energy-saving solutions. 
              From solar panels to LED lighting, we provide everything you need for your carbon net zero journey.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-calculator mr-3"></i>
                Free Energy Audit
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <i className="fas fa-phone mr-3"></i>
                Call 01905 317 005
              </button>
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
