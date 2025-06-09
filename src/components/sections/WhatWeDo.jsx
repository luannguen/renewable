import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WhatWeDo() {
  return (
    <>      {/* What We Do Header */}
      <section className="theme-mint text-gray-800">
        <div className="container mx-auto px-4 pt-20">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-2/3 px-4 text-center">              <h2 id="what" className="section-heading text-3xl md:text-4xl mb-4">
                What We Do
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-600">
                Put simply we help your organisation Go Green!
              </p>
              <hr className="border-primary-custom w-24 mx-auto border-2" />
            </div>
          </div>
        </div>
      </section>

      {/* The Journey & Result */}      <section className="pb-20 theme-mint" style={{ backgroundColor: '#ecf8f6' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">            <div className="w-full md:w-1/2 px-4">              <h2 className="section-heading-dark text-2xl md:text-3xl mb-6">
                The Journey
              </h2>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#11403a' }}>
                We start with a FREE comprehensive energy audit of your organisation, 
                creating and implementing an energy management plan which will aim to:
              </p>              <ul className="mint-list arrow mb-8" style={{ color: '#11403a' }}>
                <li>Reduce your carbon footprint</li>
                <li>Improve the efficiency with which you use energy</li>
                <li>Help you generate your own energy</li>
              </ul>

              <hr className="border-emerald-300 mb-8" />              <h2 className="section-heading-dark text-2xl md:text-3xl mb-6">
                The Result
              </h2>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#11403a' }}>
                With our proven track record we&apos;ll do our very best to:
              </p>              <ul className="mint-list tick mb-8" style={{ color: '#11403a' }}>
                <li>Reduce your energy costs and usage</li>
                <li>Provide an income through government green incentives</li>
                <li>Improve your corporate social responsibility</li>
                <li>Save you money!</li>
              </ul>

              <hr className="border-emerald-300 mb-8" />

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="info"
                  size="lg"
                  asChild
                >
                  <Link href="#products">
                    Leading Green Products
                  </Link>
                </Button>
                
                <Button
                  variant="primary"
                  size="lg"
                  asChild
                >
                  <Link href="#contact">
                    Contact our team
                  </Link>
                </Button>
              </div>
            </div>
              <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
              <div className="text-center">                <img
                  src="/images/v2/tree-eco.png"
                  alt="Take your business Green with Renewable Hub"
                  className="img-fluid w-full h-auto max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
