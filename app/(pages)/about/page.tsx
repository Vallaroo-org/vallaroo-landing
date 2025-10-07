import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';
import CountUpClient from '@/src/CountUpClient';
import teamImage from '@/src/assets/images/about/1.png';
import teamImage2 from '@/src/assets/images/about/2.png';
import teamMember1 from '@/src/assets/images/team/1.png';
import teamMember2 from '@/src/assets/images/team/2.png';
import teamMember3 from '@/src/assets/images/team/3.png';

export const metadata: Metadata = {
  title: 'About - Vallaroo Shop Management Platform',
  description: 'Learn about Vallaroo\'s mission to democratize shop management technology for businesses of all sizes.',
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
            <div data-aos="fade-right">
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                About us
              </div>
              <h1 className="text-dark lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
                Empower your<br />
                business with next-<br />
                generation<br />
                solutions.
              </h1>
              <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-gray-600">
                Welcome to Vallaroo, where innovation meets efficiency. Our cloud-based software solutions 
                empower businesses to streamline operations and achieve sustainable growth.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <h2 className="text-4xl font-bold text-dark">4.8</h2>
                <div>
                  <div className="flex gap-1 mb-1">
                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-xl" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-xl" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-xl" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-xl" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-xl" />
                  </div>
                  <div className="text-dark text-sm">Best rated company</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="relative">
                <Image 
                  src={teamImage} 
                  alt="Vallaroo Team Collaboration" 
                  width={600} 
                  height={400}
                  className="rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-color-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Core Values Card */}
            <div className="lg:col-span-6" data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="bg-dark rounded-2xl p-12 text-white h-full">
                <h2 className="text-4xl font-bold mb-6 text-white">Our core values</h2>
                <p className="text-lg mb-8 text-white/80">
                  Welcome to Vallaroo, where innovation meets efficiency. Our cloud-based software solutions 
                  empower businesses to streamline operations and achieve sustainable growth.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:chart-bar" className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                      <p className="text-white/80">We embrace innovation as the cornerstone of our success, constantly pushing boundaries to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:refresh" className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Continuous Improvement</h3>
                      <p className="text-white/80">We believe in continuous improvement, always seeking ways to enhance our platform and exceed customer expectations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex flex-wrap gap-4 text-white/60">
                    <span>Empowerment</span>
                    <span>•</span>
                    <span>Impact</span>
                    <span>•</span>
                    <span>Customer-Centricity</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA and Stats Cards */}
            <div className="lg:col-span-6 space-y-12" data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-out">
              {/* Ready to Revolutionize Card */}
              <div className="bg-primary rounded-2xl p-12 text-dark">
                <h3 className="text-4xl font-bold mb-4 text-dark">Ready to revolutionize your business?</h3>
                <p className="text-dark/80 mb-6">
                  Take the first step towards unlocking your full potential with Vallaroo.
                </p>
                <Link
                  href="/products/b2b"
                  className="bg-dark text-white px-6 py-3 rounded-2xl font-medium hover:bg-dark/90 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-dark mb-2">
                    <CountUpClient end={35} suffix="+" />
                  </h3>
                  <p className="text-gray-600 text-sm">Awards and counting</p>
                </div>
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                  <h3 className="text-4xl font-bold text-dark mb-2">
                    <CountUpClient end={10} suffix="K" />
                  </h3>
                  <p className="text-gray-600 text-sm">Satisfied users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <h2 className="text-4xl font-bold text-dark mb-8">Discover Vallaroo</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-10">
            <div data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    At Vallaroo, our mission is to empower businesses of all sizes to thrive in the digital age 
                    by providing innovative, user-friendly software solutions that streamline operations and drive growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our vision is to revolutionize the way businesses operate by harnessing the power of technology 
                    to drive efficiency, collaboration, and growth. We envision a future where every organization, 
                    regardless of size or industry, has access to enterprise-grade tools.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="relative">
                <Image 
                  src={teamImage2} 
                  alt="Vallaroo Team Collaboration" 
                  width={600} 
                  height={500}
                  className="rounded-2xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-color-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <h2 className="text-4xl font-bold text-dark mb-8">Meet our team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image 
                  src={teamMember1} 
                  alt="Susmith A J - Founder & CEO" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Susmith A J</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image 
                  src={teamMember2} 
                  alt="Arjun M - Full Stack Developer" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Arjun M</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image 
                  src={teamMember3} 
                  alt="Sarah Johnson - UI/UX Designer" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Sarah Johnson</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>

          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="450" data-aos-duration="600" data-aos-easing="ease-in-out">
            <Link
              href="/careers"
              className="bg-primary text-dark px-8 py-4 rounded-2xl font-medium hover:bg-primary/90 transition-colors inline-block mb-4"
            >
              Join us
            </Link>
            <p className="text-dark text-lg">Together, let's create something amazing!</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 lg:pt-12.5 mt-7.5 gap-5">
            <div className="text-center" data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl text-white mb-2">
                <CountUpClient end={2} suffix="+" />
              </h3>
              <div className="text-white">
                Months of continuous development
              </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl text-white mb-2">
                <CountUpClient end={2} suffix="+" />
              </h3>
              <div className="text-white">
                Most vadilated critical solutions for B2B & B2C
              </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl text-white mb-2">
                <CountUpClient end={10} suffix="+" />
              </h3>
              <div className="text-white">
                First ever AI first approach for B2B & B2C
              </div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl text-white mb-2">
                <CountUpClient end={10} suffix="+" />
              </h3>
              <div className="text-white">
                Satisfied users
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">
              Join the Vallaroo Community
            </h2>
            <p className="text-white text-xl mb-8">
              Ready to transform your shop management? Start your free journey today.
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;