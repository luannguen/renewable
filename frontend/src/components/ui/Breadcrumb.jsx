'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Breadcrumb = ({ items, className = "", floating = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!floating) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [floating]);

  // CSS for animations
  const animationStyles = `
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    .animate-fadeInRight {
      animation: fadeInRight 0.3s ease-out;
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out;
    }
  `;  if (floating && isScrolled) {
    return (
      <>
        <style>{animationStyles}</style>
        <div className="fixed top-6 right-6 z-40 transition-all duration-300 animate-fadeInRight">
          <div 
            className={`bg-white/85 backdrop-blur-lg rounded-full shadow-lg border border-white/30 transition-all duration-300 hover:shadow-xl ${
              isCollapsed ? 'px-3 py-2' : 'px-5 py-3'
            }`}
            onMouseEnter={() => setIsCollapsed(false)}
            onMouseLeave={() => setIsCollapsed(true)}
          >
            {isCollapsed ? (
              // Collapsed state - show only breadcrumb icon with pulse effect
              <div className="flex items-center">
                <div className="relative">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ) : (
              // Expanded state - show full breadcrumb with fade-in animation
              <nav className="flex items-center space-x-2 text-sm whitespace-nowrap animate-fadeIn">
                <Link 
                  href="/" 
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors p-1 rounded-md hover:bg-green-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
                
                {items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {/* Separator */}
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    
                    {/* Breadcrumb Item */}
                    {item.href && index < items.length - 1 ? (
                      <Link 
                        href={item.href} 
                        className="text-gray-600 hover:text-green-600 transition-colors font-medium max-w-[100px] truncate p-1 rounded-md hover:bg-green-50"
                        title={item.label}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span 
                        className={`${
                          index === items.length - 1 
                            ? 'text-green-700 font-semibold bg-green-50 px-2 py-1 rounded-md' 
                            : 'text-gray-700 font-medium'
                        } max-w-[100px] truncate`}
                        title={item.label}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            )}
          </div>
        </div>
      </>
    );
  }

  // Static breadcrumb (default behavior)
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm ${className}`}>
      <nav className="flex items-center space-x-2 text-sm">
        <Link 
          href="/" 
          className="flex items-center text-gray-500 hover:text-green-600 transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Separator */}
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            {/* Breadcrumb Item */}
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href} 
                className="text-gray-500 hover:text-green-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span className={`${
                index === items.length - 1 
                  ? 'text-green-700 font-semibold' 
                  : 'text-gray-600 font-medium'
              }`}>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;
