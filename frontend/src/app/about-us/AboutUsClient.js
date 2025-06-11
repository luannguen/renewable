'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import TeamSection from '@/components/about/TeamSection';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

export default function AboutUsClient() {
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);

  return (
    <main>
      <AboutHero />
      <AboutContent />
      <TeamSection />
    </main>
  );
}
