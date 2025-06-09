'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { href: '/carbon-offsetting', title: 'Carbon Offsetting' },
    { href: '/combined-heat-and-power-chp', title: 'Combined Heat and Power' },
    { href: '/electric-vehicle-charging-points', title: 'Electric Vehicle Charging Points' },
    { href: '/led-lighting-solutions', title: 'LED Lighting' },
    { href: '/heating-solutions', title: 'Heating Solutions' },
    { href: '/heating-refrigeration-and-cooling', title: 'Heating & Cooling Efficiency Solutions' },
    { href: '/solar-panel-solutions', title: 'Solar PV' },
    { href: '/voltage-optimisation', title: 'Voltage Optimisation' },
    { href: '/water-rates-reviews', title: 'Water Reviews' },
    { href: '/government-energy-incentives-and-grants', title: 'Grants and Funding' },
    { href: '/esos-lead-assessor', title: 'ESOS Surveys' },
    { href: '/energy-saving-solutions', title: 'More Green Products...' },
  ];  return (
    <header id="header" className="shadow-md sticky top-0 z-50" style={{borderTop: '1px solid #d5d1e8', borderBottom: '1px solid #d5d1e8'}}>
      <nav className="desktop-menu" style={{backgroundColor: '#f4f3f9', height: '90px'}}>
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between h-full py-0"
              style={{minHeight: '90px'}}>
            {/* Logo */}
            <li className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/rhub-logo.svg"
                  alt="Renewable Hub Logo"
                  width={200}
                  height={60}
                  className="w-auto h-12"
                  priority
                />
              </Link>
              <button
                className="ml-4 lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
            </li>            {/* Desktop Navigation */}
            <li className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/about-us-how-renewable-hub-operates" 
                className="text-gray-700 hover:bg-primary-custom hover:text-white transition-all duration-200 font-heading uppercase px-4 py-2 h-16 flex items-center"
              >
                About us
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:bg-primary-custom hover:text-white transition-all duration-200 font-heading uppercase px-4 py-2 h-16 flex items-center">
                  Our Services
                  <i className="fas fa-chevron-down ml-2 text-sm"></i>
                </button>
                <div className="absolute top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl rounded-lg mt-2 p-6 w-96 z-50" style={{backgroundColor: '#f4f3f9'}}>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center mb-4">
                      <Image
                        src="/images/v2/go-green.png"
                        alt="Go Green with Renewable Hub solutions"
                        width={80}
                        height={80}
                        className="w-20 h-20 mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800 font-heading">Green Energy Solutions</h3>
                        <p className="text-sm text-gray-600">Sustainable solutions for your business</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="text-gray-600 hover:text-primary-custom transition-colors py-1 px-2 rounded hover:bg-gray-50"
                        >
                          <i className="fas fa-arrow-right text-primary-custom mr-2 text-sm"></i>
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/charities-that-we-work-with-green-energy-environmental-good-causes" 
                className="text-gray-700 hover:bg-primary-custom hover:text-white transition-all duration-200 font-heading uppercase px-4 py-2 h-16 flex items-center"
              >
                Good Causes
              </Link>
            </li>            {/* Contact Info */}
            <li className="flex items-center space-x-4">
              <Link
                href="tel:01905317005"
                className="flex items-center text-primary-custom hover:text-primary-dark-custom transition-colors"
              >
                <i className="fas fa-phone text-xl mr-2"></i>
                <span className="hidden sm:inline font-medium">Call us &gt; 01905 317 005</span>
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center text-primary-custom hover:text-primary-dark-custom transition-colors"
              >
                <i className="far fa-envelope text-xl mr-2"></i>
                <span className="hidden sm:inline font-medium">Contact Form</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t border-gray-200 py-4`} style={{backgroundColor: '#f4f3f9'}}>
            <div className="space-y-4">
              <Link 
                href="/about-us-how-renewable-hub-operates" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-gray-800 font-bold mb-2">Our Services</h3>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/charities-that-we-work-with-green-energy-environmental-good-causes" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-t border-gray-200 pt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Good Causes
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
