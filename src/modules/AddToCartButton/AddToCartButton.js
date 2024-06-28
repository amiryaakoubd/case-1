import React from "react";
import "./styles.scss";
import CartIcon from "../../icons/CartIcon/Carticon";
// import PropTypes from 'prop-types';

const AddToCartButton = ({ product, showLabel }) => {
  const addToCart = (product) => {
    console.log("Product added to cart: ", product);
  };

  return (
    <button
      className={`add-to-cart-button ${showLabel ? "show-label" : ""}`}
      onClick={() => addToCart(product)}
      aria-label="Add to Cart"
    >
      <CartIcon />
      {showLabel && <span>Add to Cart</span>}
    </button>
  );
};

// I could use propTypes for props validation here and in the other components as well but since it hasn't been used in the rest of the project I will just leave it out.
// Typescript could also be an alternative for prop validation.

// AddToCartButton.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default AddToCartButton;
