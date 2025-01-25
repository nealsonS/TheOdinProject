import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import ImgLinkContext from "../context/ImgLinkContext";

const Item = ({ name }) => {
  const { cart, addToCart } = useContext(CartContext);
  const { imgLinks, addImgLink } = useContext(ImgLinkContext);
  const [imgSrc, setImgSrc] = useState("");
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "solid",
  };

  const imgStyle = {
    borderRadius: "2px",
    maxHeight: "200px",
    maxWidth: "200px",
  };

  const randomImgApi = "https://picsum.photos/200/200";
  useEffect(() => {
    if (name in imgLinks) {
      setImgSrc(imgLinks[name]);
    } else {
      fetch(randomImgApi, { mode: "cors" })
        .then((response) => {
          console.log("Response: ", response);
          if (!response.ok) {
            throw new Error(
              `Failed to fetch image! Status: ${response.status}`,
            );
          }
          return response.url;
        })
        .then((url) => {
          setImgSrc(url);
          addImgLink(name, url);
        })
        .catch((err) => {
          console.error("Error fetching image:", err.message);
        });
    }
  }, [name, imgLinks, addImgLink]);

  const handleClick = (e) => {
    e.preventDefault();
    addToCart({ name: name, imgSrc: imgSrc });
  };

  return (
    <>
      {imgSrc ? (
        <div style={containerStyle}>
          <img src={imgSrc} alt="" />
          <figcaption>{name}</figcaption>
          <button type="button" onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Loading!</p>
      )}
    </>
  );
};

export default Item;
