import React from 'react';
import './style/product-list.scss'

import ProductListItem from "./ProductListItem"

const ProductList = ({ products }) => {
  
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductListItem 
          key={product.id} 
          product={product}
        />
      ))}
    </ul>
  );
}

export default ProductList;