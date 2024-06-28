import React from "react";
import "./styles.scss";

import ProductListItem from "../ProductListItem/ProductListItem";

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
