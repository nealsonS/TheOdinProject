import { useState } from "react";

const FetchImage = () => {
  const [imgSrc, setImgSrc] = useState("");

  randomImgApi = "https://picsum.photos/200/200";
  let imgPromise = fetch(randomImgApi);

  imgPromise.then((response) => {
    console.log("Response: ", response);
    if (!response.ok) {
      throw new Error(`Failed to fetch image!\nStatus: ${response.status}`);
    }
    return response.url;
  });
  imgPromise.then((url) => {
    setImgSrc(url);
  });
  imgPromise.catch((err) => {
    throw new Error(`Error! ${err}`);
  });


  return (
    <>
      {imgSrc != "" ? (
        <>
          <img src={imgSrc} alt="" />
          <figcaption>{imgSrc}</figcaption>
        </>
      ) : (
        <p>Loading!</p>
      )}
    </>
  );
};

export default FetchImage;
