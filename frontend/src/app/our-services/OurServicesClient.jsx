'use client';

import React from 'react';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesGrid from '@/components/services/ServicesGrid';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import StatsSection from '@/components/sections/StatsSection';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

export default function OurServicesClient() {
  const breadcrumbItems = [
    { label: 'Our Services' }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);
  
  return (
    <main className="content">
      <ServicesBanner />
      <ServicesOverview />
      <StatsSection />
      <ServicesGrid />
      <ContactFormAdvanced />
    </main>
  );
}
