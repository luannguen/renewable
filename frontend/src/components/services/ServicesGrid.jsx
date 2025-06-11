'use client';

import React from 'react';
import Link from 'next/link';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-seedling',
    title: 'Carbon Offsetting',
    description: "Helps your company on it's journey to Net Zero - while not the answer, offsetting IS part of the solution",
    href: '/our-services/carbon-offsetting',
    color: 'green'
  },
  {
    id: 2,
    icon: 'fas fa-cogs',
    title: 'Combined Heat & Power',
    description: 'Generate your own electricity from gas at a lower cost than you can buy it!',
    href: '/our-services/combined-heat-and-power-chp',
    color: 'blue'
  },
  {
    id: 3,
    icon: 'fas fa-car-battery',
    title: 'EV Charging',
    description: 'An exciting growth market whether you are looking at local charging for your staff / customers or larger scale EV Charging parks - speak to us first!',
    href: '/our-services/electric-vehicle-charging-points',
    color: 'purple'
  },
  {
    id: 4,
    icon: 'fas fa-lightbulb',
    title: 'LED Lighting',
    description: 'LED Lighting offers the best working light for your employees, typically saves 60-80% and the bulbs last significantly longer',
    href: '/our-services/led-lighting-solutions',
    color: 'yellow'
  },
  {
    id: 5,
    icon: 'fas fa-fire',
    title: 'Heating Solutions',
    description: 'Everything from energy-efficient boilers, distribution systems and Zoned Heating, to biomass and ground-source heating systems',
    href: '/our-services/heating-solutions',
    color: 'red'
  },
  {
    id: 6,
    icon: 'fas fa-snowflake',
    title: 'Heating & Cooling Efficiency',
    description: 'Air conditioning, Refrigeration, Heat pump systems - we can help you make the most of your existing systems to save',
    href: '/our-services/heating-refrigeration-and-cooling',
    color: 'cyan'
  },
  {
    id: 7,
    icon: 'fas fa-solar-panel',
    title: 'Commercial Solar Panels',
    description: 'Solar Panels (PV) can bring significant long-term energy cost savings to your business',
    href: '/our-services/solar-panel-solutions',
    color: 'orange'
  },
  {
    id: 8,
    icon: 'fas fa-bolt',
    title: 'Voltage Optimisation',
    description: 'Save up to 15% on your energy costs, a FREE simple test will reveal if you can make savings on your energy consumption',
    href: '/our-services/voltage-optimisation',
    color: 'indigo'
  },
  {
    id: 9,
    icon: 'fas fa-tint',
    title: 'Water Audit',
    description: "A completely FREE audit which could recover £10,000's for your business if we find you are being overcharged.",
    href: '/our-services/water-rates-reviews',
    color: 'blue'
  },
  {
    id: 10,
    icon: 'fas fa-hand-holding-usd',
    title: 'Grants and Funding',
    description: 'Access government grants and funding opportunities to support your green energy initiatives',
    href: '/our-services/government-energy-incentives-and-grants',
    color: 'emerald'
  },
  {
    id: 11,
    icon: 'fas fa-clipboard-check',
    title: 'ESOS Surveys',
    description: 'Energy Savings Opportunity Scheme compliance and energy auditing services',
    href: '/our-services/esos-lead-assessor',
    color: 'teal'
  },
  {
    id: 12,
    icon: 'fas fa-bolt',
    title: 'Business Energy Purchasing',
    description: 'We are specialists in finding the best energy contracts for businesses, from fixed to more innovative \'flex\' products - don\'t pay more than you need to.',
    href: '/our-services/business-energy-purchasing',
    color: 'violet'
  }
];

const getColorClasses = (color) => {
  const colorMap = {
    green: 'bg-green-100 text-green-600 border-green-200 hover:bg-green-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200',
    yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200 hover:bg-yellow-200',
    red: 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200',
    cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 hover:bg-cyan-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200',
    indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200 hover:bg-indigo-200',
    emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200 hover:bg-emerald-200',
    teal: 'bg-teal-100 text-teal-600 border-teal-200 hover:bg-teal-200',
    violet: 'bg-violet-100 text-violet-600 border-violet-200 hover:bg-violet-200'
  };
  return colorMap[color] || colorMap.green;
};

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some of our <span className="text-green-600">Green</span> products...
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Content */}
              <div className="p-8 text-center">
                
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${getColorClasses(service.color)}`}>
                  <i className={`${service.icon} text-3xl`}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* View Details Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>View Details</span>
                  <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Green Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our expert team today for a FREE comprehensive energy audit and discover how much you could save.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-calculator mr-3"></i>
                Get Free Energy Audit
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                <i className="fas fa-phone mr-3"></i>
                Call 01905 317 005
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
