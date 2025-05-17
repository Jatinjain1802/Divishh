import { Product, Category, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Personalized Name Bracelet',
    description: 'A beautiful handcrafted bracelet with customizable name charms. Perfect for birthdays, anniversaries, or just because. Made with high-quality materials that are gentle on the skin and designed to last.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/9428826/pexels-photo-9428826.jpeg',
    category: 'bracelets',
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Custom Initial Necklace',
    description: 'Elegant necklace featuring your choice of initial. Made with sterling silver and available in gold, rose gold, and silver finishes. A timeless piece that goes with any outfit.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/10964888/pexels-photo-10964888.jpeg',
    category: 'necklaces',
    featured: true,
  },
  {
    id: '3',
    name: 'Birthstone Earrings',
    description: 'Stunning earrings featuring genuine birthstones. Choose your month or mix and match for a unique look. Each pair comes in a beautiful gift box ready for giving.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/9428810/pexels-photo-9428810.jpeg',
    category: 'earrings',
  },
  {
    id: '4',
    name: 'Customized Diary',
    description: 'A beautiful, bound diary with name embossing. Features premium paper and a secure lock. Perfect for journaling thoughts, dreams, and memories.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    category: 'stationery',
    bestSeller: true,
  },
  {
    id: '5',
    name: 'Personalized Tote Bag',
    description: 'Spacious canvas tote bag with custom name or message. Available in multiple colors and perfect for school, shopping, or beach days. Durable design with reinforced handles.',
    price: 22.99,
    image: 'https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg',
    category: 'bags',
    featured: true,
  },
  {
    id: '6',
    name: 'Custom Photo Frame',
    description: 'Elegant wooden frame with personalized engraving. Available in multiple sizes and finishes. A thoughtful way to display cherished memories.',
    price: 26.99,
    image: 'https://images.pexels.com/photos/1758531/pexels-photo-1758531.jpeg',
    category: 'home',
  },
  {
    id: '7',
    name: 'Birthstone Ring',
    description: 'Delicate ring featuring genuine birthstone. Adjustable size and hypoallergenic materials. Stack multiple for a colorful look or wear alone for elegant simplicity.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg',
    category: 'rings',
    bestSeller: true,
  },
  {
    id: '8',
    name: 'Personalized Hair Clips Set',
    description: 'Set of 3 custom hair clips with name or initial. Available in multiple colors and designs. Perfect for everyday wear or special occasions.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1166868/pexels-photo-1166868.jpeg',
    category: 'hair accessories',
  },
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Bracelets',
    image: 'https://images.pexels.com/photos/9428826/pexels-photo-9428826.jpeg',
  },
  {
    id: '2',
    name: 'Necklaces',
    image: 'https://images.pexels.com/photos/10964888/pexels-photo-10964888.jpeg',
  },
  {
    id: '3',
    name: 'Earrings',
    image: 'https://images.pexels.com/photos/9428810/pexels-photo-9428810.jpeg',
  },
  {
    id: '4',
    name: 'Stationery',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
  },
  {
    id: '5',
    name: 'Bags',
    image: 'https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg',
  },
  {
    id: '6',
    name: 'Home',
    image: 'https://images.pexels.com/photos/1758531/pexels-photo-1758531.jpeg',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    content: 'The personalized bracelet I ordered for my daughter was absolutely perfect! The quality is outstanding and it arrived beautifully packaged. Will definitely be ordering again.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emma L.',
    content: 'I ordered custom necklaces for my bridesmaids and they were a huge hit! Everyone loved how unique and personal they were. Customer service was also excellent.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer K.',
    content: 'The birthstone earrings I purchased for my niece exceeded my expectations. The stones are vibrant and the craftsmanship is exceptional. Highly recommend!',
    rating: 4,
  },
];

export const getProductsByCategory = (categoryName: string): Product[] => {
  return products.filter(product => product.category === categoryName.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.bestSeller);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};