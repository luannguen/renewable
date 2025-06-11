'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceDetailContent({ service }) {
  const isBlueTheme = service.theme === 'blue';

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.subtitle}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {service.description}
            </p>
            <hr className="w-24 h-1 bg-green-500 mx-auto mt-8" />
          </div>
        </section>

        {/* Benefits & Features Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <i className={`${service.icon} mr-3 ${isBlueTheme ? 'text-blue-600' : 'text-green-600'}`}></i>
                Take Advantage Of {service.name}
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Despite various market changes, we are able to offer various funding options, so whatever the size of your current organisation or financial constraints, we'll be able to provide a {service.name.toLowerCase()} solution ideal for you.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Key benefits of {service.name} with RenewWeb
              </h3>

              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className={`fas fa-check-circle mt-1 ${isBlueTheme ? 'text-blue-600' : 'text-green-600'}`}></i>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <hr className="mb-6" />
              
              <p className="text-lg text-gray-700 mb-6">
                Get started today with our no obligation FREE {service.name} Review - take your first step to a greener future with RenewWeb.
              </p>

              <a 
                href="#contact"
                className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center ${
                  isBlueTheme 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <i className="fas fa-download mr-3"></i>
                Get Your FREE Review Today
              </a>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                We've got you covered
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Let the experienced team at RenewWeb guide you on your {service.name} project. Our {service.name} Review includes:
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className={`fas fa-leaf mt-1 ${isBlueTheme ? 'text-blue-600' : 'text-green-600'}`}></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-100 p-8 rounded-2xl">
                <Image
                  src={service.image}
                  alt={`${service.name} illustration`}
                  className="w-full h-auto object-contain"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Funding Options Section */}
        {service.fundingOptions && (
          <section className={`py-16 rounded-2xl mb-16 ${
            isBlueTheme ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-green-50 to-emerald-100'
          }`}>
            <div className="max-w-6xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Funding Options */}
                <div>
                  <h2 className={`text-3xl font-bold mb-6 ${
                    isBlueTheme ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    Financing Your {service.name} Installation
                  </h2>
                  
                  <p className={`text-lg mb-8 ${
                    isBlueTheme ? 'text-blue-800' : 'text-green-800'
                  }`}>
                    There are a number of options available to fund your {service.name} installation.
                  </p>

                  {service.fundingOptions.map((option, index) => (
                    <div key={index} className="mb-8">
                      <h3 className={`text-xl font-bold mb-3 ${
                        isBlueTheme ? 'text-blue-900' : 'text-green-900'
                      }`}>
                        {option.title}
                      </h3>
                      <p className={`${
                        isBlueTheme ? 'text-blue-800' : 'text-green-800'
                      } leading-relaxed`}>
                        {option.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Grants */}
                <div>
                  <h2 className={`text-3xl font-bold mb-6 ${
                    isBlueTheme ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    {service.grants.title}
                  </h2>
                  
                  <p className={`text-lg mb-6 ${
                    isBlueTheme ? 'text-blue-800' : 'text-green-800'
                  }`}>
                    {service.grants.description}
                  </p>

                  <p className={`text-lg mb-8 ${
                    isBlueTheme ? 'text-blue-800' : 'text-green-800'
                  }`}>
                    {service.grants.additional}
                  </p>

                  <a 
                    href="#contact"
                    className={`inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isBlueTheme 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    <i className="fas fa-clock mr-3"></i>
                    Don't miss out, act today
                  </a>

                  <div className="mt-8 p-6 bg-white/70 rounded-lg">
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-clock text-4xl text-red-500 mb-2"></i>
                        <p className="font-bold text-red-600">Time Limited Offer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
