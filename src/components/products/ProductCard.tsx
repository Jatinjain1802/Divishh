import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
        <p className="text-primary-600 font-semibold mb-3">₹{product.price.toFixed(2)}</p>
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
    </div>
  );
};

export default ProductCard;