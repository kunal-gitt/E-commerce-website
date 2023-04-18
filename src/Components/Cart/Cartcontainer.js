import React from "react";
import "./Cartcontainer.css";
import cartElements from "./cartelements";

const CartContainer = () => {
  return (
    <div className="cart-container-div">
      <h3>Your Cart</h3>
      {cartElements.map((val) => {
        return (
          <div className="cart-product-div">
            <img
              src={val.imageUrl}
              alt="image not found"
              className="cart-product-img"
            />
            <p>{val.title}</p>
            <p>{val.price}</p>
            <p>{val.quantity}</p>
            <button>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
