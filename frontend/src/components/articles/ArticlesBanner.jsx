'use client';

import React from 'react';

export default function ArticlesBanner({ searchQuery = '', onSearchChange }) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-blue-800">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <i className="fas fa-newspaper text-4xl text-white"></i>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
          <i className="fas fa-lightbulb text-3xl text-yellow-300"></i>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-pulse delay-500">
          <i className="fas fa-leaf text-3xl text-green-300"></i>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-700">
          <i className="fas fa-globe text-2xl text-blue-300"></i>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <i className="fas fa-newspaper mr-2 text-emerald-300"></i>
              Latest Insights & News
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Green Energy
              <span className="block text-emerald-300 text-3xl md:text-4xl lg:text-5xl mt-2">
                Articles & Insights
              </span>
            </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-8">
              Stay informed with the latest trends, insights, and innovations in renewable energy. 
              Our expert articles help you make informed decisions about your green energy journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent text-gray-800 placeholder-gray-500 text-lg"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm">
                <i className="fas fa-calendar mr-2"></i>
                Updated Weekly
              </div>
              
              <div className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm">
                <i className="fas fa-users mr-2"></i>
                Expert Authors
              </div>
              
              <div className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-medium backdrop-blur-sm">
                <i className="fas fa-award mr-2"></i>
                Industry Leading
              </div>
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
