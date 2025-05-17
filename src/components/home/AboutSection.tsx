import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg" 
                alt="Divish workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <div className="aspect-video">
                <img 
                  src="https://images.pexels.com/photos/4049693/pexels-photo-4049693.jpeg" 
                  alt="Crafting process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              DIVISH Accessories was born from a passion for creating personalized gifts that celebrate life's special moments. What started as a small home workshop has blossomed into a beloved brand known for its attention to detail and commitment to quality.
            </p>
            <p className="text-gray-600 mb-6">
              Every piece we create is carefully handcrafted with love and precision. We believe that gifts should be as unique as the person receiving them, which is why personalization is at the heart of everything we do.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-700 mb-1">Handcrafted</h3>
                <p className="text-sm text-gray-600">Every item is carefully made by hand with attention to detail</p>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary-700 mb-1">Personalized</h3>
                <p className="text-sm text-gray-600">Custom designs tailored to your unique preferences</p>
              </div>
              <div className="bg-accent-50 p-4 rounded-lg">
                <h3 className="font-semibold text-accent-700 mb-1">Quality Materials</h3>
                <p className="text-sm text-gray-600">We use only the finest materials that are built to last</p>
              </div>
              <div className="bg-success-50 p-4 rounded-lg">
                <h3 className="font-semibold text-success-700 mb-1">Thoughtful Packaging</h3>
                <p className="text-sm text-gray-600">Beautiful gift-ready packaging for a perfect presentation</p>
              </div>
            </div>
            
            <Button as={Link} to="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;