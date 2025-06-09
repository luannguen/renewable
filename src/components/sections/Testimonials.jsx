'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Huge thanks to Nathan at Renewable Hub for helping us achieve a cost effective new electricity supply. It is very important to us that it is 100% renewable energy!",
    author: "Darren Shoesmith",
    company: "H2O Linen Services Ltd"
  },
  {
    id: 2,
    text: "Having suffered with ineffective lighting for many years we decided to improve indoor visibility with an LED install from Renewable Hub. The response and installation time were both swift and the quality of the install excellent. We expect to see huge savings and our visibility has improved immensely, an integral necessity where linen quality is concerned.",
    author: "Ben Woodhead",
    company: "Telford Laundry Ltd"
  },
  {
    id: 3,
    text: "I would not hesitate to recommend Renewable Hub UK as an energy saving partner to any business. Their approach from the initial proposal to installation is second to none. Well Done!",
    author: "Mathew Bodley",
    company: "Concept Elevators"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="pb-3 pt-3 banner banner-1">
      <div className="container pb-3 pt-3 testimonials">
        <div className="row">
          <div className="col-12">
            <h2>Businesses we've helped 'Go Green'</h2>
            <p>What our customers say...</p>
          </div>
          <div className="col-12">
            <div className="slider slider-testimonial">
              <div className="slide">
                <div className="testimonial">
                  <p>{testimonials[currentIndex].text}</p>
                  <p className="author">
                    {testimonials[currentIndex].author}
                    <span>{testimonials[currentIndex].company}</span>
                  </p>
                </div>
              </div>
              
              {/* Navigation dots */}
              {testimonials.length > 1 && (
                <div className="slick-dots">
                  {testimonials.map((_, index) => (
                    <li 
                      key={index}
                      className={index === currentIndex ? 'slick-active' : ''}
                    >
                      <button 
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
