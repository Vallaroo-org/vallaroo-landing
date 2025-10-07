"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqSections = [
    {
      title: "Getting Started",
      items: [
        {
          id: 1,
          question: "How do I get started with Vallaroo?",
          answer: "Getting started with Vallaroo is easy! Simply sign up for a free account, complete your business profile, and start adding your products. Our onboarding wizard will guide you through the setup process step by step. You can also watch our tutorial videos or contact our support team for personalized assistance."
        },
        {
          id: 2,
          question: "Is there a free trial available?",
          answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore all our features, set up your shop, and see how Vallaroo can transform your business operations before committing to a paid plan."
        },
        {
          id: 3,
          question: "What types of businesses can use Vallaroo?",
          answer: "Vallaroo is designed for any business that needs to manage inventory, customers, and sales. This includes retail stores, restaurants, service businesses, online shops, and more. Our flexible system adapts to various business models and sizes."
        },
        {
          id: 4,
          question: "Do I need technical knowledge to use Vallaroo?",
          answer: "Not at all! Vallaroo is designed to be user-friendly and intuitive. Our interface is clean and easy to navigate, and we provide comprehensive documentation, video tutorials, and customer support to help you get the most out of the platform."
        }
      ]
    },
    {
      title: "Features & Functionality",
      items: [
        {
          id: 5,
          question: "What inventory management features does Vallaroo offer?",
          answer: "Vallaroo provides comprehensive inventory management including real-time stock tracking, low stock alerts, barcode scanning, supplier management, purchase orders, and detailed inventory reports. You can also set up automatic reorder points and track inventory across multiple locations."
        },
        {
          id: 6,
          question: "Can I manage multiple shops with one account?",
          answer: "Yes! Our multi-location feature allows you to manage multiple shops, warehouses, or stores from a single Vallaroo account. You can track inventory across all locations, transfer stock between locations, and generate consolidated reports."
        },
        {
          id: 7,
          question: "Does Vallaroo integrate with other tools?",
          answer: "Vallaroo integrates with popular tools including payment processors (Stripe, PayPal), accounting software (QuickBooks, Xero), e-commerce platforms (Shopify, WooCommerce), and shipping providers. We also offer API access for custom integrations."
        },
        {
          id: 8,
          question: "Can I access Vallaroo on my mobile device?",
          answer: "Absolutely! Vallaroo is fully responsive and works on all devices. We also offer dedicated mobile apps for iOS and Android, allowing you to manage your business on the go with features like inventory scanning, order processing, and customer management."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      items: [
        {
          id: 9,
          question: "What are the different pricing plans?",
          answer: "We offer three main plans: Starter (free), Professional ($29/month), and Enterprise ($99/month). Each plan includes different features and usage limits. You can upgrade or downgrade your plan at any time based on your business needs."
        },
        {
          id: 10,
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll prorate any billing differences. Downgrades may require you to stay within the limits of your new plan."
        },
        {
          id: 11,
          question: "Do you offer custom pricing for large businesses?",
          answer: "Yes, we offer custom Enterprise solutions for large businesses with specific needs. This includes dedicated support, custom integrations, advanced security features, and tailored pricing. Contact our sales team to discuss your requirements."
        },
        {
          id: 12,
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment partners."
        }
      ]
    },
    {
      title: "Technical Support",
      items: [
        {
          id: 13,
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including email support, live chat, video tutorials, documentation, and community forums. Professional and Enterprise plan users get priority support with faster response times."
        },
        {
          id: 14,
          question: "How secure is my data?",
          answer: "Data security is our top priority. We use enterprise-grade security including SSL encryption, regular security audits, secure data centers, and compliance with industry standards. Your data is backed up regularly and stored securely."
        },
        {
          id: 15,
          question: "Can I export my data?",
          answer: "Yes, you can export your data at any time in various formats (CSV, Excel, JSON). This includes your inventory, customer data, sales reports, and other business information. We believe in data portability and transparency."
        },
        {
          id: 16,
          question: "What happens if Vallaroo goes down?",
          answer: "We maintain 99.9% uptime with redundant systems and monitoring. In the rare event of downtime, we have a status page and will notify users immediately. Our infrastructure is designed for high availability and quick recovery."
        }
      ]
    },
    {
      title: "Account Management",
      items: [
        {
          id: 17,
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time from your account settings. Your account will remain active until the end of your current billing period. You can also contact our support team if you need assistance with cancellation."
        },
        {
          id: 18,
          question: "Can I get a refund?",
          answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with Vallaroo within the first 30 days, contact our support team for a full refund. Refunds are processed within 5-7 business days."
        },
        {
          id: 19,
          question: "How do I add team members to my account?",
          answer: "You can add team members from your account settings. Invite them by email and assign appropriate roles and permissions. Different plans support different numbers of users, so check your plan limits."
        },
        {
          id: 20,
          question: "Can I change my business information?",
          answer: "Yes, you can update your business information at any time from your account settings. This includes business name, address, contact information, and other details. Changes are reflected immediately across the platform."
        }
      ]
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              FAQs
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Frequently Asked Questions
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Find answers to common questions about Vallaroo. Can't find what you're looking for? 
              Our support team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-body-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
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
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          {filteredSections.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No FAQs found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse our help center.
              </p>
              <Link
                href="/contact"
                className="inline-flex py-3.5 px-7.5 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
              >
                Contact Support
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredSections.map((section, sectionIndex) => (
                <div key={section.title}>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                        <button
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleExpanded(item.id)}
                        >
                          <h3 className="text-lg font-semibold pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {expandedItems.includes(item.id) ? (
                              <IconifyIconClient icon="tabler:minus" className="text-primary text-xl" />
                            ) : (
                              <IconifyIconClient icon="tabler:plus" className="text-primary text-xl" />
                            )}
                          </div>
                        </button>
                        {expandedItems.includes(item.id) && (
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {sectionIndex < filteredSections.length - 1 && (
                    <div className="my-12">
                      <div className="border-t border-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5 bg-body-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Help Center</h3>
              <p className="text-gray-600 mb-4">
                Browse our comprehensive documentation, tutorials, and guides.
              </p>
              <Link
                href="/docs"
                className="inline-flex py-3 px-6 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
              >
                Visit Help Center
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4">
                Get personalized help from our expert support team.
              </p>
              <Link
                href="/contact"
                className="inline-flex py-3 px-6 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step video guides to master Vallaroo features.
              </p>
              <Link
                href="/docs"
                className="inline-flex py-3 px-6 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90"
              >
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest updates, tips, and new features delivered to your inbox. 
              Join thousands of business owners who trust Vallaroo.
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