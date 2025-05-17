import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';
import { testimonials } from '../../data/products';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read the stories of those who've experienced the joy of our personalized gifts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex text-warning-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    className={i < testimonial.rating ? 'text-warning-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;