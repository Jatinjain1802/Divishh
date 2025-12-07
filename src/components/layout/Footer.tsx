import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <Container>
        {/* Newsletter */}
        <div className="mb-12 p-6 bg-primary-50 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-display font-semibold text-primary-700 mb-2">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to get special offers, free giveaways, and latest product updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-primary-700 font-display text-2xl font-bold mb-4 inline-block">
              DIVISH
            </Link>
            <p className="text-gray-600 mb-4">
              Handcrafted personalized gifts and accessories for every special occasion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_divish.in_?igsh=NTc4MTIwNjQ2YQ==" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=bracelets" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/products?category=necklaces" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/products?category=earrings" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/products?category=stationery" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Stationery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">Indore,MP</span>
              </li>
              <li className="flex items-center">


              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">xyz@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DIVISH Accessories. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;