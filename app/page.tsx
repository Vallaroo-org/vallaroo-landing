import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Step from './components/Step';
import Pricing from './components/Pricing';
import Counter from './components/Counter';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Topbar from '@/src/layout/Topbar';
import Footer from '@/src/layout/Footer/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vallaroo - Complete Shop Management Platform',
  description: 'Manage your shops with ease. Multi-shop management, inventory control, order processing, and more.',
};

export default function Home() {
  return (
    <>
      <Topbar />
      <Hero />
      <Features />
      <Step />
      <Pricing />
      <Counter />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
