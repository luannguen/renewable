'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CharityDetailBanner({ charity }) {
  const isBlueTheme = charity.theme === 'blue';

  return (
    <section className={`relative py-20 overflow-hidden ${
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
              <Link href="/good-causes" className="hover:text-white transition-colors">
                Good Causes
              </Link>
            </li>
            <li className="text-white/60">/</li>
            <li className="text-white font-medium">{charity.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <i className="fas fa-heart mr-2 text-red-300"></i>
              Charity Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {charity.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              {charity.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center text-white/90">
                <i className="fas fa-calendar-alt mr-2"></i>
                <span>Founded {charity.founded}</span>
              </div>
              {charity.website && (
                <a 
                  href={charity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  <span>Visit Website</span>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                isBlueTheme 
                  ? 'bg-white text-blue-700 hover:bg-blue-50' 
                  : 'bg-white text-green-700 hover:bg-green-50'
              }`}>
                <i className="fas fa-donate mr-3"></i>
                Support This Charity
              </button>
              
              <button className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg bg-white/20 text-white hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <i className="fas fa-share-alt mr-3"></i>
                Share
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
              isBlueTheme ? 'bg-gradient-to-br from-blue-100 to-indigo-200' : 'bg-gradient-to-br from-green-100 to-emerald-200'
            }`}>
              <div className="relative p-12 flex items-center justify-center min-h-[400px]">
                <div className="relative w-full max-w-md">
                  <Image
                    src={charity.image}
                    alt={`${charity.name} logo`}
                    className="w-full h-auto object-contain drop-shadow-lg"
                    width={400}
                    height={300}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className={`absolute -top-4 -right-4 w-12 h-12 ${
              isBlueTheme ? 'bg-blue-400' : 'bg-green-400'
            } rounded-full opacity-70 animate-bounce`}></div>
            <div className={`absolute -bottom-4 -left-4 w-8 h-8 ${
              isBlueTheme ? 'bg-indigo-400' : 'bg-emerald-400'
            } rounded-full opacity-70 animate-pulse delay-300`}></div>
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
