import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const handleAddToCart = (productId) => {
    // Add the product to the cart
    // You can implement this functionality based on your needs
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
