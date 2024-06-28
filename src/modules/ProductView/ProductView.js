import "./styles.scss";

import React from "react";
import { products } from "../../mockdata/products"; // Sample product data
import ProductList from "../ProductList/ProductList";

function ProductView() {
  return (
    <div className="product-view">
      <h1 className="product-view-heading">Varer</h1>
      <ProductList products={products} />
    </div>
  );
}

export default ProductView;
