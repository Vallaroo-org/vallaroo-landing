import React from 'react';
import { Metadata } from 'next';
import IconifyIconClient from '@/src/IconifyIconClient';

export const metadata: Metadata = {
  title: 'B2B Application - Vallaroo Shop Management Platform',
  description: 'Powerful B2B application for managing multiple shops, inventory, orders, and customers. Built for business owners and managers.',
};

const B2BPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              B2B Application
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              B2B Shop Management Platform
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Complete business management solution for shop owners, managers, and administrators. 
              Manage multiple shops, track inventory, process orders, and analyze performance.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Core Features
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Powerful Tools for Business Management</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:building-store" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Shop Management</h3>
              <p className="text-gray-600">
                Manage multiple shops from a single dashboard. Set up approval workflows, 
                track performance, and maintain consistent branding across all locations.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:package" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
              <p className="text-gray-600">
                Real-time inventory tracking across all shops. Set up automated reorder points, 
                manage suppliers, and prevent stockouts with intelligent forecasting.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:users" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Management</h3>
              <p className="text-gray-600">
                Comprehensive CRM system with customer profiles, purchase history, 
                communication tools, and loyalty program management.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:shopping-cart" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Order Processing</h3>
              <p className="text-gray-600">
                Streamlined order management from creation to fulfillment. 
                Automated workflows, payment processing, and shipping integration.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:chart-line" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Advanced analytics dashboard with real-time insights, 
                performance metrics, and customizable reports for data-driven decisions.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:key" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Role-Based Access</h3>
              <p className="text-gray-600">
                Secure multi-user access with role-based permissions. 
                Control what each team member can see and do across your shops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-dark rounded-2xl p-12 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">Available on All Platforms</h2>
            <p className="text-white text-xl mb-8">
              Your customers can shop from anywhere with our responsive web app and native mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
              >
                Download iOS App
              </a>
              <a
                href="#"
                className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
              >
                Download Android App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">Ready to Get Started?</h2>
            <p className="text-white text-xl mb-8">
              Start your free trial today and transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-primary-dark transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2BPage;
