import React from "react";
import "./styles.scss";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductListItem = ({ product }) => {
  return (
    <div key={product.id} className="product-list-item">
      <button className="product-list-item__image">
        <img
          src={product.imageUrl}
          alt={product.name}
          width="160"
          height="160"
        />
      </button>
      <div className="product-list-item-price-wrapper">
        <p
          className="product-list-item-price"
          itemProp="offers"
          itemScope=""
          itemType="http://schema.org/Offer"
          aria-label={product.price}
        >
          {product.price} Kr
        </p>
        <AddToCartButton />
      </div>

      <h2 className="product-list-item-name" itemProp="name">
        {product.name}
      </h2>
      <div
        itemProp="additionalProperty"
        itemScope=""
        itemType="http://schema.org/PropertyValue"
      >
        <p className="product-list-item-description" itemProp="name">
          Description: {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
