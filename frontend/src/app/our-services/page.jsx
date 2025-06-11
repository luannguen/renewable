import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServicesOverview from '@/components/services/ServicesOverview';
import ServicesGrid from '@/components/services/ServicesGrid';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import StatsSection from '@/components/sections/StatsSection';

export const metadata = {
  title: 'Our Services - Green Energy Solutions | RenewWeb',
  description: 'Discover our comprehensive range of green energy solutions including solar panels, LED lighting, heating solutions, EV charging, and more to help your business go green.',
  keywords: 'green energy, renewable energy, solar panels, LED lighting, EV charging, energy solutions, business energy',
};

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
        <main className="content">
        <ServicesBanner />
        <ServicesOverview />
        <StatsSection />
        <ServicesGrid />
        <ContactFormAdvanced />
      </main>
      
      <Footer />
    </div>
  );
}
