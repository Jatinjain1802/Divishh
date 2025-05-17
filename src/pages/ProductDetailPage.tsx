import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import ProductDetails from '../components/products/ProductDetails';
import ProductGrid from '../components/products/ProductGrid';
import { getProductById, getBestSellers } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get recommended products
        const bestSellers = getBestSellers().filter(p => p.id !== id);
        setRelatedProducts(bestSellers.slice(0, 4));
        
        // Update document title
        document.title = `${foundProduct.name} | DIVISH Accessories`;
      } else {
        // Product not found, redirect to products page
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <Container>
          <p className="text-center text-gray-600">Loading...</p>
        </Container>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="mb-16">
          <ProductDetails product={product} />
        </div>
        
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailPage;