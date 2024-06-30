import React from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import "./styles.scss";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import NutritionalContentTable from "../NutritionalContentTable/NutritionalContentTable";

const ProductDetailsDialog = ({ product, onClose }) => {
  // Improvement: I would wrap this component in a FocusTrap component to prevent focus from leaving the dialog when it's open.
  // I could also look at disabling scrolling when the dialog is open by adding a class to the body element that sets overflow to hidden by using react context.
  return (
    <div className="product-details-overlay">
      <div className="product-details-wrapper">
        <dialog
          className="product-details-dialog"
          itemscope=""
          itemtype="https://schema.org/Product"
        >
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

          <NutritionalContentTable
            nutritionalContent={product.nutritionalContent}
          />
        </dialog>
      </div>
    </div>
  );
};

export default ProductDetailsDialog;
