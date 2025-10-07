import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';
import analyticsImage from '@/src/assets/images/about/3.png';
import elementImage from '@/src/assets/images/element/2.svg';
import heroImage from '@/src/assets/images/hero/1.png';

export const metadata: Metadata = {
  title: 'Features - Vallaroo Shop Management Platform',
  description: 'Discover all the powerful features that make Vallaroo the complete shop management solution for modern businesses.',
};

const FeaturesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center mb-16">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Features
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              Everything You Need to Run Your Shops
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Powerful features designed to streamline your retail operations and boost business productivity.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <Image 
              src={heroImage} 
              alt="Vallaroo Features Dashboard" 
              width={1200} 
              height={600}
              className="rounded-2xl w-full h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-8 lg:gap-12.5 gap-5 items-center">
            <div
              className="md:col-span-5"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="bg-white rounded-2xl lg:p-12.5 h-full pe-0 p-4">
                <div className="grid md:grid-cols-2 lg:flex-row lg:gap-15 flex-col gap-7.5">
                  <div>
                    <div className="md:size-15 size-12.5 mb-5 bg-primary rounded-full flex items-center justify-center">
                      <IconifyIconClient
                        icon="solar:chart-square-linear"
                        className="lg:size-7.5 size-6.5 text-dark"
                      />
                    </div>
                    <h3 className="lg:text-2.5xl md:text-2.5xl text-1.5xl mb-2.5">
                      Advanced Analytics & Reporting Dashboard
                    </h3>
                    <p className="text-base lg:mt-35 md:mt-25 mt-5">
                      Get real-time insights into your sales performance, inventory levels, and customer behavior with our comprehensive analytics suite.
                    </p>
                  </div>

                  <div className="flex items-end relative">
                    <Image 
                      src={analyticsImage} 
                      alt="Analytics Dashboard" 
                      width={400} 
                      height={300}
                      className="rounded-2xl flex" 
                    />
                    <Image
                      src={elementImage}
                      alt=""
                      width={200}
                      height={200}
                      className="absolute md:block md:-start-7.5 bottom-auto lg:top-22.5 hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="md:col-span-3"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="flex lg:p-12.5 p-5 bg-dark rounded-2xl lg:gap-24 gap-15 flex-col">
                <div>
                  <div className="md:size-15 size-12.5 mb-5 bg-primary rounded-full flex items-center justify-center">
                    <IconifyIconClient icon="solar:bolt-linear" className="lg:size-7.5 size-6.5 text-dark" />
                  </div>
                  <h4 className="text-white lg:text-2.5xl md:text-2.5xl text-1.5xl mb-2.5">
                    Multi-Shop Management Made Simple
                  </h4>
                </div>
                <div>
                  <div className="gap-3.5 flex flex-col">
                    <div className="flex gap-2.5">
                      <IconifyIconClient icon="tabler:circle-check" className="size-6 text-primary" />
                      <div className="text-white text-base">Centralized inventory management</div>
                    </div>
                    <div className="flex gap-2.5">
                      <IconifyIconClient icon="tabler:circle-check" className="size-6 text-primary" />
                      <div className="text-white text-base">Real-time order processing</div>
                    </div>
                    <div className="flex gap-2.5">
                      <IconifyIconClient icon="tabler:circle-check" className="size-6 text-primary" />
                      <div className="text-white text-base">Multi-location support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-10 bg-primary rounded-2xl lg:p-10 p-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="grid md:grid-cols-3 lg:gap-10 gap-5">
              <div>
                <h5 className="md:text-2.5xl text-1.5xl">
                  Generate detailed reports with just a few clicks.
                </h5>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">99%</h6>
                  <div className="fs-base">Track and analyze business reports</div>
                </div>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">4.8</h6>
                  <div className="gap-1 flex-col flex">
                    <div className="flex gap-1.5">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-6 size-5.5 text-dark" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-6 size-5.5 text-dark" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-6 size-5.5 text-dark" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-6 size-5.5 text-dark" />
                      <IconifyIconClient
                        icon="tabler:star-half-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />
                    </div>
                    <div className="fs-base">Best rated company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Core Features
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Powerful Tools for Modern Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:shopping-cart" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
              <p className="text-gray-600">
                Track stock levels, manage suppliers, and automate reordering with our intelligent inventory system.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:users" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Management</h3>
              <p className="text-gray-600">
                Build lasting relationships with comprehensive customer profiles and purchase history tracking.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:chart-line" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sales Analytics</h3>
              <p className="text-gray-600">
                Make data-driven decisions with detailed reports and real-time sales performance insights.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:credit-card" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Processing</h3>
              <p className="text-gray-600">
                Accept payments securely with multiple payment methods and integrated POS systems.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:bell" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Notifications</h3>
              <p className="text-gray-600">
                Stay informed with automated alerts for low stock, new orders, and important updates.
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:api" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">API Integration</h3>
              <p className="text-gray-600">
                Connect with your existing tools and workflows through our comprehensive API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">
              Ready to Experience These Features?
            </h2>
            <p className="text-white text-xl mb-8">
              Start your free trial today and see how Vallaroo can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products/b2b"
                className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-primary-dark transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
