'use client';

import React from 'react';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Heading */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Green Journey?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Join hundreds of businesses saving money while protecting the environment. 
              Get your FREE energy audit today!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <i className="fas fa-calculator mr-3"></i>
              Get Your FREE Energy Audit
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-white/20 text-white rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm border border-white/30">
              <i className="fas fa-phone mr-3"></i>
              Call 01905 317 005
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <i className="fas fa-envelope mr-3"></i>
              Contact Our Team
            </button>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Obligation</h3>
              <p className="text-white/80">Completely FREE consultation with no commitment required</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-clock text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
              <p className="text-white/80">Expert team will contact you within 24 hours</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-white/80">Over 500 businesses helped save money and go green</p>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
