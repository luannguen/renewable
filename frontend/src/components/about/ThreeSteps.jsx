import React from 'react';
import Link from 'next/link';

export default function ThreeSteps() {
  return (
    <section className="theme-3steps-process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="process-title">
            Our 3 Steps to help your business Go Green
          </h2>
        </div>
        
        <div className="process-container">
          <div className="process-flow">
            {/* Step 1 */}
            <div className="process-step step-1">
              <div className="step-number">1</div>
              <h3>Free Energy<br />Audit</h3>
              <p>Our FREE energy audit will identify opportunities in your business to save CO2, energy and costs</p>
            </div>
            
            {/* Arrow 1 */}
            <div className="process-arrow"></div>
            
            {/* Step 2 */}
            <div className="process-step step-2">
              <div className="step-number">2</div>
              <h3>Full Energy<br />Proposal</h3>
              <p>We provide a business case with full ROI and paybacks, as well as funding options</p>
            </div>
            
            {/* Arrow 2 */}
            <div className="process-arrow"></div>
            
            {/* Step 3 */}
            <div className="process-step step-3">
              <div className="step-number">3</div>
              <h3>Ongoing Energy<br />Management</h3>
              <p>We help you achieve carbon savings, increase your CSR and green credentials</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="#contact" 
            className="btn-process"
          >
            GET STARTED TODAY
          </Link>
        </div>
      </div>
      
      {/* Grass background decoration */}
      <div className="grass-background"></div>
    </section>
  );
}
