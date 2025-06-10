import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsIntro() {
  return (
    <section className="pb-16 pt-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col md:flex-row items-center">
          <div className="col-12 col-md-6 order-0 order-md-0 mb-8 md:mb-0">
            <h1 id="what" className="text-4xl font-bold text-gray-800 mb-6">About us</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a Carbon and Cost Reduction Company founded through a real desire to make a positive impact to drive the economy to carbon neutrality and protect the environment as we know it.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We have many tools and services at our disposal along with access to grants and various funding options. Enabling your organisation to &lsquo;go green&rsquo;, reduce your carbon and costs, provide you with an income through Government green incentives and improve your CSR credentials often with little or no capex requirements, swift paybacks and high ROI.
            </p>

            <p className="text-lg text-gray-700">
              We&rsquo;d love to help your business too, please{' '}
              <Link href="#contact" className="text-green-600 hover:text-green-800 font-semibold underline">
                contact our team
              </Link>{' '}
              to get started.
            </p>
          </div>
          <div className="col-12 col-md-6 order-0 order-md-0 text-center flex items-center">
            <div className="w-full">
              <Image 
                alt="Take your business Green with Renewable Hub" 
                className="img-fluid mx-auto" 
                src="/images/v2/go-green-wht.png"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
