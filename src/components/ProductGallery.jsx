import React, { useState } from 'react';
import ProductModal from './ProductModal';
import './ProductGallery.css';

const ProductGallery = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card" onClick={() => setSelectedProduct(product)}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
};

export default ProductGallery;
