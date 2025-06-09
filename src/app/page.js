import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/sections/Banner';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Statistics from '@/components/sections/Statistics';
import ProductGridEmbla from '@/components/sections/ProductGridEmbla';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import Testimonials from '@/components/sections/Testimonials';
import RecentArticles from '@/components/sections/RecentArticles';
import CompanyLogos from '@/components/sections/CompanyLogos';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <WhatWeDo />
      <Statistics />
      <ProductGridEmbla />
      <ContactFormAdvanced />
      <Testimonials />
      <RecentArticles />
      <CompanyLogos />
      <Footer />
    </div>
  );
}
