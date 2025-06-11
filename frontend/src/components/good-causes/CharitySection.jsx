'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CharitySection({ charity }) {
  const isBlueTheme = charity.theme === 'blue';
  const isEven = charity.id % 2 === 0;

  // Generate slug from charity name
  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const charitySlug = generateSlug(charity.name);

  return (
    <section className={`py-16 ${isBlueTheme ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              isBlueTheme ? 'text-blue-900' : 'text-gray-900'
            } leading-tight`}>
              {charity.name}
            </h2>
            
            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${
                isBlueTheme ? 'text-blue-800' : 'text-gray-700'
              }`}>
                {charity.description}
              </p>
              
              <p className={`text-base leading-relaxed ${
                isBlueTheme ? 'text-blue-700' : 'text-gray-600'
              }`}>
                {charity.fullDescription}
              </p>
            </div>            {/* Optional: Add a support button */}
            <div className="pt-4">
              <Link 
                href={`/good-causes/${charitySlug}`}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isBlueTheme 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <span>Learn More</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
            <div className={`relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ${
              isBlueTheme ? 'bg-gradient-to-br from-blue-100 to-indigo-200' : 'bg-gradient-to-br from-green-100 to-emerald-200'
            }`}>
              {/* Decorative background */}
              <div className="absolute inset-0 opacity-20">
                <div className={`absolute top-4 right-4 w-20 h-20 rounded-full ${
                  isBlueTheme ? 'bg-blue-300' : 'bg-green-300'
                }`}></div>
                <div className={`absolute bottom-4 left-4 w-16 h-16 rounded-full ${
                  isBlueTheme ? 'bg-indigo-300' : 'bg-emerald-300'
                }`}></div>
              </div>
              
              <div className="relative p-8 flex items-center justify-center min-h-[300px]">
                <div className="relative w-full max-w-sm">
                  <Image
                    src={charity.image}
                    alt={`${charity.name} logo`}
                    className="w-full h-auto object-contain drop-shadow-lg"
                    width={400}
                    height={300}
                    priority={charity.id <= 2}
                  />
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className={`absolute -top-4 -right-4 w-8 h-8 ${
              isBlueTheme ? 'bg-blue-500' : 'bg-green-500'
            } rounded-full opacity-70 animate-pulse`}></div>
            <div className={`absolute -bottom-4 -left-4 w-6 h-6 ${
              isBlueTheme ? 'bg-indigo-500' : 'bg-emerald-500'
            } rounded-full opacity-70 animate-pulse delay-300`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
