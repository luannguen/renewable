'use client';

import React, { useState, useEffect } from 'react';

export default function ServiceTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "It's a pleasure now on a sunny day knowing that our Solar PV is producing a substantial amount of green electricity and reducing our companies bills. At the same time the additional works undertaken by RenewWeb are controlling all other elements of our buildings utility consumption.",
      author: "Chris Lewis",
      company: "The Lewis Partnership"
    },
    {
      id: 2,
      text: "We were very fortunate to find a partner such as Nathan who was passionate about both the environment and saving energy. With all businesses we have an environmental responsibility while also having a commercial responsibility. I would very highly recommend any business in working with Nathan and RenewWeb as they provide a world class service.",
      author: "Simon Anderson",
      company: "LVS Small Plastic Parts Ltd"
    },
    {
      id: 3,
      text: "We were impressed with the work over the last fortnight on the air con install. Lewis and Matt were professional, knowledgeable, friendly and worked tirelessly they are both an asset and great ambassadors for your company and we would not hesitate to have them back on site. We would like to thank them for all of their hard work, dedication and attention to detail over the last couple of weeks.",
      author: "Laura King",
      company: "Onecom"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Businesses we've helped 'Go Green'
          </h2>
          <p className="text-xl text-gray-600">
            What our customers say...
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px] flex items-center">
            <div className="w-full">
              <div className="mb-6">
                <i className="fas fa-quote-left text-4xl text-green-500 opacity-50"></i>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                {testimonials[currentSlide].text}
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[currentSlide].author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].author}
                  </div>
                  <div className="text-green-600 font-medium">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all duration-300 ease-linear"
                style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Stats or additional info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">£2M+</div>
            <div className="text-gray-600">Energy Savings</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-gray-600">Tonnes CO2 Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
