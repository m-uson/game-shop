import React from "react";
import "./cart-item.css";

const CartItem = ({ price, id, title }) => {
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">{price} сом.</div>
    </div>
  );
};

export default CartItem;
