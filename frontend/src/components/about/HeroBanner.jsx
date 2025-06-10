import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (    <section 
      className="banner banner-4 banner-fixed min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/responsive-images/banners/1199-4-banner.jpg)',
      }}
    ><div className="container mx-auto px-4 h-full relative">
        <div className="row flex flex-col md:flex-row h-full min-h-[500px]">
          {/* Content Section - Centered */}
          <div className="col-12 col-md-6 flex items-center justify-center mb-8 md:mb-0">
            <div className="quote relative bg-white p-8 rounded-lg shadow-lg max-w-lg border-4 border-teal-400">
              {/* Speech bubble arrow */}
              <div className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[16px] border-l-teal-400 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent"></div>
              <div className="absolute right-[-12px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[12px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We pride ourselves in offering products and solutions that will reduce&nbsp;carbon and support sustainable business.&nbsp;We help you to&nbsp;cut carbon, cut costs and &ldquo;Go Green&rdquo;.
              </p>
              <p className="author text-xl font-semibold text-teal-600">
                Nathan Badger
                <span className="block text-sm text-gray-500 font-normal">Founder &amp; CEO</span>
              </p>
            </div>
          </div>
          
          {/* Image Section - Pushed down and slightly to the right */}
          <div className="col-12 col-md-6 relative flex items-end justify-end h-full">
            <div className="w-full max-w-sm ml-auto mr-4 flex flex-col justify-end h-full">
              <Image 
                alt="Nathan Badger - CEO and Founder of Renewable Hub" 
                className="img-fluid w-full h-auto object-bottom" 
                src="/images/v2/nathan-badger-founder-of-optimise-energy.png"
                width={350}
                height={450}
                priority
                style={{ 
                  alignSelf: 'flex-end',
                  objectPosition: 'bottom',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
