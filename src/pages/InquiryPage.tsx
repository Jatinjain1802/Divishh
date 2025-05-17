import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import InquiryForm from '../components/inquiry/InquiryForm';
import OrderSummary from '../components/inquiry/OrderSummary';
import { useCart } from '../contexts/CartContext';

const InquiryPage: React.FC = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  // Redirect to cart if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  // Update document title
  useEffect(() => {
    document.title = 'Submit Inquiry | DIVISH Accessories';
  }, []);
  
  if (cartItems.length === 0) {
    return null; // Will redirect to cart
  }
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Submit Inquiry</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InquiryPage;