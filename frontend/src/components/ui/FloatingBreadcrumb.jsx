'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useBreadcrumb } from '@/components/providers/BreadcrumbProvider';

const FloatingBreadcrumb = () => {
  const { breadcrumbItems } = useBreadcrumb();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);  // Simple truncate: first word + ... if name is long
  const smartTruncate = (text) => {
    if (!text) return text;
    
    const words = text.split(' ');
    const firstWord = words[0];
    
    // If first word is already short enough, return it
    if (firstWord.length <= 15) {
      return firstWord + (words.length > 1 ? '...' : '');
    }
    
    // If first word is too long, truncate it
    return firstWord.substring(0, 12) + '...';
  };
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const shouldShow = scrollY > 200; // Show after scrolling 200px
          const hasScrolled = scrollY > 100; // Add transparency after 100px
          
          setIsVisible(shouldShow);
          setIsScrolled(hasScrolled);
          
          // Auto-collapse on mobile when scrolling
          if (window.innerWidth < 768 && scrollY > 400) {
            setIsCollapsed(true);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!breadcrumbItems || breadcrumbItems.length === 0 || !isVisible) {
    return null;
  }
  return (
    <div 
      className={`fixed right-4 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${
        // Responsive positioning
        'top-20 md:top-24 lg:top-28'
      }`}
    >      <div className={`bg-white shadow-lg border border-gray-200 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'bg-white/90' : 'bg-white'
      } ${
        // Responsive sizing and spacing with max height
        'p-2 md:p-3 max-w-[200px] md:max-w-[260px] lg:max-w-[300px] max-h-[80vh] overflow-y-auto'
      }`}>
        
        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-600">Navigation</span>          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 hover:bg-gray-100 transition-colors"
            title={isCollapsed ? "Show breadcrumbs" : "Hide breadcrumbs"}
          >
            <svg 
              className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
                isCollapsed ? 'rotate-180' : ''
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>        {/* Vertical Navigation */}
        <nav className={`flex flex-col space-y-1 md:space-y-2 transition-all duration-300 ${
          isCollapsed ? 'md:flex hidden' : 'flex'
        }`}>
          {/* Home Icon */}          <Link 
            href="/" 
            className="flex items-center text-gray-500 hover:text-green-600 transition-colors p-1 md:p-2 hover:bg-green-50 group"
            title="Home"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs md:text-sm font-medium">Home</span>
          </Link>
          
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Vertical Separator */}
              <div className="flex items-center justify-center py-1">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>              {/* Breadcrumb Item */}
              <div className="flex items-center">
                {item.href && index < breadcrumbItems.length - 1 ? (                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-green-600 transition-colors font-medium p-1 md:p-2 hover:bg-green-50 w-full text-left group"
                    title={item.label}                  >                    <span className={`block leading-tight text-xs md:text-sm ${
                      item.label.length > 15 ? 'break-words' : ''
                    }`}>
                      {item.label.length > 15 ? smartTruncate(item.label) : item.label}
                    </span>
                  </Link>
                ) : (                  <div 
                    className={`${
                      index === breadcrumbItems.length - 1 
                        ? 'text-green-700 font-semibold bg-green-50' 
                        : 'text-gray-600 font-medium'
                    } p-1 md:p-2 w-full`}
                    title={item.label}
                  >                    <span className={`block leading-tight text-xs md:text-sm ${
                      item.label.length > 15 ? 'break-words' : ''
                    }`}>
                      {item.label.length > 15 ? smartTruncate(item.label) : item.label}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>        {/* Close Button */}        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors shadow-sm"
          title="Hide breadcrumb"
        >
          <svg className="w-2 h-2 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FloatingBreadcrumb;
