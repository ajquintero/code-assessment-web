/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/Product.css';

const Product = ({ price, inventory, title, image, quantity }) => (
  <div className = "cart-container">
    <div className = "image-container">
      <img id = "img" src = {image} alt = "image"/>
    </div>

    <div className = "product-details">
      <h4>{title}</h4>
      <p id = "price">&#36;{price}</p>
      <p id = "remove"> Remove </p>
      <div className = "buttons">
        <button id = "minus"> - </button>
        { quantity }
        <button id = "plus"> + </button>
      </div>
    </div>
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
};

export default Product;
