import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';

export const metadata: Metadata = {
  title: 'Pricing - Vallaroo Shop Management Platform',
  description: 'Simple, transparent pricing for Vallaroo. Start free and scale as you grow. No hidden fees, no surprises.',
};

const PricingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Simple, Transparent Pricing
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              Start Free and Scale as You Grow
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              No hidden fees, no surprises. Everything you need to run your shops is included.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-8 gap-6">
            {/* Free Plan */}
            <div
              className="lg:p-8 p-5 bg-white border-2 border-gray-200 rounded-2xl gap-24 flex flex-col"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="gap-5 flex items-center mb-7.5">
                  <div className="lg:size-13.5 size-12.5 bg-gray-100 rounded-full flex items-center justify-center">
                    <IconifyIconClient icon="solar:gift-linear" className="lg:size-7.5 size-6.5 text-gray-600" />
                  </div>
                  <h3 className="text-1.5xl text-gray-800">Free Plan</h3>
                </div>

                <h4 className="text-gray-800 lg:text-4.5xl text-4xl flex items-center">
                  ₹0<span className="text-base">/month</span>
                </h4>

                <div className="my-7.5">
                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">upto 5 businesses</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">upto 10 shop locations</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Basic inventory management</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Up to 10 shop members</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Limited report downloads (2 each report/month)</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:x" className="text-red-500" />
                    <div className="text-gray-500 text-base">Ads will be displayed</div>
                  </div>
                </div>

                <Link
                  href="/products/b2b"
                  className="py-3.5 lg:px-7.5 px-6.5 block text-center bg-gray-800 font-medium rounded-2xl text-white transition-all duration-300 hover:bg-gray-700"
                >
                  Get Started Free
                </Link>
              </div>
            </div>

            {/* Pro Plan */}
            <div
              className="lg:p-8 p-5 bg-dark rounded-2xl gap-24 flex flex-col relative"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-dark px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div>
                <div className="gap-5 flex items-center mb-7.5">
                  <div className="lg:size-13.5 size-12.5 bg-primary rounded-full flex items-center justify-center">
                    <IconifyIconClient icon="solar:star-linear" className="lg:size-7.5 size-6.5 text-dark" />
                  </div>
                  <h3 className="text-1.5xl text-white">Pro Plan</h3>
                </div>

                <h4 className="text-white lg:text-4.5xl text-4xl flex items-center">
                  ₹50<span className="text-base">/month</span>
                </h4>

                <div className="my-7.5">
                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">upto 10 businesses</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Up to 25 shop locations</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Advanced inventory management</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Up to 20 shop members</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Unlimited report downloads</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Fewer ads</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-white" />
                    <div className="text-white text-base">Priority support</div>
                  </div>
                </div>

                <Link
                  href="/products/b2b"
                  className="py-3.5 lg:px-7.5 px-6.5 block text-center bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Custom Plan */}
            <div
              className="lg:p-8 p-5 bg-white border-2 border-primary rounded-2xl md:gap-24 lg:block flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="gap-5 flex items-center mb-7.5">
                  <div className="lg:size-13.5 size-12.5 bg-primary rounded-full flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:settings-linear"
                      className="lg:size-7.5 size-6.5 text-dark"
                    />
                  </div>
                  <h3 className="text-1.5xl text-gray-800">Custom Plan</h3>
                </div>

                <h4 className="text-gray-800 lg:text-4.5xl text-4xl flex items-center">
                  Custom<span className="text-base">Pricing</span>
                </h4>

                <div className="my-7.5">
                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Unlimited shop locations</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Custom features development</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Unlimited shop members</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Advanced analytics & reporting</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Dedicated support</div>
                  </div>

                  <div className="flex gap-2.5 mb-3.5">
                    <IconifyIconClient icon="tabler:check" className="text-green-500" />
                    <div className="text-gray-700 text-base">Custom integrations</div>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="py-3.5 lg:px-7.5 px-6.5 block text-center bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-dark hover:text-primary"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* B2C App Message */}
          <div className="text-center mt-12">
            <div
              className="flex items-center justify-center gap-2.5"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <IconifyIconClient icon="solar:gift-linear" className="text-green-500 size-5.5" />
              <div className="text-dark fs-base">
                B2C app is completely free for all customers!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Free Section */}
      <section className="bg-color-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Why We're Free
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Our Commitment to You
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:world" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Democratizing Technology</h3>
              <p className="text-gray-600">
                Making enterprise-grade shop management accessible to businesses of all sizes
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:rocket" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                Built by the community, for the community. Your feedback shapes our platform
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <IconifyIconClient icon="tabler:bulb" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                Focus on building the best features, not on monetization strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">
              Ready to Transform Your Shop Management?
            </h2>
            <p className="text-white text-xl mb-8">
              Join thousands of businesses already using Vallaroo to streamline their operations.
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

export default PricingPage;