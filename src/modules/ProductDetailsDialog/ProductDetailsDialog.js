import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import "./styles.scss";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";

const ProductDetailsDialog = ({ product, onClose }) => {
  return (
    <div className="product-details-overlay">
      <div className="product-details-wrapper">
        <dialog className="product-details-dialog">
          <div className="product-details-header">
            <h2 itemProp="name">{product.name}</h2>
            <button aria-label="Close" onClick={() => onClose()}>
              <CloseIcon />
            </button>
          </div>
          <div className="product-details-body">
            <div className="product-details-body__image">
              {/* Possible improvement: Implement lazy loading for images */}
              <img
                src={product.imageUrl}
                alt={product.name}
                width="160"
                height="160"
              />
            </div>
            <div className="product-details-body__buy-wrapper">
              <p
                itemProp="offers"
                itemScope=""
                itemType="http://schema.org/Offer"
                aria-label={product.price}
              >
                {product.price} Kr
              </p>
              <AddToCartButton showLabel />
            </div>
          </div>

          <div
            itemProp="additionalProperty"
            itemScope=""
            itemType="http://schema.org/PropertyValue"
          >
            <p className="product-details-body__description" itemProp="name">
              Description: {product.description}
            </p>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProductDetailsDialog;
