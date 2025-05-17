import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ProductGrid from '../components/products/ProductGrid';
import { products, categories, getProductsByCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get category from URL
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam.toLowerCase());
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setActiveCategory(null);
      setFilteredProducts(products);
    }
  }, [searchParams]);
  
  // Update document title
  useEffect(() => {
    document.title = activeCategory 
      ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} | DIVISH Accessories` 
      : 'All Products | DIVISH Accessories';
  }, [activeCategory]);
  
  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName.toLowerCase());
    setFilteredProducts(getProductsByCategory(categoryName));
  };
  
  const handleShowAll = () => {
    setActiveCategory(null);
    setFilteredProducts(products);
  };
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
            {activeCategory 
              ? `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}` 
              : 'All Products'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted personalized gifts, designed to make every occasion special
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button
              onClick={handleShowAll}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === null 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Products
            </button>
            
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.name.toLowerCase() 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found in this category.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsPage;