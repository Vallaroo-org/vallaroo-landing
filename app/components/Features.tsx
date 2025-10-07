import Image from 'next/image';
import React from 'react';
import about1 from '@/src/assets/images/about/1.png';
import about2 from '@/src/assets/images/element/2.svg';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';

const Features = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="lg:mb-12.5 text-center mb-7.5">
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Everything You Need to Run Your Shops
            </h2>
            <p className="text-base mb-2.5">
              Powerful features designed to streamline your retail operations and boost
              business productivity.
            </p>
          </div>

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
                      src={about1} 
                      alt="Vallaroo Analytics Dashboard - Advanced reporting and insights" 
                      className="rounded-2xl flex"
                      quality={100}
                      width={500}
                      height={400}
                    />
                    <Image
                      src={about2}
                      alt="Decorative element"
                      className="absolute md:block md:-start-7.5 bottom-auto lg:top-22.5 hidden"
                      quality={100}
                      width={150}
                      height={150}
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
            <div className="grid md:grid-cols-3 lg:gap-10  gap-5">
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

          <div
            className="flex md:justify-center gap-2.5 mt-10 flex-wrap justify-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <IconifyIconClient icon="solar:dialog-2-bold" className="size-5.5" />

            <div className="text-dark fs-base">Contact our team for more information.</div>

            <Link href="/contact" className="flex items-center gap-1 text-dark font-medium">
              <div className="underline gap-1">Let's chat</div>
              <IconifyIconClient icon="tabler:arrow-right" className="size-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
