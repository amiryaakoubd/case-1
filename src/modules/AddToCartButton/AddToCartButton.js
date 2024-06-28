import React from "react";
import "./styles.scss";
import CartIcon from "../../icons/CartIcon/Carticon";
// import PropTypes from 'prop-types';

const AddToCartButton = ({ product }) => {
  const addToCart = (product) => {
    console.log("Product added to cart: ", product);
  };

  return (
    <button
      className="add-to-cart-button"
      onClick={() => addToCart(product)}
      aria-label="Add to Cart"
    >
      <CartIcon />
    </button>
  );
};

// I could use propTypes for props validation here but since it hasn't been used in the rest of the project I will just leave it out.

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
