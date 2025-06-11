'use client';

import Banner from '@/components/sections/Banner';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Statistics from '@/components/sections/Statistics';
import ProductGridEmbla from '@/components/sections/ProductGridEmbla';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import Testimonials from '@/components/sections/Testimonials';
import RecentArticles from '@/components/sections/RecentArticles';
import CompanyLogos from '@/components/sections/CompanyLogos';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

export default function HomeClient() {
  // Clear breadcrumbs for home page (or don't set any)
  useBreadcrumbItems([]);

  return (
    <>
      <Banner />
      <WhatWeDo />
      <Statistics />
      <ProductGridEmbla />
      <ContactFormAdvanced />
      <Testimonials />
      <RecentArticles />
      <CompanyLogos />
    </>
  );
}
