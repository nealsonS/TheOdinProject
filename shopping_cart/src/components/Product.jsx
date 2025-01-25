import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import FetchImage from "./FetchImage";

const Product = () => {
  useEffect(() => {}, []);
  const [cart, addToCart] = useContext(CartContext);
  const containerStyle = {
    borderRadius: "2px",
    border: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <FetchImage></FetchImage>
      <button type="button">Add to Cart!</button>
    </div>
  );
};

export default Product;
