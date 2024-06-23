import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Faq } from './components/Faq';
import { Testimonials } from './components/Testimonials';

export const Homepage = () => {
  useTitle("EcomezPdf");
  return (
    <main>
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>

    </main>
  )
}
