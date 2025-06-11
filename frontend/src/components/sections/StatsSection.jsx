'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    co2: 0,
    money: 0,
    energy: 0,
    trees: 0
  });
  
  const sectionRef = useRef(null);

  const targetValues = {
    co2: 24327,
    money: 6.31,
    energy: 95.9,
    trees: 11.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        co2: Math.floor(targetValues.co2 * progress),
        money: (targetValues.money * progress).toFixed(1),
        energy: (targetValues.energy * progress).toFixed(1),
        trees: (targetValues.trees * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({
          co2: targetValues.co2,
          money: targetValues.money.toFixed(1),
          energy: targetValues.energy.toFixed(1),
          trees: targetValues.trees.toFixed(1)
        });
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What we've achieved to date...
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* CO2 Saved */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <i className="fas fa-leaf text-3xl text-green-300"></i>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {isVisible ? counts.co2.toLocaleString() : '0'} <span className="text-2xl font-normal">tons</span>
            </h3>
            <p className="text-xl text-blue-200">
              of CO<sub>2</sub> <span className="text-green-300 font-semibold">Saved</span>
            </p>
          </div>

          {/* Money Saved */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <i className="fas fa-pound-sign text-3xl text-yellow-300"></i>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              £{isVisible ? counts.money : '0'}<span className="text-2xl font-normal">m</span>
            </h3>
            <p className="text-xl text-blue-200">
              for Clients <span className="text-green-300 font-semibold">Saved</span>
            </p>
          </div>

          {/* Energy Saved */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <i className="fas fa-bolt text-3xl text-orange-300"></i>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {isVisible ? counts.energy : '0'}<span className="text-2xl font-normal">m kWh</span>
            </h3>
            <p className="text-xl text-blue-200">
              Energy <span className="text-green-300 font-semibold">Saved</span>
            </p>
          </div>
        </div>

        {/* Trees Equivalent */}
        <div className="text-center">
          <div className="w-full h-px bg-white/20 mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            That's a Carbon uptake equivalent of{' '}
            <span className="text-green-300">
              {isVisible ? counts.trees : '0'} million
            </span>{' '}
            trees over one year!
          </h3>
          <p className="text-xl text-blue-200">
            Are you ready to start saving too?{' '}
            <button className="text-green-300 hover:text-green-200 underline font-semibold transition-colors">
              Contact our team
            </button>{' '}
            today to get started.
          </p>
        </div>

      </div>
    </section>
  );
}
