'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductGrid() {
  const products = [
    {
      iconClass: 'carbon',
      title: 'Carbon Offsetting',
      description: "Helps your company on it's journey to Net Zero - while not the answer, offsetting IS part of the solution",
      link: '/carbon-offsetting'
    },
    {
      iconClass: 'chp',
      title: 'Combined Heat & Power',
      description: 'Generate your own electricity from gas at a lower cost than you can buy it!',
      link: '/combined-heat-and-power-chp'
    },    {
      iconClass: 'energy',
      title: 'Business Energy Purchasing',
      description: "We are specialists in finding the best energy contracts for businesses, from fixed to more innovative 'flex' products - don't pay more than you need to.",
      link: '/404'
    },
    {
      iconClass: 'ev',
      title: 'EV Charging',
      description: 'An exciting growth market whether you are looking at local charging for your staff / customers or larger scale EV Charging parks - speak to us first!',
      link: '/electric-vehicle-charging-points-where-to-get-them-uk'
    },    {
      iconClass: 'visa',
      title: 'Payment Services',
      description: 'We have access to the best rates going - speak to us to start saving',
      link: '/404'
    },
    {
      iconClass: 'led',
      title: 'LED Lighting',
      description: 'LED Lighting offers the best working light for your employees, typically saves 60-80% and the bulbs last significantly longer',
      link: '/led-lighting-solutions-uk'
    },
    {
      iconClass: 'heating',
      title: 'Heating Solutions',
      description: 'Everything from energy-efficient boilers, distribution systems and Zoned Heating, to biomass and ground-source heating systems',
      link: '/heating-solutions-energy-efficient-boilers'
    },
    {
      iconClass: 'cool',
      title: 'Heating & Cooling Efficiency',
      description: 'Air conditioning, Refrigeration, Heat pump systems - we can help you make the most of your existing systems to save',
      link: '/heating-refrigeration-and-cooling-solutions'
    },
    {
      iconClass: 'solar',
      title: 'Commercial Solar Panels',
      description: 'Solar Panels (PV) can bring significant long-term energy cost savings to your business',
      link: '/solar-panel-solutions-uk'
    },
    {
      iconClass: 'vo',
      title: 'Voltage Optimisation',
      description: 'Save up to 15% on your energy costs, a FREE simple test will reveal if you can make savings on your energy consumption',
      link: '/uk-voltage-optimisation'
    },    {
      iconClass: 'water',
      title: 'Water Audit',
      description: 'A completely FREE audit which could recover £10,000\'s for your business if we find you are being overcharged.',
      link: '/water-rates-reviews-uk'
    }  ];

  // Simple carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
    // Get items per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 items
      if (window.innerWidth >= 768) return 2;  // Tablet: 2 items  
      return 1; // Mobile: 1 item
    }
    return 3; // Default for SSR
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());  useEffect(() => {
    setIsClient(true);
    setItemsPerSlide(getItemsPerSlide());
    
    const handleResize = () => {
      const newItemsPerSlide = getItemsPerSlide();
      setItemsPerSlide(newItemsPerSlide);
      // Reset to first slide on resize to avoid showing empty slides
      setCurrentSlide(0);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Auto-play carousel with pause on hover
    let interval;
    const startAutoPlay = () => {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const totalSlides = Math.ceil(products.length / itemsPerSlide);
          return (prev + 1) % totalSlides;
        });
      }, 4000); // 4 seconds per slide
    };
    
    const stopAutoPlay = () => {
      if (interval) clearInterval(interval);
    };

    startAutoPlay();

    return () => {
      window.removeEventListener('resize', handleResize);
      stopAutoPlay();
    };
  }, [itemsPerSlide, products.length]);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!isClient) {
    // Return static grid for SSR
    return (
      <>
        {/* Products Header */}
        <section className="mt-12 pb-0">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl text-center">
                <h2 id="products" className="section-heading">
                  Some of our <span className="green">Green</span> products...
                </h2>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-12 theme-products">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="col-12 col-md-4 mb-6">
                  <div className={`icon ${product.iconClass}`}>&nbsp;</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <p>
                    <Link href={product.link} className="btn btn-info btn-sm">
                      view details
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Products Header */}
      <section className="mt-12 pb-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl text-center">
              <h2 id="products" className="section-heading">
                Some of our <span className="green">Green</span> products...
              </h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
      </section>      {/* Products Grid */}
      <section className="mb-12 theme-products">
        <div className="container mx-auto px-4">
          <div 
            className="slider slider-products relative"
            onMouseEnter={() => {
              // You could implement pause on hover here if needed
            }}
            onMouseLeave={() => {
              // You could restart auto-play here if needed  
            }}
          >
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="slick-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
            >
              <i className="fas fa-chevron-left text-gray-600"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="slick-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
            >
              <i className="fas fa-chevron-right text-gray-600"></i>
            </button>            {/* Slides container */}
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${totalSlides * 100}%`
                }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (                  <div 
                    key={slideIndex} 
                    className="flex-shrink-0"
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {(() => {
                      const slideProducts = products.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide);
                      const actualItemsInSlide = slideProducts.length;
                      
                      return (
                        <div className={`${
                          actualItemsInSlide === 1 ? 'grid grid-cols-1' :
                          actualItemsInSlide === 2 ? 'grid grid-cols-2' :
                          'grid grid-cols-3'
                        } gap-6 justify-center`}>
                          {slideProducts.map((product, index) => (
                            <div key={slideIndex * itemsPerSlide + index} className="col-12 col-md-4 mb-6 px-3">
                              <div className={`icon ${product.iconClass}`}>&nbsp;</div>
                              
                              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                                {product.title}
                              </h3>
                              
                              <p className="text-gray-600 mb-4">
                                {product.description}
                              </p>
                              
                              <p>
                                <Link 
                                  href={product.link}
                                  className="btn btn-info btn-sm"
                                >
                                  view details
                                </Link>
                              </p>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="slick-dots flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}