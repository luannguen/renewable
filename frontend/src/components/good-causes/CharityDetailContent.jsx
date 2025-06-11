'use client';

import React from 'react';
import Link from 'next/link';

export default function CharityDetailContent({ charity }) {
  const isBlueTheme = charity.theme === 'blue';

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Mission Statement */}
          <section className="mb-16">
            <div className={`p-8 rounded-2xl ${
              isBlueTheme ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-green-50 to-emerald-100'
            }`}>
              <h2 className={`text-3xl font-bold mb-6 ${
                isBlueTheme ? 'text-blue-900' : 'text-green-900'
              }`}>
                <i className="fas fa-bullseye mr-3"></i>
                Mission Statement
              </h2>
              <p className={`text-xl leading-relaxed ${
                isBlueTheme ? 'text-blue-800' : 'text-green-800'
              }`}>
                {charity.mission}
              </p>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <i className="fas fa-info-circle mr-3 text-gray-600"></i>
              About {charity.name}
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {charity.description}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {charity.fullDescription}
              </p>
            </div>
          </section>

          {/* Key Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <i className="fas fa-key mr-3 text-gray-600"></i>
              Key Focus Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {charity.keyAreas.map((area, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    isBlueTheme 
                      ? 'border-blue-200 bg-blue-50 hover:border-blue-300' 
                      : 'border-green-200 bg-green-50 hover:border-green-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    isBlueTheme ? 'bg-blue-200' : 'bg-green-200'
                  }`}>
                    <i className={`fas fa-leaf text-xl ${
                      isBlueTheme ? 'text-blue-600' : 'text-green-600'
                    }`}></i>
                  </div>
                  <h3 className={`font-semibold text-lg ${
                    isBlueTheme ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <i className="fas fa-chart-line mr-3 text-gray-600"></i>
              Impact & Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {charity.impact.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    isBlueTheme ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <i className={`fas fa-check text-xl ${
                      isBlueTheme ? 'text-blue-600' : 'text-green-600'
                    }`}></i>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-16">
            <div className={`p-8 rounded-2xl text-center ${
              isBlueTheme 
                ? 'bg-gradient-to-br from-blue-600 to-indigo-700' 
                : 'bg-gradient-to-br from-green-600 to-emerald-700'
            }`}>
              <h2 className="text-3xl font-bold text-white mb-6">
                <i className="fas fa-hands-helping mr-3"></i>
                How We Support {charity.name}
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                At RenewWeb, we are proud to support {charity.name} through donations and active participation in their initiatives. 
                Together, we're making a positive impact on our environment and communities.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  <i className="fas fa-donate mr-3"></i>
                  Make a Donation
                </button>
                
                <button className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                  <i className="fas fa-volunteer mr-3"></i>
                  Volunteer
                </button>
                
                {charity.website && (
                  <a 
                    href={charity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm inline-flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-3"></i>
                    Visit Their Website
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* Related Charities */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              <i className="fas fa-heart mr-3 text-red-500"></i>
              Other Charities We Support
            </h2>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-8">
                Discover more environmental and wildlife charities that we're proud to support.
              </p>
              
              <Link 
                href="/good-causes"
                className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isBlueTheme 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <i className="fas fa-arrow-left mr-3"></i>
                View All Good Causes
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
