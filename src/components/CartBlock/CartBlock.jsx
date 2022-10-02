import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { CartMenu, ItemInCart } from "../index";
import { calcTotalPrice } from "../utils";
import "./cart-block.css";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemInCart quantity={items.length} />
      <BsCart2
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} сом.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};

export default CartBlock;
