import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-50 to-secondary-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-primary-600">Personalized</span> Gifts That Create Lasting Memories
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our handcrafted collection of personalized accessories and gifts, designed to make every moment special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" as={Link} to="/products">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" as={Link} to="/about">
                Our Story
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/logo.jpeg" 
                // alt="DIVISH Accessories collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-200 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary-200 rounded-full opacity-50 -z-10"></div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;