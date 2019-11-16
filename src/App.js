import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(() =>)

  const addItem = item => {
    // add the given item to the cart
    // console.log(`App.js: addItem: item: `, item);
    setCart([...cart, item]);
    JSON.parse(localStorage.getItem("cart"));
  };

  const removeItem = id => {
    const remove = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(remove);
  };
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, removeItem }}>
        <ProductContext.Provider value={{ products, addItem, cart }}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
