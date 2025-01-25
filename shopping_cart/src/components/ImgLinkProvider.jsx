import { useState } from "react";
import ImgLinkContext from "../context/ImgLinkContext";

const ImgLinkProvider = ({ children }) => {
  const [imgLinks, setImgLinks] = useState({});

  const addImgLink = (name, imgSrc) => {
    setImgLinks((prevItems) => ({ ...prevItems, [name]: imgSrc }));
  };

  return (
    <ImgLinkContext.Provider value={{ imgLinks, addImgLink }}>
      {children}
    </ImgLinkContext.Provider>
  );
};

export default ImgLinkProvider