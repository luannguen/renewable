'use client';

import React from 'react';
import Image from 'next/image';

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Put simply we help your organisation Go Green!
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            
            {/* The Journey */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Journey</h3>
              <p className="text-lg text-gray-700 mb-6">
                We start with a <strong className="text-green-600">FREE comprehensive energy audit</strong> of your organisation, 
                creating and implementing an energy management plan which will aim to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-arrow-right text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Reduce your carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-arrow-right text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Improve the efficiency with which you use energy</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-arrow-right text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Help you generate your own energy</span>
                </li>
              </ul>
            </div>

            <div className="w-full h-px bg-green-200"></div>

            {/* The Result */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Result</h3>
              <p className="text-lg text-gray-700 mb-6">
                With our proven track record we'll do our very best to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Reduce your energy costs and usage</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Provide an income through government green incentives</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700">Improve your corporate social responsibility</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <i className="fas fa-check text-white text-xs"></i>
                  </div>
                  <span className="text-lg text-gray-700 font-semibold">Save you money!</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                <i className="fas fa-leaf mr-2"></i>
                Leading Green Products
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                <i className="fas fa-envelope mr-2"></i>
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative p-8 bg-white rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-seedling text-5xl text-white"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Take Your Business Green</h4>
                <p className="text-gray-600">
                  Join hundreds of businesses we've helped achieve their sustainability goals while saving money.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
