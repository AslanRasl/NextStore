import React from 'react';
import Product from '../product/Product';
import './ProductGrid.scss';

const FiveProductGrid = ({ products }) => {
  const topFiveProducts = products.slice(0, 5);

  return (
    <div className="product-grid2">
      {topFiveProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default FiveProductGrid;
