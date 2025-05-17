import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Heart, User } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Shop' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-primary-700 font-display text-2xl font-bold">
            DIVISH
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                  location.pathname === link.to ? 'text-primary-500' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-primary-500 transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/favorites" className="text-gray-700 hover:text-primary-500 transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-primary-500 transition-colors">
              <User size={20} />
            </Link> */}
            <Link to="/cart" className="relative text-gray-700 hover:text-primary-500 transition-colors">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-primary-500 text-white text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="relative mr-4 text-gray-700">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-primary-500 text-white text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          // <motion.div
          //   initial={{ opacity: 0, height: 0 }}
          //   animate={{ opacity: 1, height: 'auto' }}
          //   exit={{ opacity: 0, height: 0 }}
          //   transition={{ duration: 0.3 }}
          //   className="md:hidden bg-white shadow-lg"
          // >
          //   <Container>
          //     <nav className="flex flex-col py-4 space-y-4">
          //       {navLinks.map((link) => (
          //         <Link
          //           key={link.to}
          //           to={link.to}
          //           className={`text-base font-medium transition-colors hover:text-primary-500 ${
          //             location.pathname === link.to ? 'text-primary-500' : 'text-gray-700'
          //           }`}
          //         >
          //           {link.label}
          //         </Link>
          //       ))}
          //       <div className="flex space-x-4 pt-2 border-t border-gray-100">
          //         <button className="text-gray-700" aria-label="Search">
          //           <Search size={20} />
          //         </button>
          //         <Link to="/favorites" className="text-gray-700">
          //           <Heart size={20} />
          //         </Link>
          //         <Link to="/account" className="text-gray-700">
          //           <User size={20} />
          //         </Link>
          //       </div>
          //     </nav>
          //   </Container>
          // </motion.div>
        // )}
      </AnimatePresence> */}
    </header>
  );
};

export default Header;