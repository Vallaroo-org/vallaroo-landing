

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import IconifyIconClient from '@/src/IconifyIconClient';
import { currentYear } from '@/src/CurrentYear';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-15 pb-10 md:pt-17.5 md:pb-10 lg:pt-25 lg:pb-10 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/">
                <Image 
                  src="/vallaroo-logo-white.png" 
                  alt="Vallaroo Logo" 
                  className="h-11" 
                  width={140}
                  height={44}
                />
              </Link>
              <p className="mt-4 text-white/80 text-sm leading-relaxed">
                Complete shop management platform for modern businesses. Streamline operations, 
                boost productivity, and grow your business with our powerful B2B and B2C solutions.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-sm" />
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-sm" />
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-sm" />
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-sm" />
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400 text-sm" />
                </div>
                <span className="text-white text-sm font-medium">4.8/5</span>
                <span className="text-white/60 text-sm">(2,500+ reviews)</span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Products</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/products/b2b"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    B2B Application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/b2c"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    B2C Application (Free)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/mobile"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="flex flex-col gap-3 mb-6">
                <li>
                  <Link
                    href="/help"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    System Status
                  </Link>
                </li>
              </ul>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <IconifyIconClient icon="tabler:mail" className="text-primary text-sm" />
                  <a href="mailto:support@vallaroo.com" className="text-white/80 hover:text-primary transition-colors text-sm">
                    support@vallaroo.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IconifyIconClient icon="tabler:phone" className="text-primary text-sm" />
                  <a href="tel:+918137946044" className="text-white/80 hover:text-primary transition-colors text-sm">
                    +91 8137946044
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <IconifyIconClient icon="tabler:map-pin" className="text-primary text-sm" />
                  <span className="text-white/80 text-sm">
                    Kallar, Rajapuram (P.O), Kanhangad<br />
                    Kasaragod, 671532, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <span className="text-white font-medium">Follow us:</span>
                <div className="flex gap-4">
                  <Link 
                    href="https://linkedin.com/company/vallaroo" 
                    className="text-white/60 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconifyIconClient icon="tabler:brand-linkedin" className="text-xl" />
                  </Link>
                  <Link 
                    href="https://twitter.com/vallaroo" 
                    className="text-white/60 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconifyIconClient icon="tabler:brand-x" className="text-xl" />
                  </Link>
                  <Link 
                    href="https://facebook.com/vallaroo" 
                    className="text-white/60 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconifyIconClient icon="tabler:brand-facebook" className="text-xl" />
                  </Link>
                  <Link 
                    href="https://youtube.com/@vallaroo" 
                    className="text-white/60 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconifyIconClient icon="tabler:brand-youtube" className="text-xl" />
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-white/60 text-sm">Trusted by 10,000+ businesses</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm font-medium">All systems operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
                <span>© {currentYear} Vallaroo. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="/cookies" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>Made with</span>
                <IconifyIconClient icon="tabler:heart-filled" className="text-red-400 text-sm" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
