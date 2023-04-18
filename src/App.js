import React, { useContext } from "react";
import "./App.css";

import NavigationBar from "./Components/Navigationbar";

import productsArr from "./Components/Data";
import CartContainer from "./Components/Cart/Cartcontainer";
import Context from "./Components/Store/Context";

function App() {
  const ctx = useContext(Context);
  return (
    <div>
      <NavigationBar />
      {ctx.cartscreen && <CartContainer />}
      <div className="container">The Generics</div>
      <h1 className="h1">Music</h1>

      <div className="product-container">
        {productsArr.map((val) => {
          return (
            <div key={Math.random()}>
              <h2>{val.Album}</h2>
              <img src={val.imageUrl} alt={val.title} />
              <p>{val.title}</p>
              <p>${val.price}</p>
              <button className="product-button">ADD TO CART</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
