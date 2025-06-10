import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import CompanyLogos from '@/components/sections/CompanyLogos';
import HeroBanner from '@/components/about/HeroBanner';
import AboutUsIntro from '@/components/about/AboutUsIntro';
import ThreeSteps from '@/components/about/ThreeSteps';
import OurValues from '@/components/about/OurValues';

export const metadata = {
  title: 'About Renewable Hub | Renewable Hub',
  description: 'Our business was born from our passion for the environment, sustainable living and bring a positive difference to modern business.',
  openGraph: {
    title: 'About Renewable Hub | Renewable Hub',
    description: 'Our business was born from our passion for the environment, sustainable living and bring a positive difference to modern business.',
    url: '/about-us',
    siteName: 'Renewable Hub',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      
      <main className="content">
        {/* Hero Banner Section */}
        <HeroBanner />

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

      <Footer />
    </>
  );
}
