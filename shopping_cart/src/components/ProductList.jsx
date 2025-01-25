import Item from "./Item";

const Product = () => {
  const containerStyle = {
    borderRadius: "2px",
    border: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return (
    <div style={containerStyle}>
      <Item name="Nature"></Item>
      <Item name="Love"></Item>
      <Item name="Pain"></Item>
      <Item name="Cars"></Item>
      <Item name="Business"></Item>
      <Item name="PCs"></Item>
      <Item name="Laptops"></Item>
      <Item name="School"></Item>
    </div>
  );
};

export default Product;
