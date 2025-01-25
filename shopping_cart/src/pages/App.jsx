import { useContext } from "react";
import CartContext from "../context/CartContext";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function App() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <Header></Header>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        App
      </h1>
      <ProductList> </ProductList>
    </>
  );
}
