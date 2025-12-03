import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import three from '@/src/assets/images/about/3.png';
import one from '@/src/assets/images/element/1.svg';
import IconifyIconClient from '@/src/IconifyIconClient';

const Pricing = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                Flexible Pricing Plans
              </div>
              <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                B2B Plans That Scale With Your Business
              </h2>
              <p className="text-base mb-2.5 text-gray-600 max-w-3xl mx-auto">
                Our B2C app is completely free for customers to use. Choose the perfect B2B plan for your business needs.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-16">
            <div
              className="lg:relative max-w-4xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              <Image
                src={three}
                alt="Vallaroo Pricing - Business solutions and features"
                className="rounded-2xl w-full"
                quality={100}
                width={800}
                height={500}
              />
              <Image
                src={one}
                alt="Decorative element"
                className="lg:absolute lg:block lg:-end-12.5 lg:top-22.5 hidden"
                quality={100}
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Pricing Cards Section */}
          <div className="mb-12">
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
                    href="https://app.vallaroo.com"
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
                    href="https://app.vallaroo.com"
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
          </div>

          {/* B2C App Message */}
          <div className="text-center">
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
    </>
  );
};

export default Pricing;
