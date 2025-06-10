'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

// Counter animation hook
function useCounter(end, duration = 3000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, shouldStart]);

  return count;
}

// Intersection Observer hook
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        setIsIntersecting(true);
        setHasTriggered(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered, options]);

  return [ref, isIntersecting];
}

export default function Statistics() {
  const [factsRef, factsVisible] = useIntersectionObserver({
    threshold: 0.3,
  });

  const co2Count = useCounter(24327, 3000, factsVisible);
  const moneyCount = useCounter(6.31, 3000, factsVisible);
  const energyCount = useCounter(95.9, 3000, factsVisible);
  const treesCount = useCounter(11.1, 3000, factsVisible);  return (
    <section className="pb-8 pt-8 theme-blue" style={{color: '#212529'}}>
      <div className="container mx-auto px-4">
        <div ref={factsRef} id="facts" className="flex flex-wrap -mx-4">          <div className="w-full px-4 text-center mb-8">
            <h2 className="section-heading text-3xl md:text-4xl mb-4">
              What we&apos;ve achieved to date...
            </h2>
            <hr className="border-gray-400 w-24 mx-auto border-2" />
          </div><div className="w-full sm:w-1/3 px-4 text-center mb-8">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full mb-4">
                <i className="fas fa-leaf text-3xl text-black"></i>
              </div>
            </div>            <h3 className="text-2xl md:text-3xl font-bold" style={{color: '#212529'}}>
              <strong>{co2Count.toLocaleString()} tons</strong> of CO<sub>2</sub>
              <span className="block text-lg font-normal text-primary-custom mt-2 uppercase text-xs font-extrabold">Saved</span>
            </h3>
          </div>

          <div className="w-full sm:w-1/3 px-4 text-center mb-8">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full mb-4">
                <i className="fas fa-pound-sign text-3xl text-black"></i>
              </div>
            </div>            <h3 className="text-2xl md:text-3xl font-bold" style={{color: '#212529'}}>
              <strong>£{moneyCount.toFixed(1)}m</strong> for Clients
              <span className="block text-lg font-normal text-primary-custom mt-2 uppercase text-xs font-extrabold">Saved</span>
            </h3>
          </div>

          <div className="w-full sm:w-1/3 px-4 text-center mb-8">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-300 rounded-full mb-4">
                <i className="fas fa-bolt text-3xl text-black"></i>
              </div>
            </div>            <h3 className="text-2xl md:text-3xl font-bold" style={{color: '#212529'}}>
              <strong>{energyCount.toFixed(1)}m kWh</strong> Energy
              <span className="block text-lg font-normal text-primary-custom mt-2 uppercase text-xs font-extrabold">Saved</span>
            </h3>
          </div>

          <div className="w-full px-4 text-center">
            <hr className="border-gray-400 w-24 mx-auto border-2 mb-6" />            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{color: '#212529'}}>
              That&apos;s a Carbon uptake equivalent of{' '}
              <strong>{treesCount.toFixed(1)} million</strong> trees over one year!
            </h3>
            <p className="text-lg" style={{color: '#212529'}}>
              Are you ready to start saving too?{' '}
              <Link 
                href="#contact" 
                className="text-primary-custom underline hover:text-primary-dark-custom transition-colors font-semibold"
              >
                Contact our team
              </Link>{' '}
              today to get started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
