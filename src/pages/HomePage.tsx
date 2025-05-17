import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/home/AboutSection';
import TestimonialSection from '../components/home/TestimonialSection';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'DIVISH Accessories | Personalized Gifts for Girls';
  }, []);
  
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <AboutSection />
      <TestimonialSection />
    </>
  );
};

export default HomePage;