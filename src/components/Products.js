import React, { useContext, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  const { products, addItem, cart } = useContext(ProductContext);
  //   console.log(`Products.js: `, products);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
