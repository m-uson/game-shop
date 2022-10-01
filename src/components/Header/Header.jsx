import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="Header__store-title">
          Game Store
        </Link>
      </div>
      <div className="wrapper header__cart-bth-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;
