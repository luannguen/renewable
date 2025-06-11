'use client';

import React from 'react';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import CompanyLogos from '@/components/sections/CompanyLogos';
import AboutUsIntro from '@/components/about/AboutUsIntro';
import ThreeSteps from '@/components/about/ThreeSteps';
import OurValues from '@/components/about/OurValues';
import FounderSection from '@/components/about/FounderSection';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

export default function AboutUsClient() {
  // Set breadcrumb items
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);
  
  return (
    <main className="content">
      {/* Founder Section - Modern Hero */}
      <FounderSection />

      {/* About Us Main Section */}
      <AboutUsIntro />
      
      {/* 3 Steps Section */}
      <ThreeSteps />

      {/* Our Values Section */}
      <OurValues />

      {/* Contact Form Section */}
      <ContactFormAdvanced />

      {/* Company Logos Section */}
      <CompanyLogos />
    </main>
  );
}
