'use client';

import Link from 'next/link';
import Image from 'next/image';

const RelatedArticles = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
          <p className="text-lg text-gray-600">
            Continue reading with these related insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`}>
              <article className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span>By {article.author}</span>
                      <span>•</span>
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <span className="font-medium text-green-600">{article.readTime}</span>
                  </div>
                </div>

                {/* Read More Arrow */}
                <div className="px-6 pb-6">
                  <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Link href="/articles">
            <button className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
