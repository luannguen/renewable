'use client';

import React, { useState } from 'react';
import ArticlesBanner from '@/components/articles/ArticlesBanner';
import ArticlesGrid from '@/components/articles/ArticlesGrid';
import ArticleCategories from '@/components/articles/ArticleCategories';
import ContactFormAdvanced from '@/components/sections/ContactFormAdvanced';
import { useBreadcrumbItems } from '@/hooks/useBreadcrumbItems';

export default function ArticlesClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Set breadcrumb items
  const breadcrumbItems = [
    { label: 'Articles' }
  ];

  // Use breadcrumb hook to update global breadcrumb
  useBreadcrumbItems(breadcrumbItems);

  return (
    <main className="min-h-screen">
      <ArticlesBanner 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <ArticleCategories 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ArticlesGrid 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Questions About Our Articles?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us for more information or to suggest topics you'd like us to cover
            </p>
          </div>
          <ContactFormAdvanced />
        </div>
      </section>
    </main>
  );
}
