import Item from "./Item";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Product = () => {
  const { cart, addToCart } = useContext(CartContext);
  const containerStyle = {
    borderRadius: "2px",
    border: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle}>
      <Item name="1"></Item>
      <Item name="2"></Item>
      <Item name="3"></Item>
      <Item name="4"></Item>
    </div>
  );
};

export default Product;
