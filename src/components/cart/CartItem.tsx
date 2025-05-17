import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  };
  
  return (
    <div className="flex flex-col sm:flex-row py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex-shrink-0 sm:mr-6 mb-4 sm:mb-0">
        <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <Link 
            to={`/product/${product.id}`}
            className="text-lg font-medium text-gray-900 hover:text-primary-600"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-500 mt-1">Item #{product.id}</p>
        </div>
        
        <div className="flex items-center gap-6">
          <div>
            <label htmlFor={`quantity-${product.id}`} className="sr-only">Quantity</label>
            <select
              id={`quantity-${product.id}`}
              value={quantity}
              onChange={handleQuantityChange}
              className="block w-20 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          
          <div className="w-20 text-right">
            <p className="text-base font-medium text-gray-900">₹{(product.price * quantity).toFixed(2)}</p>
          </div>
          
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-gray-400 hover:text-error-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;