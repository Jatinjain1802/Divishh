import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import { CustomerDetails } from '../../types';

// Initialize EmailJS ONCE at the top-level (outside the component)
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const InquiryForm: React.FC = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<CustomerDetails>();

  const onSubmit = async (data: CustomerDetails) => {
    try {
      // Prepare cart items for email
      const cartItemsList = cartItems.map(item => `
        Product: ${item.product.name}
        Quantity: ${item.quantity}
        Price: ₹${(item.product.price * item.quantity).toFixed(2)}
      `).join('\n');

      // Prepare email template parameters
      const templateParams = {
        to_email: 'jjain0740@gmail.com',
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        address: data.address,
        special_instructions: data.specialInstructions || 'None',
        cart_items: cartItemsList,
        total_amount: `₹${cartTotal.toFixed(2)}`,
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast.success('Your inquiry has been submitted successfully!');
      clearCart();
      navigate('/confirmation');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-md mb-6">
        <h3 className="text-primary-800 font-medium mb-2">Important Information</h3>
        <p className="text-sm text-primary-700">
          Please fill out the form below to submit your inquiry. We'll respond with payment options and
          further details about your order within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="fullName"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          required
          error={errors.fullName?.message}
          {...register('fullName', {
            required: 'Full name is required'
          })}
        />

        <Input
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          required
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />

        <Input
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          required
          error={errors.phone?.message}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+?[0-9\s\-()]+$/,
              message: 'Invalid phone number'
            }
          })}
        />

        <Input
          id="address"
          label="Shipping Address"
          type="text"
          placeholder="Enter your shipping address"
          required
          error={errors.address?.message}
          {...register('address', {
            required: 'Shipping address is required'
          })}
        />
      </div>

      <Textarea
        id="specialInstructions"
        label="Special Instructions"
        placeholder="Please include any personalization details, special requests, or questions here..."
        error={errors.specialInstructions?.message}
        {...register('specialInstructions')}
      />

      <div className="border-t border-gray-200 pt-6 mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
        <p className="text-sm text-gray-500 mt-4 text-center">
          By submitting this form, you agree to our terms and privacy policy.
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;

