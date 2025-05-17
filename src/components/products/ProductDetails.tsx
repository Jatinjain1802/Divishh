import React, { useState } from 'react';
import { ShoppingBag, Heart, Share2, Star, Truck, Package, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="relative">
        <div className="aspect-square rounded-lg overflow-hidden mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Product Info */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
        
        <div className="flex items-center mb-4">
          <div className="flex text-warning-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">4.9 (124 reviews)</span>
        </div>
        
        <p className="text-2xl font-semibold text-primary-600 mb-6">₹{product.price.toFixed(2)}</p>
        
        <div className="prose prose-sm text-gray-600 mb-6">
          <p>{product.description}</p>
        </div>
        
        {/* Add to Cart */}
        <div className="mb-6">
          <p className="font-medium text-gray-900 mb-2">Quantity</p>
          <div className="flex items-center">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md text-gray-600 hover:bg-gray-50"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              className="w-16 h-10 border-t border-b border-gray-300 text-center text-gray-900"
            />
            <button 
              onClick={() => handleQuantityChange(1)}
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md text-gray-600 hover:bg-gray-50"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            variant="primary" 
            size="lg"
            fullWidth
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            fullWidth
            className="flex items-center justify-center gap-2"
          >
            <Heart size={20} />
            Add to Wishlist
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="space-y-4 border-t border-gray-200 pt-6">
          <div className="flex items-start">
            <Truck size={20} className="text-primary-500 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Free shipping</p>
              <p className="text-sm text-gray-500">On orders over ₹50</p>
            </div>
          </div>
          <div className="flex items-start">
            <Package size={20} className="text-primary-500 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Gift ready packaging</p>
              <p className="text-sm text-gray-500">Perfect for giving directly to your loved ones</p>
            </div>
          </div>
          <div className="flex items-start">
            <RefreshCw size={20} className="text-primary-500 mr-3 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">30-day returns</p>
              <p className="text-sm text-gray-500">Shop with confidence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;