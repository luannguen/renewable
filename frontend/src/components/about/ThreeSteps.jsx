import React from 'react';
import Link from 'next/link';

export default function ThreeSteps() {
  return (
    <section className="mb-16 py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="row pb-8">
          <div className="col-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our 3 Steps to help your business Go Green</h2>
          </div>
        </div>

        <div className="row three-points grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-12 col-md-4">
            <div className="stage1 text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-4">
                Free Energy<br />Audit
              </h3>
              <p className="text-white/90">
                Our FREE energy audit will identify opportunities in your business to save CO2, energy and costs
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="stage2 text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">
                Full Energy<br />Proposal
              </h3>
              <p className="text-white/90">
                We provide a business case with full ROI and paybacks, as well as funding options
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="stage3 text-center bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-4">
                Ongoing Energy<br />Management
              </h3>
              <p className="text-white/90">
                We help you achieve carbon savings, increase your CSR and green credentials
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-8">
          <div className="col-12 text-center">
            <Link 
              href="#contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
