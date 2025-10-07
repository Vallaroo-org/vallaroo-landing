import React from 'react';
import Image from 'next/image';
import Team2 from '@/src/assets/images/team/2.png';
import Team1 from '@/src/assets/images/team/1.png';
import about from '@/src/assets/images/about/4.png';
import Link from 'next/link';
import CountUpClient from '@/src/CountUpClient';

const Counter = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-10">
            <div data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="lg:mb-12.5 mb-7.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                  Empowering Retail Businesses Worldwide
                </h2>
                <p className="text-base mb-2.5">
                  Join thousands of successful shop owners who trust Vallaroo to manage their operations, 
                  streamline inventory, and grow their business.
                </p>
              </div>

              {/* <div className="flex lg:gap-25 gap-5 lg:mb-10 mb-7.5">
                <div className="flex gap-2.5">
                  <Image 
                    src={Team2} 
                    alt="Jane Doe - Designer" 
                    className="size-12.5 rounded-full"
                    quality={100}
                    width={50}
                    height={50}
                  />
                  <div>
                    <div className="font-medium text-black">Jane Doe</div>
                    <div className="text-sm">Designer</div>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Image 
                    src={Team1} 
                    alt="John Smith - UI/UX Designer" 
                    className="size-12.5 rounded-full"
                    quality={100}
                    width={50}
                    height={50}
                  />
                  <div>
                    <div className="font-medium text-black">John Smith </div>
                    <div className="text-sm">UI/UX Designer </div>
                  </div>
                </div>
              </div> */}

              <Link
                href="/products/b2b"
                className="py-3.5 lg:px-7.5 px-6.5 inline-flex text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Start Now
              </Link>
            </div>

            <div data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-out">
              <Image 
                src={about} 
                alt="Vallaroo Team Collaboration - Business success solutions" 
                className="rounded-2xl md:h-full object-cover"
                quality={100}
                width={600}
                height={400}
              />
            </div>
          </div>

          <hr className="border-top border-neutral-200 lg:mt-12.5 mt-7.5" />

          <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 lg:pt-12.5 mt-7.5 gap-5 ">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={10} suffix="+" />
              </h3>
              <div>Active Shops</div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={500} suffix="+" />
              </h3>
              <div>Orders Processed</div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={99} suffix=".9%" />
              </h3>
              <div>Uptime Guarantee</div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={24} suffix="/7" />
              </h3>
              <div>Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
