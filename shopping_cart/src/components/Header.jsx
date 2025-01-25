import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const Header = () => {
  const style = {
    position: "sticky",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    margin: "0px",
    height: "5vh",
    backgroundColor: "#cfcfc4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const { cart, addToCart } = useContext(CartContext);

  return (
    <nav style={style}>
      <ol
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        <Link to="/" style={{ display: "block" }}>
          Home
        </Link>
        <Link to="/cart" style={{ display: "block" }}>
          Cart: {cart.length}
        </Link>
      </ol>
    </nav>
  );
};

export default Header;
