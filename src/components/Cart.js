/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './styles/Cart.css';
import cartImage from '../../src/cart.png';


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div className = "cart-container">
      <div>
        <img id = "cart-img" src = {cartImage}/>
      </div>
      <div>
        <p id = "cart-comment"> Please add a product to your cart. </p>
      </div>
    </div>
  );

  return (
    <div>
      <h3 id = "cart-header">Your Cart</h3>
      <div>{nodes}</div>
      <div className = "quantity">
        <p id = "total-text">Total</p>
        <p>Total: &#36;{total}</p>
      </div>
      <button id = "checkout" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
