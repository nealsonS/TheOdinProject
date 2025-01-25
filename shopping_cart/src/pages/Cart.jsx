import Header from "../components/Header";
import CartContext from "../context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <Header></Header>
      <h1>Cart</h1>
      <ol>
        {cart.map((elem) => {
          return (
            <>
              <img src={elem.imgSrc}></img>
              <li key={elem.imgSrc}>{elem.name}</li>
            </>
          );
        })}
      </ol>
    </>
  );
}

export default Cart;
