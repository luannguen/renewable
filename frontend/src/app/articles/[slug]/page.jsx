'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import ArticleDetailBanner from '@/components/articles/ArticleDetailBanner';
import ArticleDetailContent from '@/components/articles/ArticleDetailContent';
import RelatedArticles from '@/components/articles/RelatedArticles';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

// Mock data cho articles - thực tế sẽ lấy từ database hoặc CMS
const articlesData = [
  {
    id: 1,
    slug: 'renewable-energy-trends-2025',
    title: 'Renewable Energy Trends to Watch in 2025',
    excerpt: 'Discover the latest innovations and developments in renewable energy technology that will shape our sustainable future.',
    content: `
      <p>The renewable energy sector is experiencing unprecedented growth and innovation as we move into 2025. From breakthrough technologies to policy changes, several key trends are emerging that will shape the future of clean energy.</p>
      
      <h2>Solar Power Efficiency Breakthroughs</h2>
      <p>New perovskite-silicon tandem solar cells are achieving efficiency rates of over 30%, making solar power more cost-effective than ever before. These advancements are expected to reduce the cost of solar installations by another 20% over the next two years.</p>
      
      <h2>Energy Storage Revolution</h2>
      <p>Battery technology is evolving rapidly, with new lithium-iron-phosphate (LFP) batteries offering longer lifespans and safer operation. Additionally, emerging technologies like solid-state batteries promise even greater energy density and safety improvements.</p>
      
      <h2>Smart Grid Integration</h2>
      <p>The integration of AI and IoT technologies into power grids is enabling more efficient distribution of renewable energy. Smart grids can now predict energy demand patterns and automatically adjust supply from various renewable sources.</p>
      
      <h2>Policy and Financial Support</h2>
      <p>Governments worldwide are increasing their commitment to renewable energy through enhanced tax incentives, grants, and favorable policies. The recent expansion of federal tax credits in many countries is making renewable energy more accessible to homeowners and businesses.</p>
      
      <h2>The Path Forward</h2>
      <p>As these trends continue to develop, we can expect renewable energy to become increasingly dominant in the global energy mix. The combination of improved technology, falling costs, and supportive policies creates an optimistic outlook for sustainable energy adoption.</p>
    `,
    image: '/images/articles/renewable-trends.svg',
    category: 'Technology',
    author: 'Dr. Sarah Chen',
    authorBio: 'Dr. Sarah Chen is a renewable energy researcher with over 15 years of experience in solar technology development. She holds a PhD in Materials Science from Stanford University.',
    authorImage: '/images/authors/sarah-chen.svg',
    publishedAt: '2025-01-15',
    readTime: '8 min read',
    tags: ['Renewable Energy', 'Solar Power', 'Energy Storage', 'Smart Grid', 'Technology Trends'],
    featured: true
  },
  {
    id: 2,
    slug: 'solar-power-installation-guide',
    title: 'Complete Guide to Solar Power Installation',
    excerpt: 'Everything you need to know about installing solar panels for your home or business, from planning to maintenance.',
    content: `
      <p>Installing solar panels is one of the most effective ways to reduce your carbon footprint and energy costs. This comprehensive guide will walk you through every step of the solar installation process.</p>
      
      <h2>Planning Your Solar Installation</h2>
      <p>The first step in any solar installation is proper planning. This involves assessing your energy needs, evaluating your roof's condition and orientation, and determining the optimal system size for your property.</p>
      
      <h2>Choosing the Right Equipment</h2>
      <p>Not all solar panels are created equal. Monocrystalline panels offer the highest efficiency but come at a premium price, while polycrystalline panels provide good value for most residential applications. String inverters, power optimizers, and microinverters each have their advantages depending on your specific situation.</p>
      
      <h2>Installation Process</h2>
      <p>Professional installation typically takes 1-3 days depending on system size. The process involves mounting the panels, installing the inverter, running electrical connections, and connecting to your home's electrical panel and the grid.</p>
      
      <h2>Permits and Inspections</h2>
      <p>Solar installations require various permits and inspections to ensure safety and compliance with local codes. Your installer should handle most of this paperwork, but it's important to understand the process.</p>
      
      <h2>Maintenance and Monitoring</h2>
      <p>Modern solar systems require minimal maintenance, but regular monitoring ensures optimal performance. Most systems come with monitoring apps that allow you to track energy production and identify any issues quickly.</p>
    `,
    image: '/images/articles/solar-installation.svg',
    category: 'Guide',
    author: 'Mike Johnson',
    authorBio: 'Mike Johnson is a certified solar installer and project manager with over 10 years of experience in residential and commercial solar installations.',
    authorImage: '/images/authors/mike-johnson.svg',
    publishedAt: '2025-01-10',
    readTime: '12 min read',
    tags: ['Solar Installation', 'Home Improvement', 'Energy Efficiency', 'DIY', 'Cost Savings'],
    featured: true
  },
  // Add more articles as needed...
];

export default function ArticleDetailPage({ params }) {
  const resolvedParams = use(params);
  const article = articlesData.find(article => article.slug === resolvedParams.slug);
  if (!article) {
    notFound();
  }

  // Get related articles (same category, exclude current article)
  const relatedArticles = articlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Set breadcrumb items
  const breadcrumbItems = [
    { label: 'Articles', href: '/articles' },
    { label: article.category, href: `/articles?category=${article.category}` },
    { label: article.title }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);

  return (
    <main className="min-h-screen">
      <ArticleDetailBanner article={article} />
      <ArticleDetailContent article={article} />
      
      {relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About This Article?
            </h2>
            <p className="text-lg text-gray-600">
              Our experts are here to help you understand and implement these solutions
            </p>
          </div>
          <ContactFormAdvanced />
        </div>
      </section>
    </main>
  );
}
