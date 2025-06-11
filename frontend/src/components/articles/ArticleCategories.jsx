'use client';

import React, { useState } from 'react';

export default function ArticleCategories({ selectedCategory = 'All', onCategoryChange }) {
  const categories = [
    { id: 'All', name: 'All Articles', icon: 'fas fa-th-large', count: 24 },
    { id: 'Technology', name: 'Technology', icon: 'fas fa-microchip', count: 8 },
    { id: 'Guide', name: 'Guides', icon: 'fas fa-book', count: 6 },
    { id: 'Innovation', name: 'Innovation', icon: 'fas fa-lightbulb', count: 5 },
    { id: 'Construction', name: 'Construction', icon: 'fas fa-hammer', count: 3 },
    { id: 'Transport', name: 'Transport', icon: 'fas fa-car', count: 2 }
  ];

  const handleCategoryClick = (categoryId) => {
    onCategoryChange?.(categoryId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find articles that matter to your green energy journey
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-center hover:scale-105 ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
              }`}>
                <i className={`${category.icon} text-lg`}></i>
              </div>

              {/* Name */}
              <h3 className={`font-semibold text-sm mb-2 transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'text-green-700'
                  : 'text-gray-700 group-hover:text-green-600'
              }`}>
                {category.name}
              </h3>

              {/* Count */}
              <span className={`text-xs transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'text-green-600'
                  : 'text-gray-500 group-hover:text-green-500'
              }`}>
                {category.count} articles
              </span>

              {/* Active indicator */}
              {selectedCategory === category.id && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-white text-xs"></i>
                </div>
              )}
            </button>
          ))}
        </div>        {/* Active category info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full">
            <i className={`${categories.find(c => c.id === selectedCategory)?.icon} text-green-600 mr-2`}></i>
            <span className="text-green-700 font-medium">
              Showing {categories.find(c => c.id === selectedCategory)?.name} 
              <span className="text-green-600 ml-1">
                ({categories.find(c => c.id === selectedCategory)?.count} articles)
              </span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
