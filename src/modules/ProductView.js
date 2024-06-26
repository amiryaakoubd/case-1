import "./style/product-view.scss"

import React from 'react';
import { products } from "../mockdata/products" // Sample product data
import ProductList from './ProductList';


function ProductView() {  
    return (
      <div className='product-view'>
        <h1>Varer</h1>
        <ProductList products={products} />
      </div>
    );
  }
  
  export default ProductView;