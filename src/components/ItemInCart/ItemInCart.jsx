import React from "react";
import "./item-in-cart.css";

const ItemCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="item-in-cart">{quantity}</div> : null;
};

export default ItemCart;
