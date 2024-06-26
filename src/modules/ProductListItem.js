import React from 'react';
import './style/product-list.scss'

const ProductListItem = ({ product }) => {

  const addToCart = (product) => {
    console.log("Product added to cart: ", product)
  }
  
  return (
    <div key={product.id} className="product-list-item">
      <div className="product-list-item__image">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          width="160"
          height="160"
        />
      </div>
      <h2 itemProp="name">{product.name}</h2>
      <p  
        itemProp="offers"
        itemScope=""
        itemType="http://schema.org/Offer"
        aria-label={product.price}>{product.price} Kr</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div
          itemProp="additionalProperty"
          itemScope=""
          itemType="http://schema.org/PropertyValue"
      >
        <p itemProp="name">Description: {product.description}</p>
      </div>
    </div>
  );
}

export default ProductListItem;