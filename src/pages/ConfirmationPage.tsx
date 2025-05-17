import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Mail } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const ConfirmationPage: React.FC = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Thank You | DIVISH Accessories';
  }, []);
  
  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={36} className="text-primary-600" />
          </div>
          
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Thank You for Your Inquiry!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We've received your inquiry and will get back to you within 24 hours with payment options 
            and details about your order.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-center justify-center mb-4">
              <Mail size={24} className="text-primary-600 mr-2" />
              <p className="text-gray-800 font-medium">Check Your Email</p>
            </div>
            <p className="text-gray-600">
              We've sent a confirmation email with your inquiry details. 
              If you don't see it in your inbox, please check your spam folder.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              as={Link} 
              to="/"
            >
              Return to Home
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              as={Link} 
              to="/products"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ConfirmationPage;