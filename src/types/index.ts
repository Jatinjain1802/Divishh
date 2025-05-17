export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  specialInstructions?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}