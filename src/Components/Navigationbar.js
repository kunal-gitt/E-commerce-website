import React, { useContext } from "react";
import classes from "./Navigationbar.module.css";
import CartIcon from "./Cart/CartIcon";
import Context from "./Store/Context";

function NavigationBar() {
  const ctx = useContext(Context);

  const oncartscreen = () => {
    ctx.setcartscreen((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div className={classes.navbar}>
        <a href="#home">Home</a>
        <a href="#store">Store</a>
        <a href="#about">About</a>

        <button className={classes.cartbutton} onClick={oncartscreen}>
          <span className={classes.icon}>
            <CartIcon></CartIcon>
          </span>
          <span>Your cart</span>
          <span className={classes.badge}>0</span>
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
