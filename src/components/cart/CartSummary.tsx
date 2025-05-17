import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';

const CartSummary: React.FC = () => {
  const { cartTotal, itemCount } = useCart();
  
  // Free shipping threshold
  const freeShippingThreshold = 50;
  const shippingCost = cartTotal >= freeShippingThreshold ? 0 : 5.99;
  
  // Check if eligible for free shipping
  const remainingForFreeShipping = freeShippingThreshold - cartTotal;
  const qualifiesForFreeShipping = remainingForFreeShipping <= 0;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      {!qualifiesForFreeShipping && cartTotal > 0 && (
        <div className="bg-primary-50 text-primary-800 p-3 rounded-md mb-4 text-sm">
          Add ₹{remainingForFreeShipping.toFixed(2)} more to qualify for free shipping!
        </div>
      )}
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal ({itemCount} items)</p>
          <p className="text-gray-900 font-medium">₹{cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          {cartTotal > 0 ? (
            <p className="text-gray-900 font-medium">
              {qualifiesForFreeShipping ? 'Free' : `₹${shippingCost.toFixed(2)}`}
            </p>
          ) : (
            <p className="text-gray-900 font-medium">--</p>
          )}
        </div>
        <div className="border-t border-gray-200 pt-4 flex justify-between">
          <p className="text-gray-900 font-medium">Total</p>
          <p className="text-lg text-primary-700 font-semibold">
            ₹{(cartTotal + (cartTotal > 0 ? shippingCost : 0)).toFixed(2)}
          </p>
        </div>
      </div>
      
      <Button
        variant="primary"
        size="lg"
        fullWidth
        as={Link}
        to={cartTotal > 0 ? "/inquiry" : "#"}
        disabled={cartTotal === 0}
      >
        Proceed to Inquiry
      </Button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Orders are confirmed via email after form submission.
      </p>
    </div>
  );
};

export default CartSummary;