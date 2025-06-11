'use client';

import Link from 'next/link';
import Image from 'next/image';

// Mock data cho articles - có thể di chuyển ra file riêng sau này
const articlesData = [
  {
    id: 1,
    slug: 'renewable-energy-trends-2025',
    title: 'Renewable Energy Trends to Watch in 2025',
    excerpt: 'Discover the latest innovations and developments in renewable energy technology that will shape our sustainable future.',
    image: '/images/articles/renewable-trends.svg',
    category: 'Technology',
    author: 'Dr. Sarah Chen',
    publishedAt: '2025-01-15',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 2,
    slug: 'solar-power-installation-guide',
    title: 'Complete Guide to Solar Power Installation',
    excerpt: 'Everything you need to know about installing solar panels for your home or business, from planning to maintenance.',
    image: '/images/articles/solar-installation.svg',
    category: 'Guide',
    author: 'Mike Johnson',
    publishedAt: '2025-01-10',
    readTime: '12 min read',
    featured: true
  },
  {
    id: 3,
    slug: 'wind-energy-innovations',
    title: 'Revolutionary Wind Energy Innovations',
    excerpt: 'Exploring cutting-edge wind turbine technologies and their impact on clean energy production worldwide.',
    image: '/images/articles/wind-energy.svg',
    category: 'Innovation',
    author: 'Emma Rodriguez',
    publishedAt: '2025-01-08',
    readTime: '6 min read',
    featured: false
  },
  {
    id: 4,
    slug: 'sustainable-building-materials',
    title: 'Sustainable Building Materials Revolution',
    excerpt: 'How eco-friendly construction materials are transforming the building industry and reducing environmental impact.',
    image: '/images/articles/sustainable-building.svg',
    category: 'Construction',
    author: 'James Wilson',
    publishedAt: '2025-01-05',
    readTime: '10 min read',
    featured: false
  },
  {
    id: 5,
    slug: 'energy-storage-solutions',
    title: 'Next-Generation Energy Storage Solutions',
    excerpt: 'Advanced battery technologies and storage systems that are making renewable energy more reliable and efficient.',
    image: '/images/articles/energy-storage.svg',
    category: 'Technology',
    author: 'Dr. Lisa Park',
    publishedAt: '2025-01-03',
    readTime: '9 min read',
    featured: false
  },
  {
    id: 6,
    slug: 'green-transportation-future',
    title: 'The Future of Green Transportation',
    excerpt: 'Electric vehicles, hydrogen fuel cells, and other sustainable transportation solutions shaping our mobility.',
    image: '/images/articles/green-transport.svg',
    category: 'Transport',
    author: 'Alex Thompson',
    publishedAt: '2025-01-01',
    readTime: '7 min read',
    featured: false
  }
];

const ArticlesGrid = ({ selectedCategory = 'All', searchQuery = '' }) => {
  // Filter articles based on category and search query
  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Separate featured and regular articles
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span>By {article.author}</span>
                          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        {regularArticles.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <article className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                        <div className="space-y-1">
                          <div>By {article.author}</div>
                          <div>{new Date(article.publishedAt).toLocaleDateString()}</div>
                        </div>
                        <span className="font-medium">{article.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                {searchQuery ? 
                  `No articles match your search "${searchQuery}".` : 
                  `No articles found in the "${selectedCategory}" category.`
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesGrid;
