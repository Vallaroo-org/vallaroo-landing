import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/src/IconifyIconClient';

export const metadata: Metadata = {
  title: 'Contact - Vallaroo Shop Management Platform',
  description: 'Get in touch with the Vallaroo team. We\'re here to help you succeed with your shop management needs.',
};

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
        <div className="container">
          <div className="text-center">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Contact Us
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
              We're Ready to Assist You
            </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white max-w-3xl mx-auto">
              Have questions? We're ready to help! Get in touch with our team for any inquiries or support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="bg-primary rounded-2xl p-8 text-dark">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg mb-8">
                  For any inquiries or feedback, our team is here to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:mail" className="text-xl text-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-1">Email Support</h3>
                      <p className="text-dark/80 mb-2">Get help with your account or technical questions</p>
                      <a href="mailto:support@vallaroo.com" className="text-dark font-medium hover:text-dark/80 transition-colors">
                        support@vallaroo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:briefcase" className="text-xl text-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-1">Sales Inquiries</h3>
                      <p className="text-dark/80 mb-2">Interested in enterprise features or partnerships?</p>
                      <a href="mailto:sales@vallaroo.com" className="text-dark font-medium hover:text-white/80 transition-colors">
                        sales@vallaroo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:phone" className="text-xl text-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-1">Phone Support</h3>
                      <p className="text-dark/80 mb-2">Speak directly with our support team</p>
                      <a href="tel:+1234567890" className="text-dark font-medium hover:text-dark/80 transition-colors">
                        +91 8137946044
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <IconifyIconClient icon="tabler:map-pin" className="text-xl text-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark mb-1">Office Address</h3>
                      <p className="text-dark/80">
                        Kallar,<br />
                        Rajapuram (P.O), Kanhangad<br />
                        Kasaragod, 671532, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-dark mb-6">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-dark text-white py-4 rounded-2xl font-medium hover:bg-dark/90 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Frequently Asked Questions
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Common Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="text-lg font-bold text-dark mb-2">How quickly can I get started?</h3>
              <p className="text-gray-600 mb-6">
                You can set up your first shop in under 10 minutes. Our onboarding process is designed to be quick and intuitive.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="text-lg font-bold text-dark mb-2">Do you offer training?</h3>
              <p className="text-gray-600 mb-6">
                Yes! We provide comprehensive documentation, video tutorials, and live training sessions for new users.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="text-lg font-bold text-dark mb-2">Can I integrate with other tools?</h3>
              <p className="text-gray-600 mb-6">
                Absolutely. Vallaroo offers APIs and webhooks to integrate with your existing business tools and workflows.
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-easing="ease-in-out">
              <h3 className="text-lg font-bold text-dark mb-2">What kind of support do you provide?</h3>
              <p className="text-gray-600 mb-6">
                We offer 24/7 support via email, live chat, and phone. Our support team is dedicated to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Solutions Section */}
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out">
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl font-bold text-gray-900 mb-4">
              Try these helpful solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive resources to get the most out of your Vallaroo experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Knowledge Base Card */}
            <div 
              className="bg-primary rounded-2xl p-8 text-center" 
              data-aos="fade-up" 
              data-aos-delay="150" 
              data-aos-duration="600" 
              data-aos-easing="ease-in-out"
            >
              <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconifyIconClient icon="tabler:book" className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Access our knowledge base</h3>
              <p className="text-dark/80 mb-6">
                Access a vast reservoir of knowledge and expertise, conveniently organized for your needs.
              </p>
              <Link 
                href="/docs" 
                className="text-dark font-medium hover:text-primary-dark/80 transition-colors underline"
              >
                Explore help center
              </Link>
            </div>

            {/* Tutorials Card */}
            <div 
              className="bg-dark rounded-2xl p-8 text-center" 
              data-aos="fade-up" 
              data-aos-delay="200" 
              data-aos-duration="600" 
              data-aos-easing="ease-in-out"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconifyIconClient icon="tabler:video" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discover Vallaroo tutorials</h3>
              <p className="text-white/80 mb-6">
                Watch and learn from our experts how to utilize Vallaroo effectively for your business.
              </p>
              <Link 
                href="/tutorials" 
                className="text-white font-medium hover:text-white/80 transition-colors underline"
              >
                Watch tutorials
              </Link>
            </div>

            {/* Community Card */}
            <div 
              className="bg-white rounded-2xl p-8 text-center shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay="250" 
              data-aos-duration="600" 
              data-aos-easing="ease-in-out"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconifyIconClient icon="tabler:users-group" className="text-2xl text-dark" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">Join our community</h3>
              <p className="text-gray-600 mb-6">
                Collaborate, share insights, and cultivate relationships within our community network.
              </p>
              <Link 
                href="/community" 
                className="text-primary-dark font-medium hover:text-primary-dark/80 transition-colors underline"
              >
                Visit community forum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-primary-dark rounded-2xl p-12 text-center">
            <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">
              Ready to Get Started?
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
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-primary-dark transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;