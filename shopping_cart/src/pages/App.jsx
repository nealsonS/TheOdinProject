import { useContext } from "react";
import CartContext from "../context/CartContext";
import Header from "../components/Header";
import Product from "../components/Product";

export default function App() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <Header></Header>
      <h1>App</h1>

    </>
  );
}
