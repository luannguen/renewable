'use client';

import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Hiển thị/ẩn nút dựa trên vị trí scroll
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
      
      setScrollProgress(Math.min(progress, 100));
      
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Theo dõi trạng thái scroll để thêm animation
    const handleScroll = () => {
      setIsScrolling(true);
      toggleVisibility();
      
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    // Gọi ngay lần đầu để set giá trị ban đầu
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  // Scroll lên đầu trang một cách mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Nút Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        } ${
          isScrolling ? 'scale-110' : ''
        } hover:scale-110 hover:from-green-600 hover:to-blue-600 group`}
        aria-label="Back to top"
        title="Back to top"
      >
        {/* Icon mũi tên lên */}
        <svg 
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
        
        {/* Hiệu ứng ring khi hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 animate-ping"></div>
      </button>

      {/* Progress indicator */}
      <div 
        className={`fixed bottom-28 right-8 z-50 transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative w-12 h-12">
          {/* Background circle */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Progress circle */}
          <svg className="absolute top-0 left-0 w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-green-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeDasharray={`${scrollProgress}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-gray-600">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
