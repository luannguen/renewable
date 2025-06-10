import React from 'react';

export default function OurValues() {
  return (
    <section className="py-16 bg-white/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
            We will always be an environmentally focused business, as such we look to partner with only like-minded businesses to ensure that we deliver only the most efficient and high quality products within the industry.
          </p>
        </div>

        {/* Values Grid - 2 columns like original */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ethical Selling</h3>
              <p className="text-gray-800">
                Ensuring that our products and services meet the needs of the customer at a fair price.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CO2 Emission Reductions</h3>
              <p className="text-gray-800">
                Through careful monitoring we can suggest strategies and products to help reduce your CO2 emissions and overall environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outstanding Customer Service</h3>
              <p className="text-gray-800">
                You, the customer are our number 1 priority. Our highly trained staff are dedicated to making sure you receive the best products and service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Product Portfolio</h3>
              <p className="text-gray-800">
                Our portfolio is environmentally led helping to raise your corporate and social responsibility whilst doing your bit for the planet.
              </p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attention to detail</h3>
              <p className="text-gray-800">
                In this industry, the smallest changes can sometimes have quite a substantial impact. This is why we pay such close attention to our products in order to be able to offer you the most accurate energy and money saving strategies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Value for money</h3>
              <p className="text-gray-800">
                We offer only the highest quality products and services to our clients at a competitive price. We also advise our you on the best value products to suit your budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Conservation & Cost Savings</h3>
              <p className="text-gray-800">
                Introducing renewable energy strategies can help you become eligible for several Government schemes as well its reductions to your energy bills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
