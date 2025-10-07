import React from 'react';
import { Metadata } from 'next';
import IconifyIconClient from '@/src/IconifyIconClient';

export const metadata: Metadata = {
  title: 'B2C Application - Vallaroo Customer Shopping Experience',
  description: 'Beautiful customer-facing shopping experience. Mobile-responsive design with seamless checkout and personalized recommendations.',
};

const B2CPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              B2C Application
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              B2C Shopping Experience
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Beautiful, mobile-responsive shopping experience for your customers. 
              Seamless browsing, easy checkout, and personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Customer Features
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Seamless Shopping Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:device-mobile" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
              <p className="text-gray-600">
                Responsive design that works perfectly on all devices. 
                Fast loading, intuitive navigation, and touch-friendly interface.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:search" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Search & Filters</h3>
              <p className="text-gray-600">
                Advanced search functionality with intelligent filters, 
                autocomplete suggestions, and personalized product recommendations.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:shopping-cart" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Checkout</h3>
              <p className="text-gray-600">
                Streamlined checkout process with multiple payment options, 
                guest checkout, and saved payment methods for returning customers.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:user" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">User Accounts</h3>
              <p className="text-gray-600">
                Customer accounts with order history, wishlists, 
                saved addresses, and personalized shopping experience.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:star" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reviews & Ratings</h3>
              <p className="text-gray-600">
                Customer review system with ratings, photos, 
                and verified purchase badges to build trust and credibility.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:bell" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Notifications</h3>
              <p className="text-gray-600">
                Real-time notifications for order updates, 
                promotions, and personalized offers via email and SMS.
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
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">Ready to Start Shopping?</h2>
            <p className="text-white text-xl mb-8">
              Experience the future of online shopping with Vallaroo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
              >
                Start Shopping Now
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-primary-dark transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default B2CPage;
