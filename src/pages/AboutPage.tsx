import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Flame, Gift, Smile } from 'lucide-react';
import Container from '../components/ui/Container';

const AboutPage: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'About Us | DIVISH Accessories';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600">
              Discover the passion and craftsmanship behind DIVISH Accessories
            </p>
          </div>
          
          <div className="mb-16">
            <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
              <img 
                src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg" 
                alt="DIVISH Accessories workshop" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                DIVISH Accessories began as a small passion project in 2020, born from the simple desire to create 
                meaningful, personalized gifts that celebrate life's special moments. What started as handcrafted 
                pieces for friends and family quickly blossomed into something much bigger as word spread about 
                our unique designs and attention to detail.
              </p>
              
              <p>
                Our founder, Sarah, has always had a deep appreciation for personalized gifts that tell a story. 
                After receiving a custom bracelet for her birthday, she was inspired by how something so simple 
                could hold such sentimental value. This sparked the idea for DIVISH – a brand dedicated to 
                creating accessories that are not just beautiful, but meaningful.
              </p>
              
              <p>
                Today, DIVISH Accessories has grown into a beloved brand, with each piece still handcrafted 
                with the same care and attention as our very first designs. We're proud to be part of so many 
                special moments in our customers' lives, from birthdays and graduations to weddings and baby showers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg" 
                  alt="Handcrafting process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Our Craft</h2>
              <p className="text-gray-600 mb-4">
                Every DIVISH accessory is carefully handcrafted in our small workshop. We source the highest 
                quality materials and focus on creating pieces that are not only beautiful but durable enough 
                to become lasting keepsakes.
              </p>
              <p className="text-gray-600">
                Our team of skilled artisans puts heart and soul into each creation, ensuring that every 
                detail is perfect. From initial sketch to final packaging, we maintain a hands-on approach 
                that results in truly special pieces.
              </p>
            </motion.div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-gray-900 text-center mb-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <Heart className="text-primary-600 mb-4" size={28} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Handmade with Love</h3>
                <p className="text-gray-600">
                  We believe in the beauty of handcrafted items and the special touch that comes from 
                  knowing real hands created your piece with care.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-6 rounded-lg"
              >
                <Gift className="text-secondary-600 mb-4" size={28} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Personalized Experience</h3>
                <p className="text-gray-600">
                  We create more than products – we create experiences and memories through 
                  personalization that speaks to the heart.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-accent-50 p-6 rounded-lg"
              >
                <Flame className="text-accent-600 mb-4" size={28} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quality & Durability</h3>
                <p className="text-gray-600">
                  We use only the finest materials and craftsmanship techniques to ensure each piece 
                  stands the test of time, just like the memories they represent.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-success-50 p-6 rounded-lg"
              >
                <Smile className="text-success-600 mb-4" size={28} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Customer Happiness</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We're committed to providing exceptional service 
                  and creating gifts that bring joy to both givers and receivers.
                </p>
              </motion.div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're a small team of passionate artisans dedicated to creating beautiful, meaningful pieces 
              that celebrate life's special moments.
            </p>
            
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                    alt="Sarah, Founder & Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Sarah</h3>
                <p className="text-gray-600 text-sm">Founder & Designer</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                    alt="Maya, Artisan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Maya</h3>
                <p className="text-gray-600 text-sm">Lead Artisan</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg" 
                    alt="Lily, Customer Relations" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900">Lily</h3>
                <p className="text-gray-600 text-sm">Customer Relations</p>
              </motion.div>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;