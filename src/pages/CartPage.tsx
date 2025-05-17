import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems } = useCart();
  const isEmpty = cartItems.length === 0;
  
  // Update document title
  useEffect(() => {
    document.title = 'Your Cart | DIVISH Accessories';
  }, []);
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Your Cart</h1>
        
        {isEmpty ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={24} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button 
              variant="primary" 
              as={Link} 
              to="/products"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartPage;