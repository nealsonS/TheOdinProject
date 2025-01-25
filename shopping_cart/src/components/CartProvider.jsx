import { useState } from "react";
import CartContext from "../context/CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
