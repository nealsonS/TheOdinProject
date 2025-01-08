import { useState } from "react";
import InformationSection from "./InformationSection";

function InputField({
  field,
  isSubmitted = false,
  placeholder = field,
  type = "text",
}) {
  const style = {
    display: "grid",
    "grid-template-rows": "30px 25px",
  };

  const submittedValueStyle = {
    "font-weight": "bold",
  };

  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <span id={field} style={style}>
      <label htmlFor={field}>{field}</label>

      {isSubmitted ? (
        <p id={field} style={submittedValueStyle}>
          {String(value)}
        </p>
      ) : (
        <input
          type={type}
          id={field}
          name={field}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </span>
  );
}

export default function GeneralInformation() {
  const informationArray = [
    <InputField
      field="name"
      placeholder="John Doe..."
    ></InputField>,
    <InputField
      field="email"
      placeholder="example@gmail.com"
      type="email"
    ></InputField>,
    <InputField
      field="phone number"
      placeholder="123456789"
      type="number"
    ></InputField>,
  ];

  return <InformationSection content={informationArray}></InformationSection>;
}
