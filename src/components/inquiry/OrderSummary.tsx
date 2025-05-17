import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const OrderSummary: React.FC = () => {
  const { cartItems, cartTotal } = useCart();
  
  // Free shipping threshold
  const freeShippingThreshold = 50;
  const shippingCost = cartTotal >= freeShippingThreshold ? 0 : 5.99;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="max-h-[360px] overflow-y-auto mb-6 pr-2">
        {cartItems.map((item) => (
          <div 
            key={item.product.id} 
            className="flex items-center py-3 border-b border-gray-200 last:border-b-0"
          >
            <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
              <img 
                src={item.product.image} 
                alt={item.product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <div className="text-sm font-medium text-gray-900">
              ₹{(item.product.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-900 font-medium">₹{cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          <p className="text-gray-900 font-medium">
            {cartTotal >= freeShippingThreshold ? 'Free' : `₹${shippingCost.toFixed(2)}`}
          </p>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between">
          <p className="text-gray-900 font-medium">Total</p>
          <p className="text-lg text-primary-700 font-semibold">
            ₹{(cartTotal + shippingCost).toFixed(2)}
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <Link 
          to="/cart"
          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
        >
          ← Back to cart
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;