"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';
import { blogPosts, categories, getFeaturedPosts, getPostsByCategory } from "@/lib/blog-data";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPosts = getFeaturedPosts();
  
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Blog
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Vallaroo Blog
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Expert insights, tips, and strategies to help you succeed with your shop management journey. 
              Learn from industry experts and discover best practices for growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-body-bg">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white border border-gray-200 rounded-2xl text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <IconifyIconClient 
                  icon="tabler:search" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" 
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-dark'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="py-12.5 lg:py-25 md:py-22.5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Handpicked articles to help you get the most out of Vallaroo
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-6xl">{post.image}</div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{post.author.avatar}</div>
                        <div>
                          <p className="font-medium text-sm">{post.author.name}</p>
                          <p className="text-gray-500 text-xs">{post.author.role}</p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex w-full justify-center py-3 px-6 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5 bg-body-bg">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-500">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-4xl">{post.image}</div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-xs">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="text-lg">{post.author.avatar}</div>
                        <div>
                          <p className="font-medium text-xs">{post.author.name}</p>
                          <p className="text-gray-500 text-xs">{post.author.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex w-full justify-center py-2 px-4 bg-primary font-medium rounded-2xl text-dark text-sm transition-all duration-300 hover:bg-primary/90"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Vallaroo
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tips, and updates delivered straight to your inbox. 
              Join thousands of business owners who trust Vallaroo for their shop management needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-white border border-gray-200 rounded-2xl text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button className="py-4 px-8 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}