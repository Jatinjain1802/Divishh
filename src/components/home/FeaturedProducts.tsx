import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useCart } from '../../contexts/CartContext';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular personalized gifts, crafted with love and care
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/product/${product.id}`} className="block relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                {product.bestSeller && (
                  <Badge variant="warning" className="absolute top-2 left-2">
                    Best Seller
                  </Badge>
                )}
                <button 
                  className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-primary-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </button>
              </Link>
              
              <div className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-gray-900 hover:text-primary-600 mb-1 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-primary-600 font-semibold mb-3">${product.price.toFixed(2)}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  onClick={() => addToCart(product)}
                  className="flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="secondary" 
            size="lg" 
            as={Link} 
            to="/products"
          >
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;